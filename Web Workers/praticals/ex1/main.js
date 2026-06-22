const worker=new Worker("worker.js")

worker.postMessage(10);

worker.onmessage = function (event) {
  console.log(event.data);
};