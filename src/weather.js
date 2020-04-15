import callApi from './api/api.handler';
import renderCard from './views/renderCard';
import createForm from './views/renderForm';
import createUnitSelector from './views/renderSelector';
import frame from './views/frame';

async function showWeather() {
  try {
    renderCard(await callApi());
  } catch (error) {
    console.log(error);
  }
}

function weatherApp() {
  frame();
  createForm();
  createUnitSelector();
  const button = document.getElementById('btn');
  const form = document.querySelector('form');

  button.onclick = showWeather();

  form.onclick = showWeather();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showWeather();
  });
}

export default weatherApp;
