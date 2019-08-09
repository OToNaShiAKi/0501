<?php
require 'conn.php';
$nick = $_POST['nick'];
$pass = $_POST['pass'];
$sql = "SELECT nick, pass, flag FROM duanwu WHERE nick = '$nick'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);
if ($row) {
    if ($row['pass'] == $pass) echo $row['flag'];
    else echo 0;
} else {
    $sql = "INSERT INTO duanwu (nick, pass) VALUES ('$nick', '$pass')";
    if (mysqli_query($con, $sql)) {
        $_SESSION['nick'] = $_POST['nick'];
        echo 1;
    } else echo -2;
}
mysqli_close($con);
