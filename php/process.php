<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "YOUR_EMAIL@gmail.com";

    $subject = "New Message from OmCode Website";

    $body = "Name: " . $name . "\n";
    $body .= "Email: " . $email . "\n\n";
    $body .= "Message:\n" . $message;

    $headers = "From: " . $email;

    if (mail($to, $subject, $body, $headers)) {

        echo "Message sent successfully!";

    } else {

        echo "Message could not be sent.";

    }

}

?>