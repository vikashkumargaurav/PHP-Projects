<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 11-Sep-18
 * Time: 3:55 PM
 */ ?>
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Profile</li>
</ol>


<div class="row">
    <div class="col-lg-7">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-user-circle"></i>
                User Profile
            </div>
            <div class="card-body">
                <input type="hidden" id="UserRoleId">
                <input type="hidden" id="Password">
                <input type="hidden" id="Gender">
                <input type="hidden" id="ProfilePhoto">
                <input type="hidden" id="AuthType">
                <input type="hidden" id="Prefix">
                <input type="hidden" id="AuthId">
                <input type="hidden" id="SignUpDate">
                <input type="hidden" id="Status">
                <div class="form-group">
                    <label for="FullName">FullName</label>
                    <input type="text" class="form-control" id="FullName" aria-describedby="nameHelp"
                           placeholder="FullName">
                </div>
                <div class="form-group">
                    <label for="Email">Email</label>
                    <input type="text" class="form-control" id="Email" aria-describedby="nameHelp" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="PhoneNumber">PhoneNumber</label>
                    <input type="text" class="form-control" id="PhoneNumber" aria-describedby="nameHelp"
                           placeholder="PhoneNumber">
                </div>
                <div class="input-group mb-3">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="fileUpload">
                        <label class="custom-file-label" for="fileUpload" aria-describedby="fileUpload">Choose
                            file</label>
                    </div>
                    <!--                    <div class="input-group-append">-->
                    <!--                        <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>-->
                    <!--                    </div>-->
                </div>


                <!--                <button id="addcityBtn" class="btn btn-primary">Add</button>-->
                <button id="profileupdateBtn" class="btn btn-primary">Update Profile</button>
            </div>
            <div class="card-footer small text-muted">Add / Update Profile</div>
        </div>
    </div>
    <div class="col-lg-5">
        <div class="card" style="width: 18rem;" id="ProfilePhotoDiv">

            <div class="card-body bg-danger">
                <p class="card-text"><span class="text-white" id="UserRoleIdshow"></span></p>
            </div>
        </div>
    </div>

</div>

<script src="js/pages/profile.js"></script>