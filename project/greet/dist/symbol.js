"use strict";
var _a;
var sym1 = Symbol();
var sym2 = Symbol();
var sym3 = Symbol("Symbol");
console.log("sym1", sym1);
console.log("sym3", sym3);
//console.log(sym1==sym2); //ERROR
var carModel = "model";
var symColor = Symbol("color");
var symPrint = Symbol("print");
var car = (_a = {
        year: 2001,
        type: "Toyota"
    },
    _a[carModel] = "Corolla",
    _a[symColor] = "Black",
    _a[symPrint] = function () {
        console.log(this.type + " color " + this[symColor]);
    },
    _a);
console.log("car", JSON.stringify(car));
console.log("color", car[symColor]);
//console.log("color",car["color"]); //ERROR
car[symPrint]();
console.log("model", car["model"]);
console.log("model", car[carModel]);
