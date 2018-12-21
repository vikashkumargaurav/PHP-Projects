<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 03-Oct-18
 * Time: 4:06 PM
 */
include_once 'header.php';
?>
<style>
    #makeAlert{
        display: none;
        position: fixed;
        left: 15%;
        right: 15%;
        z-index: 9999;
        max-width: 40%;
        min-width: 30%;
        margin: 0 auto;
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        top:3%
    }
</style>

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
<div id="makeAlert" class="alert  alert-dismissible" >
    <button type="button" class="close" data-dismiss="alert">&times;</button>

</div>
<div  class="container">
    <div class="card card-register mx-auto mt-5 col-md-6" style="margin: auto">
        <div class="card-header"><strong> <span style="color: #4204cf;">Mera</span>Bihar<span></span>  </strong>Register an Account</div>
        <div class="card-body">
            <!--            <form>-->
            <div class="form-group">
                        <div class="form-label-group">
                            <input type="text" id="FullName" class="form-control" placeholder="First name"
                                   required="required" autofocus="autofocus">
<!--                            <label for="firstName">First name</label>-->
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
                <div class="form-label-group">
                    <input type="email" id="Email" class="form-control" placeholder="Email address"
                           required="required">
<!--                    <label for="Email">Email address</label>-->
                </div>
            </div>
            <div class="form-group">
                <div class="form-label-group">
                    <input type="email" id="PhoneNumber" class="form-control" placeholder="Phone Number"
                           required="required">
<!--                    <label for="Email">Phone Number</label>-->
                </div>
            </div>
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
            <button id="registerBtn" class="btn btn-primary btn-block" >Register</button>
            <!--            </form>-->
            <div class="text-center">
                <a class="d-block small mt-3" href="login.php">Login Page</a>
                <!--                <a class="d-block small" href="forgot-password.php">Forgot Password?</a>-->
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="verifyCodeModel" style="z-index: 9999" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Verify Your Email</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <input type="text" id="code" class="form-control" placeholder="6-digit code" aria-label="Recipient's username" aria-describedby="basic-addon2">
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

<script src="js/register.js"></script>