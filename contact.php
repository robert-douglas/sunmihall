<?php
$errors = '';

// $myemail = '';
//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['phone']) ||
   empty($_POST['time']) ||
   empty($_POST['email']) ||
   empty($_POST['email-confirm']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}


$name = $_POST['name'];

$phone = $_POST['phone'];

$time = $_POST['time'];

$email = $_POST['email'];

$email_confirm = $_POST['email-confirm'];

$message = $_POST['message'];



if (!preg_match(

"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",

$email))

{

    $errors .= "\n Error: Invalid email address";

}

if( empty($errors))
{

// $to = $myemail;
$to = "study@sunmihall.com";

$email_subject = "ウェブサイトよりお問い合わせが届きました";

$email_body = "差出人: $name \n".

"メールアドレス: $email \n".

"電話番号: $phone \n \n".

"お問い合わせ内容: $message \n \n".

"折り返しのお電話ご希望の時間帯: $time \n \n".

"____________________________ \n
このメールは http://sunmihall.com/ のお問い合わせフォームから送信されました \n
";

// $headers = "From: $myemail\n";
$headers = "From: Contact Form\n";

$headers .= "Reply-To: $email";

mail($to,$email_subject,$email_body,$headers);


// AUTORESPONDER

/* Autoresponder headers */
$headers = "From: Sun Mihall\n";
//
$headers .= "Reply-To: <noreply@sunmihall.com>";

/* Autoresponder subject */
$respond_subject = "【サンミハール】お問い合わせありがとうございます（自動返信メール）";

/* Autoresponder message */
$respond_message = "＜こちらはホームページより自動送信を行っております＞

こんにちは。
サンミハールランゲージサービスです。

この度は、ウェブサイトよりお問い合わせいただき、
誠にありがとうございます。

後ほど担当者より改めてご連絡をさせていただきますので
今しばらくお待ちくださいますようお願いいたします。

尚、ご入力いただきました情報は、厳重に管理いたします。
第三者への開示は一切致しませんのでご安心ください。

--------------------------------------------------------
お名前:$name 様

メールアドレス: $email

電話番号: $phone

お問い合わせ内容: $message

折り返しのお電話ご希望の時間帯: $time
--------------------------------------------------------

※このメールは自動返信です。内容にお心当たりがない
場合は、大変お手数ですが下記までご連絡ください。


＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
サンミハールランゲージサービス
神戸市中央区三宮町1-4-13 YSビル4F
Phone: 078-331-3035 （日祝休)
Email：study@sunmihall.com
URL: www.sunmihall.com
マネージャー　フェンスターメイカー明実
＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊

";

/* Send the message using mail() function */
mail($email, $respond_subject, $respond_message, $headers);

//redirect to the 'thank you' page

header('Location: http://sunmihall.com');
}
