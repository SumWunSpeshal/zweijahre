const login = document.querySelector('[data-login]');
const loginButton = document.querySelector('[data-login-button]');
const input = document.querySelector('[data-pw]');
const password = 'food';

(() => {
  if (localStorage.getItem('logged-in') === password) {
    return;
  }

  localStorage.removeItem('logged-in');
  login.classList.remove('is-hidden');
})();

input.addEventListener('keyup', ({ key }) => {
  key === 'Enter' && checkPassword();
});

loginButton.addEventListener('click', checkPassword);

function checkPassword() {
  input.value === password ? onSuccess() : onError();
}

function onSuccess() {
  localStorage.setItem('logged-in', password);
  login.classList.add('is-hidden');
}

function onError() {
  localStorage.removeItem('logged-in');
  login.classList.remove('is-hidden');
}
