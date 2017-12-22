/**
 * 非法的合并
 */
import { Observable } from "./observable"
declare module "./observable" {
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
    }
}

Observable.prototype.map = function (f) {
    return new Observable()
}