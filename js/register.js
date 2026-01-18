document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('name').value.trim(),
      dob: document.getElementById('dob').value,
      gender: document.getElementById('gender').value,
      blood_group: document.getElementById('blood_group').value,
      phone: document.getElementById('phone').value.trim(),
      email: document.getElementById('email').value.trim(),
      city: document.getElementById('city').value.trim(),
      password: document.getElementById('password').value,
      confirm_password: document.getElementById('confirm_password').value,
    };

    if (data.password !== data.confirm_password) {
      alert('Passwords do not match');
      return;
    }

    const terms = document.getElementById('terms');
    if (!terms.checked) {
      alert('Please accept terms and conditions');
      return;
    }

    try {
      const resp = await fetch('https://adithyasapi.samstack.site/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await resp.json();
      if (!resp.ok) {
        alert(json.error || 'Registration failed');
        return;
      }
      // store token and redirect
      if (json.token) localStorage.setItem('token', json.token);
      alert('Registered successfully');
      window.location.href = 'index.html';
    } catch (err) {
      console.error(err);
      alert('Network error');
    }
  });
});
