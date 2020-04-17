async function renderCard(data) {
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const h5 = document.createElement('h5');
  const h6 = document.createElement('h6');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const parent = document.getElementById('container');
  const imgCont = document.createElement('div');
  const img = new Image();

  if (data.error) {
    card.className = 'card';
    cardBody.className = 'card-body';
    h5.className = 'card-title';
    h5.textContent = `${data.error}`;
    card.appendChild(cardBody);
    cardBody.appendChild(h5);
    if (parent.lastChild) {
      parent.removeChild(parent.lastChild);
    }
    parent.appendChild(card);
    return;
  }

  card.className = 'card';
  cardBody.className = 'card-body';
  h5.className = 'card-title';
  h5.textContent = `${data.name},  ${data.sys.country}`;
  h6.classList = 'card-subtitle mb-2';
  h6.textContent = `Current temperature: ${data.main.temp} ${data.units}`;
  p1.textContent = `Feels Like: ${data.main.feels_like} ${data.units}`;
  p2.textContent = `Max: ${data.main.temp_max} ${data.units}, Min: ${data.main.temp_min} ${data.units}`;
  p1.classList = 'card-text';
  p2.classList = 'card-text';
  imgCont.id = 'img-container';
  imgCont.textContent = data.weather[0].description;
  img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  card.appendChild(cardBody);
  cardBody.appendChild(h5);
  cardBody.appendChild(h6);
  cardBody.appendChild(p1);
  cardBody.appendChild(p2);
  cardBody.appendChild(imgCont);
  imgCont.appendChild(img);

  if (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
  parent.appendChild(card);
}

export default renderCard;
