<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if (isset($_GET['roomcatId'])) {
    echo '<script> var RoomCatId =' . trim($_GET['roomcatId']) . '</script>';
}
?>

<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="image/favicon.png" type="image/png">
    <title>Hotel Om Group</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="vendors/linericon/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="vendors/bootstrap-datepicker/bootstrap-datetimepicker.min.css">
    <link rel="stylesheet" href="vendors/nice-select/css/nice-select.css">
    <link rel="stylesheet" href="vendors/owl-carousel/owl.carousel.min.css">
    <link rel="stylesheet" href="vendors/lightbox/simpleLightbox.css">
    <!-- main css -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
<!--================Header Area =================-->
<?php include 'header.php' ?>
<!--================Header Area =================-->

<!--================Breadcrumb Area =================-->
<section class="breadcrumb_area">
    <div class="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
    <div class="container">
        <div class="page-cover text-center">
            <h2 class="page-cover-tittle">Room Details</h2>
            <ol class="breadcrumb">
                <li><a href="index.php">Home</a></li>
                <li class="active">Room Details</li>
            </ol>
        </div>
    </div>
</section>
<!--================Breadcrumb Area =================-->


<!--================Room Details =================-->
<div id="featured-hotel" style="background: white" class="">
    <div class="container">


        <div class="row mb-4">
            <div class="col-md-12">
                <div class="section-title text-center">
                    <h2></h2>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-md-8" id="roomImgDiv">
                <!--                 load img here dynamically-->
            </div>
            <div class="col-md-4"
                 style="border: 1px solid #dcdcdc; box-shadow: 1px 1px 1px 1px #888888;  padding-top: 30px;">
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <h3 class="title_color">Check Availability</h3>
                    </div>
                    <div class="col-md-12">
                        <div style="width: 100%;margin-bottom: 15px;" class="input-group mb-3">
                            <input onchange="getCheckInDate(event);" id="checkindate" type="text"
                                   class="form-control single-input-primary" placeholder="Check in"/>
                        </div>

                    </div>
                    <br>
                    <div class="col-md-12">
                        <div class="input-group mb-3" style="width: 100%;margin-bottom: 15px;">
                            <input onchange="onchangeCheckOut()" id="checkoutdate" type="text"
                                   class="form-control single-input-primary" placeholder="Check Out"/>
                        </div>

                    </div>
                    <div class="col-md-12">

                        <h3 style="font-weight: 700" id=""><span style="color: black" id="roomcatname"></span>&nbsp;&nbsp; <span
                                    style="border-radius: 0rem;background: red; font-size: 13px " class="saving badge badge-success"
                                    id="saving"></span></h3>

                    </div>
                    <div class="col-md-12">
                        <h3 style="margin-bottom: 0px;"><span style="font-weight: 500" class="text-success"
                                                              id="showPrice"></span>&nbsp;&nbsp; <span
                                    style="font-size: 16px;color: black;text-decoration: line-through;"
                                    id="DeclaredRateForSingle"> </span></h3>
                    </div>

                    <div class="col-md-12">
                        <p style=" margin-top: 30px; " id="bookroomBtn"><span href="#"
                                                                              class="genric-btn danger warning radius">Book Now<i
                                        class="ti-angle-right"></i></span></p>
                    </div>
                </div>
            </div>

            <div class="col-md-12" style="margin-top: 35px;">
                <h2 style="font-weight: 700" id="CategoryName"></h2>
                <p style="font-size: medium" id="Description"></p>
                <h3 class="title_color">Room Services</h3>
            </div>

            <div class="col-md-6">
                <ul class="list-group">
                    <div style="display: none">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Complimentary Buffet Breakfast

                    </li>
                    </div>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Complimentary Wifi Access

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Air Conditioned

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Doctor on Call

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        24 hours check-in check-out

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Free Newspaper

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Travel desk

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Foreign currency exchange

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Mini Bar

                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                   <div style="display: none">
                       <li class="list-group-item d-flex justify-content-between align-items-center">
                           Dinner Available (At Extra Cost)
                       </li>
                   </div>

                    <li class="list-group-item d-flex justify-content-between align-items-center">


                        6” Spring Mattress
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Coffee/Tea Percolator

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        STD & ISD direct dialling facility

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">


                        Pick & drop to Company
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        24 hours hot water facility

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Laundry Service

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">


                        24 hours Room service
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Ample/Valet car parking

                    </li>

                </ul>
            </div>
        </div>
        <br>

    </div>
</div>


<!--================Room Details=================-->

<!--================Breadcrumb Area =================-->
<section class="gallery_area section_gap">
    <div class="container">
        <div class="section_title text-center">
            <h2 class="title_color" style="display: none" id="roomtypeName"></h2>
            <p id="htlTitle" style="display: none">Our rooms are design to provide you comfort</p>
        </div>
        <div class="row" id="roomdetails">

        </div>
    </div>
</section>


<!--================Breadcrumb Area =================-->

<!--================ start footer Area  =================-->
<?php include 'footer.php' ?>
<script src="js/pages/showroom.js"></script>

<!--================ End footer Area  =================-->


</body>
</html>