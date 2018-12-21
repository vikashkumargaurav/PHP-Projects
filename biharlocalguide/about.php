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
        });
    </script>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>About Bihar Tourism </title>
    <link rel="icon" href="img/favlogo.png" type="image/png" sizes="16x16">
    <link rel="canonical" href="http://www.bihartourism.org/about.php"/>
    <meta name="google-site-verification" content="Mxz_64Sc3hPNGtK0wejTRJf1pc3OZMLd76msgNhuiwI"/>
    <meta name="description" content="Bihar is a state in East India, bordering Nepal. It is divided by the River Ganges, which floods its fertile plains. Important Buddhist pilgrimage sites include the Bodhi Tree in Bodhgaya's Mahabodhi Temple, under which the Buddha allegedly meditated. In the state capital Patna">
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

} else {
//    include_once 'header.php';
    include_once 'profiles/profilenavbar.php';
    echo "<script>var aid=" . $_SESSION['ProfleId'] . "</script>";
    echo "<script>var authData = saveDataforSessionInLocal('authData');
//    auth = getAuthKey(authData.UserName,authData.PhoneNumber );</script>";
}

?>

<section class="gallery no-padding">
    <div class="row">
        <div class="mix col-lg-3 col-md-3 col-sm-6">
            <div class="item"><a href="img/web/23.jpg" data-fancybox="gallery" class="image"><img
                            src="img/web/23.jpg" alt="..." class="img-fluid">
                    <div class="overlay d-flex align-items-center justify-content-center"><i
                                class="icon-search"></i>
                    </div>
                </a></div>
        </div>
        <div class="mix col-lg-3 col-md-3 col-sm-6">
            <div class="item"><a href="img/web/9.jpg" data-fancybox="gallery" class="image"><img
                            src="img/web/9.jpg" alt="..." class="img-fluid">
                    <div class="overlay d-flex align-items-center justify-content-center"><i
                                class="icon-search"></i>
                    </div>
                </a></div>
        </div>
        <div class="mix col-lg-3 col-md-3 col-sm-6">
            <div class="item"><a href="img/web/6.jpg" data-fancybox="gallery" class="image"><img
                            src="img/web/6.jpg" alt="..." class="img-fluid">
                    <div class="overlay d-flex align-items-center justify-content-center"><i
                                class="icon-search"></i>
                    </div>
                </a></div>
        </div>
        <div class="mix col-lg-3 col-md-3 col-sm-6">
            <div class="item"><a href="img/web/MICE-Banner.jpg" data-fancybox="gallery" class="image"><img
                            src="img/web/MICE-Banner.jpg" alt="..." class="img-fluid">
                    <div class="overlay d-flex align-items-center justify-content-center"><i
                                class="icon-search"></i>
                    </div>
                </a></div>
        </div>
    </div>
</section>
<section class="intro">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <h2 style="font-weight: 300" class="h3">ABOUT BIHAR</h2>
                <p style="color: #777;font-size: larger">

                    Bihar is the house of Emperor Ashoka who preached "ahimsa" or nonviolence
                    and spread the message of Buddhism throughout the arena. The
                    way of life of "ahimsa" has been carried into the modern-day times and the
                    land become witness to the "Satyagraha (or non-violence) Movement" of
                    the Father of the Nation, Mahatama Gandhi.

                </p>
            </div>
        </div>
    </div>
</section>
<section class="featured-posts no-padding-top">
    <div class="container">
        <!-- Post-->
        <div class="row d-flex align-items-stretch">
            <div class="text col-lg-7">
                <div class="text-inner d-flex align-items-center">
                    <div class="content">
                        <header class="post-header">
                        <h3 style="font-weight: 300">Buddhist circuit</h3>
                        </header>
                        <p style="font-size: larger">Among all Indian states, Bihar is the only maximum in detail related to the
                            Buddha’s lifestyles, ensuing in a path of pilgrimages which have become
                            known as the Buddhist circuit. The Buddhist path begins on the capital
                            metropolis, Patna, in which a noteworthy museum contains a collection of
                            Hindu and Buddhist sculptures in addition to a terracotta urn stated to
                            incorporate the ashes of Lord Buddha.</p>

                    </div>
                </div>
            </div>
            <div class="image col-lg-5"><img src="img/b.jpg" alt="Buddhist circuit"></div>
        </div>
        <!-- Post        -->
        <div class="row d-flex align-items-stretch">
            <div class="image col-lg-5"><img src="img/khuda%20baksh%20library.jpg" alt="Khuda Baksh Oriental Library"></div>
            <div class="text col-lg-7">
                <div class="text-inner d-flex align-items-center">
                    <div class="content">
                        <header class="post-header">
                            <h3 style="font-weight: 300">Khuda Baksh Oriental Library:</h3>
                        </header>
                        <p style="font-size: larger"> The Khuda Baksh Oriental Library has rare Muslim manuscripts such as a
                            few from the University of Cordoba in Spain. 40 km away, Vaishali, became
                            the site for the second Buddhist Council is the presence of ruins testify. 90
                            km south of Patna is Nalanda which translates as the vicinity that confers
                            the lotus’ . A monastic college flourished here from the fifth to the eleventh
                            century. It is stated to have contained 9 million books, with 2,000 teachers
                            to impart know-how to 10,000 college students who got here from all
                            around the Buddhist global.

                        </p>

                    </div>
                </div>
            </div>
        </div>
        <!-- Post                            -->
        <div class="row d-flex align-items-stretch">
            <div class="text col-lg-6">
                <div class="text-inner d-flex align-items-center">
                    <div class="content">
                        <header class="post-header">
                            <h3 style="font-weight: 300">Nalanda</h3>

                        </header>
                        <p style="font-size: larger">Nalanda is a phrase known to the world and for centuries. It stands for a
                            university which attracted college students and students from across Asia
                            and even farther away. It turned into a centre of excellence now not only for
                            Buddhist studies and philosophy however for medicinal and mathematics
                            as properly.
                        </p>

                    </div>
                </div>
            </div>
            <div class="image col-lg-6" style="width: 100%"><img src="img/nalanda_university.jpg" alt="Nalanda"></div>
        </div>
        <!-- Post        -->


    </div>
</section>
<?php
include_once 'footer.php';
?>