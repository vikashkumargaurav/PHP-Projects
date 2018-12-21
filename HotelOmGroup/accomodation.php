<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
            <h2 class="page-cover-tittle">Accomodation</h2>
            <ol class="breadcrumb">
                <li><a href="index.php">Home</a></li>
                <li class="active">Accomodation</li>
            </ol>
        </div>
    </div>
</section>
<!--================Breadcrumb Area =================-->

<!--================Booking Tabel Area =================-->
<section class="hotel_booking_area" style="background-color: #04091e">
            <div class="container-fluid" >
                <div class="hotel_booking_table">
                    <div class="col-md-3">
                        <h2>Book<br> Your Room</h2>
                    </div>
                    <div class="col-md-9">
                        <div class="boking_table">
                            <div class="row justify-content-around">
                                <div class="col-md-3">
                                    <div class="book_tabel_item">
                                        <div class="form-group">
                                            <div class='input-group date' id='datetimepicker11'>
                                                <input type='text' onchange="getCheckInDate(event);" id="checkindate"
                                                       class="form-control" placeholder="Arrival Date"/>
                                                <span class="input-group-addon">
                                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class='input-group date' id='datetimepicker11'>
                                                <input type='text' onchange="onchangeCheckOut(event);" id="checkoutdate"
                                                       class="form-control" placeholder="Departure Date"/>
                                                <span class="input-group-addon">
                                                        <i class="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="book_tabel_item">
                                        <div class="input-group">
                                            <select class="wide" id="categoryNameInput"
                                                    style="    border: 1px solid #2b3146;padding: 8px 2px 8px 2px;background: transparent !important;color: #777777 !important;"
                                                    onchange="onchangeRoomCategory(event)">
                                                <option data-display="Room Category" style='color: #777777; background-color: #04091e'>Room Category</option>
                                            </select>
                                        </div>
                                        <a class="book_now_btn button_hover" id="getDate" target="_blank">
                                            <small> Check Availability</small>
                                        </a>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="BookingDetailsDiv">
                                        <p style=" margin-bottom: 0px;"><span style="color: whitesmoke" id="roomcatname"></span> <span style="border-radius: 0rem;background: red" class="saving badge badge-success" id="saving"></span></p>
                                        <h3 style=" margin-bottom: 0px;"><span style="font-weight: 500;color: greenyellow" id="showPrice"></span><br> <span style="font-size: 16px;color: white;text-decoration: line-through;" id="DeclaredRateForSingle"> </span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    <div class="facilities_item mt-2" style="display: none" id="complementaryServices">
        <p class="text-center" style="font-size: 17px">Book with us between 25th Dec & 2nd Jan and get complimentary buffet dinner for your reservation</p>
        <p class="text-center" style="font-size: 17px">The menu shall Include Veg Starter, Soup, 5 Course menu, Salad, Ice-Cream, Desserts</p>
    </div>
</section>
<!--================Booking Tabel Area  =================-->
<!--================ Accomodation Area  =================-->
<section class="accomodation_area section_gap">
    <div class="container">
        <div class="section_title text-center">
            <h2 class="title_color">Hotel Accomodation</h2>
            <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, </p>
        </div>
        <div class="row mb_30" id="roomTypeDiv">

        </div>
    </div>
</section>
<!--================ Accomodation Area  =================-->
<!--================ start footer Area  =================-->
<?php include 'footer.php' ?>
<!--================ End footer Area  =================-->
<script src="js/pages/accommodation.js"></script>
<script src="js/pages/hotelandaccomhelper.js"></script>



</body>
</html>