<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Execption.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    $mail->setFrom('robotnikita12@gmail.com','Проверка СМС');
    $mail->addAddress('nikita.cool.42@mail.ru','Письмо пришло');
    $mail->Subject = 'Это письмо дошло в целости и сохранности';

    $body = '<h1>А вот и письмо</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['Email']))){
        $body.='<p><strong>Email:</strong> '.$_POST['Email'].'</p>';
    }
    if(trim(!empty($_POST['Телефон']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['Телефон'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()) {
        $message = '';
    } else {
        $message = '';
    }

    $response = ['' => $message];

    header('Content-type: application/json');
    echo json_encode($response);