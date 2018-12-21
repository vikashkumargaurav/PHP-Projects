<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<script src="js/sb-admin.min.js"></script>
<!-- Sticky Footer -->
<!--<footer class="sticky-footer">
    <div class="container my-auto">
        <div class="copyright text-center my-auto">
            <span>ZingoHotels </span>
        </div>
    </div>
</footer>-->

<!-- /.content-wrapper -->

</div>

<!-- GST Calculator Popup -->
<div class="modal fade" id="quickGstPopModal" tabindex="-1" role="dialog"
     aria-labelledby="gstPopTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 70%;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="gstPopTitle">GST Calculator</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-calculator"></i>
                        GST Calculator
                    </div>
                    <div class="card-body" >

<!--                         calculator page starts-->

                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link " id="Inclusive-tab" data-toggle="tab" href="#Inclusive" role="tab" aria-controls="Inclusive" aria-selected="true">Inclusive GST</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="Exclusive-tab" data-toggle="tab" href="#Exclusive" role="tab" aria-controls="Exclusive" aria-selected="false">Exclusive GST</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade  " id="Inclusive" role="tabpanel" aria-labelledby="Inclusive-tab">
                                <div class="row" style="padding: 30px;">
                                    <div class="col-md-6 " >
                                        <form>
                                            <div class="form-group">
                                                <label for="inclusivetotalamount">Total Amount</label>
                                                <input type="number" class="form-control" id="inclusivetotalamount" aria-describedby="emailHelp" placeholder="Total Amount" >
                                            </div>

                                            <div class="form-group">
                                                <label for="inclusivegstpercentage">GST Percentage</label>
                                                <input type="number" class="form-control" id="inclusivegstpercentage" aria-describedby="emailHelp" placeholder="GST Percentage" disabled>
                                            </div>

                                            <div class="form-group">
                                                <label for="inclusivegstamount">GST Amount</label>
                                                <input type="number" class="form-control" id="inclusivegstamount" aria-describedby="emailHelp" placeholder="GST Amount" disabled>
                                            </div>


                                            <div class="form-group">
                                                <label for="inclusivesellRate">Sell Rate</label>
                                                <input type="number" class="form-control" id="inclusivesellRate" aria-describedby="emailHelp" placeholder="sellRate" disabled>
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show active" id="Exclusive" role="tabpanel" aria-labelledby="Exclusive-tab">
                                <div class="row" style="padding: 30px;">
                                    <div class="col-md-6 " >
                                        <form>
                                            <div class="form-group">
                                                <label for="sellRate">Sell Rate</label>
                                                <input type="number" class="form-control" id="sellRate" aria-describedby="emailHelp" placeholder="sellRate" >
                                            </div>

                                            <div class="form-group">
                                                <label for="gstpercentage">GST Percentage</label>
                                                <input type="number" class="form-control" id="gstpercentage" aria-describedby="emailHelp" placeholder="GST Percentage" disabled>
                                            </div>

                                            <div class="form-group">
                                                <label for="gstamount">GST Amount</label>
                                                <input type="number" class="form-control" id="gstamount" aria-describedby="emailHelp" placeholder="GST Amount" disabled>
                                            </div>

                                            <div class="form-group">
                                                <label for="totalamount">Total Amount</label>
                                                <input type="number" class="form-control" id="totalamount" aria-describedby="emailHelp" placeholder="Total Amount" disabled>
                                            </div>



                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
<!-- GST Calculator Popup Ends -->

<!-- DirectRoomBooking modal -->
<?php  include 'roombooking.php' ?>
<!---->

