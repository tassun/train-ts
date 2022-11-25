const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol("Symbol");
console.log("sym1",sym1);
console.log("sym3",sym3);
//console.log(sym1==sym2); //ERROR

const carModel = "model";
const symColor = Symbol("color");
const symPrint = Symbol("print");
const car = {
	year: 2001,
	type: "Toyota",
	[carModel] : "Corolla",
	[symColor]: "Black",
	[symPrint]: function() {
		console.log(this.type+" color "+this[symColor]);
	}
};
console.log("car",JSON.stringify(car));
console.log("color",car[symColor]);
//console.log("color",car["color"]); //ERROR
car[symPrint]();
console.log("model",car["model"]);
console.log("model",car[carModel]);
