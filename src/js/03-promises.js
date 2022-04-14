import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-aio-3.2.5.min.js"


const formElement = document.querySelector('.form')

formElement.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const delay = Number(formElement.elements.delay.value)
  const step = Number(formElement.elements.step.value)
  const amount = formElement.elements.amount.value

  for (let i=0; i<amount; i++) {
    createPromise(i, delay+step*i)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {timeout: 16000});
      //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {timeout: 16000});
      //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const data = {position: position, delay: delay}

  const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
    if (shouldResolve) {
      resolve(data);
    } else {
      reject(data);
    }
    }, delay);
  });

  return promise;
}
