
function createForm() {
  const base = document.querySelector('body');
  const container = document.createElement('div');
  const form = document.createElement('form');
  const formGroup = document.createElement('div');
  const input = document.createElement('input');
  const button = document.createElement('button');
  const cardContainer = document.createElement('div');

  container.className = 'container';
  cardContainer.className = 'container';
  formGroup.className = 'form-group';
  input.setAttribute('type', 'text');
  input.className = 'form-control';
  input.id = 'city';
  input.defaultValue = 'City';
  button.setAttribute('type', 'button');
  button.textContent = 'Check!';
  button.classList = 'btn btn-primary';
  button.id = 'btn';
  cardContainer.id = 'container';

  base.appendChild(container);
  container.appendChild(form);
  form.appendChild(formGroup);
  formGroup.appendChild(input);
  formGroup.appendChild(button);
  base.appendChild(cardContainer);
}

export default createForm;
