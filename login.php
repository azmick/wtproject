<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login Sayfası</title>
</head>
<body>
    <form action="aboutme.php" method="post">
        <label for="adi" >Kullanıcı Adı :</label><br>
        <input type="email" name="username" required size="30" id="adi"><br>
        <label for="soyadi">Şifre :</label><br>
        <input type="password" name="sifre" required id="sifre"><br>
        <input type="submit" value="Giriş">
    </form>
</body>
</html>


<?php
// POST verilerini al
$username = $_POST['username'];
$password = $_POST['sifre'];

// Alanların boş olup olmadığını kontrol et
if (empty($username) || empty($password)) {
    header("Location: login.html"); // Boş alanlar varsa login sayfasına geri yönlendir
    exit;
}

// Kullanıcı adının e-posta formatına uygun olduğunu kontrol et
if (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
    header("Location: login.html"); // E-posta formatına uymuyorsa login sayfasına geri yönlendir
    exit;
}

// Kullanıcı adı ve şifre kontrolü
$validUsername = "g221210384@sakarya.edu.tr";
$validPassword = "g221210384";

if ($username === $validUsername && $password === $validPassword) {
    $redirectUrl = "aboutme.php"; // Yönlendirilecek sayfanın URL'si
    header("Location: " . $redirectUrl);
    exit;
    } 
    else {
    header("Location: login.html"); // Kullanıcı adı veya şifre hatalıysa login sayfasına geri yönlendir
    exit;
}
?>
