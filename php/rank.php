<?PHP
require 'conn.php';
$sql = "SELECT nick, score, flag FROM duanwu ORDER BY score DESC limit 60";
$rateval = mysqli_query($con, $sql);
if (!$rateval) {
    echo 0;
    die();
}
$json = array();
while ($row = mysqli_fetch_array($rateval)) {
    if ($row["score"] == 0) break;
    array_push($json, array(
        "nick" => $row["nick"],
        "score" => $row["score"],
        "flag" =>  $row["flag"]
    ));
}
echo json_encode($json);
mysqli_close($con);
