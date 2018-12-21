<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 8/31/2018
 * Time: 6:31 PM
 */?>

<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">City</li>
</ol>

<!-- Icon Cards-->


<div class="row">
    <div class="col-lg-8">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create City </div>
            <div class="card-body">
                <input type="hidden" id="CityId">
                <div class="form-group">
<!--                    <label for="exampleInputEmail1">Email address</label>-->
                    <input type="text" class="form-control" id="CityName" aria-describedby="nameHelp" placeholder="Enter City Name">
<!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>


                <button id="addcityBtn" class="btn btn-primary">Add</button>
                <button id="cityupdateBtn"  class="btn btn-primary">Update City</button>
            </div>
            <div class="card-footer small text-muted">Add / Update City Name</div>
        </div>
    </div>

</div>
<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        City Data  </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table  table-hover" id="cityDiv" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>City Id</th>
                    <th>City Name</th>
                    <th>Category Name</th>
                    <th>Action </th>

                </tr>
                </thead>

                <tbody >

                </tbody>

            </table>
        </div>
    </div>
    <div class="card-footer small text-muted"><span id=""></span></div>

</div>

<script src="js/pages/city.js"></script>


