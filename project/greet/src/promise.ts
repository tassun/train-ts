
interface Task { name: string, value: number };
function doPromA(param: number) : Promise<Task> {
    return new Promise((resolve,reject) => {
        resolve({name: "A", value: param+1});
    });
}
function doPromB(param: number) : Promise<Task> {
    return new Promise((resolve,reject) => {
        resolve({name: "B", value: param+2});
    });
}
function doPromC(param: number) : Promise<Task> {
    return new Promise((resolve,reject) => {
        resolve({name: "C", value: param+2});
    });
}
function doMyProm() {
    doPromA(10).then(taskA => {
        console.log(taskA);
        doPromB(20).then(taskB => {
            console.log(taskB);
            doPromC(30).then(taskC => {
                console.log(taskC);
            });
        });
    });
}
doMyProm();

function doMyProcess() {
    doPromA(10).then(taskA => {
        console.log(taskA);
        return doPromB(20);
    }).then(taskB => {
        console.log(taskB);
        return doPromC(30);
    }).then(taskC => {
        console.log(taskC);
    });
}
doMyProcess();

async function doMyAsync() {
    let taskA = await doPromA(10);
    let taskB = await doPromB(20);
    let taskC = await doPromC(30);    
    console.log(taskA);
    console.log(taskB);
    console.log(taskC);    
}
doMyAsync();

async function doParallel() {
    let taskA = await doPromA(10);
    let [taskB, taskC] = await Promise.all([doPromB(20), doPromC(30)]);
    console.log(taskA);
    console.log(taskB);
    console.log(taskC);    
}
doParallel();
