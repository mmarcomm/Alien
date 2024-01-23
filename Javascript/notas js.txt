// Get references to the menu button and the elements to hide
const menuButton = document.querySelector('.menubutton');
const square = document.querySelector('.square');
const navgatorList = document.querySelector('.navbar ul');

// Add a click event listener to the menu button
menuButton.addEventListener('click', function () {
  // Toggle the visibility of the square element
  if (square.style.display === 'none' || square.style.display === '') {
    square.style.display = 'block';
  } else {
    square.style.display = 'none';
  }

  // Toggle the visibility of the navigation list
  if (navgatorList.style.display === 'none' || navgatorList.style.display === '') {
    navgatorList.style.display = 'block';
  } else {
    navgatorList.style.display = 'none';
  }
});