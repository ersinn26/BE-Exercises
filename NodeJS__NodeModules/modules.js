"use strict";

// require('./modules/index.js');


// const test = require('./modules/');

// test();

/*------------------------*/
// const test1 = require('./modules/index.js').test1;
// const test2 = require('./modules/index.js').test2;
// const test3 = require('./modules/index.js').test3;
// const newVar = require('./modules/index.js').newVar;

// test1();
// test2();
// test3();
// console.log(newVar);
/*------------------------*/

const { test1, test2, test3, newVar , newArr} = require('./modules/index.js');

test1();
test2();
test3();
console.log(newVar);
console.log(newArr);
