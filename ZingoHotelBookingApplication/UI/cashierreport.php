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

<!-- CHART-->
<div class="row" style="margin-top: 30px;margin-bottom: 30px;">
    <div class="col-lg-4">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-pie"></i>
                Cashier Report (Daily)</div>
            <div class="card-body">
                <canvas id="myDailyCashierPieChart" width="100%" height="100"></canvas>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-pie"></i>
                Cashier Report (Weekly)</div>
            <div class="card-body">
                <canvas id="myweeklyCashierPieChart" width="100%" height="100"></canvas>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-pie"></i>
                Cashier Report (Monthly)</div>
            <div class="card-body">
                <canvas id="mymonthlyCashierPieChart" width="100%" height="100"></canvas>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
    </div>


</div>
<!-- CHART-->

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
            <div class="col-xl-4 col-sm-4 mb-4" id="DailyCashPaymentDiv">
                <div class="card text-white bg-success o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="DailyCashPayment"></span> Cash Payment</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="DailyOnlinePaymentDiv">
                <div class="card text-white bg-warning o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="DailyOnlinePayment"></span> Online Payment</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="DailyCardPaymentDiv">
                <div class="card text-white bg-danger o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="DailyCardPayment"></span> Card Payment</div>
                    </div>
                </div>
            </div>

        </div>
        <!--        new tag-->
        <div class="row" style="margin-top: 30px">
            <div class="col-xl-6 col-sm-6 mb-6" id="DailyBTCPostPaidPaymentDiv">
                <div class="card text-white-50 o-hidden " style="background-color: #FF75B0">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="DailyBTCPostPaidPayment"></span> BTC PostPaid</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-6 mb-6" id="DailyBTCPrePaidPaymentDiv">
                <div class="card text-white-50  o-hidden " style="background-color: #A75AD2">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="DailyBTCPrePaidPayment"></span> BTCPrePaid </div>
                    </div>
                </div>
            </div>


        </div>
        <table id="Daily-Cashier-Report" style="display: none;margin-top: 30px;">


        </table>

        <button style="margin-top: 30px;" class="btn btn-danger" onclick="exportTableToExcel('Daily-Cashier-Report', 'Daily-Cashier-Report')">Generate Excel Report</button>

    </div>

    <div class="tab-pane fade" id="weekly" role="tabpanel" aria-labelledby="weekly-tab">

        <div class="row" style="margin-top: 30px">
            <div class="col-xl-4 col-sm-4 mb-4" id="WeeklyCashPaymentDiv">
                <div class="card text-white bg-success o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeeklyCashPayment"></span> Cash Payment</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="WeeklyOnlinePaymentDiv">
                <div class="card text-white bg-warning o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeeklyOnlinePayment"></span> Online Payment</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="WeeklyCardPaymentDiv">
                <div class="card text-white bg-danger o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeeklyCardPayment"></span> Card Payment</div>
                    </div>
                </div>
            </div>

        </div>
        <!--        new tag-->
        <div class="row" style="margin-top: 30px">
            <div class="col-xl-6 col-sm-6 mb-6" id="WeeklyBTCPostPaidPaymentDiv">
                <div class="card text-white-50  o-hidden " style="background-color: #FF75B0">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeeklyBTCPostPaidPayment"></span> BTC PostPaid</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-6 mb-6" id="WeeklyBTCPrePaidPaymentDiv">
                <div class="card text-white-50  o-hidden " style="background-color: #A75AD2">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="WeeklyBTCPrePaidPayment"></span> BTCPrePaid </div>
                    </div>
                </div>
            </div>


        </div>
        <table id="weekly-Cashier-Report" style="display: none;margin-top: 30px;">


        </table>

        <button style="margin-top: 30px;" class="btn btn-danger" onclick="exportTableToExcel('weekly-Cashier-Report', 'weekly-Cashier-Report')">Generate Excel Report</button>


    </div>

    <div class="tab-pane fade" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
        <div class="row" style="margin-top: 30px">
            <div class="col-xl-4 col-sm-4 mb-4" id="MonthlyCashPaymentDiv">
                <div class="card text-white bg-success o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthlyCashPayment"></span> Cash Payment</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="MonthlyOnlinePaymentDiv">
                <div class="card text-white bg-warning o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthlyOnlinePayment"></span> Online Payment</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-sm-4 mb-4" id="MonthlyCardPaymentDiv">
                <div class="card text-white bg-danger o-hidden ">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthlyCardPayment"></span> Card Payment</div>
                    </div>
                </div>
            </div>

        </div>
        <!--        new tag-->
        <div class="row" style="margin-top: 30px">
            <div class="col-xl-6 col-sm-6 mb-6" id="MonthlyBTCPostPaidPaymentDiv">
                <div class="card text-white-50  o-hidden " style="background-color: #FF75B0">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-bed"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthlyBTCPostPaidPayment"></span> BTC PostPaid</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-sm-6 mb-6" id="MonthlyBTCPrePaidPaymentDiv">
                <div class="card text-white-50 o-hidden " style="background-color: #A75AD2">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fas fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5"> <span class="h3" id="MonthlyBTCPrePaidPayment"></span> BTCPrePaid </div>
                    </div>
                </div>
            </div>


        </div>

        <table id="Monthly-Cashier-Report" style="display: none;margin-top: 30px;">


        </table>

        <button style="margin-top: 30px;" class="btn btn-danger" onclick="exportTableToExcel('Monthly-Cashier-Report', 'Monthly-Cashier-Report')">Generate Excel Report</button>

    </div>
</div>







<script src="js/pages/cashierreport.js"></script>
<script src="js/charts/cashierreportChart.js"></script>
