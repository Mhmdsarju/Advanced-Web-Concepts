const worker=new Worker("worker.js");

worker.postMessage("start");

worker.onmessage=function(event){
    console.log("Result:",event.data);
}