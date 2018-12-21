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

<section id="#" class="change-back-booking">
    <div class="container">
        <div class="row">
            <div class="col-md-12 ">
                <form id="msform">
                    <!-- progressbar -->
                    <ul id="progressbar">
                        <li class="active">Reservation </li>
                        <li>Guest Information</li>
                        <!--                        <li>Account Setup</li>-->
                    </ul>
                    <!-- fieldsets -->
                    <fieldset>
                        <div class="row"  id="mainBookingUI">
                            <div class="col-sm-12">
                                <h2 class="fs-title">Reservation </h2>
                                <h3 class="fs-subtitle">Tell us something more about you Trip </h3>
                                <p id="showAvilableDiv" style="display: none"><span style="float: right;font-size: 12px;color: red;background: antiquewhite;" id="avilable"></span></p><br>
                            </div>
                            <div id="RoomDiv" class="col-sm-8" >

                                <div class="form-row " style="text-align: left">
                                    <!--<span class="col-md-2 col-sm">From</span>--> 
                                    <div class="mobileview col-md-6 ">
                                        <label>Check In</label>
                                        <input id="checkindate"  class="form-control actual_range" placeholder="MM/DD/YY"  onchange="getCheckInDate(event);" required="true">
                                    </div>
                                    <!--<span class="col-md-1 col-sm">To</span>-->
                                    <div class="mobileview col-md-6  ">
                                        <label>Check Out</label>
                                        <input id="checkoutdate"  class="form-control actual_range" name="checkoutdate" onchange="onchangeCheckOut();" placeholder="MM/DD/YY" data-provide="datepicker">
                                    </div>
                                </div>
                                <div class="row" id="Room_1" style="text-align: left">
                                    <span class="col-md-2" style="padding-top: 35px;">Room 1 </span> 
                                    <div class="form-group col-md-3 mobileview  text-lg-left">
                                        <label style="font-size: 12px;" for="exampleInputEmail1 ">Adults</label>
                                        <input name="adults" id="adults_1" type="number" class="form-control" value="1" placeholder="Adults" min="1" max="3" >

                                    </div>
                                    <div class="form-group col-md-3 mobileview text-lg-left">
                                        <label style="font-size: 12px;" for="exampleInputEmail1 ">Children</label>
                                        <input name="childerns" data-toggle="tooltip" title="Age of the childen must be below 12 years" id="childrens_1" type="number" class="form-control" value="0" placeholder="Children" min="1" max="2">

                                    </div>
                                    <div class="form-group  col-md-3  text-lg-right">
                                        <label style="font-size: 12px;" for="exampleInputEmail1 "></label>
                                        <button style="margin-top: 26px;" id="addRoom" type="button" class="btn btn-sm btn-danger">Add Room</button>

                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-4 bg-light text-left " style="padding:20px;">
                                <h4 id="onChangeRoomCatName"></h4>
                                <p><span style="text-decoration: line-through;margin-left: 0px;font-size: 15px;" id="onChangeRoomDeclaredPrice"></span> <span style="margin-left: 10px;color: #12ca12;font-weight: 700" id="onChangeSavePrice"></span></p>
                                <h4><span id="onChangeRoomSellPrice"></span> <span style="font-size: 12px;">per night/per room</span> </h4>

