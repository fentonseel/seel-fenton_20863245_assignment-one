<?php
if(isset($_POST["login"]))
{
    require 'database_connect.php';

    $statement = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($statement, $sql)){
        header('Location: ../index.php');
        exit();
    }

    $sql = ("select * from tbl_users where user_email=?");
    mysqli_stmt_bind_param($statement, "s", $_POST["email"]);    
    
    mysqli_stmt_execute($statement);
    $res = mysqli_stmt_get_result($statement);

    if ($row = mysqli_fetch_row($res))
    {
        if (password_verify($_POST["password"], $row[4]))
        {
            session_start();
            $_SESSION["user"] = $row[1];
        }
        else
        {
            
        }
    }
}


?>