<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 04-Sep-18
 * Time: 5:53 PM
 */ ?>
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Activity / Package</li>
</ol>

<!-- Icon Cards-->


<div class="row">
    <div class="col-lg-8">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create Package
            </div>
            <div class="card-body">
                <input type="hidden" id="CategoriesImage">
                <input type="hidden" id="PackageDetailsId">
                <div class="form-group">
                    <label for="cityinput">Select Activity</label>
                    <select class="form-control" id="activityinput">

                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Package Name</label>
                    <input type="text" class="form-control" id="Name" aria-describedby="" placeholder="Enter Package Name">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">SellRate For Adult</label>
                            <input type="number" id="SellRate" class="form-control" placeholder="SellRate">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">DeclaredRate For Adult</label>
                            <input type="text" id="DeclaredRate" class="form-control" placeholder="DeclaredRate">
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">SellRate For Child</label>
                            <input type="number" id="SellRateForChild" class="form-control"
                                   placeholder="SellRateForChild">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">DeclaredRate For Child</label>
                            <input type="text" id="DeclaredRateForChild" class="form-control"
                                   placeholder="DeclaredRateForChild">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="cityinput">Select GSTPercentage</label>
                    <select class="form-control" id="GSTPercentage">
                        <option value="5">5%</option>
                        <option value="12">12%</option>
                        <option value="18">18%</option>
                        <option value="28">28%</option>

                    </select>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">Start time</label>
                            <input type="time" id="starttime" class="form-control" placeholder="Start Time">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">End time</label>
                            <input type="time" id="endtime" class="form-control" placeholder="End Time">
                        </div>
                    </div>
                </div>


                <div class="form-group">
                    <!--                    <label for="exampleInputEmail1">Email address</label>-->
                    <textarea type="text" class="form-control" id="Description" aria-describedby=""
                              placeholder="Description"></textarea>
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>


                <button id="addPackageBtn" class="btn btn-primary">Add</button>
                <button id="updatePackageBtn" class="btn btn-primary">Update Package</button>
            </div>
            <div class="card-footer small text-muted">Add / Update Package</div>
        </div>
    </div>

</div>


<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        Package Data
    </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table  table-hover" id="packageDiv" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Package Id</th>
                    <th>Package Name</th>
                    <th>Activity Name</th>
                    <th>Description</th>
                    <th>TimeSlot</th>
                    <th>SellRate</th>
                    <th>SellRateForChild</th>
                    <th>DeclaredRate</th>
                    <th>DeclaredRateForChild</th>
                    <th>Discount</th>
                    <th>DiscountAmount</th>
                    <th>GSTPercentage</th>

                    <th>Action</th>

                </tr>
                </thead>

                <tbody>

                </tbody>

            </table>
        </div>
    </div>
    <div class="card-footer small text-muted"><span id=""></span></div>

</div>


<script src="js/pages/package.js"></script>




