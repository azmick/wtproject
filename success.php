<?php
session_start();

// Oturum verilerini al
$name = $_SESSION["name"];
$email = $_SESSION["email"];
$country = $_SESSION["country"];
$hobbies = $_SESSION["hobbies"];
$gender = $_SESSION["gender"];
$message = $_SESSION["message"];

// Oturumu temizle
session_unset();
session_destroy();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Success</title>
</head>
<body>
  <h1>Form Gönderimi Başarılı</h1>
  <p>Ad Soyad: <?php echo $name; ?></p>
  <p>E-posta: <?php echo $email; ?></p>
  <p>Ülke: <?php echo $country; ?></p>
  <p>Hobiler: <?php echo implode(", ", $hobbies); ?></p>
  <p>Cinsiyet: <?php echo $gender; ?></p>
  <p>Mesaj: <?php echo $message; ?></p>
</body>
</html>
