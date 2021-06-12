<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];


$msg = "You have a new message!\nFrom $name, $email, $phone with the following message:\n$message";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg, 70);

// send email
mail("04.ayaz@gmail.com", "Portfolio Message", $msg);

