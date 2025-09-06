document.getElementById('menu-btn').addEventListener('click', function () {
  document.querySelector('nav').classList.toggle('open');
});
document.getElementById('year').textContent = new Date().getFullYear();

var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Demo: form submission is disabled. Use a form service (Formspree, Netlify Forms) to process submissions.');
  });
}