<!--Quick Search-->
<div class="modal fade" id="quickSearchModal" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 70%;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Quick Search</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-table"></i>
                        Search
                    </div>
                    <div class="card-body" >

                        <div class="form-inline">
                            <div class="form-group" style="padding: 10px;">
                                <label for="from">Booking Id</label>
                                <input style="margin-left: 10px;" type="text" class="form-control" id="searchbyBookingId"
                                       placeholder=" Search by Booking Id">
                            </div>
                            <div class="form-group" style="padding: 10px;">
                                <label for="to">Phone No</label>
                                <input style="margin-left: 10px;" type="text" class="form-control" id="mobilenosearch"
                                       placeholder="Search by Phone">
                            </div>

                            <div class="form-group ml-5" >
                                <input class="form-control btn btn-success" type="submit" value="Search" id="searchNow">
                            </div>

                        </div>

                        <!--Table -->
                        <div class="card">
                        <div class="table-responsive">
                            <table class="table table-bordered table-hover" id="tableSearch" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                         <th>Booking Id</th>        <!--1-->
                                        <th> Name</th>     <!--2-->
                                        <th>Booking Plan</th>       <!--4-->
                                       <!-- <th>Traveller Id</th> -->      <!--5-->
                                        <th>Booking Date</th>       <!--6-->
                                        <!--<th>Booking Time</th>  -->     <!--7-->
                                        <th>Check In</th>           <!--8-->
                                        <th>Check Out</th>          <!--9-->
                                        <th>No of Adults</th>       <!--10-->
                                        <th>No of Child</th>        <!--11-->
                                        <th>Booking source Type</th> <!--12-->
                                        <th>Booking source</th>       <!--13-->
                                        <th>Booking status</th>       <!--14-->
                                        <th>Room category</th>          <!--16-->
                                        <th>Sell Rate</th>              <!--17-->
                                        <th>Total Amount</th>           <!--18-->
                                       <!-- <th>Room Id</th> -->               <!--19-->
                                        <th>Duration of Stay</th>       <!--20-->
                                        <!--<th> OTA Booking Id</th>-->          <!--22-->
                                        <!--<th> Traveller Agent Id</th>-->     <!--23-->
                                        <th> OTA Commission Amount</th>    <!--24-->
                                        <th> OTA Commission GSTAmount</th>  <!--25-->
                                        <th> OTA Total Commission Amount</th><!--26-->
                                        <th> OTA To Pay Hotel</th>            <!--27-->
                                        <th> Hotel To Pay OTA</th>            <!--28-->
                                        <th> Zingo Commission</th>            <!--29-->
                                        <th> Payment Status</th>              <!--30-->
                                    </tr>
                                </thead>
                                <tbody>
                                    <!--Here dynamic data wil be added-->
                                </tbody>
                            </table>
                        </div>
                        </div>

                    </div>

                </div>

            </div>
         </div>
    </div>
</div>
<!--Quick Search-->




