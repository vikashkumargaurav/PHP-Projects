<?php
if (!isset($_SESSION))
    session_start();
define("REDIRECT_LOC", "../index.php");
if ((!isset($_SESSION) || !isset($_SESSION['AdminId']) || !isset($_SESSION['AdminName']) || !isset($_SESSION['UserRoleId']))) {
    header("Location:../index.php");
    exit;
}

if (!isset($_GET['pagename']) || ((isset($_GET['pagename'])) && trim($_GET['pagename']) != 'logout')) {
    if ($_SESSION['UserRoleId'] == 3) {
        include_once 'header.php';
        include_once 'superadminnavbar.php';
    } else {
        include_once 'header.php';
        include_once 'navbar.php';
    }

}
echo "<script>var aid=" . $_SESSION['AdminId'] . "</script>";
echo "<script>var userroleid=" . $_SESSION['UserRoleId'] . "</script>";
echo "<script>var authData = saveDataforSessionInLocal('authData');
//    auth = getAuthKey(authData.UserName,authData.PhoneNumber );</script>"
?>
    <style>
        #mainLoader {
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: 10000;
            background-color: #0000007d;
        }

        .subloader {
            margin-left: 45%;
            margin-top: 18%;
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 120px;
            height: 120px;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
    <div id="mainLoader">

        <div class="subloader"></div>
    </div>
    <style>
        #makeAlert {
            display: none;
            position: fixed;
            left: 15%;
            right: 15%;
            z-index: 999;
            max-width: 40%;
            min-width: 30%;
            margin: 0 auto;
            text-align: center;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            top: 3%
        }
    </style>

    <div id="makeAlert" class="alert  alert-dismissible">
        <button type="button" class="close" data-dismiss="alert">&times;</button>

    </div>
    <div id="content-wrapper">

    <div class="container-fluid">
        <?php
        if (isset($_GET['page_name'])) {
            if (($_SESSION['UserRoleId'] != 3) && (($_GET['page_name'] == 'users') || ($_GET['page_name'] == 'city') || ($_GET['page_name'] == 'coupons'))) {
                include_once '404.html';
            } else {
                include_once '' . $_GET['page_name'] . '.php';
            }

        } else {
            include_once 'dashboard.php';
        }
        ?>

    </div>

    <!-- /.container-fluid -->

    <script src="js/pages/index.js"></script>
<?php
include_once 'footer.php';
?>