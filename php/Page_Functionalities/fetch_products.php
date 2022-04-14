<?php
require 'database_connect.php';

$sql = 'select * from tbl_products';

$statement = mysqli_stmt_init($conn);

if (isset($_GET["type"]))
{
    $sql = ('select * from tbl_products where product_type=?');
    $item = $_GET["type"];
}
else if (isset($_GET["search"]))
{
    $sql = ("select * from tbl_products where product_title like ?");
    $item = ("%". $_GET["search"] ."%");
}

if (!mysqli_stmt_prepare($statement, $sql)){
    header('Location: ../index.php');
    exit();
}

if (isset($item))
{
    mysqli_stmt_bind_param($statement, "s", $item);
}

mysqli_stmt_execute($statement);
$res = mysqli_stmt_get_result($statement);

while($row = mysqli_fetch_row($res)){
    echo '
    <div class="product-card" id="'. $row[5] .'">
    <img class="product-img" src="'. $row[3] .'" alt="This is an image of '. $row[1] .'">
    <p class="product-title">'. $row[1] .'</p>
    <p class="product-info">'. $row[2] .'<a onclick="readMoreNav(this)" class="read-more" href="item.php?id='. $row[0]. '">(Read More)</a></p>
    <p class="product-price">'. $row[4] .'</p>
    <button onclick="handleAddToCart(this)" class="buy">Buy</button>
    </div>
    ';
}
?>