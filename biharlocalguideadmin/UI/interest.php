<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 03-Sep-18
 * Time: 2:34 PM
 */
?>
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Interest</li>
</ol>

<!-- Icon Cards-->


<div class="row">
    <div class="col-lg-8">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create Interest </div>
            <div class="card-body">
                <input type="hidden" id="ZingoInterestId">
                <div class="form-group">
                    <!--                    <label for="exampleInputEmail1">Email address</label>-->
                    <input type="text" class="form-control" id="InterestName" aria-describedby="nameHelp" placeholder="Enter InterestName">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <!--                    <label for="exampleInputEmail1">Email address</label>-->
                    <textarea type="text" class="form-control" id="Description" aria-describedby="nameHelp" placeholder="Description"></textarea>
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>


                <button id="addinterestBtn" class="btn btn-primary">Add</button>
                <button id="interestupdateBtn"  class="btn btn-primary">Update Interest</button>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
    </div>

</div>
<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        Interest Data  </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table  table-hover" id="interestDiv" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>InterestId</th>
                    <th>InterestName</th>
                    <th>Description</th>
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

<script src="js/pages/interest.js"></script>



