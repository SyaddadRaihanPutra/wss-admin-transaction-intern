document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "k") {
    event.preventDefault();
    const searchElement = document.getElementById("search");
    if (searchElement) searchElement.focus();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const togglePasswordButton = document.getElementById("toggle-password");
  const newItemBtn = document.getElementById('new-item-btn');
  const itemsContainer = document.getElementById('items-container');
  const itemTemplate = document.querySelector('.item-template');

  // Toggle password visibility
  if (togglePasswordButton) {
    togglePasswordButton.addEventListener("click", function() {
      const passwordField = document.getElementById("password");
      const eyeIcon = document.getElementById("eye-icon");
      if (passwordField && eyeIcon) {
        const isPassword = passwordField.type === "password";
        passwordField.type = isPassword ? "text" : "password";
        eyeIcon.classList.toggle("ti-eye", isPassword);
        eyeIcon.classList.toggle("ti-eye-off", !isPassword);
      }
    });
  }

  // Add new item
  if (newItemBtn && itemTemplate && itemsContainer) {
    let itemCounter = 1;

    newItemBtn.addEventListener('click', function() {
      const newItem = itemTemplate.cloneNode(true);
      newItem.querySelectorAll('input').forEach(input => input.value = '');
      itemCounter++;
      newItem.querySelector('.item-number').textContent = itemCounter;
      newItem.classList.remove('item-template');
      newItem.classList.add('item');
      itemsContainer.appendChild(newItem);
    });
  }
});

function removeItem(button) {
  const item = button.closest('.item');
  if (item) item.remove();
}
