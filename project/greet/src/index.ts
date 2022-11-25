function greet(name: string) {
	return "Hello "+name;
}
const greeting = (name: string) => {
	console.log("Greeting : "+name)  
	return "Greeting "+name
}
console.log(greet("Jack"));
console.log(greeting("John"));
