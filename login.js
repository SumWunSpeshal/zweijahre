const login = document.querySelector('[data-login]');
const loginButton = document.querySelector('[data-login-button]');
const input = document.querySelector('[data-pw]');
const inputWrap = document.querySelector('[data-input-wrap]');
const password = 'food';

(() => {
  if (localStorage.getItem('logged-in') === password) {
    return;
  }

  localStorage.removeItem('logged-in');
  login.classList.remove('is-inactive');
})();

input.addEventListener('keyup', (event) => {
  event.key === 'Enter' && checkPassword();
});

input.addEventListener('focus', () => {
  inputWrap.classList.add('is-filled');
  inputWrap.classList.remove('has-error');
});

input.addEventListener('blur', () => {
  if (input.value !== '') {
    inputWrap.classList.add('is-filled');
  } else {
    inputWrap.classList.remove('is-filled');
  }
});

loginButton.addEventListener('click', checkPassword);

function checkPassword() {
  input.value === password ? onSuccess() : onError();
}

function onSuccess() {
  localStorage.setItem('logged-in', password);
  login.classList.add('is-inactive');
}

function onError() {
  localStorage.removeItem('logged-in');
  inputWrap.classList.add('has-error');
  login.classList.remove('is-inactive');
}
