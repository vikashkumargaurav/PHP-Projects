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
    <title>Bihar Tourism Blogger Stories/Blogs</title>
    <link rel="icon" href="img/favlogo.png" type="image/png" sizes="16x16">
    <link rel="canonical" href="http://www.bihartourism.org/stories.php"/>
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
//    include_once 'header.php';
    include_once 'navbar.php';
    echo "<script>var aid;</script>";
    echo '<script>window.location.href = "signup.php";</script>';

} else {
//    include_once 'header.php';
    include_once 'profiles/profilenavbar.php';
    echo "<script>var aid=" . $_SESSION['ProfleId'] . "</script>";
    echo "<script>var authData = saveDataforSessionInLocal('authData');
//    auth = getAuthKey(authData.UserName,authData.PhoneNumber );</script>";
}

?>
<section >
    <div class="container">
        <header>
            <h2><span>Your stories</span> <a href="newstory.php" class="btn btn-outline-warning float-right">Write a Story</a></h2><br>
        </header>


        <div class="col-md">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Published</a>
                </li>
<!--                <li class="nav-item">-->
<!--                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Draft</a>-->
<!--                </li>-->

            </ul>
<!--            <hr>-->
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="row">
                        <div class="col-md">
                            <div class="accordion" id="accordionExample">

                                <div class="" id="latestBlogShowDiv">



                                </div>



                            </div>

                        </div>
                    </div>



                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
            </div>



        </div>






    </div>
</section>
<script src="js/pages/stories.js"></script>
<?php
include_once  'footer.php';
?>