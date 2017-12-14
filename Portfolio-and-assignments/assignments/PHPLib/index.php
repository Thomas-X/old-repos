<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP testing</title>
</head>
<body>
<?php

session_start();

require_once ("lib/Database.php");

$account = new Account();

$account->connecttoDB("localhost","root", "admin","testing");
$message = $account->login("post", @$_POST['username'], @$_POST['password'], "logindata", "index.php");


$addtocart = new Addtocart();
$addtocart->connecttoDB("localhost","root", "admin","testing");
$query = $addtocart->addcustomitem("customitem", "customprice", "customname", "customtypes");

echo $query;
echo $message;

var_dump($_SESSION['username']);




?>


<form method="post" action="index.php">
    <label>Username:</label>
    <input name="username" type="text">
    <br>
    <label>Password:</label>
    <input name="password" type="password">
    <br>
    <button type="submit">Register</button>
</form>

<br>
-----------
<form method="post" action="index.php">
    <label>Boeket naam</label>
    <input name="customname" type="text">
    <br>
    <label>Boeketsoorten</label>
    <input name="customtypes" type="text">
    <br>
    <label>Boeket prijs</label>
    <input name="customprice" type="text">
    <button type="submit">Voeg toe aan DB</button>
</form>

</body>
</html>