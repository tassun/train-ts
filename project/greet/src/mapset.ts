const s = new Set();
s.add("hello");
s.add("new").add("world");
console.log("size",s.size);
console.log("has",s.has("hello"));

const set = new Set<string>(["Hello", "World"]);
console.log("set",set);

const m = new Map();
m.set("A","Hello");
m.set("B","World");
console.log("A",m.get("A"));

const map = new Map<string,string>([
	["A","Hello"],
	["B","World"]
]);
console.log("map",map);
