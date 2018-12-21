
<div >
    <button id="directRoomBookingTrigger" type="button" style="display: none" data-toggle="modal"
            data-target="#directRoomBookModal"></button>

    <div class="modal fade" id="directRoomBookModal" tabindex="-1" role="dialog" aria-labelledby="directRoomBookTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 75%;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="directRoomBookTitle"></h5>
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
                                    <input style="margin-left: 10px;" type="text" class="form-control"
                                           id="Quickfrom1"
                                           placeholder="Check In">
                                </div>
                                <div class="form-group" style="padding: 10px;">
                                    <label for="to">Check Out</label>
                                    <input style="margin-left: 10px;" type="text" class="form-control" id="Quickto1"
                                           placeholder="Check Out">
                                </div>

                                <div class="form-group" style="padding: 10px;">
                                    <div class="col text-center" id="bookedRoomNoDiv" style="padding-top: 20px;">

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div class="form-group" style="padding: 10px;">
                            <p style="font-weight: bold">Guest Details</p>
                            <hr style="border-top: 2px solid #9E9E9E;">
                            <div class="row" style="padding: 10px;">
                                <div class="col">
                                    <label for="exampleInputEmail1">Guest Mobile No </label>
                                    <input type="text" id="QuickGuestMobile1" class="form-control"
                                           placeholder="Guest Mobile No">
                                </div>
                                <div class="col">
                                    <label for="exampleInputEmail1">Guest Name</label>
                                    <input type="text" id="QuickGuestName1" class="form-control"
                                           placeholder="Guest Name">
                                </div>
                                <div class="col">
                                    <label for="exampleInputEmail1">Guest Email</label>
                                    <input type="text" class="form-control" id="QuickGuestEmail1"
                                           aria-describedby="nameHelp"
                                           placeholder="Guest Email">
                                </div>

                            </div>
                            <div class="row" style="padding: 10px;">
                                <div class="col">
                                    <label for="gender">Gender</label>
                                    <select class="form-control" id="Quickgender1">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>

                                    </select>
                                </div>
                                <div class="col">
                                    <label for="exampleInputEmail1">Total Adults</label>
                                    <input type="number" class="form-control" id="QuickTotalGuest1" value="1"
                                           aria-describedby="nameHelp" placeholder="Total Adults">
                                </div>
                                <div class="col">
                                    <label for="exampleInputEmail1">Total Childs</label>
                                    <input type="number" class="form-control" id="QuickTotalChilds1" value="0"
                                           aria-describedby="nameHelp" placeholder="Total Childs">
                                </div>
                            </div>
                        </div>

                        <div class="form-group" style="padding: 10px">
                            <p style="font-weight: bold">Tariff Details</p>
                            <hr style="border-top: 1px solid #9E9E9E;">
                            <div class="row">
                                <div class="col">
                                    <label for="RatePlaneName">Select Rate Plane</label>
                                    <select class="form-control" id="QuickRatePlaneName1"
                                            <!--onchange="getRatePlaneOnChage(event);"-->>
                                        <option value="CP">CP</option>
                                        <option value="EP">EP</option>
                                        <option value="AP">AP</option>
                                        <option value="MAP">MAP</option>
                                    </select>
                                </div>
                                <div class="col" id="RoomTypeSelectDiv">
                                    <label for="RatePlaneName">Select Room Type</label>
                                    <select class="form-control" id="QuickRoomType1">

                                    </select>
                                </div>
                                <div class="col">
                                    <label for="QuickBookingSourceType">Booking Source Type</label>
                                    <select class="form-control" id="QuickBookingSourceType1"
                                            onchange="getBookingSourceTypeChage1(event);">
                                        <option value="OTA">OTA</option>
                                        <option value="B2B">B2B</option>
                                        <option value="OFFLINE">OFFLINE</option>

                                    </select>
                                </div>
                                <div class="col">
                                    <label for="QuickBookingSource">Select Booking Source </label>
                                    <select class="form-control" id="QuickBookingSource1">
                                        <option value="MMT">MMT</option>
                                        <option value="YAT">YAT</option>
                                        <option value="EXP">EXP</option>
                                        <option value="BOK">BOK</option>
                                        <option value="GOIBIO">GOIBIO</option>
                                        <option value="OTHER">OTHER</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" style="padding: 10px">
                            <div class="row">
                                <div class="col">
                                    <label for="exampleInputEmail1">SellRate (Room Charge) </label>
                                    <input type="text" id="QuicksellRate1" class="form-control"
                                           placeholder="QuickSellRate">
                                </div>
                                <div class="col">
                                    <label for="exampleInputEmail1">GST</label>
                                    <input type="text" id="QuickGST1" class="form-control" placeholder="QuickGST"
                                           disabled>
                                </div>
                                <div class="col">
                                    <label for="exampleInputEmail1">GST Amount</label>
                                    <input type="text" class="form-control" id="QuickGSTAmt1"
                                           aria-describedby="nameHelp"
                                           placeholder="GST Amount" disabled>
                                </div>
                                <div class="col">
                                    <label for="exampleInputEmail1">Total Amount with tax </label>
                                    <input type="text" id="QuickTotalAmountWithTax1" class="form-control"
                                           placeholder="Total Amount with tax" disabled>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button class="btn btn-danger" id="directBookNowBtn">Book Room</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="js/pages/roombooking.js"></script>

