"use strict";
var A;
(function (A) {
    A.a = 5;
})(A || (A = {}));
/// <reference path="./app2.ts" />
console.log(A.a);
