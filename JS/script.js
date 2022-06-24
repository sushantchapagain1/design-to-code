const seePassBtn = document.querySelector('.see-password');
const passInput = document.querySelector('#sign-up-input');

seePassBtn.addEventListener('click', function () {
  if (seePassBtn.name === 'eye-outline' && passInput.type === 'password') {
    passInput.type = 'text';
    seePassBtn.name = 'eye-off-outline';
  } else {
    passInput.type = 'password';
    seePassBtn.name = 'eye-outline';
  }
});
