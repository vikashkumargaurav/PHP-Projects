<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//include 'header.php';
//include 'navbar.php';
if (isset($_GET['BookingId']) && isset($_GET['hotelId'])) {
    echo '<script> var BookingId =' . trim($_GET['BookingId']) . '</script>';
    echo '<script> var hotelId =' . trim($_GET['hotelId']) . '</script>';
}
?>
<ul class="nav nav-pills" id="ProfileRightsnavDiv" style="margin-bottom: 20px;">

</ul>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="/resources/demos/style.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
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
            Booking <span style="font-size: 20px" class="badge badge-danger float-right" id="ShowBookingStatus"></span> <span style="font-size: 20px;margin-left: 5px;margin-right: 5px;" class="badge badge-light float-right" id="ShowRoomNo"></span></div>
        <div class="card-body" style="align-self: center">
<input type="hidden" id="BookingId">
<input type="hidden" id="RoomId">
            <div class="form-inline">
                <div class="form-group" style="padding: 10px;">
                    <label  for="from">Check In</label>
                    <input  style="margin-left: 10px;" type="text" class="form-control"  id="CheckInDate" placeholder="Check In">
                </div>
                <div class="form-group" style="padding: 10px;">
                    <label  for="to">Check Out</label>
                    <input style="margin-left: 10px;" type="text" class="form-control" id="CheckOutDate" placeholder="Check Out">
                </div>

            </div>

        </div>



        <div class="form-group" style="padding: 10px;">
            <p style="font-weight: bold">Guest Details</p>
            <hr style="border-top: 2px solid #9E9E9E;">
            <div class="row" style="padding: 10px;">
                <div class="col">
                    <label for="PhoneNumber">Guest Mobile No </label>
                    <input type="text" id="PhoneNumber" class="form-control" placeholder="Guest Mobile No">
                </div>
                <div class="col">
                    <label for="FirstName">Guest Name</label>
                    <input type="text" id="FirstName"  class="form-control" placeholder="Guest Name">
                </div>
                <div class="col">
                    <label for="Email">Guest Email</label>
                    <input type="text" class="form-control" id="Email" aria-describedby="nameHelp" placeholder="Guest Email">
                </div>

            </div>
            <div class="row" style="padding: 10px;">
                <div class="col">
                    <label for="Gender">Gender</label>
                    <select class="form-control" id="Gender" >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>

                    </select>
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Total Adults</label>
                    <input type="number" class="form-control" id="NoOfAdults" value="1" aria-describedby="nameHelp" placeholder="Total Adults">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Total Childs</label>
                    <input type="number" class="form-control" id="NoOfChild" value="0" aria-describedby="nameHelp" placeholder="Total Childs">
                </div>
            </div>
        </div>

        <div class="form-group" style="padding: 10px">
            <p style="font-weight: bold">Tarrfi Details</p>
            <hr style="border-top: 1px solid #9E9E9E;">
            <div class="row">
                <div class="col">
                    <label for="RatePlaneName">Select Rate Plane</label>
                    <select class="form-control" id="BookingPlan" onchange="getRatePlaneOnChage(event);">
                        <option value="CP">CP</option>
                        <option value="EP">EP</option>
                        <option value="AP">AP</option>
                        <option value="MAP">MAP</option>
                    </select>
                </div>
                <div class="col" >
                    <label for="RoomCategory">Select Room Type</label>
                    <input class="form-control" id="RoomCategory" >
                </div>
                <div class="col">
                    <label for="BookingSourceType">Booking Source Type</label>
                    <input class="form-control" id="BookingSourceType" >
                  <!--  <select class="form-control" id="BookingSourceType"   >
                        <option value="OTA">OTA</option>
                        <option value="B2B">B2B</option>
                        <option value="OFFLINE">OFFLINE</option>

                    </select>-->
                </div>
                <div class="col">
                    <label for="BookingSource">Select Booking Source </label>
                    <input class="form-control" id="BookingSource" >
                    <!--<select class="form-control" id="BookingSource" >
                        <option value="MMT">MMT</option>
                        <option value="YAT">YAT</option>
                        <option value="EXP">EXP</option>
                        <option value="BOK">BOK</option>
                        <option value="GOIBIO">GOIBIO</option>
                        <option value="OTHER">OTHER</option>

                    </select>-->
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">No Of Rooms</label>
                    <input class="form-control" id="NoOfRooms">

                </div>

            </div>
        </div>
        <div class="form-group" style="padding: 10px">
            <div class="row">
                <div class="col">
                    <label for="exampleInputEmail1">SellRate (Room Charge) </label>
                    <input type="text" id="SellRate" class="form-control" placeholder="SellRate">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">GST</label>
                    <input type="text" id="GSTPercent"  class="form-control"  placeholder="GST" disabled>
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">GST Amount</label>
                    <input type="text" class="form-control" id="GSTAmount"  aria-describedby="nameHelp" placeholder="GST Amount" disabled>
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Total Amount with tax </label>
                    <input type="text" id="TotalAmount" class="form-control" placeholder="Total Amount with tax" disabled>
                </div>
            </div>
        </div>

        <div class="form-group" id="ServiceSummeryDiv" style="display:none;padding: 10px">
            <p style="font-weight: bold">Services Details</p>
            <hr style="border-top: 1px solid #9E9E9E;">
            <div class="row">
                <div class="col">
                    <label for="exampleInputEmail1">Service Total Amount </label>
                    <input type="text" id="ServiceTotalAmount" class="form-control" placeholder="ServiceTotalAmount">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Service Total Paid Amount</label>
                    <input type="text" id="ServiceTotalPaidAmount"  class="form-control"  placeholder="ServiceTotalPaidAmount" >
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">RemainingAmount</label>
                    <input type="text" class="form-control" id="ServiceRemainingAmount"  aria-describedby="nameHelp" placeholder="ServiceRemainingAmount" >
                </div>

            </div>
        </div>
        <div class="form-group" id="PaymentSummeryDiv" style="padding: 10px">
            <p style="font-weight: bold">Payment Summary</p>
            <hr style="border-top: 1px solid #9E9E9E;">
            <div class="row">
                <div class="col">
                    <label for="exampleInputEmail1">Total Amount </label>
                    <input type="text" id="SummeryTotalAmount" class="form-control" placeholder="ServiceTotalAmount">
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Total Paid Amount</label>
                    <input type="text" id="SummeryTotalPaidAmount"  class="form-control"  placeholder="SummeryTotalPaidAmount" >
                </div>
                <div class="col">
                    <label for="exampleInputEmail1">Remaining Amount</label>
                    <input type="text" class="form-control" id="SummeryRemainingAmount"  aria-describedby="nameHelp" placeholder="SummeryRemainingAmount" >
                </div>

            </div>
        </div>
