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
<!-- Breadcrumbs-->
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li  style="font-weight: 700" class="breadcrumb-item active"><span id="HotelName"></span> Statistics </li>
</ol>

<div class="row">
    <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-success o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fa fa-bed"></i>
                </div>
                <div class="mr-5">Total <span id="ExpectedCheckIn"></span> Arrival</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
                <span class="float-left">View Details</span>
                <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                </span>
            </a>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-warning o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5">Total <span id="ExpectedCheckOut"></span> Departure</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
                <span class="float-left">View Details</span>
                <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                </span>
            </a>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-danger o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-shopping-cart"></i>
                </div>
                <div class="mr-5">Total <span id="TodayBookingCount"></span> Booking</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
                <span class="float-left">View Details</span>
                <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                </span>
            </a>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white  o-hidden " style="background-color: #FF5722!important">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-life-ring"></i>
                </div>
                <div class="mr-5">Total <span id="totalOccupiedRoomByActiveStatus"></span> Stay</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
                <span class="float-left">View Details</span>
                <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                </span>
            </a>
        </div>
    </div>


</div>

<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        Get Booking Data By Date</div>
    <div class="card-body" style="align-self: center">

        <div class="form-inline">
            <div class="form-group" style="padding: 10px;">
                <label  for="checkindate">Check In</label>
                <input  style="margin-left: 10px;" type="text" class="form-control" onchange="getCheckInDate(event)" id="checkindate" placeholder="Check In">
            </div>
            <div class="form-group" style="padding: 10px;">
                <label  for="checkoutdate">Check Out</label>
                <input style="margin-left: 10px;" type="text" class="form-control" id="checkoutdate" placeholder="Check Out">
            </div>

            <div class="form-group " >
                <label for="inputState">Booking Status</label>
                <select style="margin-left: 10px;" id="bookingStatus" class="form-control">
                    <option value="">All</option>
                    <option value="Active">Active</option>
                    <option value="Abandoned">No Show</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Quick">Quick</option>
                    <option value="Delay">Delay</option>
                    <option value="Completed">Complated</option>
                    <option value="">Confirmed</option>
                </select>
            </div>
<!--            <button  style="margin-left: 15px;" type="submit" class="btn btn-outline-danger">Search</button>-->



        </div>

    </div>
    <div class="card-footer small text-muted"> </div>
</div>
<!--<button style="float: right" id="clearDates" class="btn btn-outline-danger">Get All Bookings</button>-->
<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
       Booking Data  </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table table-bordered table-hover" id="bookingTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Booking Id</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Booking Date</th>
                        <th>Traveller Name</th>
                        <th>Status</th>
                        <th>Booking Source</th>
                        <th>No Rooms</th>
                        <th>No of Nights</th>
                        <th>Total Room Nights</th>
                        <th> Room Charge</th>
                        <th>Extra Charges</th>
                        <th>Hotel Taxes</th>
                        <th>Hotel Gross Charges</th>
                        <th>Commission Charges</th>
                        <th>Commission GST Charges</th>
                        <th>Commission (Including GST)</th>
                        <th>Nett Amount</th>
                        <th>Mode of Payment</th>
                        <th>Customer Paid at Hotel</th>
                        <th>OTA To Pay Hotel</th>
                        <th>Hotel to Pay OTA</th>
                        <th>Payment Collected By</th>
                        <th>Zingo Total Commission</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>

                <tbody >

                </tbody>
                <tfoot>
                <tr>
                    <th>S.No</th>
                    <th>Booking Id</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Booking Date</th>
                    <th>Traveller Name</th>
                    <th>Status</th>
                    <th>Booking Source</th>
                    <th>No Rooms</th>
                    <th>No of Nights</th>
                    <th>Total Room Nights</th>
                    <th> Room Charge</th>
                    <th>Extra Charges</th>
                    <th>Hotel Taxes</th>
                    <th>Hotel Gross Charges</th>
                    <th>Commission Charges</th>
                    <th>Commission GST Charges</th>
                    <th>Commission (Including GST)</th>
                    <th>Nett Amount</th>
                    <th>Mode of Payment</th>
                    <th>Customer Paid at Hotel</th>
                    <th>OTA To Pay Hotel</th>
                    <th>Hotel to Pay OTA</th>
                    <th>Payment Collected By</th>
                    <th>Zingo Total Commission</th>
                    <th>Payment Status</th>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <div class="card-footer small text-muted"><span id=""></span></div>

</div>
<input type="hidden" id="totalHotelTax" />
<!--<tr>
    <td>Minimum age:</td>
    <td><input type="text" id="min" name="min"></td>
</tr>
<tr>
    <td>Maximum age:</td>
    <td><input type="text" id="max" name="max"></td>
</tr>  

<button id="getDatabyDate">get</button>-->





<script src="js/pages/hotel.js"></script>
<!-- /.container-fluid -->
<!--<script src="js/demo/datatables-demo.js"></script>-->
<!--<script src="js/demo/chart-area-demo.js"></script>-->
