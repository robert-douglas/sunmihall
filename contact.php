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

$phone = $_POST['time'];

$email = $_POST['email'];

$email = $_POST['email-confirm'];

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
$to = "jlross90@gmail.com";

$email_subject = "Contact form submission: $name";

$email_body = "You have received a new message. ".

" Here are the details:\n Name: $name \n Phone: $phone \n ".

"Email: $email \n Please call during the following times: $time \n Message: \n $message";

$headers = "From: $myemail\n";

$headers .= "Reply-To: $email";

mail($to,$email_subject,$email_body,$headers);


// AUTORESPONDER

/* Autoresponder subject */
$respond_subject = "Sun Mihall - Thank you for contacting us!";

/* Autoresponder message */
$respond_message = "Hello!

Thank you for contacting us! Your message has been recieved and we will get back to you
as soon as possible!

Yours sincerely,

Sun Mihall
www.sunmihall.com
";

/* Send the message using mail() function */
mail($email, $respond_subject, $respond_message);

//redirect to the 'thank you' page

header('Location: index.html');
}
