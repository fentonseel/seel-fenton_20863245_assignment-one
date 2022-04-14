<?php
require 'database_connect.php';

$sql = 'select * from tbl_offers';

$statement = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($statement, $sql)){
    header('Location: ../index.php');
    exit();
}

mysqli_stmt_execute($statement);
$res = mysqli_stmt_get_result($statement);

while($row = mysqli_fetch_row($res)){
    echo '
    <div class="offer-card">
    <h1 class="offer-title">'. $row[1] .'</p>
    <p class="offer-info">'. $row[2] .'</p>
    </div>
    ';
}
?>