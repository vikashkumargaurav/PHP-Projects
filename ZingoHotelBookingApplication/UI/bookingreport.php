<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//include 'header.php';
//include 'navbar.php';
if (isset($_GET['hotelId'])) {
    $id = trim($_GET['hotelId']);
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
    <li style="font-weight: 700" class="breadcrumb-item active"><span id="HotelName"></span></li>
</ol>
<!--report sub nav-->
<ul class="nav nav-pills justify-content-end" id="reportDiv" style="margn-top:15px;margin-bottom: 15px;">

</ul>
<!--report sub nav-->
<div class="row" style="margin-top: 30px">
    <div class="col-xl-4 col-sm-4 mb-4" id="">
        <div class="card text-white bg-success o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fa fa-bed"></i>
                </div>
                <div class="mr-5"> <span class="h3" id="TotalAmount"></span> Total Amount</div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-sm-4 mb-4" id="">
        <div class="card text-white bg-warning o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5"> <span class="h3" id="TodayBookingCount"></span> TodayBooking</div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-sm-4 mb-4" id="">
        <div class="card text-white bg-danger o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-shopping-cart"></i>
                </div>
                <div class="mr-5"> <span class="h3" id="DeclaredRate"></span> Declared Rate</div>
            </div>
        </div>
    </div>

</div>
<!--        new tag-->
<div class="row" style="margin-top: 30px">
    <div class="col-xl-4 col-sm-4 mb-4" id="">
        <div class="card text-black-50 bg-light o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fa fa-bed"></i>
                </div>
                <div class="mr-5"> <span class="h3" id="SellRate"></span>Sell Rate</div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-sm-4 mb-4" id="">
        <div class="card text-black-50 bg-light o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5"> <span class="h3" id="ExtraCharges"></span> Extra Charges </div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-sm-4 mb-4" id="">
        <div class="card text-black-50 bg-light o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5"> <span class="h3" id="DiscountAmount"></span> Discount Amount </div>
            </div>
        </div>
    </div>


</div>
<div class="row" style="margin-top: 30px">
    <div class="col-xl-6 col-sm-6 mb-6" id="">
        <div class="card text-black-50 bg-light o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5"> <span class="h3" id="LastSevenDayBookingCount"></span> LastSevenDayBookingCount </div>
            </div>
        </div>
    </div>
    <div class="col-xl-6 col-sm-6 mb-6" id="">
        <div class="card text-black-50 bg-light o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5"> <span class="h3" id="TotalBookingTillDate"></span> TotalBookingTillDate </div>
            </div>
        </div>
    </div>


</div>

<table id="Booking-Report" style="display: none;margin-top: 30px;">


</table>

<button style="margin-top: 30px;" class="btn btn-danger" onclick="exportTableToExcel('Booking-Report', 'Booking-Report')">Generate Excel Report</button>







<script src="js/pages/bookingreport.js"></script>
