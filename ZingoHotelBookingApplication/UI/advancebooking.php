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
    <li style="font-weight: 700" class="breadcrumb-item active"><span id="HotelName"></span></li>
</ol>
<!--report sub nav-->
<ul class="nav nav-pills justify-content-end" id="reportDiv" style="margn-top:15px;margin-bottom: 15px;">

</ul>


<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" id="daily-tab" data-toggle="tab" href="#daily" role="tab" aria-controls="daily" aria-selected="true">Daily</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="weekly-tab" data-toggle="tab" href="#weekly" role="tab" aria-controls="weekly" aria-selected="false">Weekly</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="monthly-tab" data-toggle="tab" href="#monthly" role="tab" aria-controls="monthly" aria-selected="false">Monthly</a>
    </li>
</ul>
<div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="daily" role="tabpanel" aria-labelledby="daily-tab">

        <div class="row" style="margin-top: 30px">
            <div class="col-xl-4 col-sm-4 mb-4" id="">
                <div class="card text-white bg-success o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="TodayTotalBookings"></span> Total Bookings</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="">
                <div class="card text-white bg-warning o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="TodayTotalRevenue"></span> Total Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="">
                <div class="card text-white bg-danger o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="TodayTotalTaxAmount"></span>Total Tax Amount</div>
                    </div>
                </div>
            </div>

        </div>
        <!--        new tag-->
        <div class="row" style="margin-top: 30px">
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white o-hidden " style="background-color: #FF75B0">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="TodayTotalCommissionAmount"></span> Total Commission Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white  o-hidden " style="background-color: #A75AD2">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="TodayOTABooking"></span> OTABooking </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="row" style="margin-top: 30px">
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white o-hidden " style="background-color: #90cdcd">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="TodayTotalB2BBooking"></span> Total B2B Booking</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white  o-hidden " style="background-color: #5abaeb">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="TodayTotalOfflineBooking"></span> Total Offline Booking </div>
                    </div>
                </div>
            </div>


        </div>

        <table id="Daily-AdvanceBooking-Report" style="display: none;margin-top: 30px;">


        </table>

        <button style="margin-top: 30px;" class="btn btn-danger" onclick="exportTableToExcel('Daily-AdvanceBooking-Report', 'Daily-AdvanceBooking-Report')">Generate Excel Report</button>

    </div>

    <div class="tab-pane fade" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">

        <div class="row" style="margin-top: 30px">
            <div class="col-xl-4 col-sm-4 mb-4" id="">
                <div class="card text-white bg-success o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeekTotalBookings"></span> Total Bookings</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="">
                <div class="card text-white bg-warning o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeekTotalRevenue"></span> Total Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="">
                <div class="card text-white bg-danger o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeekTotalTaxAmount"></span>Total Tax Amount</div>
                    </div>
                </div>
            </div>

        </div>
        <!--        new tag-->
        <div class="row" style="margin-top: 30px">
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white o-hidden " style="background-color: #FF75B0">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeekTotalCommissionAmount"></span> Total Commission Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white  o-hidden " style="background-color: #A75AD2">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeekOTABooking"></span> OTABooking </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="row" style="margin-top: 30px">
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white o-hidden " style="background-color: #90cdcd">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeekTotalB2BBooking"></span> Total B2B Booking</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white  o-hidden " style="background-color: #5abaeb">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeekTotalOfflineBooking"></span> Total Offline Booking </div>
                    </div>
                </div>
            </div>


        </div>
        <table id="weekly-AdvanceBooking-Report" style="display: none;margin-top: 30px;">


        </table>

        <button style="margin-top: 30px;" class="btn btn-danger" onclick="exportTableToExcel('weekly-AdvanceBooking-Report', 'weekly-AdvanceBooking-Report')">Generate Excel Report</button>


    </div>

    <div class="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
        <div class="row" style="margin-top: 30px">
            <div class="col-xl-4 col-sm-4 mb-4" id="">
                <div class="card text-white bg-success o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthTotalBookings"></span> Total Bookings</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="">
                <div class="card text-white bg-warning o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthTotalRevenue"></span> Total Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="">
                <div class="card text-white bg-danger o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthTotalTaxAmount"></span>Total Tax Amount</div>
                    </div>
                </div>
            </div>

        </div>
        <!--        new tag-->
        <div class="row" style="margin-top: 30px">
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white o-hidden " style="background-color: #FF75B0">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthTotalCommissionAmount"></span> Total Commission Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white  o-hidden " style="background-color: #A75AD2">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthOTABooking"></span> OTABooking </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="row" style="margin-top: 30px">
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white o-hidden " style="background-color: #90cdcd">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthTotalB2BBooking"></span> Total B2B Booking</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-6 mb-6" id="">
                <div class="card text-white  o-hidden " style="background-color: #5abaeb">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthTotalOfflineBooking"></span> Total Offline Booking </div>
                    </div>
                </div>
            </div>


        </div>

        <table id="Monthly-AdvanceBooking-Report" style="display: none;margin-top: 30px;">


        </table>

        <button style="margin-top: 30px;" class="btn btn-danger" onclick="exportTableToExcel('Monthly-AdvanceBooking-Report', 'Monthly-AdvanceBooking-Report')">Generate Excel Report</button>

    </div>
</div>

<script src="js/pages/advancebooking.js"></script>