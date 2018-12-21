<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->

<?php
include 'header.php';
include 'navbar.php';
?>

<div id="quickbooking" class="row" >
    <div class="col-12">
        <div class="alert alert-light text-center" >
            <h6 class="alert-heading">Reservation</h6><span class="badge badge-danger" style="float: right;padding: .7em .9em;border-radius: 0rem;    margin-right: -21px;margin-top: -12px;" id="saving"></span>

            <hr>
            <div class="form-row " style="text-align: left;margin-top: 0px;">
<!--                <span class="col-md-2 col-sm">From</span> -->
                <div class="col-sm-6 mobile">
                    <label>Check In</label>
                    <input id="checkindate"  class="form-control actual_range"  placeholder="MM/DD/YY"  onchange="getCheckInDate(event);" required="true">
                </div>
<!--                <span class="col-md-1 col-sm">To</span>-->
                <div class="col-sm-6 mobile">
                    <label>Check out</label>
                    <input id="checkoutdate"  class="form-control actual_range" onchange="onchangeCheckOut();" name="checkoutdate" placeholder="MM/DD/YY" data-provide="datepicker">
                </div>
                <div class="col-sm-12" style="margin-top: 10px;">
                    <p>
                        <span style="font-weight: 700" id="roomcatname" ></span>
                        <span class="badge badge-success" id="save" style="font-size: 12px;font-weight: 700;margin-left: 5px;"></span>
                        <span style="text-decoration: line-through;margin-left: 10px;font-size: 10px;" id="DeclaredRateForSingle">   </span>
                        <span>INR/night</span>
                    </p>
                </div>
            </div>
            <button style="margin-top:0px;padding: 0.8rem 1.8rem;" id="getDate" class="btn btn-danger">Book</button>
        </div>

    </div>
</div>
<header class="masthead">
    <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">Coffee Bean Inn</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">Discover our world's #1 Luxury Room For VIP.</h2>
            <a style="background-color: #00a659;color: white;" href="room.php" class="btn  js-scroll-trigger">Book Room</a>
        </div>
    </div>
</header>

<section id="#" class="projects-section bg-light" style="padding-top: 5rem">
    <div class="container">


        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl-8 col-lg-7 ">
                <img class="img-fluid mb-3 mb-lg-0" src="img/room4.jpg" alt="">
            </div>
            <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                    <h4 style="color:#212529">The Coffee Bean Inn Hotel Bangalore A world of convenience and comfort.</h4>
                    <p class="std-p-tag mb-0">Located in the commercial hub of South Bangalore the Coffee Bean Inn offering comfortable accommodation, personalized attention and state of the art service to its guests. We offer 20 exquisitely appointed rooms and that are modern in appeal with contemporary amenities and service.</p>
                    <br><a href="room.php" class="btn btn-danger js-scroll-trigger">Book Room</a>
                </div>
            </div>
        </div>


        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div class="col-lg-6 ">
                <img class="img-fluid" src="img/img_7.jpg" alt="facility Image ">
            </div>
            <div class="col-lg-6">
                <div class="bg-light black-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left text-md-left">
                            <h4 class="text-black">Facilities</h4>
                            <!--                  <p class="mb-0 text-white-50">We have an in-house restaurant which serves up a delicious Arabic cuisine and has a fine dine ambience. There is a Banquet Hall where you can host any kind of party or even hold business conferences. </p>-->
                            <ul class="std-p-tag">
                                <li>Complimentary Buffet Breakfast</li>
                                <li>Complimentary unlimited Wi-Fi</li>
                                <li>Complimentary bottled water in the Room</li>
                                <li>Complimentary Tea & Coffee maker in the Room</li>
                                <li>Complimentary Newspapers</li>
                                <li>Air-conditioned</li>
                                <li>24-hour room service</li>

                            </ul>
                            <hr class="d-none d-lg-block mb-0 ml-0">
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="row justify-content-center no-gutters">
            <div class="col-lg-6">
                <img class="img-fluid" src="img/img_6.jpg" alt="Facility Image 2">
            </div>
            <div class="col-lg-6 order-lg-first">
                <div class="bg-light text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left text-md-left ">
                            <ul class="std-p-tag">
                                <li>LCD Television with satellite channels</li>
                                <li>Direct Dial Phone with Voice Messaging</li>
                                <!--                                        <li>Spacious Work Desk</li>-->
                                <li>Iron & Iron Board on Request</li>
                                <li>24 hours Concierge service</li>
                                <li>Laundry Service</li>
                                <li>Doctor on call</li>
                                <li>Business Center</li>
                                <li>Airport Transfer( on chargeable basis )</li>
                                <li>Valet Parking service</li>

                            </ul>
                            <hr class="d-none d-lg-block mb-0 ml-0">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

<script src="js/pages/index.js"></script>

<?php
include 'footer.php';
?>


</body>

</html>
