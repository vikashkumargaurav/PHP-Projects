<?php
if (!isset($_SESSION))
    session_start();
define("REDIRECT_LOC", "../index.php");
if(isset($_GET['c'])){
    echo '<script> var ContentsId =' . trim($_GET['c']) . '</script>';
}else{
    echo "<script>var ContentsId;</script>";
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MeraBihar :Posts</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.css">
    <!-- Ionicons CSS-->
    <link rel="stylesheet" href="css/ionicons.min.css">
    <!-- Device mockups CSS-->
    <link rel="stylesheet" href="css/device-mockups.css">
    <!-- Google fonts - Source Sans Pro-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700">
    <!-- Swiper sLider-->
    <link rel="stylesheet" href="vendor/swiper/css/swiper.min.css">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="css/custom.css">
    <!-- Favicon-->
    <link rel="shortcut icon" href="img/favicon.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.lazy/1.7.5/jquery.lazy.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.lazy/1.7.5/plugins/jquery.lazy.av.min.js"></script>
    <!-- JavaScript files-->
    <!--<script src="vendor/jquery/jquery.min.js"></script>-->
    <script src="vendor/popper.js/umd/popper.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="vendor/jquery.cookie/jquery.cookie.js"></script>
    <script src="vendor/swiper/js/swiper.min.js"></script>
    <script src="js/front.js"></script>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <script src="js/constants.js"></script>
    <script src="js/helper.js"></script>
    <script src="js/index.js"></script>
    <script src="js/search.js"></script>
    <script src="js/videopost.js"></script>
    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID.-->
    <!---->

    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.lazy/1.7.5/jquery.lazy.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.lazy/1.7.5/plugins/jquery.lazy.av.min.js"></script>

    <script type="text/javascript">
        jQuery(function ($) {
            $("video").lazy();
        });
    </script>
</head>
<!-- above header ends-->
<?php
if ((!isset($_SESSION) || !isset($_SESSION['ProfleId']) || !isset($_SESSION['UserName']))) {
//    include_once 'header.php';
    include_once 'navbar.php';
    echo "<script>var aid;</script>";
    echo '<script>window.location.href = "login.php";</script>';

} else {
//    include_once 'header.php';
    include_once 'profiles/profilenavbar.php';
    echo "<script>var aid=" . $_SESSION['ProfleId'] . "</script>";
    echo "<script>var authData = saveDataforSessionInLocal('authData');
//    auth = getAuthKey(authData.UserName,authData.PhoneNumber );</script>";
}

?>


<section style="margin-top: 40px;">
    <div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="jumbotron jumbotron-fluid bg-white  " >
                <div class="container">
                    <div class="row" id="contentDiv">




                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-4 card" id="profileDiv" style="padding: 10px;margin-top: 62px;">

        </div>
    </div>
    </div>
</section>
<script src="js/post.js"></script>

<?php
include_once 'footer.php';
?>
