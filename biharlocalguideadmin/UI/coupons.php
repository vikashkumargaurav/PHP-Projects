<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 03-Sep-18
 * Time: 1:12 PM
 */
?>
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Coupons</li>
</ol>

<!-- Icon Cards-->


<div class="row">
    <div class="col-lg-8">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create Coupons </div>
            <div class="card-body">
                <input type="hidden" id="CouponId">
                <div class="form-group">
                    <label for="cityinput">Select Category </label>
                    <select class="form-control" id="categoryinput">

                    </select>
                </div>
                <div class="form-group">
                    <!--                    <label for="exampleInputEmail1">Email address</label>-->
                    <input type="text" class="form-control" id="CouponCode" aria-describedby="nameHelp" placeholder="CouponCode">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <!--                    <label for="exampleInputEmail1">Email address</label>-->
                    <input type="number" class="form-control" id="CouponValue" aria-describedby="nameHelp" placeholder="CouponValue">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <input type="text" id="ValidFrom" onchange="getValidFrom(event)" class="form-control" placeholder="ValidFrom">
                        </div>
                        <div class="col">
                            <input type="text" id="ValidTo" class="form-control" placeholder="ValidTo">
                        </div>
                    </div>
                </div>


                <button id="addCouponBtn" class="btn btn-primary">Add</button>
                <button id="CouponupdateBtn"  class="btn btn-primary">Update Coupons</button>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
    </div>

</div>
<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        City Data  </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table  table-hover" id="couponDiv" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>CouponId</th>
                    <th>CategoriesId</th>
                    <th>CouponCode</th>
                    <th>CouponValue</th>
                    <th>Validity</th>
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

<script src="js/pages/coupons.js"></script>



