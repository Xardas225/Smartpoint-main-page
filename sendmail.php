<?php


$email = trim(strip_tags($_POST['f']['email']));
$name = trim(strip_tags($_POST['f']['name']));
$phone = trim(strip_tags($_POST['f']['phone']));
 
 
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