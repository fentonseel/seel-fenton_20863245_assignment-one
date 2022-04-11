<?php
$servername = 'localhost';
$dbUsername = 'root';
$dbPassword = 'fentonSeelCO1706';
$dbName = 'assignment_database';

try{
    //Procedural method
    $conn = mysqli_connect($servername, $dbUsername, $dbPassword, $dbName);
} catch(mysqli_sql_exception $e){
    header('Location: ../index.php');
    exit();
}
?>