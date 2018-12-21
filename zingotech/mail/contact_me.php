<?php
include_once("mailer.php");

// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   	echo json_encode(array("status"=>0, "message"=>"No arguments Provided!"));
   	exit;
   }
   
$status = 1;
$message1 = "Your message has been sent. ";

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email for User and send them message
$to_user = array($email_address);
$tor_name_user = array($name);
$email_subject_user = "Zingo Tech Contact Support";    // for user
$email_body_user = "Hey $name,

			<br><br>Thank you for showing interest in ZingoTech. We have received your query and will get back to you very soon.
			<br><br>Zingo Team
            <br><a href='zingo.tech'>zingo.tech</a> ";

//send mail to Admin
$email_subject_admin = "New Client Query";      // for admin
$email_body_admin = "Hello Admin, A new user query is received via Zingo Tech Website, Respond them soon...
						<br><br>Name: $name
						<br>Email: $email_address
						<br>Phone: $phone
						<br>Message: $message<br>";

$to_admin = array("nishant@zingohotels.com");
$to_name_admin = array("ADMIN ZINGO TECH");
//$email_subject_admin = "New Client Query";



if (sendMail($to_admin, $to_name_admin, $email_subject_admin, $email_body_admin)) {

	//send optional acknowledgement to the user
	sendMail($to_user, $tor_name_user, $email_subject_user,$email_body_user);

//    header("Content-Type: application/json");
	echo json_encode(array("status"=>$status, "message"=>$message1));
} else {
//    header("Content-Type: application/json");
	echo json_encode(array("status"=>0, "message"=>"Message could not be sent. Please try again later."));
}
exit;

?>