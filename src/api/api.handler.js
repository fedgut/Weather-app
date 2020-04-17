/* eslint-disable no-unused-expressions */
async function data(...params) {
  const key = 'ce60013986dfcb3ebf13accf07bbb9f9';
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${params[0]}&units=${params[1]}&appid=${key}`,
      { mode: 'cors' },
    );
    if (response.ok) {
      const getData = await response.json();
      params[1] === 'metric' ? (getData.units = '°C') : (getData.units = '°F');
      return getData;
    }
    return { error: 'Please type in a valid city or zip code' };
  } catch (e) {
    return { error: e };
  }
}

async function callApi() {
  const input = document.getElementById('city');
  const units = document.querySelector('input[name="unitRadios"]:checked')
    .value;
  const datum = await data(input.value, units);
  return datum;
}

export default callApi;
