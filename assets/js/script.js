document.addEventListener("keydown", function (event) {
  // Cek apakah tombol `CTRL` dan `K` ditekan bersamaan
  if (event.ctrlKey && event.key === "k") {
    event.preventDefault(); // Mencegah tindakan default (seperti membuka browser bookmark)
    var searchElement = document.getElementById("search");
    if (searchElement) {
      searchElement.focus(); // Fokuskan elemen pencarian
    }
  }
});

var togglePasswordButton = document.getElementById("toggle-password");
if (togglePasswordButton) {
  togglePasswordButton.addEventListener("click", function () {
    var passwordField = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");

    if (passwordField && eyeIcon) {
      if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("ti-eye");
        eyeIcon.classList.add("ti-eye-off");
      } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("ti-eye-off");
        eyeIcon.classList.add("ti-eye");
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const newItemBtn = document.getElementById('new-item-btn');
  const itemsContainer = document.getElementById('items-container');
  const itemTemplate = document.querySelector('.item-template');

  let itemCounter = 1;

  newItemBtn.addEventListener('click', function() {
      // Clone the template
      const newItem = itemTemplate.cloneNode(true);

      // Clear input fields in the cloned item
      newItem.querySelectorAll('input').forEach(input => {
          input.value = '';
      });

      // Set the new item number
      itemCounter++;
      newItem.querySelector('.item-number').textContent = itemCounter;

      // Remove the 'item-template' class and make the new item visible
      newItem.classList.remove('item-template');
      newItem.classList.add('item');

      // Append the new item to the container
      itemsContainer.appendChild(newItem);
  });
});

function removeItem(button) {
  // Remove the item that contains the clicked button
  button.closest('.item').remove();
}