<!--Quick Booking-->
<div class="modal fade" id="QuickBookingModalCenter" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 75%;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Quick Booking</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card mb-3">
                    <div class="card-header">
                        <i class="fas fa-table"></i>
                        Booking
                    </div>
                    <div class="card-body" style="align-self: center">

                        <div class="form-inline">
                            <div class="form-group" style="padding: 10px;">
                                <label for="from">Check In</label>
                                <input style="margin-left: 10px;" type="text" class="form-control" id="Quickfrom"
                                       placeholder="Check In">
                            </div>
                            <div class="form-group" style="padding: 10px;">
                                <label for="to">Check Out</label>
                                <input style="margin-left: 10px;" type="text" class="form-control" id="Quickto"
                                       placeholder="Check Out">
                            </div>

                        </div>

                    </div>


                    <div class="form-group" style="padding: 10px;">
                        <p style="font-weight: bold">Guest Details</p>
                        <hr style="border-top: 2px solid #9E9E9E;">
                        <div class="row" style="padding: 10px;">
                            <div class="col">
                                <label for="exampleInputEmail1">Guest Mobile No </label>
                                <input type="text" id="QuickGuestMobile" class="form-control" placeholder="Guest Mobile No">
                            </div>
                            <div class="col">
                                <label for="exampleInputEmail1">Guest Name</label>
                                <input type="text" id="QuickGuestName" class="form-control" placeholder="Guest Name">
                            </div>
                            <div class="col">
                                <label for="exampleInputEmail1">Guest Email</label>
                                <input type="text" class="form-control" id="QuickGuestEmail" aria-describedby="nameHelp"
                                       placeholder="Guest Email">
                            </div>

                        </div>
                        <div class="row" style="padding: 10px;">
                            <div class="col">
                                <label for="gender">Gender</label>
                                <select class="form-control" id="Quickgender">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>
                            <div class="col">
                                <label for="exampleInputEmail1">Total Adults</label>
                                <input type="number" class="form-control" id="QuickTotalGuest" value="1"
                                       aria-describedby="nameHelp" placeholder="Total Adults">
                            </div>
                            <div class="col">
                                <label for="exampleInputEmail1">Total Childs</label>
                                <input type="number" class="form-control" id="QuickTotalChilds" value="0"
                                       aria-describedby="nameHelp" placeholder="Total Childs">
                            </div>
                        </div>
                    </div>

                    <div class="form-group" style="padding: 10px">
                        <p style="font-weight: bold">Tarrfi Details</p>
                        <hr style="border-top: 1px solid #9E9E9E;">
                        <div class="row">
                            <div class="col">
                                <label for="RatePlaneName">Select Rate Plane</label>
                                <select class="form-control" id="QuickRatePlaneName" onchange="getRatePlaneOnChage(event);">
                                    <option value="CP">CP</option>
                                    <option value="EP">EP</option>
                                    <option value="AP">AP</option>
                                    <option value="MAP">MAP</option>
                                </select>
                            </div>
                            <div class="col" id="RoomTypeSelectDiv">
                                <label for="RatePlaneName">Select Room Type</label>
                                <select class="form-control" id="QuickRoomType" >

                                </select>
                            </div>
                            <div class="col">
                                <label for="QuickBookingSourceType">Booking Source Type</label>
                                <select class="form-control" id="QuickBookingSourceType"
                                        onchange="getBookingSourceTypeChage(event);">
                                    <option value="OTA">OTA</option>
                                    <option value="B2B">B2B</option>
                                    <option value="OFFLINE">OFFLINE</option>

                                </select>
                            </div>
                            <div class="col">
                                <label for="QuickBookingSource">Select Booking Source </label>
                                <select class="form-control" id="QuickBookingSource"
                                        onchange="getBookingSourceNameChange(event);">
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
                                <select class="form-control" id="QuickNoOfRooms">

                                </select>
                            </div>

                        </div>
                    </div>
                    <div class="form-group" style="padding: 10px">
                        <div class="row">
                            <div class="col">
                                <label for="exampleInputEmail1">SellRate (Room Charge) </label>
                                <input type="text" id="QuicksellRate" class="form-control" placeholder="QuickSellRate">
                            </div>
                            <div class="col">
                                <label for="exampleInputEmail1">GST</label>
                                <input type="text" id="QuickGST" class="form-control" placeholder="QuickGST" disabled>
                            </div>
                            <div class="col">
                                <label for="exampleInputEmail1">GST Amount</label>
                                <input type="text" class="form-control" id="QuickGSTAmt" aria-describedby="nameHelp"
                                       placeholder="GST Amount" disabled>
                            </div>
                            <div class="col">
                                <label for="exampleInputEmail1">Total Amount with tax </label>
                                <input type="text" id="QuickTotalAmountWithTax" class="form-control"
                                       placeholder="Total Amount with tax" disabled>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button class="btn btn-danger" id="QuickBookingModelBtn">Quick Book</button>
            </div>
        </div>
    </div>
</div>
<!--Quick Booking -->
<!--Inventory Calendar Modal -->
<!--<button style="display: none" id="InventoryCalendarModalBtn" type="button" class="btn btn-primary" data-toggle="modal" data-target="#InventoryCalendarModal"></button>-->
<div class="modal fade" id="InventoryCalendarModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document" style="max-width: 660px;">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Inventory Calander</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="panel panel-default">
                            <div class="panel-body" id="NotificationsDiv">
                                <label for="InventoryfromDate">From</label>
                                <input style="padding: 5px;" type="text" id="InventoryfromDate" name="fromDate">
                                <label for="InventorytoDate">to</label>
                                <input style="padding: 4px;" type="text" id="InventorytoDate" name="toDate">
                                <button id="getAvilabilityRoomBtn" class="btn btn-outline-danger">Get Availability
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row" style="margin-top: 50px;">
                    <div class="col-12" id="InventoryAvilabilityRoomDiv">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Inventory Calander -->

<!-- Logout Modal-->
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a class="btn btn-danger" href="logout.php">Logout</a>
            </div>
        </div>
    </div>
</div>

<?php
if (isset($_GET['page_name'])) {
    if ((($_GET['page_name'] != 'quickbooking') || ($_GET['page_name'] == ' '))) {
        ?>
        <a class="myFixedPageRightsideBtn text-white" data-toggle="modal" id="" data-target="#QuickBookingModalCenter"
           style="cursor: pointer;width: 150px;background-color: rgba(234, 31, 2, 0.62)">
            <i class="fas fa-plus"></i><span style="margin-left: 10px;">Quick Booking </span>
        </a>

        <a class="myFixedPageBtn text-white" data-toggle="modal" data-target="#InventoryCalendarModal" style="">
            <i class="fas fa-plus"></i><span style="margin-left: 10px;"> Calender</span>
        </a>
        <script src="js/pages/commonQuickBooking.js"></script>
        <?php
    }
}
?>

</body>

</html>




