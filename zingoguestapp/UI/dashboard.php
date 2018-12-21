<?php /**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 18-Sep-18
 * Time: 2:50 PM
 */ ?>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
<link rel="stylesheet" href="css/rating.css">
<header class="page-header">
    <div class="container-fluid">
        <h2 class="no-margin-bottom">Dashboard</h2>
    </div>
</header>

<!-- Dashboard Counts Section-->
<section class="dashboard-header">
    <div class="container-fluid">
        <div class="row" id="LatestActiveBookingDiv">

        </div>
    </div>
</section>

<!-- Modal -->
<div class="modal fade" id="RoomUpgradeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Upgrade Room</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container" >
                    <div class="row" id="UpgradeRoomDiv">

                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button id="roomupgradeBtn" class="btn btn-primary">Send Request</button>
            </div>
        </div>
    </div>
</div>





<div class="modal fade" id="BillModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">View Bill</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container" >
                    <div class="row" id="ViewBillDiv">


                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <!--<button id="PaidAmenitiesBtn" class="btn btn-primary">Send Request</button>-->
            </div>
        </div>
    </div>
</div>


<div class="modal fade" id="FeedBackModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Give FeedBack</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container" >
                    <div class="row" id="FeedBackDiv">
                        <div class="col-md-12 align-content-center">
                            <input type="hidden" id="FBookingId">
                        <fieldset class="rating">
                            <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                            <input type="radio" id="star4half" name="rating" value="4.5" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                            <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                            <input type="radio" id="star3half" name="rating" value="3.5" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                            <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                            <input type="radio" id="star2half" name="rating" value="2.5" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                            <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                            <input type="radio" id="star1half" name="rating" value="1.5" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                            <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                            <input type="radio" id="starhalf" name="rating" value="0.5" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                        </fieldset>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <textarea id="Comment" placeholder="FeedBack" style="width: 100%" rows="4"></textarea>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button id="submitFeedbackBtn" class="btn btn-success">Submit</button>
            </div>
        </div>
    </div>
</div>


<script src="js/pages/dashboard.js"></script>