<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 25-Sep-18
 * Time: 11:29 AM
 */?>

<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Users</li>
</ol>

<!-- Icon Cards-->


<div class="row">
    <div class="col-lg-8">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create Profile </div>
            <div class="card-body">
                <input type="hidden" id="ProfileId">
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="text" id="firstName" class="form-control" placeholder="First name"
                                       required="required" autofocus="autofocus">
                                <label for="firstName">First name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="text" id="lastName" class="form-control" placeholder="Last name"
                                       required="required">
                                <label for="lastName">Last name</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-check form-check-inline">
                        <label class="form-check-label" for="inlineRadio1">Gender</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="Gender" id="Gender"
                               value="Male" checked>
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="Gender" id="Gender"
                               value="Female">
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="cityinput">Select UserRole</label>
                    <select class="form-control" id="UserRoleId">

                    </select>
                </div>
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="email" id="Email" class="form-control" placeholder="Email address"
                               required="required">
                        <label for="Email">Email address</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="email" id="PhoneNumber" class="form-control" placeholder="Phone Number"
                               required="required">
                        <label for="Email">Phone Number</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="password" id="Password" class="form-control" placeholder="Password"
                                       required="required">
                                <label for="Password">Password</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="password" id="confirmPassword" class="form-control"
                                       placeholder="Confirm password" required="required">
                                <label for="confirmPassword">Confirm password</label>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="addProfileBtn" class="btn btn-primary">Add</button>
<!--                <button id="profileUpdateBtn"  class="btn btn-primary">Update Profile</button>-->
            </div>
            <div class="card-footer small text-muted">Add </div>
        </div>
    </div>

</div>
<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        Profile Data  </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table  table-hover" id="usersDiv" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Profile Id</th>
                    <th>FullName</th>
                    <th>UserRoleId</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Bio</th>
                    <th>SignUpDate</th>

                    <th>ProfilePhoto</th>
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

<script src="js/pages/users.js"></script>



