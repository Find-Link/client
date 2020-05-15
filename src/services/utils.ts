import { ThunkAction } from 'redux-thunk';

export type RequireAtLeast<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
      [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys];

export type BoundThunk<
  T extends (...args: any[]) => ThunkAction<any, any, any, any>
> = (...args: Parameters<T>) => ReturnType<ReturnType<T>>;

export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
}

export type LookUp<T, K extends keyof T> = T[K];