<!--                                <p>No of Nights : <span id="showNoOfnights"></span> </p>-->
                                <a class="" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">No of Rooms <span id="showrooms"></span> <i class="fas fa-angle-down"></i></a>
                                <div class="row">
                                    <div class="col">
                                        <div class="collapse multi-collapse" id="multiCollapseExample2">
                                            <div class="card card-body" id="showRoomDetails1">
                                                <ul style="padding-left: 0px;" id="sellRate1"></ul>

                                            </div>
                                            <p>Guests : <span id="showadults1"></span> <span id="showchildrens1"></span></p>
                                        </div>
                                    </div>
                                </div>

                                <h4><span style="font-size: 16px;" id="showsubtotal"></span> <span style="font-size: 14px" id="showRoomCount"></span><span style="font-size: 14px;" id="shownightscount"></span></h4>

                                <p id="gstAmt1"></p>
                                <p><span style="font-size: 22px;" id="grandTotal1"></span> <span>Grand Total</span></p>
                                <a style="float: left" class="btn btn-light border border-primary" id="checkSubTotal">Check Price</a>




                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">

                            </div>

                            <div class="col-md-12" style="display: none">
                                <a  id="checkAvilable" class="btn btn-danger text-white " >Check Availability</a>
                                <br>
                            </div>
                        </div>

                        <br>

                        <input id="roomDetails" style="float: right" type="button" name="next" class="next action-button" value="Next"/>
                    </fieldset>
                    <fieldset>
                        <h2 class="fs-title">Guest Information</h2>
                        <h3 class="fs-subtitle">Your presence in our Hotel</h3>
                        <!-------                 ----->

                        <div class="row">

                            <div class="col-md-8">
                                <div class="form-group text-lg-left">
                                    <!--                                    <label for="inputAddress">Name</label>-->
                                    <input type="text" class="form-control" id="Tname" placeholder="Full Name">
                                </div>
                                <div class="form-row text-lg-left">
                                    <div class="form-group col-md-12">
                                        <!--                                        <label for="inputEmail4">Email</label>-->
                                        <input type="text" class="form-control" id="email" placeholder="Email">
                                    </div>

                                    <div class="form-group col-md-12">
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <div class="form-row">
                                                    <div class="form-group col-md-5">
                                                        <select class="form-control" name="countryCode" id="countryCode">

                                                        </select> 
                                                    </div>
                                                    <div class="form-group col-md-7">
                                                        <input type="text"  class="form-control" id="phone" name="phone" placeholder="Phone no" >
                                                    </div>
                                                </div>


                                            </div>
                                            <div class="form-group col-md-4 ">
                                                <button style="padding: 1rem 0.8rem;" class="btn btn-secondary" id="getotp">Get OTP</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="form-row" id="verifyDiv">
                                    <div class="form-group col-md-6">
                                        <div id="recaptcha-container"></div>
                                    </div>
                                    <div class="form-group col-md-12" >
                                        <div class="form-row">
                                            <div class="form-group col-md-8">
                                                <input type="text" class="form-control" id="verificationcode" placeholder="OTP">
                                            </div>
                                            <div class="form-group col-auto">
                                                <input style="color: white" type="button" class="btn btn-secondary" value="Verify" onclick="myFunction()">
                                            </div>
                                        </div>


                                    </div>
                                </div>


                            </div>
                            <div class="col-md-4 bg-light">
                                <div class="row ">
                                    <div class="col-md-12" style="text-align:left">
                                        <h4 id="onChangeRoomCatName1"></h4>
                                    </div>
                                    <div class="col-md-6 col-sm-6" style="text-align:left;font-size: 14px;">
                                        <span id="showcindate"></span>

                                    </div>
                                    <div class="col-md-6 col-sm-6" style="text-align:left;font-size: 14px;">
                                        <span id="showcoutdate"></span>
                                        
                                    </div>

                                </div>
                                <div class="row text-lg-left " style="text-align:left;font-size: 14px;">
                                    <div class="col-md-12">
                                        <p>No of Nights : <span id="shownights"></span> </p>
                                        <a class="" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">No of Rooms <span id="showrooms"></span> <i class="fas fa-angle-down"></i></a>
                                        <div class="row">
                                            <div class="col">
                                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                                    <div class="card card-body" id="showRoomDetails">
                                                        <ul style="padding-left: 0px;" id="sellRate"></ul>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p>Guests : <span id="showadults"></span> , <span id="showchildrens"></span></p>

                                    </div>
                                    <div class="col-md-12">
                                        <p id="subTotal"> </p>
                                        <p id="gstAmt"> </p>
                                        <hr>
                                        <h6 style=";font-size: 16px;font-weight: 700" id="grandTotal"></h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-------                 ----->
                        <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
<!--                        <input type="button" name="next" class="next action-button" value="Next"/>-->
                        <input type="submit" id="bookRoom" name="submit" class="submit action-button" value="Submit"/>
                    </fieldset>

                </form>
                <!-- link to designify.me code snippets -->
                <div class="dme_link">
                    <p><a href="http://www.zingohotels.com" target="_blank">Powered by ZingoHotels</a></p>
                </div>
                <!-- /.link to designify.me code snippets -->
            </div>
        </div>


    </div>
</section>

<!--<script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>
<script src="js/pages/firebase.js"></script>-->
<script src="js/pages/booking.js"></script>

<?php

//
//include 'footer.php';
//?>