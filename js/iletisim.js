// Formu göndermeden önce doğrulama yapmak için JavaScript kullanıyoruz
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementsByName("name")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;
  
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      event.preventDefault(); // Formun gönderilmesini engelle
      alert("Lütfen tüm alanları doldurun.");
    }
  });
  