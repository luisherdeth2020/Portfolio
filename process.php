<?php

    //sumbission data
/**

    Cada $_GET[" "] el valor entre comillas es el mismo que el valor name <label name=" ">

*/
    //form data
// echo
     $name       = $_POST["name"];
     $email      = $_POST["email"];
    //  $telephone  = $_POST["telephone"];
     $message    = $_POST["message"];


    $para      = 'luis.herdeth@gmail.com';
    $titulo    = 'Luis Herdeth';
   $mensaje   = "Nombre: ".$name."\n"."Correo: ".$email."\n"."Telefono: ".$telephone."\n"."Mensaje: ".$message;
    $cabeceras =    'From: http://luisherdeth.com/' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();
                    mail($para, $titulo, $mensaje, $cabeceras);
    // echo $mensaje;
    /**

    esto es para activar un modal con mensaje de "su mensaje ha sido enviado exitosamente" ya te explicarÃ© despues

     */
     echo '
        <script>
            var succes = "enviar";
            window.location = "http://luisherdeth.com/";
        </script>
    ';

    //form validation to go here....
?>