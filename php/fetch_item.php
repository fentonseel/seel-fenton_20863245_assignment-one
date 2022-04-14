<?php
require 'database_connect.php';

if (isset($_GET["id"]))
{
    $sql = ("select * from tbl_products where product_id=?");
}

$statement = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($statement, $sql)){
    header('Location: ../index.php');
    exit();
}

mysqli_stmt_bind_param($statement, "i", $_GET["id"]);

mysqli_stmt_execute($statement);
$res = mysqli_stmt_get_result($statement);

while($row = mysqli_fetch_row($res)){
    echo '
    <div class=".product-container">
    <img class="rm-prod-img" src="'. $row[3] .'" alt="This is an image of '. $row[1] .'">
    <p class="rm-prod-title">'. $row[1] .'</p>
    <p class="rm-prod-info">'. $row[2] .'</p>
    <p class="rm-prod-price">'. $row[4] .'</p>
    <button onclick="handleAddToCart(this)" class="buy">Buy</button>
    </div>
    ';
}
?>