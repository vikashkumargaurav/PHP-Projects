<?php
if (!isset($_SESSION))
    session_start();
define("REDIRECT_LOC", "../index.php");
?>
<!DOCTYPE html>
<html>
<head>

    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-2910452066154587",
            enable_page_level_ads: true
        ]
        })
        ;
    </script>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login : Bihar Tourism </title>
    <link rel="icon" href="img/favlogo.png" type="image/png" sizes="16x16">
    <link rel="canonical" href="http://www.bihartourism.org/signup.php"/>
    <meta name="google-site-verification" content="Mxz_64Sc3hPNGtK0wejTRJf1pc3OZMLd76msgNhuiwI"/>
    <meta name="description"
          content="Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated. In the state capital Patna">
    <meta name="keywords"
          content="Bihartourism, bihar, tourism in bihar, places to visit in bihar, places to visit in bihar, things to do in bihar, culture of bihar, bihar festivals, festivals in bihar, food of bihar, bihari food, bihari, biharicuisines, gautam buddha, buddha festivals, sikh tourism in bihar, Bihar travel guide, Bihar tourism, Bihar tourism packages, Bihar India, Bihar food and culture, Bihar Tour and Travel Guide, nightlife in bihar, bihar culture and food,bihar tourism places,bihar tourism logo,bihar tourism video,bihar tourism minister,bihar tourism brand ambassador,bihar tourism tagline,bihar tourism pdf,-bihar tourism contact number,bihar tourism hotels,bihar tourism gaya,bihar tourism bus,bihar tourism funny slogan,bihar tourism map,bihar tourism vacancy,bihar tourism minister pramod kumar,bihar tourism ppt,bihar tourism in hindi,bihar tourism data,bihar major tourist places ">
    <meta name="author" content="Bihar Tourism">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">


    <meta property="og:title" content="">
    <meta property="og:image" content="">
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.css">
    <!-- Font Awesome CSS-->
    <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossorigin="anonymous">
    <!-- Custom icon font-->
    <link rel="stylesheet" href="css/fontastic.css">
    <!-- Google fonts - Open Sans-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
    <!-- Fancybox-->
    <link rel="stylesheet" href="vendor/@fancyapps/fancybox/jquery.fancybox.min.css">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="css/custom.css">
    <link rel="stylesheet" href="css/navbar.css">

    <!-- Favicon-->
    <!--    <link rel="shortcut icon" href="favicon.png">-->
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->

    <!-- JavaScript files-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/popper.js/umd/popper.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="vendor/jquery.cookie/jquery.cookie.js"></script>
    <script src="vendor/@fancyapps/fancybox/jquery.fancybox.min.js"></script>

    <script src="js/front.js"></script>
    <script src="js/myscript.js"></script>
    <script src="js/lazy.js"></script>

    <script src="js/pages/constants.js"></script>
    <script src="js/pages/helper.js"></script>

    <script src="js/pages/index.js"></script>
    <div id="fb-root"></div>
    <script>(function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.1&appId=1957059994588448&autoLogAppEvents=1';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-86647727-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-86647727-2');
    </script>


</head>
<?php
if ((!isset($_SESSION) || !isset($_SESSION['ProfleId']) || !isset($_SESSION['UserName']))) {
    include_once 'navbar.php';
    echo "<script>var aid;</script>";
} else {
    echo '<script>window.location.href = "profile.php";</script>';
}

?>
<link rel="stylesheet" href="css/signin.css">
<style>
    #makeAlert{
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
        top:3%
    }
</style>

<div id="makeAlert" class="alert  alert-dismissible" >
    <button type="button" class="close" data-dismiss="alert">&times;</button>

</div>
<div class="container register">
    <div class="row">
        <div class="col-lg-3 col-sm-12 register-left">
            <img src="img/signin.gif" alt=""/>
            <h3>Welcome</h3>
            <h3>To</h3>
            <h3> Bihar Tourism</h3>
<!--            <input type="submit" name="" value="Login"/><br/>-->
        </div>
        <div class="col-lg-9 col-sm-12 register-right">
            <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link " id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sign Up</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Login </a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show " id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h3 class="register-heading">Join Bihar Tourism</h3>
                    <div class="row register-form">
                        <div class="col-lg-6 col-sm-12">
                            <div class="form-group">
                                <input type="text" id="FullName" class="form-control" placeholder="FullName *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" id="Email" class="form-control" placeholder="Email *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="text" id="PhoneNumber" class="form-control" placeholder="Phone *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="password" id="Password" class="form-control" placeholder="Password *" value="" />
                            </div>
                            <div class="form-group">
                                <input type="password" id="confirmPassword" class="form-control"  placeholder="Confirm Password *" value="" />
                            </div>
                            <div class="form-group">
                                <div class="maxl">
                                    <label class="radio inline">
                                        <input type="radio" name="Gender" value="male" checked>
                                        <span> Male </span>
                                    </label>
                                    <label class="radio inline">
                                        <input type="radio" name="Gender" value="female">
                                        <span>Female </span>
                                    </label>
                                </div>
                            </div>
                            <button style="width: 100%;margin: 10px;color: white" id="registerBtn" class="btn btn-primary">Register</button>
                        </div>
                        <div class="col-lg-6 col-sm-12">
<!--                            <button style="width: 100%;margin: 10px;" class="btn btn-danger">Login With Google</button>-->
<!--                            <button style="width: 100%;margin: 10px;" class="btn btn-primary">Login With Facebook</button>-->
                            <a href="signup.php" style="width: 100%;margin: 10px;" class="btn btn-link">Already have an account </a>

                        </div>
                    </div>
                </div>

                <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <h3  class="register-heading">Welcome Back to Bihar Tourism</h3>
                    <div class="row register-form">
                        <div class="col-lg-6 col-md-12">
                            <div class="form-group">
                                <input type="text" id="username" class="form-control" placeholder="Username *" value="" />
                            </div>

                            <div class="form-group">
                                <input id="password" type="password" class="form-control" placeholder="Password *" value="" />
                            </div>
                            <a href="forgotpassword.php">Forgot Password</a>
                            <button style="width: 100%;margin: 10px;" id="loginbtn"  class="btn btn-primary">Login</button>


                        </div>
                        <div class="col-lg-6 col-md-12">
<!--                            <button style="width: 100%;margin: 0px;" class="btn btn-danger">Login With Google</button>-->
<!--                            <button style="width: 100%;margin-top: 12px;background: #2196F3;color: white" class="btn ">Login With Facebook</button>-->
                            <a href="register.php" style="width: 100%;margin-top: 12px;"  class="btn btn-link">No account ? Create One </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<br><br>
<script src="js/pages/signin.js"></script>
<script src="js/pages/login.js"></script>
<?php
include_once  'footer.php';
?>
