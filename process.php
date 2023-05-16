<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Verileri işleyin veya kaydedin
  

  // İşlem tamamlandıktan sonra başka bir sayfaya yönlendirme yapabilirsiniz
  session_start();
  $_SESSION["name"] = $name;
  $_SESSION["email"] = $email;
  $_SESSION["message"] = $message;

  header("Location: success.php");
  exit();
}
?>
