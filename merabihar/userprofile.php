<?php
if (!isset($_SESSION))
    session_start();
define("REDIRECT_LOC", "../index.php");
if(isset($_GET['u'])){
    echo '<script> var ProfileId =' . trim($_GET['u']) . '</script>';
}else{
    echo "<script>var ProfileId;</script>";
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MeraBihar :Profile</title>
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
<div class="container">
    <div class="jumbotron mt-2" style="background-image: url(img/blog1.jpg)">
        <div class="row" id="showProfileDiv">

            <div class="col-md-4  imgDiv" style="margin: auto">
                <img style="margin-left:18%;border-radius: 8.25rem !important;min-height: 200px;max-height: 201px;min-width: 200px;max-width: 201px"
                     id="ShowProfilePhoto" class=" float-center image" alt="">
            </div>
            <div class="col-md-8">
                <h2 class=""><span style="text-transform: capitalize;color: " id="profileFullName"></span>
                    <button style="font-size: 17px; margin-left: 20px;border: 1px solid;cursor: pointer;"
                            class="btn btn-outline-primary " id="followBtn"><span id="txtflo">Follow</span>
                    </button>
                </h2>
                <ol class="breadcrumb" style="padding: 0.7rem 0rem;">
                    <li class="breadcrumb-item active" aria-current="page" style="font-size: larger"><span id="posts"></span> Posts</li>
                    <li class="breadcrumb-item active" aria-current="page" style="font-size: larger"> <span id="MeFollowers"></span> Followers
                    </li>
                    <li class="breadcrumb-item active" aria-current="page" style="font-size: larger"><span id="Mefollowing"></span> Following
                    </li>
                </ol>
                <p class="" id="ShowBio"></p>
            </div>
        </div>

    </div>
        <h4 style="font-weight: 300"><i style="font-size: 45px;" class="ion-ios-camera"></i></h4>
    <div class="card-columns" style="margin-top: 30px;" id="ProfilePosts">



    </div>
</div>

<script src="js/userprofile.js"></script>
<?php
include_once 'footer.php';
?>