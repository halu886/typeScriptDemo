export class Observable<T> {
    // ... implementation left as an exercise for the reader ...
}

declare global {
    interface Array<T> {
        toObservable(): Observable<T>
    }
}

Array.prototype.toObservable = function () { return new Observable() }