<!--        Payment And services  start-->
        <div class="row" style="margin-bottom: 30px;margin-left: 5px;">
            <div class="col">
                <button class="btn btn-danger" id="addServiceBtn"><i class="fas fa-plus"></i>Add Service</button>
                <button class="btn btn-danger" id="addPaymentBtn"><i class="fas fa-plus"></i>Add Payment</button>
            </div>
        </div>


        <div class="ServiceDiv" id="ServiceDiv" style="display: none; margin: 20px">
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <label for="Description">Service Name </label>
                        <input type="text" id="Description" class="form-control" placeholder="Service Name">
                    </div>
                    <div class="col">
                        <label for="Amount">Service Price</label>
                        <input type="text" id="Amount" class="form-control" placeholder="Service Price">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label for="PaidStatus">PaidStatus</label>
                        <select style="margin-left: 10px;color: red" id="PaidStatus" class="form-control">
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                        </select>
                    </div>

                    <div class="col">
                        <label for="PaidStatus">PaymentMode</label>
                        <select style="margin-left: 10px;color: red" id="PaymentMode" class="form-control">
                            <option value="Paid">Cash</option>
                            <option value="Online">Online</option>
                            <option value="Card">Card</option>
                            <option value="BTC(Prepaid)">BTC(Prepaid)</option>
                            <option value="BTC(Postpaid)">BTC(Postpaid)</option>
                        </select>
                    </div>

                </div>

            </div>
            <button type="button" id="AddServiceApiPostBtn" class="btn btn-primary">Add Service</button>
        </div>
        <div class="PaymentDiv" id="PaymentDiv" style="display: none;margin: 20px">
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <label for="PaymentName">PaymentName</label>
                        <select style="margin-left: 10px;color: red" id="PaymentName" class="form-control">
                            <option value="Room Payment">Room Payment</option>
                            <option value="Service Payment">Service Payment</option>
                            <option value="None">None</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="PaymentAmount">Payment Amount</label>
                        <input type="text" id="PaymentAmount" class="form-control" placeholder="Payment Amount">
                    </div>
                </div>

                <div class="row">


                    <div class="col">
                        <label for="PaymentType">PaymentType</label>
                        <select style="margin-left: 10px;color: red" id="PaymentType" class="form-control">
                            <option value="Paid">Cash</option>
                            <option value="Online">Online</option>
                            <option value="Card">Card</option>
                            <option value="BTC(Prepaid)">BTC(Prepaid)</option>
                            <option value="BTC(Postpaid)">BTC(Postpaid)</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="Remarks">Remarks</label>
                        <textarea rows="3" style="margin-left: 10px;color: red" id="Remarks" class="form-control">

                                    </textarea>
                    </div>

                </div>

            </div>
            <button type="button" id="AddPaymentApiPostBtn" class="btn btn-primary">Add Payment</button>
        </div>
