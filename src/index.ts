import { BehaviorSubject, from, Observable } from "rxjs";
import { pluck } from 'rxjs/operators'
import produce, { nothing } from 'immer'

export function get(path, obj) {
    return path.reduce((src, str) => src?.[str] ?? null, obj)
}

type ObservableStateOptions = {
    id: string;
    source?: ObservableState<any>,
    async?: Promise<any>,
    pluck?: string[]
}

export let observableStatesMap = new Map()

export class ObservableState<T> extends BehaviorSubject<T> {

    id: string

    _source?: ObservableState<T>
    _pluck?: string[]

    constructor(init: any, options?: ObservableStateOptions) {
        super(init)
        if (options?.id) {
            this.id = options.id
        } else {
            this.id = JSON.stringify(init)
        }
        if (options?.source) {
            this._source = options.source
            if (options?.pluck && options.pluck.length !== 0) {
                this._pluck = Array.isArray(options.pluck) ? options.pluck : [options.pluck]
                this._source
                    .pipe(
                        pluck(...this._pluck)
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
        if (!path || path.length === 0) { return this as ObservableState<any> }
        const pathArr = Array.isArray(path) ? path : [path]
        const childrenID = `${this._source?.id ?? ''}:${pathArr.toString()}`

        const initialPathState = get(pathArr, this.getValue())
        return new ObservableState<S>(initialPathState, {
            id: childrenID,
            source: this,
            pluck: pathArr
        })
    }

    subscribe(...args: any[]) {
        return super.subscribe(...Array.from(arguments))
    }

    next(nState: any, path?: string | string[]) {
        const pathArr = path?.length > 0
            ? Array.isArray(path) ? path : [path]
            : []
        const fullPathArr = [...(this?._pluck ?? []), ...pathArr]

        if(this._source){
            this._source.next(nState, fullPathArr)
        } else {
            let newState = produce(this.getValue(), draft => {
                if(pathArr?.length === 0){
                    return nState ?? nothing
                } else {
                    let propName = pathArr.pop()
                    get(pathArr, draft)[propName] = nState
                }
            })
            super.next(newState as T)
        }
    }
}

export function sos<T>(id: string, init: any, options?: ObservableStateOptions): ObservableState<T> {
    if (!observableStatesMap.has(id)) {
        observableStatesMap.set(id, new ObservableState(init, {
            id: id,
            ...options,
        }))
    }

    console.log('states', observableStatesMap)
    return observableStatesMap.get(id)
}

export default sos