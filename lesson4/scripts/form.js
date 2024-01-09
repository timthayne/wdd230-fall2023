document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();

  const password1 = document.querySelector('#password1');
  const password2 = document.querySelector('#password2');
  const noMatch = document.querySelector('#no-match');

  // check password
  if (password1.value != password2.value) {
    noMatch.classList.remove('hidden');
  } else {
    noMatch.classList.add('hidden');
  }

  console.log('here');
});
