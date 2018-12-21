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
            <div class="col-xl-4 col-sm-4 mb-4" id="ExpectedCheckInDiv">
                <div class="card text-white bg-success o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5">Total <span class="h3" id="ExpectedCheckIn"></span> Arrival</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="unsoldRoomsDiv">
                <div class="card text-white bg-warning o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5">Total <span class="h3" id="unsoldRooms"></span> Free Rooms</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="totalOccupiedRoomByActiveStatusDiv">
                <div class="card text-white bg-danger o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5">Total <span class="h3" id="totalOccupiedRoomByActiveStatus"></span> Stay</div>
                    </div>
                </div>
            </div>

        </div>
<!--        new tag-->
        <div class="row">
            <div class="col-xl-3 col-sm-6 mb-3" id="OccupancyPercentageDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-money-bill  "></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="OccupancyPercentage"></span> Occupancy Percentage</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="DailylyRevenueTotalCostDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="DailylyRevenueTotalCost"></span> Daily Room Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="DailyARRDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="DailyARR"></span> Avg Room Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="OTATotalAmountDiv">
                <div class="card text-black-50 bg-light  o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="OTATotalAmount"></span> OTA Revenue</div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-3" id="GSTAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon" id="Div">
                            <i class="fa fa-money-bill  "></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="GSTAmount"></span> Tax Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="TotalDiscountAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="TotalDiscountAmount"></span>  Daily Discount Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="CommissionAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="CommissionAmount"></span> Daily Commission</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="NetAmountDiv">
                <div class="card text-black-50 bg-light  o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon" id="Div">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="NetAmount"></span> Net Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="B2BTotalAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="B2BTotalAmount"></span> Company Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="OfflineTotalAmountDiv">
                <div class="card text-black-50 bg-light  o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="OfflineTotalAmount"></span> Offline Revenue</div>
                    </div>
                </div>
            </div>


        </div>
        <!--CHART-->
        <div class="row">
            <div class="col-lg-8">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-chart-bar"></i>
                        Revenue Graph</div>
                    <div class="card-body">
                        <canvas id="myDailyRevenuePieChart" width="100%" height="50"></canvas>
                    </div>
<!--                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-chart-pie"></i>
                        Occupancy Report (Pie Chart)</div>
                    <div class="card-body">
                        <canvas id="myDailyPieChart" width="100%" height="100"></canvas>
                    </div>
<!--                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
                </div>
            </div>


        </div>
        <!--CHART-->
        <table id="Daily-Occupancy-Report" style="display: none">


        </table>

        <button class="btn btn-danger" onclick="exportTableToExcel('Daily-Occupancy-Report', 'Daily-Occupancy-Report')">Generate Excel Report</button>
    </div>
    <div class="tab-pane fade" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">

        <div class="row" style="margin-top: 30px">
            <div class="col-xl-4 col-sm-4 mb-4" id="WeeklyExpectedCheckInDiv">
                <div class="card text-white bg-success o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5">Total <span class="h3" id="WeeklyExpectedCheckIn"></span> Arrival</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="WeeklyunsoldRoomsDiv">
                <div class="card text-white bg-warning o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5">Total <span class="h3" id="WeeklyunsoldRooms"></span> Free Rooms</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="WeeklytotalOccupiedRoomByActiveStatusDiv">
                <div class="card text-white bg-danger o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5">Total <span class="h3" id="WeeklytotalOccupiedRoomByActiveStatus"></span> Stay</div>
                    </div>
                </div>
            </div>

        </div>
        <!--        new tag-->
        <div class="row">
            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyOccupancyPercentageDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-money-bill  "></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyOccupancyPercentage"></span> Occupancy Percentage</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyDailylyRevenueTotalCostDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyDailylyRevenueTotalCost"></span>  Room Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyDailyARRDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyDailyARR"></span> Avg Room Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyOTATotalAmountDiv">
                <div class="card text-black-50 bg-light  o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyOTATotalAmount"></span> OTA Revenue</div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyGSTAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-money-bill  "></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyGSTAmount"></span> Tax Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyTotalDiscountAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyTotalDiscountAmount"></span>   Discount Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyCommissionAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyCommissionAmount"></span>  Commission</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyNetAmountDiv">
                <div class="card text-black-50 bg-light  o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyNetAmount"></span> Net Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyB2BTotalAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyB2BTotalAmount"></span> Company Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="WeeklyOfflineTotalAmountDiv">
                <div class="card text-black-50 bg-light  o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="WeeklyOfflineTotalAmount"></span> Offline Revenue</div>
                    </div>
                </div>
            </div>


        </div>
        <!--weekly CHART-->
        <div class="row">
            <div class="col-lg-8">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-chart-bar"></i>
                        Revenue Graph</div>
                    <div class="card-body">
                        <canvas id="myweeklyRevenuePieChart" width="100%" height="50"></canvas>
                    </div>
