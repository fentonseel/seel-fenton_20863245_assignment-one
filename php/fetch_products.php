<?php
require 'database_connect.php';

$sql = 'select * from tbl_products';

$statement = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($statement, $sql)){
    header('Location: ../index.php');
    exit();
}

mysqli_stmt_execute($statement);
$res = mysqli_stmt_get_result($statement);

while($row = mysqli_fetch_row($res)){
    echo '
    <div class="product-card" id="'. $row[5] .'">
    <img class="product-img" src="'. $row[3] .'" alt="This is an image of '. $row[1] .'">
    <p class="product-title">'. $row[1] .'</p>
    <p class="product-info">'. $row[2] .'<a onclick="readMoreNav(this)" class="read-more" href="item.php">(Read More)</a></p>
    <p class="product-price">'. $row[4] .'</p>
    <button onclick="handleAddToCart(this)" class="buy">Buy</button>
    </div>
    ';
}
?>