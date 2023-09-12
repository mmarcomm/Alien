document.addEventListener('DOMContentLoaded', function() {
  var menuButton = document.querySelector('.menubutton');

  if (menuButton) {
      menuButton.addEventListener('click', function() {
          window.location.href = 'produto.html';
      });
  }
});
