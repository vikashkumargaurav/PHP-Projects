<?php
if (!isset($_SESSION))
    session_start();
define("REDIRECT_LOC", "../index.php");
if ((!isset($_SESSION) || !isset($_SESSION['ProfleId']) || !isset($_SESSION['UserName']))) {
    include_once 'header.php';
    include_once 'navbar.php';
    echo "<script>var aid;</script>";

} else {
    include_once 'header.php';
    include_once 'profiles/profilenavbar.php';
    echo "<script>var aid=" . $_SESSION['ProfleId'] . "</script>";
    echo "<script>var authData = saveDataforSessionInLocal('authData');
//    auth = getAuthKey(authData.UserName,authData.PhoneNumber );</script>";
}

?>
<style>
    #makeAlert{
        display: none;
        position: fixed;
        left: 15%;
        right: 15%;
        z-index: 9999;
        max-width: 40%;
        min-width: 30%;
        margin: 0 auto;
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        top:3%
    }
</style>

<div id="makeAlert" class="alert  alert-dismissible" >
    <button type="button" class="close" data-dismiss="alert">&times;</button>

</div>
<body>

<?php
if (isset($_GET['page_name'])) {
    if(((!isset($_SESSION) || !isset($_SESSION['ProfleId'])) && (($_GET['page_name'] == 'newstory') || ($_GET['page_name'] == 'profile') || ($_GET['page_name'] == 'stories')))){
        include_once '404error.php';
    }else{
        include_once '' . $_GET['page_name'] . '.php';
    }

} else {
    include_once 'home.php';
}
?>

<?php
include_once 'footer.php';
?>

