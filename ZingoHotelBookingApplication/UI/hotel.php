<?php
if (isset($_GET['hotelId'])) {
    echo '<script> var hotelId =' . trim($_GET['hotelId']) . '</script>';
}
?>

<style>
    .btn-sq-lg {
        width: 150px !important;
        height: 150px !important;
    }

    .btn-sq {
        width: 120px !important;
        height: 70px !important;
        font-size: 10px;
    }

    .btn-sq-sm {
        width: 50px !important;
        height: 50px !important;
        font-size: 10px;
    }

    .btn-sq-xs {
        width: 25px !important;
        height: 25px !important;
        padding: 2px;
    }


</style>

<!-- Breadcrumbs-->
<ul class="nav nav-pills" id="ProfileRightsnavDiv">

</ul>
<br>
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a style="cursor: pointer" class="text text-primary" onclick="redirectToDashBoard()">Dashboard</a>
    </li>
    <li style="font-weight: 700" class="breadcrumb-item active"><span id="HotelName"></span></li>
</ol>


<div class="row">
    <div class="col-xl-3 col-sm-6 mb-3" style="cursor: pointer" id="arrivalPop" data-toggle="modal"
         data-target="#showBookingDataPop">
        <div class="card text-white bg-success o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fa fa-bed"></i>
                </div>
                <div class="mr-5"><span class="h3" id="ExpectedCheckIn"></span> Arrival</div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3" style="cursor: pointer" data-toggle="modal" id="departurePop"
         data-target="#showBookingDataPop">
        <div class="card text-white bg-warning o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5"><span class="h3" id="ExpectedCheckOut"></span> Departure</div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3" style="cursor: pointer" data-toggle="modal" id="bookingPop"
         data-target="#showBookingDataPop">
        <!--    <div class="col-xl-3 col-sm-6 mb-3"  id="bookingPop" style="cursor: pointer" >-->
        <div class="card text-white bg-danger o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-shopping-cart"></i>
                </div>
                <div class="mr-5"><span class="h3" id="TodayBookingCount"></span> Booking</div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3" id="stayPop" style="cursor: pointer" data-toggle="modal"
         data-target="#showBookingDataPop">
        <div class="card text-white  o-hidden " style="background-color: #FF5722!important">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-life-ring"></i>
                </div>
                <div class="mr-5"><span class="h3" id="totalOccupiedRoomByActiveStatus"></span> Stay</div>
            </div>
        </div>
    </div>


    <!-- Modal for Arrival, Departure,  Booking, Stay -->
    <div class="modal fade" id="showBookingDataPop" tabindex="-1" role="dialog"
         aria-labelledby="showBookingModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-danger" id="showBookingModalCenterTitle"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body " id="showBookingRelatedDataBody">

                </div>
            </div>
        </div>
    </div>

</div>


<div class="row">
    <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white  o-hidden " style="background-color: var(--purple)!important">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fa fa-money-bill  "></i>
                </div>
                <div class="mr-5"><span class="h3" id="DailyRevenueTotalCost"></span> Today Revenue</div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white  o-hidden " style="    background-color: #e83e8cad!important;">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-money-bill"></i>
                </div>
                <div class="mr-5"><span class="h3" id="DailyARR"></span> Avg Daily Revenue</div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3" id="sevenDayRevDiv">
        <div class="card text-white  o-hidden " style="background-color: #607D8B!important;">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-money-bill"></i>
                </div>
                <div class="mr-5"><span class="h3" id="SevenDayRevenueTotalCost"></span> Seven Day Revenue</div>
            </div>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3 " id="tillDateDiv">
        <div class="card text-white   o-hidden " style="background-color:#2196F3!important;">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-money-bill"></i>
                </div>
                <div class="mr-5"><span class="h3" id="TotalAmount"></span> Till Date</div>
            </div>
        </div>
    </div>
</div>


