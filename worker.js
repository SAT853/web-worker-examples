/* In Worker thread */
onmessage = function (e) {
  console.log('2. Message received from main script');
  const workerResult = 'Result: ' + e.data;
  console.log('3. Posting message back to main script');
  postMessage(workerResult);
};
