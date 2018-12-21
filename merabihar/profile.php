<?php
if (!isset($_SESSION))
    session_start();
define("REDIRECT_LOC", "../index.php");
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
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
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

<link rel="stylesheet" href="css/profile.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"></script>

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
                            class="btn btn-outline-primary " id="profleeditBtn"><span id="txtflo">Edit</span>
                    </button>
                </h2>
                <ol class="breadcrumb" style="padding: 0.7rem 0rem;">
                    <li class="breadcrumb-item active" aria-current="page" style="font-size: larger"><span id="posts"></span></li>
                    <li class="breadcrumb-item active" aria-current="page" style="font-size: larger"><span
                                id="MeFollowers"></span> Followers
                    </li>
                    <li class="breadcrumb-item active" aria-current="page" style="font-size: larger"><span
                                id="Mefollowing"></span> Following
                    </li>
                </ol>
                <p class="" id="ShowBio"></p>
            </div>
        </div>
        <div class="row" id="editProfileDiv" style="display: none">
            <input type="hidden" id="Email">
            <div class="col-md-4  imgDiv" style="margin: auto">
                <img style="margin-left:18%;border-radius: 8.25rem !important;min-height: 200px;max-height: 201px;min-width: 200px;max-width: 201px"
                     id="ProfilePhoto" class=" float-center image" alt="">
                <div class="middle">
                    <div class="text">
                        <div class="image-upload">
                            <label for="fileUpload">
                                <img src="https://cdn0.iconfinder.com/data/icons/simgeler-downloads/512/Upload-512.png"/>
                            </label>
                            <input id="fileUpload" type="file"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <input type="text"
                       style="background:transparent;text-transform: capitalize;border-style: none;font-size: 35px "
                       id="FullName"><br>
                <textarea rows="5" type="text" placeholder="Enter a short bio"
                          style="background:transparent;border-style: none;font-size: 20px;width: 80%; "
                          id="Prefix"></textarea>
                <br>
                <button id="profileupdateBtn" type="button" class="btn btn-outline-primary ">Save</button>
            </div>

        </div>

    </div>
</div>

<section>
    <div class="container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                   aria-controls="home" aria-selected="true">Posts</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#following" role="tab"
                   aria-controls="following" aria-selected="false">Following</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#experiences" role="tab"
                   aria-controls="experiences" aria-selected="false">Experiences</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#collections" role="tab"
                   aria-controls="collections" aria-selected="false">Collections</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="followers-tab" data-toggle="tab" href="#followers" role="tab"
                   aria-controls="followers" aria-selected="false">Followers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="peoples-tab" data-toggle="tab" href="#peoples" role="tab"
                   aria-controls="peoples" aria-selected="false">People</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="interest-tab" data-toggle="tab" href="#interest" role="tab"
                   aria-controls="interest" aria-selected="false">Interests</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <section style="margin-top: 40px;">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="jumbotron jumbotron-fluid bg-white  "
                                 style="padding: 0px;border: #540cfa;border-style: dotted;">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                            <!--                                                <img class="float-left" src="img/blog1.jpg" style="margin-left:6%;border-radius: 8.25rem !important;min-height: 100px;max-height: 101px;min-width: 100px;max-width: 101px">-->
                                            <input type="text" id="Title" placeholder="Title"
                                                   style="width: 100%;border: none;height: 80px;font-size: 36px;">
                                            <textarea id="Description" placeholder="Write your story here " rows="4"
                                                      style="width: 100%;border: none;font-size: larger"></textarea>
                                            <select class="form-control text-primary" id="SubCategoriesinput"
                                                    style="width: 100%;border: none;font-size: larger;">
                                                <option selected disabled>Select Category</option>
                                            </select>
                                        </div>
                                        <div class="col-12">
                                            <div class="ui-widget">
                                                <input placeholder="#tags" id="tags"
                                                       style="padding:5px;width: 100%;border: none;font-size: larger;">
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div id="image_preview"></div>
                                            <button id="addpostBtn" class="float-right btn btn-outline-primary">
                                                Share Post
                                            </button>
                                            <div class="container">
                                                <div class="image-upload">
                                                    <label for="uploadFile">
                                                        <img style="width: 45px;"
                                                             src="https://cdn.shopify.com/s/files/1/1431/5776/products/basic-camera-outline-rubber-stamp_1024x1024.png?v=1507154909"/>
                                                    </label>
                                                    <input id="uploadFile" type="file" name="uploadFile[]"
                                                           multiple/>
                                                </div>

                                                <br/>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <!--                                <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/Bod664DnS0l/?utm_source=ig_embed&amp;utm_medium=loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/Bod664DnS0l/?utm_source=ig_embed&amp;utm_medium=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div><div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/Bod664DnS0l/?utm_source=ig_embed&amp;utm_medium=loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Amazing view #sky #view #weekend #natural</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/nizavd/?utm_source=ig_embed&amp;utm_medium=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Mohammed Nizar</a> (@nizavd) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2018-10-03T10:24:50+00:00">Oct 3, 2018 at 3:24am PDT</time></p></div></blockquote> <script async defer src="//www.instagram.com/embed.js"></script>-->
                        </div>
                    </div>
                </section>
            </div>


            <div class="tab-pane fade show " id="following" role="tabpanel" aria-labelledby="following-tab">
                <div class="container" style="margin-top: 50px;">
                    <div class="card-columns2" id="followingDiv">


                    </div>
                </div>
            </div>
            <div class="tab-pane fade show " id="experiences" role="tabpanel" aria-labelledby="experiences-tab">
                <div class="container" style="margin-top: 50px;">
                    <div class="card-columns2" id="experiencesDiv">


                    </div>
                </div>
            </div>
            <div class="tab-pane fade show " id="collections" role="tabpanel" aria-labelledby="collections-tab">
                <div class="card-columns2" id="categoriesDiv" style="margin-top: 50px;">


                </div>


            </div>
            <div class="tab-pane fade show " id="followers" role="tabpanel" aria-labelledby="experiences-tab">
                <div class="container" style="margin-top: 50px;">
                    <div class="card-columns2" id="followersDiv">


                    </div>
                </div>
            </div>
            <div class="tab-pane fade show " id="peoples" role="tabpanel" aria-labelledby="experiences-tab">
                <div class="container" style="margin-top: 50px;">
                    <div class="card-columns2" id="peoplesDiv">


                    </div>
                </div>
            </div>
            <div class="tab-pane fade show " id="interest" role="tabpanel" aria-labelledby="interest-tab">
                <div class="container" style="margin-top: 50px;">
                    <div class="card-columns" id="interestDiv">


                    </div>
                </div>
            </div>
        </div>


    </div>
</section>

<section>
<div class="container">
    <h4 style="font-weight: 300"><i style="font-size: 45px;" class="ion-ios-camera"></i></h4>
    <div class="card-columns" style="margin-top: 30px;" id="ProfilePostsforProfile">



    </div>
</div>
</section>

<!-- Modal category subcat Model for follow -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 1090px">
        <div class="modal-content">
            <div class="modal-header">
                <!--                    <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>-->
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="CategoryModelBody">

            </div>

        </div>
    </div>
</div>
<script type="text/javascript">

</script>
<script src="js/profile.js"></script>
<script src="js/follow.js"></script>
<script src="js/contentpost.js"></script>
<script src="js/interest.js"></script>
<?php
include_once 'footer.php';
?>