<div class="row">

    <!--stay view-->
    <div id="stayViewMainContainer" class="col-lg-6">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Stay View <span class="h5" id="CurrentDate"></span></div>
            <div class="card-body">
                <div class="row" style="margin-top: 20px;" id="stayViewOfRooms">
                    <div class="col-12 " style="margin-bottom: 30px;">
                        <div class="row" style="margin-top: 20px;">
                            <div class="col">
                                <h5><i style="color: #FF0000;" class="fa fa-circle" aria-hidden="true"></i> Active</h5>
                            </div>
                            <div class="col">
                                <h5><i style="color: #0000FF;" class="fa fa-circle" aria-hidden="true"></i> Advance</h5>
                            </div>
                            <div class="col">
                                <h5><i style="color: #ebea3a;" class="fa fa-circle" aria-hidden="true"></i> Unclean</h5>
                            </div>
                            <div class="col">
                                <h5><i style="color: #800000;" class="fa fa-circle" aria-hidden="true"></i> Out of Order
                                </h5>
                            </div>


                        </div>
                        <div class="row" style="margin-top: 20px;">
                            <div class="col">
                                <h5><i style="color: #000000;" class="fa fa-circle" aria-hidden="true"></i> Blocked</h5>
                            </div>
                            <div class="col">
                                <h5><i style="color: #0000FF;" class="fa fa-circle" aria-hidden="true"></i> Delay</h5>
                            </div>
                            <div class="col">
                                <h5><i style="color: #77c54b;" class="fa fa-circle" aria-hidden="true"></i> Available
                                </h5>
                            </div>
                            <div class="col">
                                <h5><i style="color: #808080;" class="fa fa-circle" aria-hidden="true"></i> Depature
                                </h5>
                            </div>

                        </div>
                    </div>
                    <hr>
                </div>

                <!--Notification View -->
                <div id="todayQuickBookNotfContainer" style="margin-top: 20px; display: none; margin-bottom: 20px "
                     class="col-12 panel-body">
                    <div class="card ">
                        <div class="card-header">
                            <i class="fas fa-bed"></i>
                            Today's Quick Bookings
                        </div>
                        <div class="card-body" id="QuickBookingDiv" style="max-height: 315px;overflow: scroll">

                        </div>
                        <!--            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
                    </div>
                </div>


            </div>
            <!--            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
        </div>
    </div>
    <div class="col-lg-6" id="notificationMainContainer">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-pie"></i>
                Notifications
            </div>
            <div class="card-body" id="NotificationsDiv" style="max-height: 330px;overflow: scroll">

            </div>
            <!--            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
        </div>
    </div>
</div>


<!-- Modal for Bocking Rooms & QuickBooking -->

<button style="display: none" id="activeBookingModalBtn" type="button" class="btn btn-primary" data-toggle="modal"
        data-target="#activeBookingModal">
    ModalBookingSelction
</button>

<div class="modal fade" id="activeBookingModal" tabindex="-1" role="dialog" aria-labelledby="activeBookingTitle"
     aria-hidden="false">
    <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-danger" id="activeBookingTitle"> Choose an option </h5>
                <button type="button" class="close" id="hotelPopClose" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="container mb-3 ">
                <div class="row justify-content-around align-items-center ">
                    <div class="col-sm-12  text-white  col-md-6  ">
                        <a href="#" id="blockAvailRoom" class="btn btn-sq btn-danger ">
                            <i id="blockAvailRoom" class="fa fa-ban fa-2x"></i><br/><br/>Block Room
                        </a>

                    </div>

                    <div class="col-sm-12 text-white col-md-6 ">
                        <a href="#" id="bookAvailRoom" class="btn btn-sq btn-success">
                            <i id="bookAvailRoom" class="fa fa-bed fa-2x"></i><br/><br/>Book Room
                        </a>

                    </div>

                </div>

            </div>

        </div>
    </div>
</div>


<button style="display: none" id="StayViewModel" type="button" class="btn btn-primary" data-toggle="modal"
        data-target="#exampleModal">
    Launch demo modal
</button>
<!-- Modal  for stay-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document" style="max-width: 80%;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><span>Room Stay View </span><span
                            class="badge badge-success" id="ShowRoomNo"></span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
                    <div class="jumbotron text-center"
                         style="padding: 2rem 2rem;background-color: #dc3545db;color: white">
                        <h4 id="FirstName"></h4>

                        <p id="ShowBookingId"></p>
                        <p><span id="ShowAdult"></span> <span id="ShowChild"></span></p>
                    </div>
                    <div class="jumbotron text-center" style="padding: 1rem 2rem;background-color:white;color: black">
                        <div class="row">
                            <div class="col-6">
                                <h6 class="float-left"><span id="CheckInDate"></span><br>
                                    <small>CheckInDate</small>
                                </h6>
                            </div>
                            <div class="col-6">
                                <h6 class="float-right"><span id="CheckOutDate"></span><br>
                                    <small>CheckOutDate</small>
                                </h6>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-6">
                                <h6 class="float-left"><span>12:00</span><br>
                                    <small>CheckInTime</small>
                                </h6>
                            </div>
                            <div class="col-6">
                                <h6 class="float-right"><span>12:00</span><br>
                                    <small>CheckOutTime</small>
                                </h6>
                            </div>

                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-6">
                                <h6 class="float-left">TotalAmount

                                </h6>
                            </div>
                            <div class="col-6">
                                <h6 class="float-right"><span id="ShowTotalAmount"></span><br>
                                </h6>
                            </div>
                            <hr>
                            <!--                            <div style="display: none" class="col-12" id="showPaymentsDiv">-->
                            <!---->
                            <!--                            </div>-->
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-6">
                                <h6 class="float-left">BalanceAmount
                                </h6>
                            </div>
                            <div class="col-6">
                                <h6 class="float-right"><span id="ShowBalanceAmount"></span><br>

                                </h6>
                            </div>
                        </div>

                        <a style="display: none;margin-top:20px;" id="viewServiceBtn" class="btn btn-outline-light"
                           data-toggle="collapse" href="#multiCollapseExample1" role="button"
                           aria-expanded="false" aria-controls="multiCollapseExample1">Services</a>
                        <div style="display: none" class="row" id="viewServiceDiv">
                            <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample1">
                                    <div class="card card-body" id="servicesDiv">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <input type="hidden" id="BookingId" class="form-control" placeholder="BookingId" disabled>
                    <input type="hidden" id="BookingNumber" class="form-control" placeholder="BookingNumber" disabled>
                    <input type="hidden" id="RoomId" class="form-control" placeholder="Room No (ID)" disabled>
                    <input type="hidden" id="TravellerId" class="form-control" placeholder="TravellerId" disabled>
                    <input type="hidden" id="SellRate" class="form-control" placeholder="SellRate" disabled>
                    <input type="hidden" id="GSTAmount" class="form-control" placeholder="GSTAmount" disabled>
                    <input type="hidden" id="TotalAmount" class="form-control" placeholder="TotalAmount" disabled>

                    <button class="btn btn-danger" id="addServiceBtn"><i class="fas fa-plus"></i>Add Service</button>
                    <button class="btn btn-danger" id="addPaymentBtn"><i class="fas fa-plus"></i>Add Payment</button>

                    <div class="ServiceDiv" id="ServiceDiv" style="display: none; margin-top: 30px">
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
                        <button type="button" id="AddServiceApiPostBtn" class="btn btn-primary">Add</button>
                    </div>
                    <div class="PaymentDiv" id="PaymentDiv" style="display: none;margin-top: 30px">
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
                                    <input type="text" id="PaymentAmount" class="form-control"
                                           placeholder="Payment Amount">
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
                                    <textarea rows="3" style="margin-left: 10px;color: red" id="Remarks"
                                              class="form-control">

                                    </textarea>
                                </div>

                            </div>

                        </div>
                        <button type="button" id="AddPaymentApiPostBtn" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer" id="StayViewBookingModelFooter">


            </div>
        </div>
    </div>
