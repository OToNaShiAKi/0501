<?PHP
require 'conn.php';
$nick = $_POST['nick'];
$score = $_POST['score'];
$sql = "SELECT score FROM duanwu WHERE nick = '$nick'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);
$json = array();
$json['leaderboard'] = array();
if ($row['score'] < $score) {
    $upscore = "UPDATE duanwu SET score = $score WHERE nick = '$nick'";
    if (mysqli_query($con, $upscore)) $json['state'] = 1;
    else $json['state'] = 0;
} else {
    $json['state'] = 1;
    $score = $row['score'];
}
// 排行榜
$sql = 'SELECT nick, score FROM duanwu ORDER BY score DESC,nick DESC limit 6';
$retval = mysqli_query($con, $sql);
if (!$retval) {
    $json['state'] = -1;
    die();
}
while ($row = mysqli_fetch_array($retval)) {
    array_push($json['leaderboard'], array(
        "nick" => $row["nick"],
        "score" => $row["score"]
    ));
}
$sql = "SELECT score FROM duanwu ORDER BY score DESC";
$rateval = mysqli_query($con, $sql);
if (!$rateval) {
    $json['state'] = -1;
    die();
}
$i = 0;
while ($row = mysqli_fetch_array($rateval)) {
    if ($row['score'] == $score) {
        $json['max'] = $row['score'];
        $i += 1;
        $json['rank'] = $i;
        break;
    }
    $i += 1;
}
echo json_encode($json);
mysqli_close($con);
