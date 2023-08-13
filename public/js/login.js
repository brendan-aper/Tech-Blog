const guitarLoginFormHandler = async (event) => {
  event.preventDefault();
  
  const username = document.querySelector('#username-guitar-login').value.trim();
  const password = document.querySelector('#password-guitar-login').value.trim();
  
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/'); 
    } else {
      alert('Failed to log in.'); 
    }
  }
};


const guitarLoginForm = document.querySelector('.guitar-login-form');
if (guitarLoginForm) {
  guitarLoginForm.addEventListener('submit', guitarLoginFormHandler);
}