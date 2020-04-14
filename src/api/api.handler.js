/* eslint-disable no-unused-expressions */
async function data(...params) {
  const key = 'ce60013986dfcb3ebf13accf07bbb9f9';
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${params[0]}&units=${params[1]}&appid=${key}`,
    { mode: 'cors' },
  );
  const getData = await response.json();
  params[1] == 'metric' ? getData.units = '°C' : getData.units = '°F';
  return getData;
}

export default data;
