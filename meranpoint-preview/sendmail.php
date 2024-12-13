<?php
/**
 * Created by PhpStorm.
 * User: rubtsovi
 * Date: 24.02.2018
 * Time: 15:52
 */

$smtp       = 'mail.meranpoint.pl'; // serwer poczty SMTP
$login      = 'postmaster@meranpoint.pl'; // login do skrzynki wysyłkowej
$password   = 'kad@PUM44'; //hasło do skrzynki wysyłkowej
$postmaster = 'postmaster@meranpoint.pl'; // adres skrzynki wysyłkowej
$recipient  = 'serwis@meranpoint.pl'; // gdzie muszą być wysyłane wiadomości


if ( ! isset( $_POST['sendmail'] ) && !is_numeric($_POST['sendmail']) ) {
	header( 'HTTP/1.0 403 Forbidden', true, 403 );
	die( 'This file is not allowed for you. Go away.' );
}

require 'vendor/autoload.php';

$FormModel = array( 'name', 'email', 'message' );

$FormData = array();

foreach ( $FormModel as $name ) {
	foreach ($_POST['data'] as $data){
		if($name === $data['name']){
			$FormData[$name] = htmlspecialchars($data['value']);
			break;
		}
	}
}

$loader = new Twig_Loader_Filesystem( 'tpl/' );
$twig   = new Twig_Environment( $loader );

$swiftmailerTemplateHelper = new \WMC\SwiftmailerTwigBundle\Mailer\TwigSwiftHelper( $twig, '/tpl' );

$transport = ( new Swift_SmtpTransport( $smtp ) )
	->setUsername( $login )
	->setPassword( $password );

$mailer = new Swift_Mailer( $transport );


$message = ( new Swift_Message() )
	->setFrom( $postmaster, 'MERAN POINT Sp. z o.o.' )
	->setTo( $recipient, 'MERAN POINT Sp. z o.o.' )
	->setReplyTo( $FormData['email'], $FormData['name'] );

$swiftmailerTemplateHelper->populateMessage( $message, 'mail-message.html.twig', $FormData );
$isSend = $mailer->send( $message );

if($isSend){
	echo 'OK';
} else {
	echo 'NOT SENT';
}



