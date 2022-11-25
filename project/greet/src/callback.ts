function doTaskA(param: number, callback: Function) {
    callback("A",param+1);
}
function doTaskB(param: number, callback: Function) {
    callback("B",param+2);
}
function doTaskC(param: number, callback: Function) {
    callback("C",param+3);
}
function doMyTask() {
    doTaskA(10,function(aName: string,aValue: number) {
        console.log(aName,aValue);
        doTaskB(20,function(bName: string, bValue: number) {
            console.log(bName,bValue);
            doTaskC(30,function(cName: string, cValue: number) {
                console.log(cName,cValue);
            }); 
        });
    });
}
doMyTask();
