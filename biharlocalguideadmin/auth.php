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
    $FullName = $val->FullName;
    $UserRoleId = $val->UserRoleId;
//    var_dump($val->FullName);
//    var_dump($val->ProfileId);
}

$SESSION_TIME_EXTEND = 90; // 15*60=15 min
if ($ProfleId != '') {
    echo $ProfleId;
    if (!isset($_SESSION)) {
        session_start();
    }
    $_SESSION['AdminName'] = $FullName;
    $_SESSION['AdminId'] = $ProfleId;
    $_SESSION['UserRoleId'] = $UserRoleId;

    header("Location:UI/index.php");

//    $_SESSION['SESSION_TIMEOUT_AFTER'] = $SESSION_TIME_EXTEND;
//    $_SESSION['SESSION_VALID_TILL'] = time() + $_SESSION['SESSION_TIMEOUT_AFTER'];
} else {
    echo 'sorry';
    header('Location:login.php');
}
?>
