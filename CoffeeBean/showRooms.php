<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'header.php';
include 'navbar.php';

if (isset($_GET['roomcatId'])) {
    echo '<script> var RoomCatId =' . trim($_GET['roomcatId']) . '</script>';
}
?>
<style>
    body{
        background-color: white;
    }
</style>
<header class="change-back">
    <div class="container d-flex h-40 align-items-center">
        <div class="mx-auto text-center">
            <h1 class="mx-auto text-white-50 " style="margin-top:10%;">Rooms</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">Discover our world's #1 Luxury Room For VIP.</h2>
        </div>
    </div>
</header>
<section id="#" class="projects-section " style="padding-top:5rem;" >
    <div class="container" id="room_info">



    </div>
    <div class="container " style=" background-color: whitesmoke;">
        <br>
        <div class="row">
            <div class="col-sm-12">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Best price </strong> for your stay. 2X refund if our rate is not cheaper!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-lg-12 ">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Rates</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Amenities</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Policies</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><br>
                    <div class="alert alert-light" role="alert">
                        <span id="singlecatName"></span> :  <span style="" id="showratepriceforSingle"></span>
                    </div>
                    <!--<br>-->
                    <div class="alert alert-light" role="alert">
                        <span id="doublecatName"></span> :  <span style="" id="showratepriceforDouble"></span>
                    </div>
                </div>

                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="row  no-gutters mb-5 mb-lg-0"  >

                        <div class="col-sm-6 ">
                            <div class="   project">
                                <div class="d-flex">
                                    <div class="project-text w-100 my-auto  text-lg-left text-md-left ">
                                        <ul class="std-p-tag">
                                            <li>LCD Television with satellite channels</li>
                                            <li>Direct Dial Phone with Voice Messaging</li>
                                            <li>Spacious Work Desk</li>
                                            <li>Iron & Iron Board on Request</li>
                                            <li>24 hours Concierge service</li>
                                            <li>Laundry Service</li>
                                            <li>Doctor on call</li>
                                            <li>Business Center</li>
                                            <li>Airport Transfer( on chargeable basis )</li>


                                        </ul>
                                        <hr class="d-none d-lg-block mb-0 ml-0">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="  project">
                                <div class="d-flex ">
                                    <div class="project-text w-100 my-auto  text-lg-left text-md-left">


                                        <ul class="std-p-tag">
                                            <li>Valet Parking service</li>
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
                </div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                    <ul class="std-p-tag" style="list-style-type: circle;padding: 50px;font-size: 14px;">
                        <li>Check in/out Hotel Check-in Time is 2 PM, Check-out Time is 12 PM.</li>
                        <li>The primary guest checking in to the hotel must be at least 18 years of age. Children accompanying adults must be between 1-12 years.</li>
                        <li>Early check-in or late check-out is subject to availability and may be chargeable by the hotel.</li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-center"><br>
                <button id="bookroomBtn" class="btn btn-danger text-white">Book Now</button><br><br>
            </div>
        </div>
    </div>

</section>
<script src="js/pages/showRooms.js"></script>
<?php

include 'footer.php';
?>

