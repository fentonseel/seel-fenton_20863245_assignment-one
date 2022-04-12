<?php
if (isset($_POST['register-submission'])){
    require 'database_connect.php';

    $fullName = $_POST['fullName'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $address = $_POST['address'];

    $sql = "insert into tbl_users (user_full_name, user_pass, user_address, user_email) values (?,?,?,?)";
    $statement = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($statement, $sql)){
        header('Location: ../index.php');
        exit();
    }
    
    $encryptedPass = password_hash($password, PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($statement, 'ssss', $fullName, $encryptedPass, $address, $email);
    mysqli_stmt_execute($statement);

    header("Location: ../register.php");
    exit();
}
?>