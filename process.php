<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Form verilerini al
  $name = $_POST["name"];
  $email = $_POST["email"];
  $country = $_POST["country"];
  $hobbies = $_POST["hobbies"];
  $gender = $_POST["gender"];
  $message = $_POST["message"];

  // Verileri işleyin veya kaydedin
  // ...

  // Verileri oturumda sakla
  session_start();
  $_SESSION["name"] = $name;
  $_SESSION["email"] = $email;
  $_SESSION["country"] = $country;
  $_SESSION["hobbies"] = $hobbies;
  $_SESSION["gender"] = $gender;
  $_SESSION["message"] = $message;

  // Başka bir sayfaya yönlendir
  header("Location: success.php");
  exit();
}
?>
