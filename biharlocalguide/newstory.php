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
    <title>Write Your Story in Bihar Tourism </title>
    <link rel="icon" href="img/favlogo.png" type="image/png" sizes="16x16">
    <link rel="canonical" href="http://www.bihartourism.org/newstory.php"/>
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

<!--    Auto complete jquery plugin-->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<!--    Auto complete jquery plugin-->

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
<style>
    .form-control-title {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-size: 37px;
        font-weight: 900;
        line-height: 1.5;
        color: rgba(73, 80, 87, 0.67);
        background-color: #fff;
        background-clip: padding-box;
        border: none;
        border-radius: 0.25rem;
    }

    .form-control-shortDesc {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-size: 24px;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: none;
        border-radius: 0.25rem;
    }

    .form-control-longtDesc {
        display: block;
        width: 100%;
        font-weight: 500;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: none;
    }

    #image_preview {
        /*border: 1px solid black;*/
        padding: 10px;
        overflow: auto;
        max-width: inherit;
        max-height: 200px;
    }

    #image_preview img {
        width: 200px;
        padding: 5px;
    }

    .image-upload > input {
        display: none;
    }

    .image-upload img {
        width: 112px;
        cursor: pointer;
    }


</style>
<script src="//cdn.ckeditor.com/4.10.1/standard/ckeditor.js"></script>
<section>

    <div class="container">
        <header>
            <h2><span>Write Blog</span> <a href="stories.php" class="btn btn-outline-warning float-right">See stories</a></h2><br>
        </header>


        <!--        <div class="col-sm-12">-->
        <!--            <div class="row">-->
        <div class="col-md-12 col-sm-12">
            <div class="card mb-3">
                <input type="hidden" id="BlogId">

                <div class="card-body">

                    <div class="form-group">
                        <!--                                <label for="Title">Title</label>-->
                        <input type="text" class="form-control-title" id="Title"
                               aria-describedby="emailHelp" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <!--                                <label for="Title">Short Description</label>-->
                        <input type="text" class="form-control-shortDesc" id="ShortDesc"
                               aria-describedby="emailHelp" placeholder="Short Description">
                    </div>
                    <div class="col-12">
                        <img style="height: auto;max-height: 501px;max-width: 100%;margin-bottom: 10px;" id="blogImages" alt="your image"/>

                        <div class="container">
                            <div class="image-upload">
                                <label for="fileUpload">
                                    <img style="width: 45px;"
                                         src="https://cdn.shopify.com/s/files/1/1431/5776/products/basic-camera-outline-rubber-stamp_1024x1024.png?v=1507154909"/>
                                </label>
                                <input style="margin-top: 10px;" id="fileUpload" type="file" name="fileUpload"/>
                            </div>

                            <br/>

                        </div>

                    </div>

                    <div class="form-group" style="margin-top: 10px;">
                                <textarea name="LongDesc" id="LongDesc" rows="10" cols="80">
                     Write your story...
                      </textarea>

                    </div>
<!--                    <h5 style="font-weight: 700"># Tags</h5>-->
                    <div class="form-group" style="margin-top: 20px;margin-bottom: 20px;">
                            <input placeholder="#tags" id="tags"
                                   style="padding:5px;width: 100%;border: none;font-size: larger;">
                    </div>

                    <h5 style="font-weight: 700">Category</h5>
                    <div class="form-group">

                        <div class="" data-toggle="buttons" id="activityDiv">

                        </div>

                    </div>

                    <button id="addblogBtn" type="submit" class="btn btn-success">Publish</button>
                </div>
            </div>
        </div>

        <!---->
        <!--            </div>-->
        <!---->
        <!---->
        <!--        </div>-->
</section>

<script>
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace('LongDesc');
</script>

<script src="js/pages/newstories.js"></script>
<?php
include_once 'footer.php';
?>