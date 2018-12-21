<?php
//display error like in localhost
/* error_reporting(E_ALL);
ini_set('display_errors', 1);*/

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
// require 'vendor/autoload.php';

require 'phpmailer/phpmailer/src/PHPMailer.php';
require 'phpmailer/phpmailer/src/Exception.php';
require 'phpmailer/phpmailer/src/SMTP.php';

/**
*   This function is used to send email;
*   $to is an array
*/

function sendMail($to, $to_name, $subject, $body, $username='hello@zingohotels.com', $password='hospitality@lucida@987', $from='hello@zingohotels.com', $from_name=' Contact Support', $replyto='hello@zingohotels.com', $replyto_name='Zingo Team' ) {

    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions    
    try {
        //Server settings
        $mail->SMTPDebug = 0;                              // Enable verbose debug output
        $mail->isSMTP();                                      // Set mailer to use SMTP
    	$mail->Host = 'smtp.gmail.com';             // Specify main and backup SMTP servers
    	
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
    	
    	$mail->Username = 'hello@zingohotels.com';
    	$mail->Password = $password;
    	
        $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
//         $mail->Port = 587;                                    // TCP port to connect to
            $mail->Port = 465;                                    // TCP port to connect to
    
        //Recipients
        $mail->setFrom($from, $from_name);
           // Add a recipient
        
        for ($i=0; $i<count($to); $i++) { 
            $mail->addAddress($to[$i], $to_name[$i]);                     // Name is optional $mail->addAddress('email', 'name');
    	}

        $mail->addReplyTo($replyto, $replyto_name);
        // $mail->addCC('cc@example.com');
        // $mail->addBCC('bcc@example.com');
    
        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    
        //Content
        $mail->isHTML(true);                                     // Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body    = $body;
    // 	$mail->addAttachment('download.png', 'dummy_image.png');
    	
        $mail->AltBody = strip_tags($mail->Body);               // in case if the client does not support html
    
        $mail->send();
//          echo 'Message has been sent';  //mailer default message
        
        return true;
    } catch (Exception $e) {
         echo 'Mailer Error: ' . $mail->ErrorInfo;
        return false;
    }
}
?>