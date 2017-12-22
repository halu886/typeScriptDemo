import { Observable } from "./observable";
import "./illegalMerge";
let o: Observable<number> = new Observable();
o.map(x => x.toFixed)