</div>


<!-- Allocate room to quick booking model -->
<button style="display: none" id="selectRoomModel" type="button" class="btn btn-primary" data-toggle="modal"
        data-target="#AllocateModal">
    Launch demo modal
</button>
<!-- Modal -->
<div class="modal fade" id="AllocateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Select Room</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container">
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
<!-- Allocate room to quick booking model -->

<!--new design pie chart below-->
<div>

    <div class="row" style="margin-top: 30px;margin-bottom: 30px;">
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-chart-pie"></i>
                    Hotel Rating
                </div>
                <div class="card-body">
                    <div class="c100  big" id="HotelRating">
                        <span id="HotelRatingPercentvalue">0*</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                </div>
                <!--            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-chart-pie"></i>
                    Occupancy Percentage
                </div>
                <div class="card-body">
                    <div class="c100  big" id="OccupancyPercentage">
                        <span id="OccupancyPercentvalue">0%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                </div>
                <!--            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-chart-pie"></i>
                    Today Booking Percentage
                </div>
                <div class="card-body">
                    <div class="c100  big" id="TodayBookingCountDiv">
                        <span id="TodayBookingCountPercentvalue">0%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                </div>
                <!--            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
            </div>
        </div>
    </div>

    <!--CHART-->
    <!-- Stay and revenue Chart-->
    <div class="row">
        <div class="col-lg-8" id="revenueGraphDiv">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-chart-bar"></i>
                    Revenue Graph
                </div>
                <div class="card-body">
                    <canvas id="myRevenuePieChart" width="100%" height="50"></canvas>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        </div>
        <div class="col-lg-4 ">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-chart-pie"></i>
                    Stay View (Pie Chart)
                </div>
                <div class="card-body">
                    <canvas id="myPieChart" width="100%" height="100"></canvas>
                </div>
                <!--            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>-->
            </div>
        </div>

    </div>
    <!-- Stay and revenue Chart-->
    <!-- Cashier Chart-->
    <div class="row" style="margin-top: 30px;margin-bottom: 30px;">
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-chart-pie"></i>
                    Cashier Report (Daily)
                </div>
                <div class="card-body">
                    <canvas id="myDailyCashierPieChart" width="100%" height="100"></canvas>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        </div>
        <div class="col-lg-4" id="weeklyPieDiv">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-chart-pie"></i>
                    Cashier Report (Weekly)
                </div>
                <div class="card-body">
                    <canvas id="myweeklyCashierPieChart" width="100%" height="100"></canvas>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        </div>
        <div class="col-lg-4" id="monthlyPieDiv">
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-chart-pie"></i>
                    Cashier Report (Monthly)
                </div>
                <div class="card-body">
                    <canvas id="mymonthlyCashierPieChart" width="100%" height="100"></canvas>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
            </div>
        </div>


    </div>
    <!-- Cashier Chart-->
    <!--CHART-->
</div>


<script src="js/pages/hotel.js"></script>
<script src="js/pages/stayview.js"></script>
<script src="js/charts/DashboardChart.js"></script>

<!-- Chart -->
<!--<script src="js/pages/cashierreport.js"></script>-->
<script src="js/charts/cashierreportChart.js"></script>
<!-- Chart -->

<!--<script src="js/demo/chart-area-demo.js"></script>-->
<!--<script src="js/demo/chart-bar-demo.js"></script>-->
<!--<script src="js/demo/chart-pie-demo.js"></script>-->