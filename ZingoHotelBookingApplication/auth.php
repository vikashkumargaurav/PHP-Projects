<!--<script src="UI/js/pages/constants.js"></script>
<script src="UI/js/pages/helper.js"></script>
<script>
    var authData = loadData('authData');
    console.log(authData);
    var ProfileId = authData[0].ProfileId;
    var UserName = authData[0].UserName;
</script>-->

<?php
if (isset($_GET['authData'])) {
    $data = $_GET['authData'];
    var_dump($data);
    $dec = base64_decode($data, true);
    $val = json_decode($dec);
    $ProfleId = $val->ProfileId;
    $UserName = $val->UserName;
//    var_dump($val->UserName);
}

$SESSION_TIME_EXTEND = 90; // 15*60=15 min
if ($ProfleId != '') {
    echo $ProfleId;
    if (!isset($_SESSION)) {
        session_start();
    }
    $_SESSION['UserName'] = $UserName;
    $_SESSION['ProfleId'] = $ProfleId;

    header("Location:UI/index.php");

//    $_SESSION['SESSION_TIMEOUT_AFTER'] = $SESSION_TIME_EXTEND;
//    $_SESSION['SESSION_VALID_TILL'] = time() + $_SESSION['SESSION_TIMEOUT_AFTER'];
} else {
    echo 'sorry';
    header('Location:login.php');
}
?>
