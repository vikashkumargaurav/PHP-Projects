<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 06-Sep-18
 * Time: 10:03 AM
 */ ?>
<!-- Breadcrumbs-->
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Create Bill</li>
</ol>
<div class="row">
    <div class="col-lg-12">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create Bill
            </div>
            <div class="card-body">
                <input type="hidden"  id="ZingoCommission">
<!--                <input type="hidden" id="RoomTypeName">-->
                <p style="font-weight: bold">Property Details</p>
                <hr style="border-top: 2px solid #9E9E9E;">
                <div class="form-group">

                    <div class="row">
                        <div class="col">
                            <label for="activityinput">Select Database</label>
                            <select class="form-control" id="activityinput" onchange="getBookingTypeChange(event);">
                                <option value="other">OTHERS</option>
                                <option value="database">DATABASE</option>

                            </select>
                        </div>
                        <div class="col" id="propertyNameselectDiv">
                            <label for="activityinput">Select Property Name</label>
                            <select class="form-control" id="PropetyName" onchange="getHotelId(event);">

                            </select>
                        </div>
                        <div class="col" id="PropertyNameDiv">
                            <label for="exampleInputEmail1">Property Name</label>
                            <input type="text" class="form-control" id="PropetyNameInput" aria-describedby="nameHelp" placeholder="Property Name">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">City </label>
                            <input type="text" id="City" class="form-control" placeholder="City">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Location</label>
                            <input type="text" id="Localty" class="form-control" placeholder="Localty">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Hotelier Email</label>
                            <input type="text" class="form-control" id="HotelEmail" aria-describedby="nameHelp" placeholder="Hotelier Email">
                        </div>
                    </div>
                </div>

                <p style="font-weight: bold">Booking Source</p>
                <hr style="border-top: 1px solid #9E9E9E;">
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">Booking Id</label>
                            <input type="text" class="form-control" id="BookingId" aria-describedby="nameHelp" placeholder="BookingId">
                        </div>
                        <div class="col">
                            <label for="BookingSourceType">Select Booking Source Type</label>
                            <select class="form-control" id="BookingSourceType" onchange="getBookingSourceTypeChage(event);">
                                <option value="ota">OTA</option>
                                <option value="b2b">B2B</option>
                                <option value="offline">OFFLINE</option>

                            </select>
                        </div>
                        <div class="col">
                            <label for="BookingSource">Select Booking Source </label>
                            <select class="form-control" id="BookingSource" onchange="getBookingSourceNameChange(event);">


                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="RatePlaneName">Select Rate Plane</label>
                            <select class="form-control" id="RatePlaneName" onchange="getRatePlaneOnChage(event);">
                                <option value="CP">CP</option>
                                <option value="EP">EP</option>
                                <option value="AP">AP</option>
                                <option value="MAP">MAP</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Inclusion</label>
                            <input type="text" class="form-control" id="Inclusion" aria-describedby="nameHelp" placeholder="Inclusion" disabled>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">Booking Date </label>
                            <input type="text" id="BookingDate" class="form-control" placeholder="Booking Date ">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Check In Date</label>
                            <input type="text" id="checkindate" onchange="getCheckInDateOnChange(event)" class="form-control" placeholder="Check In Date">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Check Out Date</label>
                            <input type="text" class="form-control" id="checkoutdate"  aria-describedby="nameHelp" placeholder="Check Out Date">
                        </div>
                    </div>
                </div>
                <p style="font-weight: bold">Guest Details</p>
                <hr style="border-top: 2px solid #9E9E9E;">
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">Guest Mobile No </label>
                            <input type="text" id="GuestMobile" class="form-control" placeholder="Guest Mobile No">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Guest Name</label>
                            <input type="text" id="GuestName"  class="form-control" placeholder="Guest Name">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Guest Email</label>
                            <input type="text" class="form-control" id="GuestEmail" aria-describedby="nameHelp" placeholder="Guest Email">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Total Guest</label>
                            <input type="number" class="form-control" id="TotalGuest" value="1" aria-describedby="nameHelp" placeholder="Total Guest">
                        </div>
                    </div>
                </div>
                <p style="font-weight: bold">Tarrfi Details</p>
                <hr style="border-top: 1px solid #9E9E9E;">
                <div class="form-group">
                    <div class="row">
                        <div class="col" id="RoomTypeSelectDiv">
                            <label for="RatePlaneName">Select Room Type</label>
                            <select class="form-control" id="RoomType" onchange="onChangeRoomType(event)">

                            </select>
                        </div>
                        <div class="col" id="RoomTypeDiv">
                            <label for="exampleInputEmail1">RoomType</label>
                            <input type="text" class="form-control" id="RoomTypeInput"  aria-describedby="nameHelp" placeholder="RoomType" >
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">No Of Rooms</label>
                            <select class="form-control" id="NoOfRooms">

                            </select>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Payment Mode</label>
                            <select class="form-control" id="PaymentMode" onchange="getOnChangePaymentMode(event)">

                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">Room Charge </label>
                            <input type="text" id="RoomCharge" class="form-control" placeholder="Room Charge">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Extra Charge</label>
                            <input type="text" id="ExtraCharge"  class="form-control"  placeholder="Extra Charge">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Hotel Tax</label>
                            <input type="text" class="form-control" id="HotelTax"  aria-describedby="nameHelp" placeholder="Hotel Tax">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Total Amount with tax </label>
                            <input type="text" id="TotalAmountWithTax" class="form-control" placeholder="Total Amount with tax" disabled>
                        </div>
                    </div>
                </div>

               <div class="" id="OTADiv"><!--OTA DIV start -->
                   <p style="font-weight: bold">OTA Details</p>
                   <hr style="border-top: 1px solid #9E9E9E;">
                <div class="form-group">
                    <div class="row">
                        <div class="col" id="OTACommissionAmountDiv">
                            <label for="exampleInputEmail1">OTA Commission Amount </label>
                            <input type="text" id="OTACommissionAmount" value="0" class="form-control" placeholder="OTA Commission Amount ">
                        </div>
                        <div class="col" id="OTAGstDiv">
                            <label for="exampleInputEmail1">OTA GST</label>
                            <input type="text" id="OTAGst" value="0"  class="form-control"  placeholder="OTA GST">
                        </div>
                        <div class="col" id="OTAPercentageDiv">
                            <label for="exampleInputEmail1">OTA Percentage</label>
                            <input type="text" id="OTAPercentage" value="0"  class="form-control"  placeholder="OTA Percentage">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">OTA Commission( Including GST)</label>
                            <input type="text" class="form-control" id="OTACommissionIncludingGST"  aria-describedby="nameHelp" value="0" placeholder="OTA Commission( Including GST)" disabled>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col" id="OTAServiceFeeDiv">
                            <label for="exampleInputEmail1">OTA Service Fee </label>
                            <input type="text" id="OTAServiceFee" class="form-control" value="0" placeholder="OTAServiceFee ">
                        </div>
                        <div class="col" id="CustomerPaymentAtOTADiv">
                            <label for="exampleInputEmail1">Customer Payment at OTA</label>
                            <input type="text" id="CustomerPaymentAtOTA" value="0" class="form-control"  placeholder="Customer Payment at OTA">
                        </div>

                    </div>
                </div>
                   <div class="col-auto my-1">
                       <div class="custom-control custom-checkbox mr-sm-2">
                           <input type="checkbox" class="custom-control-input" id="AddOnServiceCheckBox">
                           <label class="custom-control-label" for="AddOnServiceCheckBox">Add-On-Service</label>
                       </div>
                   </div>
                   <div class="form-group" id="AddOnServiceDiv">
                       <div class="row">
                           <div class="col">
                               <label for="exampleInputEmail1">Add-On Services </label>
                               <input type="text" id="AddOnServicesName" class="form-control" placeholder="Add-On Services ">
                           </div>
                           <div class="col">
                               <label for="exampleInputEmail1">Add-On Services Amount</label>
                               <input type="text" id="AddOnServicesAmount" value="0"  class="form-control"  placeholder="Add-On Services Amount">
                           </div>
                           <div class="col">
                               <label for="RatePlaneName">Select Add-On Mode</label>
                               <select class="form-control" id="AddOnMode" >
                                   <option value="CP">PaY@HOTEL</option>
                                   <option value="EP">PREPAID/ONLINE</option>
                               </select>
                           </div>
                       </div>
                   </div>

               </div><!--OTA DIV END -->
                <button id="calculate" class="btn btn-secondary">Calculate</button>
                <div class="" id="TotalCalculationDiv" style="margin-top: 20px;">
                    <p style="font-weight: bold">Total Calculatons</p>
                    <hr style="border-top: 1px solid #9E9E9E;">
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">Total No Of Nights </label>
                            <input type="text" id="TotalNoOfNights" class="form-control" placeholder="TotalNoOfNights " disabled>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">ZINGOHOTELS Total Commission </label>
                            <input type="text" id="ZingoHotelsTotalCommission"  class="form-control" value="0"  placeholder="ZingoHotelsCommission">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">Net Amount </label>
                            <input type="text" id="NetAmount" class="form-control" placeholder="NetAmount " disabled>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">ARR</label>
                            <input type="text" id="ARR"  class="form-control"  placeholder="ARR" disabled>
                        </div>

                    </div>
                </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Comments</label>
                    <textarea type="text" class="form-control" id="Comments" aria-describedby="nameHelp" placeholder="Comments"></textarea>
                </div>

<!--                <div class="btn-group">-->
<!--                    <button type="button" class="btn btn-danger">Invoice</button>-->
<!--                    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
<!--                        <span class="sr-only">Toggle Dropdown</span>-->
<!--                    </button>-->
<!--                    <div class="dropdown-menu">-->
<!--                        <a class="dropdown-item" id="bookingInvoice">Booking</a>-->
<!--                        <div class="dropdown-divider"></div>-->
<!--                        <a class="dropdown-item" id="guestInvoiceBtn">Guest</a>-->
<!--                        <div class="dropdown-divider"></div>-->
<!--                        <a class="dropdown-item" href="#">B2B</a>-->
<!---->
<!---->
<!--                    </div>-->
<!--                </div>-->
                <button id="bookingBtn" class="btn btn-primary">Book</button>

            </div>
            <div class="card-footer small text-muted"></div>
        </div>
    </div>

</div>
<script src="js/pages/createbill.js"></script>
<script src="js/pages/generatebill.js"></script>