document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      email: document.getElementById('email').value.trim(),
      password: document.getElementById('password').value
    };

    try {
      const resp = await fetch('https://adithyasapi.samstack.site/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await resp.json();
      if (!resp.ok) {
        alert(json.error || 'Login failed');
        return;
      }
      if (json.token) localStorage.setItem('token', json.token);
      alert('Logged in');

      window.location.href = 'dashboard.html';
    } catch (err) {
      console.error(err);
      alert('Network error');
    }
  });
});
