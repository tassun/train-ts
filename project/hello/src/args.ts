import { Arguments } from "./utils/Arguments";

process.argv.forEach(function (arg, index, array) {
    console.log(index + ': ' + arg);    
});
let args = process.argv.slice(2);
console.log("args = "+args);
let user = Arguments.getString(args,'','-user');
let email = Arguments.getString(args,'tassun_oro@hotmail.com','-email');
console.log("Hello "+user+" : "+email);
