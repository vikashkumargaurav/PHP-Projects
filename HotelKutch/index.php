<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'header.php';
include 'navbar.php';
?>


<!-- end:fh5co-header -->
<aside id="fh5co-hero" class="js-fullheight">
    <div class="flexslider js-fullheight">
        <ul class="slides">
            <li style="background-image: url(hotelimg/banner.jpg);">
                <div class="overlay-gradient"></div>
                <div class="container">
                    <div class="col-md-12 col-md-offset-0 text-center slider-text">
                        <div class="slider-text-inner js-fullheight">
                            <div class="desc">
                                <p><span> Hotel Kutch Heritage</span></p>
                                <h2>Reserve Room for Family Vacation</h2>
                                <p>
                                    <a href="room.php" class="btn btn-primary btn-lg">Book Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li style="background-image: url(hotelimg/banner1.jpg);">
                <div class="overlay-gradient"></div>
                <div class="container">
                    <div class="col-md-12 col-md-offset-0 text-center slider-text">
                        <div class="slider-text-inner js-fullheight">
                            <div class="desc">
                                <p><span>Hotel Kutch Heritage</span></p>
                                <h2>Make Your Vacation Comfortable</h2>
                                <p>
                                    <a href="room.php" class="btn btn-primary btn-lg">Book Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li style="background-image: url(hotelimg/banner2.jpg);">
                <div class="overlay-gradient"></div>
                <div class="container">
                    <div class="col-md-12 col-md-offset-0 text-center slider-text">
                        <div class="slider-text-inner js-fullheight">
                            <div class="desc">
                                <p><span>Hotel Kutch Heritage</span></p>
                                <h2>A Best Place To Enjoy Your Life</h2>
                                <p>
                                    <a href="room.php" class="btn btn-primary btn-lg">Book Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

        </ul>
    </div>
</aside>
<div class="BookingDetailsDiv">
    <p style=" margin-bottom: 0px;"><span style="color: whitesmoke" id="roomcatname"></span> <span style="border-radius: 0rem;background: red" class="saving badge badge-success" id="saving"></span></p>
    <h3 style=" margin-bottom: 0px;"><span style="font-weight: 500;color: greenyellow" id="showPrice"></span> <span style="font-size: 16px;color: white;text-decoration: line-through;" id="DeclaredRateForSingle"> </span></h3>
</div>
<div class="wrap">
    <div class="container">
        <div class="row">
            <div id="availability">
                <form action="#">

                    <div class="a-col">
                        <section>
                            <select id="categoryNameInput" onchange="onchangeRoomCategory(event);" class="" style="padding: 8px 2px 8px 2px;background: transparent;color: white">
                                <!--<option style="color: black;" value="" disabled selected>Select Room</option>-->
                                <!--                             -->
                            </select>
                        </section>
                    </div>
                    <div class="a-col alternate">
                        <div class="input-field">
                            <label for="date-start">Check In</label>
                            <input type="text"  onchange="getCheckInDate(event);" class="form-control" id="checkindate" />
                        </div>
                    </div>
                    <div class="a-col alternate">
                        <div class="input-field">
                            <label for="date-end">Check Out</label>
                            <input type="text" class="form-control" onchange="onchangeCheckOut();" id="checkoutdate" />
                        </div>
                    </div>
                    <div class="a-col action">
                        <a style="cursor:pointer" id="getDate" target="_blank">
                            <span >Check</span>
                            Availability
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>


<div class="row" style="margin-top: 120px;margin-bottom: 120px;">
    <div class="col-md-12">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="hotelimg/hotel.jpg" class="img-responsive" alt="Image">
                </div>
                <div class="col-md-6">
                    <span class="super-heading-sm" style="font-weight: 700;text-transform: uppercase;">A Best Place To Enjoy Your Life</span>
                    <h3 class="heading"  style="font-weight: 800"><span style="color: #FF5722">WHY CHOOSE OUR </span> HOTEL</h3>
                    <p>We promise the guests a delightful variety of cuisine to savour from during their stay.
                        The hotel also houses a large and spacious Banquet Hall to conduct your meetings or
                        conferences and social gatherings Guest rooms. We offer room with aesthetics, facilities
                        and comforts. The rooms are spacious and have all the required amenities making your
                        stay comfortable.</p>

                    <p class="service-hour">
                        <span>Our Hotel is just 2 minutes away from Gandhidham Railway Station and Bus Station and
                            18 minutes away Kandla Airport of Gandhidham. </span>
<!--                        <strong>7:30 AM - 8:00 PM</strong>-->
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="featured-hotel" class="fh5co-bg-color">
    <div class="container">

        <div class="row">
            <div class="col-md-12">
                <div class="section-title text-center">
                    <h2>Featured Hotels</h2>
                </div>
            </div>
        </div>

        <div class="row" id="hotelRoomDiv">
            
        </div>

    </div>
</div>

<div id="hotel-facilities">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title text-center">
                    <h2>Hotel Facilities</h2>
                </div>
            </div>
        </div>

        <div id="tabs">
            <nav class="tabs-nav">
                <a href="#" class="active" data-tab="tab1">
                    <i class="flaticon-restaurant icon"></i>
                    <span>Restaurant</span>
                </a>
            </nav>
            <div class="tab-content-container">
                <div class="tab-content active show" data-tab-content="tab1">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="hotelimg/restaurant.jpg" class="img-responsive" alt="Image">
                            </div>
                            <div class="col-md-6">
                                <span class="super-heading-sm">World Class</span>
                                <h3 class="heading">Restaurant</h3>
                                <p>Our Fine Dine Restaurant offers variety of Indian, Gujrati, Chinese, South Indian, North
                                    Indian cuisine with superior quality food; it's one of the finest haunts for connoisseurs.
                                    Our Food variants spread across the Vegetarian and Non Vegetarian divide filling the
                                    Millennium menu card with a bounty of choices for varied tongues.</p>
                                <p>It is our Pleasure and opportunity to inform you that we have started Veg & Non Veg
                                    Buffet for Lunch session with Lavish Spread Monday to Friday for Just Rs.349/- with
                                    the existing OFFER Buy 6 and pay for 5. </p>
<!--                                <p class="service-hour">
                                    <span>Service Hours</span>
                                    <strong>7:30 AM - 8:00 PM</strong>
                                </p>-->
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

<script src="js/pages/index.js"></script>

<?php
include 'footer.php';
?>
