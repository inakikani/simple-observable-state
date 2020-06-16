import { Subject } from "rxjs";
import { share } from 'rxjs/operators'
import { Action } from "./types";
import { validateAction, sideEffect } from "./operators";

/**
 * the SUBJECT used to dispatch actions :
 * rxState.dispatch is internally a call to ACTION_SUBJECT.next
 */
export const ACTION_SUBJECT = new Subject<Action>()

export const ACTION_OBSERVABLE = ACTION_SUBJECT
    .asObservable()
    .pipe(
        validateAction,
        sideEffect,
        share()
    )