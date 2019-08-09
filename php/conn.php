<?php
$servername = "localhost";
$username = "root";
$password = "hustmathskexie";
$dbname = "hustmaths";
$con = mysqli_connect($servername, $username, $password, $dbname);
if (!$con) {
  die('Could not connect: ' . mysqli_connect_error());
}
session_start();