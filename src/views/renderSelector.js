function createUnitSelector() {
  const div1 = document.createElement('div');
  const input1 = document.createElement('input');
  const label1 = document.createElement('label');
  const div2 = document.createElement('div');
  const input2 = document.createElement('input');
  const label2 = document.createElement('label');
  const form = document.querySelector('form');
  const formGroup = document.createElement('div');

  formGroup.classList = 'form-group';
  formGroup.id = 'radio-group';

  div1.classList = 'form-check form-check-inline';
  input1.classList = 'form-check input';
  input1.id = 'radioC';
  input1.setAttribute('type', 'radio');
  input1.setAttribute('value', 'metric');
  input1.setAttribute('name', 'unitRadios');
  input1.checked = true;
  label1.classList = 'form-check-label';
  label1.setAttribute('for', 'radioC');
  label1.textContent = 'Celsius';

  div1.appendChild(label1);
  div1.appendChild(input1);

  div2.classList = 'form-check form-check-inline';
  input2.classList = 'form-check input';
  input2.id = 'radioF';
  input2.setAttribute('type', 'radio');
  input2.setAttribute('value', 'imperial');
  input2.setAttribute('name', 'unitRadios');
  label2.classList = 'form-check-label';
  label2.setAttribute('for', 'radioF');
  label2.textContent = 'Farenheit';

  div2.appendChild(label2);
  div2.appendChild(input2);

  formGroup.appendChild(div1);
  formGroup.appendChild(div2);
  form.appendChild(formGroup);
}

export default createUnitSelector;
