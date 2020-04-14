import data from './api/api.handler';
import renderCard from './views/renderCard';
import createForm from './views/renderForm';
import createUnitSelector from './views/renderSelector';

function weatherApp() {
  createForm();
  createUnitSelector();
  const button = document.getElementById('btn');
  const input = document.getElementById('city');
  const form = document.querySelector('form');

  button.onclick = async () => {
    const units = document.querySelector('input[name="unitRadios"]:checked')
      .value;
    const datum = await data(input.value, units);
    renderCard(datum);
  };

  form.onclick = async () => {
    const units = document.querySelector('input[name="unitRadios"]:checked')
      .value;
    const datum = await data(input.value, units);
    renderCard(datum);
  };
}

export default weatherApp;
