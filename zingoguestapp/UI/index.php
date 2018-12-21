<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 18-Sep-18
 * Time: 2:53 PM
 */
if (!isset($_SESSION))
    session_start();
define("REDIRECT_LOC", "../index.php");
if ((!isset($_SESSION) || !isset($_SESSION['TravellerId']) || !isset($_SESSION['UserName']))) {
    header("Location:../login.html");
    exit;
}

if (!isset($_GET['pagename']) || ((isset($_GET['pagename'])) && trim($_GET['pagename']) != 'logout')) {
    include_once 'header.php';
    include_once 'navbar.php';
}
echo "<script>var aid=" . $_SESSION['TravellerId'] . "</script>";
echo "<script>var authData = saveDataforSessionInLocal('authData');
//    auth = getAuthKey(authData.UserName,authData.PhoneNumber );</script>"

?>
    <style>
        #mainLoader{
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: 10000;
            background-color: #00000096;
        }
        .subloader {
            margin-left: 45%;
            margin-top: 18%;
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #db4437; /* Red */
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
    <div id="mainLoader">

        <div class="subloader"></div>
    </div>

    <div class="content-inner">

<?php

if (isset($_GET['page_name'])) {
    include_once '' . $_GET['page_name'] . '.php';
} else {
    include_once 'dashboard.php';
}


include 'footer.php';
?>