document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menubutton');
  const navbar = document.querySelector('.navbar');

  menuButton.addEventListener('click', function() {
      navbar.classList.toggle('hidden');
  });
});