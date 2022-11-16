/* Web Workers: in main thread */
// Spawn a new worker thread
const myWorker = new Worker('worker.js');
const button = document.querySelector('button');
localStorage.setItem('sessionKey', Math.random() * 9);
sessionStorage.setItem('s1', Math.random() * 9);

const postMessageToWorker = () => {
  myWorker.postMessage('Posting message to worker thread');
  console.log('1. Message posted to worker');
  button.disabled = true;
};

/* receive message back fro worker thread */
myWorker.onmessage = function (e) {
  console.log('4. Message received from worker', e);
  button.disabled = false;
};

button.addEventListener('click', postMessageToWorker);

const fetchBtn = document.querySelector('#fetchData');

fetchBtn.addEventListener('click', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
  let div = document.querySelector('#data');
  div.textContent = JSON.stringify(data);
});
