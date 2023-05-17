document.addEventListener("DOMContentLoaded", function() {
  var checkButton = document.getElementById("checkButton");
  checkButton.addEventListener("click", function(event) {
    event.preventDefault();
    validateForm();
  });
});

function validateForm() {
  // Ad Soyad kontrolü
  var nameInput = document.forms["contactForm"]["name"].value;
  if (nameInput == "") {
    alert("Ad Soyad alanı boş bırakılamaz.");
    return false;
  }

  // E-posta kontrolü
  var emailInput = document.forms["contactForm"]["email"].value;
  if (emailInput == "") {
    alert("E-posta alanı boş bırakılamaz.");
    return false;
  }

  // Şifre kontrolü
  var passwordInput = document.forms["contactForm"]["password"].value;
  if (passwordInput == "") {
    alert("Şifre alanı boş bırakılamaz.");
    return false;
  }

  // Ülke kontrolü
  var countryInput = document.forms["contactForm"]["country"].value;
  if (countryInput == "") {
    alert("Ülke seçimi yapmalısınız.");
    return false;
  }

  // Hobiler kontrolü
  var hobbiesInputs = document.forms["contactForm"]["hobbies[]"];
  var hobbiesChecked = false;
  for (var i = 0; i < hobbiesInputs.length; i++) {
    if (hobbiesInputs[i].checked) {
      hobbiesChecked = true;
      break;
    }
  }
  if (!hobbiesChecked) {
    alert("Hobilerinizden en az bir tanesini seçmelisiniz.");
    return false;
  }

  // Cinsiyet kontrolü
  var genderInputs = document.forms["contactForm"]["gender"];
  var genderChecked = false;
  for (var i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      genderChecked = true;
      break;
    }
  }
  if (!genderChecked) {
    alert("Cinsiyetinizi seçmelisiniz.");
    return false;
  }

  // Mesaj kontrolü
  var messageInput = document.forms["contactForm"]["message"].value;
  if (messageInput == "") {
    alert("Mesaj alanı boş bırakılamaz.");
    return false;
  }

  // Tüm kontroller başarılı
  alert("Form doğrulandı ve gönderilebilir.");
  return true;
}
