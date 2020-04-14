async function renderCard(data) {
  const card = document.createElement('div');
  const cardBody = document.createElement('div');
  const h5 = document.createElement('h5');
  const h6 = document.createElement('h6');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const parent = document.getElementById('container');

  card.className = 'card';
  cardBody.className = 'card-body';
  h5.className = 'card-title';
  h5.textContent = data.name;
  h6.classList = 'card-subtitle mb-2';
  h6.textContent = `Current temperature ${data.main.temp}`;
  p1.textContent = `Feels Like ${data.main.feels_like}`;
  p2.textContent = `Max ${data.main.temp_max}, Min ${data.main.temp_min}`;
  p1.classList = 'card-text';
  p2.classList = 'card-text';

  card.appendChild(cardBody);
  cardBody.appendChild(h5);
  cardBody.appendChild(h6);
  cardBody.appendChild(p1);
  cardBody.appendChild(p2);

  if (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
  parent.appendChild(card);
}

export default renderCard;
