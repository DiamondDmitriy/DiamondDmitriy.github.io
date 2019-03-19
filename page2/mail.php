<?php

$recepient="shelkin01@mail.ru";
$siteName="name site";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $email";

$pagetitle = "заявка с сайта \"$siteName\"";
mail($recepient,$pagetitle,$message, "Content-type: text/plain; charset=\"utf-8\"\n Form: $recepient");
?>