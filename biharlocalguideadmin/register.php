<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>BiharTourism - Signup</title>

    <!-- Bootstrap core CSS-->
    <link href="UI/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template-->
    <link href="UI/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template-->
    <link href="UI/css/sb-admin.css" rel="stylesheet">

</head>
<style>
    #mainLoader {
        display: none;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0px;
        z-index: 10000;
        background-color: #0000007d;
    }

    .subloader {
        margin-left: 45%;
        margin-top: 18%;
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

<body class="bg-dark">
<div id="mainLoader">

    <div class="subloader"></div>
</div>

<div class="container">
    <div class="card card-register mx-auto mt-5">
        <div class="card-header"><strong>BiharTourism :  </strong>Register an Account</div>
        <div class="card-body">
<!--            <form>-->
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
                <button id="registerBtn" class="btn btn-danger btn-block" >Register</button>
<!--            </form>-->
            <div class="text-center">
                <a class="d-block small mt-3" href="index.php">Login Page</a>
<!--                <a class="d-block small" href="forgot-password.php">Forgot Password?</a>-->
            </div>
        </div>
    </div>
</div>

<div class="container" id="emailValidateDiv">
    <div class="card card-login mx-auto mt-5">
        <div class="card-header">Reset Password</div>
        <div class="card-body">
            <div class="text-center mb-4">
                <h4>Forgot your password?</h4>
                <p>Enter your email address and we will send you instructions on how to reset your password.</p>
            </div>
            <form>
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Enter email address" required="required" autofocus="autofocus">
                        <label for="inputEmail">Enter email address</label>
                    </div>
                </div>
                <a class="btn btn-primary btn-block" href="index.php">Reset Password</a>
            </form>
            <div class="text-center">
                <a class="d-block small mt-3" href="register.php">Register an Account</a>
                <a class="d-block small" href="index.php">Login Page</a>
            </div>
        </div>
    </div>
</div>
<style>
    #makeAlert{
        display: none;
        position: fixed;
        left: 15%;
        right: 15%;
        z-index: 999;
        max-width: 40%;
        min-width: 30%;
        margin: 0 auto;
        text-align: center;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        top:3%
    }
</style>

<div id="makeAlert" class="alert  alert-dismissible" >
    <button type="button" class="close" data-dismiss="alert">&times;</button>

</div>

<script src="UI/vendor/jquery/jquery.min.js"></script>
<script src="UI/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Core plugin JavaScript-->
<script src="UI/vendor/jquery-easing/jquery.easing.min.js"></script>
<script src="js/constants.js"></script>
<script src="js/helper.js"></script>
<script src="js/register.js"></script>

</body>

</html>


