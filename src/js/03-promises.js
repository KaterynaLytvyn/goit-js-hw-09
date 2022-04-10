const formElement = document.querySelector('.form')

formElement.addEventListener('submit', onSubmit);

function onSubmit(event) {
  const delay = event.currentTarget.elements.delay.value
  const step = event.currentTarget.elements.step.value
  const amount = event.currentTarget.elements.amount.value
}


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
