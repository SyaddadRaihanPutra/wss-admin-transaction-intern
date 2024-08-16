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
