const form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'example' && password === 'password') {
    alert('Login successful!');
    // redirect to dashboard page
  } else {
    alert('Invalid username or password');
  }
});

const form = document.getElementById('registration-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const firstname = document.getElementById('firstname').value;
  const lasttname = document.getElementById('lastname').value;
  const emailadd = document.getElementById('emailadd').value;
  if (username === 'example' && password === 'password') {
    alert('Login successful!');
    // redirect to dashboard page
  } else {
    alert('Invalid username or password');
  }
});