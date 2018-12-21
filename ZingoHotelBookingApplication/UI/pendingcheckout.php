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


<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h3 class="page-header"></h3>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">

        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <p>Notifications</p>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body" id="NotificationsDiv">


                </div>
                <!-- .panel-body -->
            </div>
        </div>
    </div>

</div>




<!--extend checkout Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Update Check Out</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="CheckOutDate" class="col-form-label">CheckOutDate</label>
                        <input type="text" class="form-control" id="CheckOutDate">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="UpdateCheckOutBtn" class="btn btn-primary">Update CheckOut</button>
            </div>
        </div>
    </div>
</div>

<script src="js/pages/pendingcheckout.js"></script>
