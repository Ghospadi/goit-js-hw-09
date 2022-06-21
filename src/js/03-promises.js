import { Notify } from 'notiflix';

const form = document.querySelector('.form');

const onClick = e => {
  e.preventDefault();

  console.log(e);

  const { delay, step, amount } = e.currentTarget;

  let firstDelay = +delay.value;
  let stepDelay = +step.value;
  let amountDelays = +amount.value;

  for (let startPosition = 1; startPosition <= amountDelays; startPosition++) {
    const shouldResolve = Math.random() > 0.3;
    createPromise(startPosition, firstDelay, shouldResolve);
    firstDelay += stepDelay;
  }
};
function createPromise(position, delay, shouldResolve) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise.then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  });

  promise.catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
form.addEventListener('submit', onClick);
