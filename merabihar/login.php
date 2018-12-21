<?php
include_once 'header.php';
?>
<div id="mainLoader">
    <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>

<div id="makeAlert" class="alert  alert-dismissible">
    <button type="button" class="close" data-dismiss="alert">&times;</button>

</div>
<div class="container" style="margin-top: 5%;">
    <div id="forms" class="card mb-4 col-md-5 col-sm-12" style="margin: auto">
        <div class="card-header">Login</div>
        <div class="card-body ">

            <!--        <form>-->
            <fieldset>
                <legend class="text-center" style="font-weight: bolder;"><span
                            style="color: #4204cf;">Mera</span>Bihar<span></span></legend>
                <div class="form-group">
                    <label for="username">Email address</label>
                    <input id="username" type="text" placeholder="Enter email" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Password" class="form-control">
                </div>
                <div class="form-check form-group">
                    <a id="forgotPasswordBtn"> Forgot Password</a>
                </div>
                <button id="loginbtn" class="btn btn-primary">Login</button>
                <div class="text-center">
                    <a class="d-block small mt-3" href="register.php">Create Account</a>
                    <!--                <a class="d-block small" href="forgot-password.php">Forgot Password?</a>-->
                </div>
            </fieldset>
            <!--        </form>-->
        </div>
    </div>

    <!-- forget password div -->

    <div id="ForgotPasswordforms" class="card mb-4 col-md-5 col-sm-12" style="margin: auto">
        <div class="card-header">Forgot Password</div>
        <div class="card-body ">

            <!--        <form>-->
            <fieldset>
                <legend class="text-center" style="font-weight: bolder;"><span
                            style="color: #4204cf;">Mera</span>Bihar<span></span></legend>
                <div class="form-group">
                    <label for="Email">Email address</label>
                    <input id="Email" type="text" placeholder="Enter email" class="form-control">
                </div>
                <button id="forgotpasswordbtn" class="btn btn-primary">Verify Email</button>
                <div class="text-center">
                    <a class="d-block small mt-3" href="login.php">Login</a>
                    <!--                <a class="d-block small" href="forgot-password.php">Forgot Password?</a>-->
                </div>
            </fieldset>
            <!--        </form>-->
        </div>
    </div>
    <!-- forget password div -->

<!--Change password div -->
    <div id="ChangePasswordforms" class="card mb-4 col-md-5 col-sm-12" style="margin: auto">
        <div class="card-header">Change Password</div>
        <div class="card-body ">

            <!--        <form>-->
            <fieldset>
                <legend class="text-center" style="font-weight: bolder;"><span
                            style="color: #4204cf;">Mera</span>Bihar<span></span></legend>
                <div class="form-group">
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="password" id="Password" class="form-control" placeholder="Password"
                                       required="required">
                                <!--                            <label for="Password">Password</label>-->
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-label-group">
                                <input type="password" id="confirmPassword" class="form-control"
                                       placeholder="Confirm password" required="required">
                                <!--                            <label for="confirmPassword">Confirm password</label>-->
                            </div>
                        </div>
                    </div>
                </div>
                <button id="changenewpasswordbtn" class="btn btn-primary">Change Password</button>
                <div class="text-center">
<!--                    <a class="d-block small mt-3" href="login.php">Login</a>-->
                    <!--                <a class="d-block small" href="forgot-password.php">Forgot Password?</a>-->
                </div>
            </fieldset>
            <!--        </form>-->
        </div>
    </div>
    <!--Change password div -->
</div>


<!--veidy email id model-->
<div class="modal fade" id="verifyCodeModel" style="z-index: 9999" tabindex="-1" role="dialog"
     aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Verify Your Email</h5>
                <button type="button" id="closemodelbtn" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <input type="text" id="code" class="form-control" placeholder="6-digit code"
                           aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" id="verifyEmailBtn" type="button">Verify</button>
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                <!--                <div class="timer" id="timerDiv">-->
                <!--                    <span class="minutes">01</span>:<span class="seconds">00</span>-->
                <!--                </div>-->
                <!--                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
                <button id="resentCodeBtn" class="btn btn-link">Resent Code</button>
            </div>
        </div>
    </div>
</div>
<script src="js/login.js"></script>
<script src="js/forgotpassword.js"></script>