<!--        Payment And services end-->

    </div>

<!--    <div class="" id="bookingOperationsDiv">-->
<!---->
<!--    </div>-->

    <button class="btn btn-success" id="checkinBtn">Check In </button>
    <button class="btn btn-primary" id="allocateRoomBtn">Allocate Room </button>
    <button class="btn btn-primary" id="changeRoomBtn">Change Room </button>
    <button class="btn btn-danger" id="checkoutBtn">Check Out</button>
    <button class="btn" style="background-color: greenyellow; color: white; display: none" id="modifyBookingBtn">Modify</button>
<!--    <button class="btn " style="background-color: #803322;color: white; display: none;" id="extendBtn"> Extend </button>-->
    <button class="btn " style="background-color: #f46407;color: white" id="cancelBtn"> Cancel </button>
    <button class="btn " style="background-color: #4e57d2;color: white" id="invoiceBtn" data-toggle="modal" data-target="#invoiceModal"> Invoice </button>
</div>

<!--Invoice Modal-->
<div class="modal fade"  id="invoiceModal" tabindex="-1" role="dialog" aria-labelledby="invoiceTitle" aria-hidden="false">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-info " id="invoiceTitle"><small> Choose Invoice type  </small></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="container mb-3 ">
                    <div class="justify-content-between d-flex align-items-center">

                        <div class="text-white" >
                            <a href="#"  id="serviceInvoice" class="btn  btn-secondary ">
                                <i class="fa fa-list fa-1x"></i><br/><small> Service Invoice </small>
                            </a>
                        </div>

                        <div class=" text-white ">
                            <a href="#" id="normalInvoice" class="btn  btn-success">
                                <i class="fa fa-money-bill fa-1x"></i><br/><small> Regular Invoice </small>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- Invoice Modal Ends -->



<button style="display: none" id="selectRoomModelBtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#selectRoomModal">
    Launch demo modal
</button>
<!-- Modal -->
<div class="modal fade" id="selectRoomModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="selectRoomBtn" class="btn btn-primary">Select Room</button>
                <button type="button" id="updateRoomBtn" class="btn btn-primary" style="display: none">Update Room</button>
            </div>
        </div>
    </div>
</div>

<script src="js/pages/viewbooking.js"></script>
<script src="js/pages/bookingoperations.js"></script>
