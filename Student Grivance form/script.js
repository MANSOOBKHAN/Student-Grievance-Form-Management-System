const form = document.getElementById('grievance-form');
const statusDiv = document.getElementById('grievance-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

  // Display a message in the grievance status box
  statusDiv.innerHTML = `<p>Your grievance has been submitted. Thank you for your feedback.</p>`;
});
