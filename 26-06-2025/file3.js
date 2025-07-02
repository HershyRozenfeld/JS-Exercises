// esm
import {name, run} from "./file1.js";
console.log(name);
run();

import * as file2Exports from './file2.js';
console.log("$$$",file2Exports);
file2Exports.default();
console.log(`@@@${file2Exports.firstName} ${file2Exports.lastName}`);
