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
<ul class="nav nav-pills" id="ProfileRightsnavDiv" style="margin-bottom: 15px;">

</ul>
<!-- Breadcrumbs-->
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a style="cursor: pointer" class="text text-primary" onclick="redirectToDashBoard()">Dashboard</a>
    </li>
    <li  style="font-weight: 700" class="breadcrumb-item active"><span id="HotelName"></span> Search  Bookings </li>
</ol>


<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        Search Booking Data  </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table table-bordered table-hover" id="bookingTable" width="100%" cellspacing="0">
                <thead>
                <tr>
<!--                    <th>S.No</th>-->
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
                <tfoot style="display: table-header-group;">
                <tr>
                    <!--                    <th>S.No</th>-->
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

                <tbody >

                </tbody>

            </table>
        </div>
    </div>
    <div class="card-footer small text-muted"><span id=""></span></div>

</div>
<input type="hidden" id="totalHotelTax" />


<script src="js/pages/searchbookings.js"></script>
