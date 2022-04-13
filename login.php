<?php
    require "conn.php";
    $username = $_POST["user_name"];
    $userpass = $_POST["password"];
    $mysql_qry = "select * from user_data where username like '$username' and password like '$userpass';";
    $result = mysqli_query($conn, $mysql_qry);
    if(mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        $name = $row["name"];
        echo "Login Success! Welcome " .$name ."!";
    } else {
        echo "Login Failed!" .$result ;
    }
    $conn->close();
?>