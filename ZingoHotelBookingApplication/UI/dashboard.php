<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<!-- Breadcrumbs-->
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a style="cursor: pointer" class="text text-primary" onclick="redirectToDashBoard()">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Overview</li>
</ol>

<!-- Icon Cards-->
<div class="row">


    <div class="col-xl-3 col-sm-6 mb-3 " data-toggle="modal" data-target="#showHotelPop">
        <div class="card text-white bg-primary o-hidden">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fa fa-bed"></i>
                </div>
                <div class="mr-5">Total <span id="hotelcount"></span> Hotels</div>
            </div>
            <a class="card-footer text-white clearfix small z-1">
                <span class="float-left"  >View Details</span>
                <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                </span>
            </a>
        </div>

        <!--Modal for show hotel -->
        <!-- Modal -->
        <div class="modal fade" id="showHotelPop" tabindex="-1" role="dialog" aria-labelledby="hotelModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger" id="hotelModalCenterTitle"> <i class="fa fa-hotel"></i>&nbsp;   Your Hotels</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div  class="modal-body " id="hotelListsModal">

                    </div>
                </div>
            </div>
        </div>





    </div>

    <!--Unnecessary Icon Cards-->
    <div style="display: none " >
    <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-warning o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5">11 New Tasks!</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
                <span class="float-left">View Details</span>
                <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                </span>
            </a>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-success o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-shopping-cart"></i>
                </div>
                <div class="mr-5">123 New Orders!</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
                <span class="float-left">View Details</span>
                <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                </span>
            </a>
        </div>
    </div>
    <div class="col-xl-3 col-sm-6 mb-3">
        <div class="card text-white bg-danger o-hidden ">
            <div class="card-body">
                <div class="card-body-icon">
                    <i class="fas fa-fw fa-life-ring"></i>
                </div>
                <div class="mr-5">13 New Tickets!</div>
            </div>
            <a class="card-footer text-white clearfix small z-1" href="#">
                <span class="float-left">View Details</span>
                <span class="float-right">
                    <i class="fas fa-angle-right"></i>
                </span>
            </a>
        </div>
    </div>
    </div>
    <!--End of unnecessary cards -->
</div>
<!--<canvas id="myChart"></canvas>-->
<!--<script src="js/pages/charts.js"></script>-->


