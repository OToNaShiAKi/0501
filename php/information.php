<?php
require 'conn.php';
$name = $_POST["name"];
$tel = $_POST["tel"];
$uid = $_POST["uid"];
$nick = $_POST["nick"];
$sql = "UPDATE duanwu SET `name` = '$name', `tel` = '$tel', `uid` = '$uid' WHERE nick = '$nick'";
if (mysqli_query($con, $sql)) {
    $sql1 = "UPDATE `duanwu` SET flag = -1 WHERE nick = '$nick'";
    if (mysqli_query($con, $sql1)) echo 1;
} else echo 0;
mysqli_close($con);
