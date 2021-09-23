<?php
	
    if (!$_POST) exit('No direct script access allowed');
 
if (!isset($_POST['f'])) exit('No direct script access allowed');
if (!isset($_POST['f']['name'])) exit('No direct script access allowed');
if (!isset($_POST['f']['phone'])) exit('No direct script access allowed');
if (!isset($_POST['f']['email'])) exit('No direct script access allowed');
 
$email = trim(strip_tags($_POST['f']['email']));
$name = trim(strip_tags($_POST['f']['name']));
$phone = trim(strip_tags($_POST['f']['phone']));
 
if (!filter_var($email, FILTER_VALIDATE_EMAIL))
{
	exit('Неверный email! Обновите страницу (F5) и укажите правильный адрес');
}
 
if (!$name)
{
	exit('Не указано имя! Обновите страницу (F5) и укажите своё имя');
}
 
 
$to = 'alexanderderevkov@yandex.ru'; // адрес получателя
$subject = 'Заявка с сайта Smartpoint.pro'; // тема письма
 
// формируем тело сообщения
$message = 'Имя: ' . $name . "\r\n" . 'Email: ' . $email. "\r\n" . 'Телефон:' .$phone; 
 
// формируем headers для письма
$headers = 'From: '. $email . "\r\n"; // от кого
 
// кодируем заголовок в UTF-8
$subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
$subject = preg_replace("/(\t)/", " ", $subject);
$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
 
// отправка
@mail($to, $subject, $message, $headers);
 
echo 'Спасибо, ваше сообщение отправлено!';

?>