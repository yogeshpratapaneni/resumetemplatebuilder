// public/script.js
async function subscribe() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  if (email !== '') {
    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        emailInput.value = '';
      } else {
        alert('Error subscribing. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Error subscribing. Please try again.');
    }
  } else {
    alert('Please enter a valid email address.');
  }
}