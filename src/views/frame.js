function frame() {
  const body = document.querySelector('body');
  const titleContainer = document.createElement('div');
  const title = document.createElement('h1');

  body.appendChild(titleContainer);
  titleContainer.appendChild(title);

  titleContainer.classList = 'container';
  title.textContent = 'Weatherizer';
}

export default frame;