<!--                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-chart-pie"></i>
                        Occupancy Report (Pie Chart)</div>
                    <div class="card-body">
                        <canvas id="myweeklyPieChart" width="100%" height="100"></canvas>
                    </div>
<!--                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
                </div>
            </div>


        </div>
        <!--weekly CHART-->

        <table id="Weekly-Occupancy-Report" style="display: none">


        </table>

        <button class="btn btn-danger" onclick="exportTableToExcel('Weekly-Occupancy-Report', 'Weekly-Occupancy-Report')">Generate Excel Report</button>

    </div>
    <div class="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
        <div class="row" style="margin-top: 30px">
            <div class="col-xl-4 col-sm-4 mb-4" id="MonthlyExpectedCheckInDiv">
                <div class="card text-white bg-success o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5">Total <span class="h3" id="MonthlyExpectedCheckIn"></span> Arrival</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="MonthlyunsoldRoomsDiv">
                <div class="card text-white bg-warning o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5">Total <span class="h3" id="MonthlyunsoldRooms"></span> Free Rooms</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="MonthlytotalOccupiedRoomByActiveStatusDiv">
                <div class="card text-white bg-danger o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5">Total <span class="h3" id="MonthlytotalOccupiedRoomByActiveStatus"></span> Stay</div>
                    </div>
                </div>
            </div>

        </div>
        <!--        new tag-->
        <div class="row">
            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyOccupancyPercentageDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-money-bill  "></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyOccupancyPercentage"></span> Occupancy Percentage</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyDailylyRevenueTotalCostDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyDailylyRevenueTotalCost"></span>  Room Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyDailyARRDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyDailyARR"></span> Avg Room Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyOTATotalAmountDiv">
                <div class="card text-black-50 bg-light  o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyOTATotalAmount"></span> OTA Revenue</div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyGSTAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-money-bill  "></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyGSTAmount"></span> Tax Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyCommissionAmountDivDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyTotalDiscountAmount"></span>   Discount Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyCommissionAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyCommissionAmount"></span>  Commission</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyNetAmountDiv">
                <div class="card text-black-50 bg-light  o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyNetAmount"></span> Net Amount</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyB2BTotalAmountDiv">
                <div class="card text-black-50 bg-light o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyB2BTotalAmount"></span> Company Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3" id="MonthlyOfflineTotalAmountDiv">
                <div class="card text-black-50 bg-light  o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-money-bill"></i>
                        </div>
                        <div class="mr-5"><span class="h3" id="MonthlyOfflineTotalAmount"></span> Offline Revenue</div>
                    </div>
                </div>
            </div>


        </div>

        <!--monthly CHART-->
        <div class="row">
            <div class="col-lg-8">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-chart-bar"></i>
                        Revenue Graph</div>
                    <div class="card-body">
                        <canvas id="mymonthlyRevenuePieChart" width="100%" height="50"></canvas>
                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-chart-pie"></i>
                        Occupancy Report (Pie Chart)</div>
                    <div class="card-body">
                        <canvas id="mymonthlyPieChart" width="100%" height="100"></canvas>
                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>
            </div>


        </div>
        <!--monthly CHART-->

        <table id="Monthly-Occupancy-Report" style="display: none">


        </table>

        <button class="btn btn-danger" onclick="exportTableToExcel('Monthly-Occupancy-Report', 'Monthly-Occupancy-Report')">Generate Excel Report</button>
    </div>
</div>





<script src="js/pages/occupancyreport.js"></script>
<script src="js/charts/occupancyreportChart.js"></script>
