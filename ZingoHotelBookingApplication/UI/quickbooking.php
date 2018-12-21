<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//include 'header.php';
//include 'navbar.php';
if (isset($_GET['hotelId'])) {
    echo '<script> var hotelId =' . trim($_GET['hotelId']) . '</script>';
}
?>
<ul class="nav nav-pills" id="ProfileRightsnavDiv" style="margin-bottom: 20px;">

</ul>
<!-- Breadcrumbs-->
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a style="cursor: pointer" class="text text-primary" onclick="redirectToDashBoard()">Dashboard</a>
    </li>
    <li style="font-weight: 700" class="breadcrumb-item active"><span id="HotelName"></span></li>
</ol>


<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h3 class="page-header"></h3>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="card mb-3">
        <div class="card-header">
            <i class="fas fa-table"></i>
           Booking </div>
        <div class="card-body" style="align-self: center">

            <div class="form-inline">
                <div class="form-group" style="padding: 10px;">
                    <label  for="from">Check In</label>
                    <input  style="margin-left: 10px;" type="text" class="form-control"   id="from" placeholder="Check In">
                </div>
                <div class="form-group" style="padding: 10px;">
                    <label  for="to">Check Out</label>
                    <input style="margin-left: 10px;" type="text" class="form-control"  id="to" placeholder="Check Out">
                </div>
                <div class="form-group" style="padding: 10px;">
<!--                    <label  for="to">Check Out</label>-->
                    <div class="col text-center" id="InventoryAvilabilityRoomDiv" style="padding-top: 20px;">

                    </div>

                </div>

            </div>


        </div>



        <div class="form-group" style="padding: 10px;">
            <p style="font-weight: bold">Guest Details</p>
            <hr style="border-top: 2px solid #9E9E9E;">
            <div class="row" style="padding: 10px;">
                <div class="col">
                    <label for="exampleInputEmail1">Guest Mobile No </label>
                    <input type="text" id="GuestMobile" class="form-control" placeholder="Guest Mobile No">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Guest Name</label>
                    <input type="text" id="GuestName"  class="form-control" placeholder="Guest Name">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Guest Email</label>
                    <input type="text" class="form-control" id="GuestEmail" aria-describedby="nameHelp" placeholder="Guest Email">
                </div>

            </div>
            <div class="row" style="padding: 10px;">
                <div class="col">
                    <label for="gender">Gender</label>
                    <select class="form-control" id="gender" >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>

                    </select>
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Total Adults</label>
                    <input type="number" class="form-control" id="TotalGuest" value="1" aria-describedby="nameHelp" placeholder="Total Adults">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Total Childs</label>
                    <input type="number" class="form-control" id="TotalChilds" value="0" aria-describedby="nameHelp" placeholder="Total Childs">
                </div>
            </div>
        </div>

        <div class="form-group" style="padding: 10px">
            <p style="font-weight: bold">Tariff Details</p>
            <hr style="border-top: 1px solid #9E9E9E;">
            <div class="row">
                <div class="col">
                    <label for="RatePlaneName">Select Rate Plane</label>
                    <select class="form-control" id="RatePlaneName" onchange="getRatePlaneOnChage(event);">
                        <option value="CP">CP</option>
                        <option value="EP">EP</option>
                        <option value="AP">AP</option>
                        <option value="MAP">MAP</option>
                    </select>
                </div>
                <div class="col" id="RoomTypeSelectDiv">
                    <label for="RatePlaneName">Select Room Type</label>
                    <select class="form-control" id="RoomType" onchange="onChangeRoomType(event)">

                    </select>
                </div>
                <div class="col">
                    <label for="BookingSourceType">Booking Source Type</label>
                    <select class="form-control" id="BookingSourceType" onchange="getBookingSourceTypeChage(event);">
                        <option value="OTA">OTA</option>
                        <option value="B2B">B2B</option>
                        <option value="OFFLINE">OFFLINE</option>

                    </select>
                </div>
                <div class="col">
                    <label for="BookingSource">Select Booking Source </label>
                    <select class="form-control" id="BookingSource" onchange="getBookingSourceNameChange(event);">
                        <option value="MMT">MMT</option>
                        <option value="YAT">YAT</option>
                        <option value="EXP">EXP</option>
                        <option value="BOK">BOK</option>
                        <option value="GOIBIO">GOIBIO</option>
                        <option value="OTHER">OTHER</option>

                    </select>
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">No Of Rooms</label>
                    <select class="form-control" id="NoOfRooms">

                    </select>
                </div>

            </div>
        </div>
        <div class="form-group" style="padding: 10px">
            <div class="row">
                <div class="col">
                    <label for="exampleInputEmail1">SellRate (Room Charge) </label>
                    <input type="text" id="sellRate" class="form-control" placeholder="SellRate">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">GST</label>
                    <input type="text" id="GST"  class="form-control"  placeholder="GST" disabled>
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">GST Amount</label>
                    <input type="text" class="form-control" id="GSTAmount"  aria-describedby="nameHelp" placeholder="GST Amount" disabled>
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Total Amount with tax </label>
                    <input type="text" id="TotalAmountWithTax" class="form-control" placeholder="Total Amount with tax" disabled>
                </div>
            </div>
        </div>

    </div>
<button class="btn btn-danger" id="QuickBookingBtn">Quick Booking </button>
<button class="btn btn-danger" id="BookNowBtn"> Booking Now </button>



</div>

<button style="display: none" id="selectRoomModel" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
</button>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Select Room</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container" >
                    <div class="row" id="RoomDiv">

                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="CloseselectRoomBtn">Close</button>
                <button type="button" id="selectRoomBtn" class="btn btn-primary">Select Room</button>
            </div>
        </div>
    </div>
</div>

<script src="js/pages/quickbooking.js"></script>
