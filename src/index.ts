import { BehaviorSubject, from, Observable } from "rxjs";
import { distinctUntilChanged, filter, pluck, take, timeout } from 'rxjs/operators'
import produce, { nothing, setAutoFreeze } from 'immer'
setAutoFreeze(false)
export * as v1 from './v1'
export * from './react/useObservableState'
/**
 * 
 * @param path An array of strings. eg: ['foo','bar']
 * @param obj the object to traverse
 * @returns any
 */
function get(path: string[], obj: any) {
    return path.reduce((src, str) => src?.[str] ?? null, obj)
}

/**
 * parsePath accepts a string (eg: "foo.bar") or an array of strings (eg: ['foo','bar'])
 * @param path A string or an array of strings that represent an object's property path (eg: ['foo','bar'])
 * @returns an array of strings. The array can be empty.
 */
export function parsePath(path?: string | string[]) {
    return [
        ...path?.length > 0
            ? Array.isArray(path)
                ? path
                : path.split('.')
            : []
    ]
}

/**
 * 
 */
export type ObservableStateOptions = {
    id: string;
    source?: ObservableState<any>,
    async?: Promise<any>,
    pluck?: string[],
    ignoreUndefinedFromSource?: boolean
}

export class ObservableState<T> extends BehaviorSubject<T> {

    id: string;

    _source?: ObservableState<T>
    _pluck?: string[]
    _branches: Record<string, ObservableState<any>>

    constructor(init: any, options?: ObservableStateOptions) {
        if(typeof init === 'function'){throw new TypeError("initial state cannot be a function")}
        super(init)
        this._branches = {}
        if (options?.id) {
            this.id = options.id
        } else {
            this.id = JSON.stringify(init)
        }
        if (options?.source) {
            this._source = options.source
            this._pluck = parsePath(options?.pluck)
            if (this._pluck.length > 0) {
                this._source
                    .pipe(
                        filter(s => options?.ignoreUndefinedFromSource ?? !!s),
                        pluck(...this._pluck),
                        distinctUntilChanged()
                    ).subscribe({
                        next: (s) => super.next(s as T),
                        error: err => super.error(err),
                        complete: () => super.complete()
                    })
            } else {
                this._source.subscribe({
                    next: (s) => super.next(s as T),
                    error: err => super.error(err),
                    complete: () => super.complete()
                })
            }

        }
    }

    path<S>(path: string | string[]): ObservableState<S> {
        const pathArr = parsePath(path)
        
        if (pathArr.length === 0) { return this as ObservableState<any> }
        
        const ID = `${this._source?.id ?? ''}:${pathArr.toString()}`
        if (this._branches?.[ID]) { return this._branches[ID]}
        
        const initialPathState = get(pathArr, this.getValue())
        
        const options = {
            id: ID,
            source: this,
            pluck: pathArr
        }
        
        this._branches[ID] = new ObservableState<S>(initialPathState, options)
        
        return this._branches[ID]
    }

    subscribe(...args: any[]) {
        return super.subscribe(...Array.from(arguments))
    }

    next(nState: any, path?: string | string[]) {
        function get(path: string[], obj: any) {
            return path.reduce((src, str) => src?.[str] ?? null, obj)
        }
        const pathArr = parsePath(path)
        const concatenatedPathArr = [...parsePath(this._pluck), ...pathArr]

        if(nState instanceof Observable || nState instanceof Promise){
            from(nState).pipe(take(1),timeout(6000))
                .subscribe({
                    next: this.next.bind(this),
                    error: console.error.bind(0)
                })
        } else {
            if (this._source) {
                this._source.next(nState, concatenatedPathArr)
            } else {
                try {
                    let newState = produce(super.getValue(), draft => {
                        if (pathArr?.length === 0) {
                            if(typeof nState === 'function'){
                                let reducedState = produce(nState)(draft)
                                return reducedState ?? nothing
                            } else {
                                return nState === undefined ? nothing : nState
                            }
                        } else {
                            let propName = pathArr.pop()
                            let _old = get(pathArr, draft)[propName]
                            if(typeof nState === 'function'){
                                let reducedState = produce(nState)(_old)
                                get(pathArr, draft)[propName] = reducedState
                            } else {
                                get(pathArr, draft)[propName] = nState
                            }
                        }
                    })
                    super.next(newState as T)   
                } catch (error) {
                    console.log(error)
                }
            }
        }

        return this
    }
}
