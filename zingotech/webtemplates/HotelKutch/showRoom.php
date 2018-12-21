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
<link rel="stylesheet" href="extra/assets/css/user-profiles-lists/user-profiles-list-minimal.css">
<div class="fh5co-parallax" style="background-image: url(img/banner2.jpg);" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
                <div class="fh5co-intro fh5co-table-cell">
                    <h1 class="text-center">Room Details</h1>
                    <!--<p>Made with love by ZingoHotels at <a href="http://freehtml5.co">FreeHTML5.co</a></p>-->
                </div>
            </div>
        </div>
    </div>
</div>

<div id="featured-hotel" style="background: white" class="">
    <div class="container">

        <div class="row">
            <div class="col-md-12">
                <div class="section-title text-center">
                    <h2>Featured Hotels</h2>
                </div>
            </div>
        </div>
        <div class="row" >
            <div class="col-md-8" id="roomImgDiv">

                

            </div>
            <div class="col-md-4" style="border: 1px solid #dcdcdc;padding-top: 30px;">
                <div class="row">
                    <div class="col-md-12">
                        <h3>CHECK AVAILABILITY</h3>
                    </div>
                    <div class="col-md-12">
                        <div style="width: 100%;margin-bottom: 15px;" class="input-group mb-3">
                            <input onchange="getCheckInDate(event);" id="checkindate" type="text" class="form-control" placeholder="CHECK IN" />
                        </div>

                    </div><br>
                    <div class="col-md-12">
                        <div class="input-group mb-3" style="width: 100%;margin-bottom: 15px;">
                            <input onchange="onchangeCheckOut()" id="checkoutdate" type="text" class="form-control" placeholder="CHECK OUT" />
                        </div>

                    </div>
                    <div class="col-md-12">
                        <h3 style="font-weight: 700" id=""><span style="color: black" id="roomcatname"></span> <span style="border-radius: 0rem;background: red" class="saving badge badge-success" id="saving"></span> </h3>

                    </div>
                    <div class="col-md-12">
                        <h3 style="margin-bottom: 0px;"><span style="font-weight: 500;color: greenyellow" id="showPrice"></span> <span style="font-size: 16px;color: black;text-decoration: line-through;" id="DeclaredRateForSingle"> </span></h3>
                    </div>

                    <div class="col-md-12">
                        <p style=" margin-top: 30px; " id="bookroomBtn"><span style="background: #ff5722" href="#" class="btn btn-primary btn-luxe-primary">BOOK NOW<i class="ti-angle-right"></i></span></p>
                    </div>


                </div>
            </div>

            <div class="col-md-12" style="margin-top: 35px;">
                <h2 style="font-weight: 700" id="CategoryName"></h2>
                <h3 id="CategoryPrice"></h3>
                <p id="Description"></p>
                <h3>ROOM SERVICES</h3>
            </div>

            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Complimentary Buffet Breakfast

                    </li>
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
        </div><br>

        <!--        <div class="row">
                    <div class="feature-full-1col">
                        <div class="image" style="background-image: url(img/room6.jpg);">
                            <div class="descrip text-center">
                                <p><small>For as low as</small><span>$100/night</span></p>
                            </div>
                        </div>
                        <div class="desc">
                            <h3>Deluxe Hotel</h3>
                            <p>Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed. Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. Nullam malesuada congue </p>
                            <p><a href="#" class="btn btn-primary btn-luxe-primary">Book Now <i class="ti-angle-right"></i></a></p>
                        </div>
                    </div>
                    <div class="feature-full-1col">
                        <div class="image" style="background-image: url(img/room7.jpg);">
                            <div class="descrip text-center">
                                <p><small>For as low as</small><span>$150/night</span></p>
                            </div>
                        </div>
                        <div class="desc">
                            <h3>Deluxe AC Hotel</h3>
                            <p>Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed. Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. Nullam malesuada congue </p>
                            <p><a href="#" class="btn btn-primary btn-luxe-primary">Book Now <i class="ti-angle-right"></i></a></p>
                        </div>
                    </div>
        
        
                </div>-->

    </div>
</div>
<!--<div id="hotel-facilities" style="margin-top: -200px;">
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
                <a href="#" data-tab="tab2">
                    <i class="flaticon-cup icon"></i>
                    <span>Mini Bar</span>
                </a>
                <a href="#" data-tab="tab3">

                    <i class="flaticon-swimming icon"></i>
                    <span>Other Facilities</span>
                </a>

            </nav>
            <div class="tab-content-container">
                <div class="tab-content active show" data-tab-content="tab1">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="images/tab_img_1.jpg" class="img-responsive" alt="Image">
                            </div>
                            <div class="col-md-6">
                                <span class="super-heading-sm">World Class</span>
                                <h3 class="heading">Restaurant</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia perferendis modi impedit, rem quasi veritatis. Consectetur obcaecati incidunt, quae rerum, accusamus sapiente fuga vero at. Quia, labore, reprehenderit illum dolorem quae facilis reiciendis quas similique totam sequi ducimus temporibus ex nemo, omnis perferendis earum fugit impedit molestias animi vitae.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam neque blanditiis eveniet nesciunt, beatae similique doloribus, ex impedit rem officiis placeat dignissimos molestias temporibus, in! Minima quod, consequatur neque aliquam.</p>
                                <p class="service-hour">
                                    <span>Service Hours</span>
                                    <strong>7:30 AM - 8:00 PM</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" data-tab-content="tab2">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="images/tab_img_2.jpg" class="img-responsive" alt="Image">
                            </div>
                            <div class="col-md-6">
                                <span class="super-heading-sm">World Class</span>
                                <h3 class="heading">Bars</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia perferendis modi impedit, rem quasi veritatis. Consectetur obcaecati incidunt, quae rerum, accusamus sapiente fuga vero at. Quia, labore, reprehenderit illum dolorem quae facilis reiciendis quas similique totam sequi ducimus temporibus ex nemo, omnis perferendis earum fugit impedit molestias animi vitae.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam neque blanditiis eveniet nesciunt, beatae similique doloribus, ex impedit rem officiis placeat dignissimos molestias temporibus, in! Minima quod, consequatur neque aliquam.</p>
                                <p class="service-hour">
                                    <span>Service Hours</span>
                                    <strong>7:30 AM - 8:00 PM</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" data-tab-content="tab3">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h3>Other Facilities </h3>
                            </div>
                            <div class="col-md-6">
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        Complimentary Buffet Breakfast
                                        
                                    </li>
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
                                    
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="list-group">
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
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>-->
<script src="js/pages/showRooms.js"></script>
<?php
include 'footer.php';
?>