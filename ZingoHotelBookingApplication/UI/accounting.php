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
    <li style="font-weight: 700" class="breadcrumb-item active"><span id="HotelName"></span> Hotel Account Settlement
    </li>
</ol>

<ul class="nav nav-tabs" id="myAccountingTab" role="tablist">


    <li class="nav-item">
        <a class="nav-link active" id="settlementTab" data-toggle="tab" href="#accountSettlements" role="tab"
           aria-controls="accountSettlements" aria-selected="true">Account Settlements</a>
    </li>

    <li class="nav-item">
        <a class="nav-link" id="reconcilationTab" data-toggle="tab" href="#reconsilations" role="tab" aria-controls="reconsilations"
           aria-selected="false">Reconciliation</a>
    </li>

</ul>





<!--Tab Contents-->
<div class="tab-content" id="myTabContent">

    <!--Tab Contents 1-->
    <div class="tab-pane fade show active" id="accountSettlements" role="tabpanel" aria-labelledby="account-settlement-tab">

        <div class="card mb-3" id="">
            <div class="card-header">
                <i class="fas fa-table"></i>
                Account Settlement
            </div>
            <div class="card-body" style="align-self: center">

                <div class="form-inline">
                    <div class="form-group" style="padding: 10px;">
                        <!--                <label  for="checkindate">Check In</label>-->
                        <input style="margin-left: 10px;" type="hidden" class="form-control"
                               onchange="getCheckInDate(event)"
                               id="checkindate" placeholder="Check In">
                    </div>
                    <div class="form-group" style="padding: 10px;">
                        <!--                <label  for="checkoutdate">Check Out</label>-->
                        <input style="margin-left: 10px;" type="hidden" class="form-control" id="checkoutdate"
                               placeholder="Check Out">
                    </div>

                    <div class="form-group ">
                        <!--                <label for="Settlement">Booking Status</label>-->
                        <select style="margin-left: 10px;color: red" id="SettlementDateRange" class="form-control">
                            <option value="">All</option>
                            <option value="LastDay">Last Day Settlement</option>
                            <option value="Week">Week Settlement</option>
                            <option value="Month">Month Settlement</option>

                        </select>
                    </div>

                    <div class="form-group ">
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


                </div>

            </div>
            <div class="card-footer small text-muted"></div>
        </div>
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-table"></i>
                Booking Data
            </div>
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
                            <th>Check Details(Audit)</th>
                            <th>Status</th>
                            <th>Booking Source</th>
                            <th>No Rooms</th>
                            <th>No of Nights</th>
                            <th>Total Room Nights</th>
                            <th> Room Charge</th>
                            <th>Extra Charges</th>
                            <th>Hotel Taxes</th>

                            <th>AuditingSellRate</th>
                            <th>AuditingGST</th>
                            <th>AuditingExtra</th>
                            <th>DifferenceAmount</th>
                            <th>(Audit Date)SettlementDate</th>
                            <th>(Audit Time)SettlementDate</th>
                            <th>CreatedBy</th>
                            <th>Remark</th>

                            <!--                    <th>Hotel Gross Charges</th>-->
                            <!--                    <th>Commission Charges</th>-->
                            <!--                    <th>Commission GST Charges</th>-->
                            <!--                    <th>Commission (Including GST)</th>-->
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

                        <tbody>

                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </div>
            <div class="card-footer small text-muted"><span id=""></span></div>

        </div>


        <button style="display: none" id="auditUpdateModel" type="button" class="btn btn-primary" data-toggle="modal"
                data-target="#exampleModal">
            Launch demo modal
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document" style="max-width: 75%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Audit Settlement</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col">
                                        <label for="BookingId">Booking Id </label>
                                        <input type="text" id="BookingId" class="form-control" placeholder="BookingId"
                                               disabled>
                                    </div>
                                    <div class="col">
                                        <label for="RoomId">Room Id</label>
                                        <input type="text" id="RoomId" class="form-control" placeholder="Room No (ID)"
                                               disabled>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <label for="TravellerId">TravellerId </label>
                                        <input type="text" id="TravellerId" class="form-control"
                                               placeholder="TravellerId"
                                               disabled>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <label for="CheckInDate">CheckInDate </label>
                                        <input type="text" id="CheckInDate" class="form-control"
                                               placeholder="CheckInDate"
                                               disabled>
                                    </div>
                                    <div class="col">
                                        <label for="CheckOutDate">CheckOutDate</label>
                                        <input type="text" id="CheckOutDate" class="form-control"
                                               placeholder="CheckOutDate"
                                               disabled>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <label for="SellRate">SellRate </label>
                                        <input type="number" id="SellRate" class="form-control" placeholder="SellRate"
                                               disabled>
                                    </div>
                                    <div class="col">
                                        <label for="GSTAmount">GSTAmount</label>
                                        <input type="number" id="GSTAmount" class="form-control" placeholder="GSTAmount"
                                               disabled>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <label for="ExtraCharges">ExtraCharges </label>
                                        <input type="number" id="ExtraCharges" class="form-control"
                                               placeholder="ExtraCharges"
                                               disabled>
                                    </div>
                                    <div class="col">
                                        <label for="TotalAmount">TotalAmount</label>
                                        <input type="number" id="TotalAmount" class="form-control"
                                               placeholder="TotalAmount"
                                               disabled>
                                    </div>
                                </div>
                                <hr>
                                <!--                        Audit fields-->
                                <div class="row">
                                    <div class="col">
                                        <label for="PaymentMode">PaymentMode </label>
                                        <input type="text" id="PaymentMode" class="form-control"
                                               placeholder="PaymentMode">
                                    </div>
                                    <div class="col">
                                        <label for="PaymentStatus">PaymentStatus</label>
                                        <select style="margin-left: 10px;color: red" id="PaymentStatus"
                                                class="form-control">
                                            <!--                                    <option selected disabled>PaymentStatus</option>-->
                                            <option value="Received By OTA">Received By OTA</option>
                                            <option value="Received By ZINGO">Received By ZINGO</option>
                                            <option value="Received By Hotel">Received By Hotel</option>
                                            <option value="Received By Hotel">Received By Hotel</option>
                                            <option value="Payment Done">Payment Done</option>
                                            <option value="Pending">Pending</option>


                                        </select>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <label for="AuditingSellRate">AuditingSellRate </label>
                                        <input type="number" id="AuditingSellRate" class="form-control"
                                               placeholder="AuditingSellRate">
                                    </div>
                                    <div class="col">
                                        <label for="AuditingGST">AuditingGST</label>
                                        <input type="number" id="AuditingGST" class="form-control"
                                               placeholder="AuditingGST">
                                    </div>
                                </div>
                                <input type="hidden" id="AuditSettlementId">
                                <div class="row">
                                    <div class="col">
                                        <label for="AuditingExtra">AuditingExtra </label>
                                        <input type="number" id="AuditingExtra" class="form-control"
                                               placeholder="AuditingExtra">
                                    </div>
                                </div>
                                <!--                        <div class="row">-->
                                <!--                            <div class="col" style="padding: 10px;">-->
                                <!--                                <button style="width: 100%" class="btn btn-danger">Calculate</button>-->
                                <!--                            </div>-->
                                <!--                        </div>-->
                                <hr>
                                <div class="row">
                                    <div class="col">
                                        <label for="DifferenceAmount">DifferenceAmount </label>
                                        <input type="number" id="DifferenceAmount" class="form-control"
                                               placeholder="DifferenceAmount" disabled>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <label for="Remark">Remark </label>
                                        <textarea type="text" id="Remark" class="form-control" rows="3"
                                                  placeholder="Remark"></textarea>
                                    </div>
                                </div>

                                <!--                        Audit fields-->
                            </div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" id="AuditUpdateBtn" class="btn btn-primary">AuditUpdate</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Tab Contents 2-->
    <div class="tab-pane fade " id="reconsilations" role="tabpanel" aria-labelledby="reconcilation-tab" >

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
                    <table class="table table-bordered table-hover" id="bookingTable1" width="100%" cellspacing="0">
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
                            <th>Total </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th id="totalRoomNightFooter1"></th>
                            <th id="RoomChargeFooter1"></th>
                            <th id="ExtraChargeFooter1"></th>
                            <th id="HotelTaxFooter1"></th>
                            <th id="GrossChargesFooter1"></th>
                            <th id="CommissionChargesFooter1"></th>
                            <th id="CommissionGSTChargesFooter1"></th>
                            <th id="CommissionIncludingGSTFooter1"></th>
                            <th id="NettAmountFooter1"></th>
                            <th></th>
                            <th id="CustomerPaidatHotelFooter1"></th>
                            <th id="OTAToPayHotelFooter1"></th>
                            <th id="HoteltoPayOTAFooter1"></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            <div class="card-footer small text-muted"><span id=""></span></div>

        </div>
        <input type="hidden" id="totalHotelTax1" />
    </div><!--tab 2  item end -->

</div>

<script src="js/pages/accounting.js"></script>
<script src="js/pages/audit.js"></script>
<script src="js/pages/reconsilation.js"></script>
