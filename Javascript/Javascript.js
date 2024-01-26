document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menubutton');
  const navbar = document.querySelector('.navbar');

  menuButton.addEventListener('click', function() {
      navbar.classList.toggle('hidden');
  });

});

buttons.forEach((button,index) => {
  button.addEventListener('click', (e)=>{
    e.preventDefault();
    button.classList.add('active');
    removeActive(index);
  })
});