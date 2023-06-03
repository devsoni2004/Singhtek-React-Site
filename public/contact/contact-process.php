<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'kunal@singhtek.com';

  if( file_exists($php_email_form = 'assets/vendor/validate.js' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  <!-- $contact->ajax = true; -->
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['fname'];
  $contact->from_name = $_POST['lname'];
  $contact->from_name = $_POST['mobile'];
  $contact->from_email = $_POST['email'];
  $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials

  $contact->smtp = array(
    'host' => 'anddigital.in/kunal',
    'username' => 'anddigital',
    'password' => 'singhtek@2022',
    'port' => '587'
  );
 

  $contact->add_message( $_POST['fname'], 'From');
  $contact->add_message( $_POST['lname'], 'From');
  $contact->add_message( $_POST['mobile'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?>
