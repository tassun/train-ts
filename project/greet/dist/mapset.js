"use strict";
var s = new Set();
s.add("hello");
s.add("new").add("world");
console.log("size", s.size);
console.log("has", s.has("hello"));
var set = new Set(["Hello", "World"]);
console.log("set", set);
var m = new Map();
m.set("A", "Hello");
m.set("B", "World");
console.log("A", m.get("A"));
var map = new Map([
    ["A", "Hello"],
    ["B", "World"]
]);
console.log("map", map);
