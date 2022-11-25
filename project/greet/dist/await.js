"use strict";
function doTaskA(param, callback) {
    callback("A", param + 1);
}
function doTaskB(param, callback) {
    callback("B", param + 2);
}
function doTaskC(param, callback) {
    callback("C", param + 3);
}
function doMyTask() {
    doTaskA(10, function (aName, aValue) {
        console.log(aName, aValue);
        doTaskB(20, function (bName, bValue) {
            console.log(bName, bValue);
            doTaskC(30, function (cName, cValue) {
                console.log(cName, cValue);
            });
        });
    });
}
doMyTask();
