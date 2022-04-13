<?php
    $db_name = "tonychau_restaurantRandomizerDB";
    $mysql_username = "tonychau_zaz";
    $mysql_password = "12345";
    $server_name = "localhost";
    $conn = mysqli_connect($server_name, $mysql_username, $mysql_password, $db_name);

    if (mysqli_connect_errno()) {
      echo "Failed to connect to MySQL: " . mysqli_connect_error();
      exit();
    }
?>