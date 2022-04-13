<?php
    require "conn.php";
    $name = $_POST["firstName"];
    $surname = $_POST["surname"];
    $age = $_POST["age"];
    $userpass = $_POST["userpass"];
    $username = $_POST["username"];
    
    $mysql_qry = "insert into user_data (name, surname, age, username, password) values ('$name', '$surname', '$age', '$username', '$userpass')";
    
    if($conn->query($mysql_qry) === TRUE) {

        echo "Registration complete! Welcome " .$name ."!";
    } else {
        echo "Error: " .$mysql_qry ."<br>" . $conn->error;
    }
    $conn->close();
?>