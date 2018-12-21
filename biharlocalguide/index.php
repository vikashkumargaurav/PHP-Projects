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

<!-- Page Footer-->
<style>
    .mobileDownloadAlert{
        position: fixed;
        width: 100%;
        bottom: -43px;
        border-radius: 0px;
        background: linear-gradient(90deg, rgb(255, 254, 3) 0%, var(--blue) 100%) !important;
    }
    .dApp{
        font-size: 24px;
        font-weight: 700;
        color: black;
    }
</style>
<div class="alert alert-warning alert-dismissible fade show mobileDownloadAlert" role="alert" style="z-index: 99999">
    <p class="text-center" style=""><a class="" target="_blank" href="https://play.google.com/store/apps/details?id=app.zingo.bihartourismguide"> <img style="width: 25% ;margin-left: auto;margin-right: auto;display: block;float:left" src="img/app.png"><span class="h3 text-white" style="float:left;padding: 22px;">Download App</span> </a></p>
    <button style="color: whitesmoke" type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<?php
include_once 'footer.php';
?>
