<?php
session_start();

$name = $_SESSION["name"] ?? '';
$email = $_SESSION["email"] ?? '';
$message = $_SESSION["message"] ?? '';

// Oturumu temizle
session_unset();
session_destroy(); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Başarı</title>
</head>
<body>
  <h1>Başarılı!</h1>

  <p>Gönderen: <?php echo $name; ?></p>
  <p>E-posta: <?php echo $email; ?></p>
  <p>Mesaj: <?php echo $message; ?></p>
</body>
</html>