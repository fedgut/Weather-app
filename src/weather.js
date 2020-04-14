import data from './api/api.handler';
import renderCard from './views/renderCard';
import createForm from './views/renderForm';
import createUnitSelector from './views/renderSelector';
import frame from './views/frame';

async function callApi() {
  const input = document.getElementById('city');
  const units = document.querySelector('input[name="unitRadios"]:checked')
    .value;
  const datum = await data(input.value, units);
  return datum;
}

function weatherApp() {
  frame();
  createForm();
  createUnitSelector();
  const button = document.getElementById('btn');
  const form = document.querySelector('form');

  button.onclick = async () => {
    renderCard(await callApi());
  };

  form.onclick = async () => {
    renderCard(await callApi());
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    callApi().then((response) => renderCard(response));
  });
}

export default weatherApp;
