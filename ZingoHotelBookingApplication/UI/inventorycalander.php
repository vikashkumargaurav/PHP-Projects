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
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="/resources/demos/style.css">
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

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
                    <p>Inventory Calender</p>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body" id="NotificationsDiv">

                    <label for="fromDate">From</label>
                    <input style="padding: 5px;" type="text" id="fromDate" name="fromDate">
                    <label for="toDate">to</label>
                    <input style="padding: 5px;" type="text" id="toDate" name="toDate">
                    <button id="getAvilabilityRoomBtn" class="btn btn-outline-danger">Get Availability </button>
                </div>
                <!-- .panel-body -->
            </div>
        </div>
    </div>


    <div class="row" style="margin-top: 50px;">
        <div class="col-6" id="AvilabilityRoomDiv">

        </div>
    </div>

</div>


<script src="js/pages/inventorycalander.js"></script>
