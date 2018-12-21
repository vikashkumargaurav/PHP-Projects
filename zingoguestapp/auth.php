<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 18-Sep-18
 * Time: 5:25 PM
 */
?>
<?php
if (isset($_GET['authData'])) {
    $data = $_GET['authData'];
    var_dump($data);
    $dec = base64_decode($data, true);
    $val = json_decode($dec);
    $ProfleId = $val->ProfileId;
    $FullName = $val->FullName;
//    var_dump($val->FullName);
//    var_dump($val->ProfileId);
}

$SESSION_TIME_EXTEND = 90; // 15*60=15 min
if ($ProfleId != '') {
    echo $ProfleId;
    if (!isset($_SESSION)) {
        session_start();
    }
    $_SESSION['UserName'] = $FullName;
    $_SESSION['TravellerId'] = $ProfleId;

    header("Location:UI/index.php");

//    $_SESSION['SESSION_TIMEOUT_AFTER'] = $SESSION_TIME_EXTEND;
//    $_SESSION['SESSION_VALID_TILL'] = time() + $_SESSION['SESSION_TIMEOUT_AFTER'];
} else {
    echo 'sorry';
    header('Location:login.php');
}
