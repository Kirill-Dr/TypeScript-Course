import { a } from "./app2";
import run from "./app2";
import * as all from "./app2";
import type { MyType } from "./app2";

run();
console.log(a);
console.log(all.a);
const b: MyType = 5;
const c: MyType = "MyType";
