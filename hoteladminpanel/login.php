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

    <title>ZingoHotels - Login</title>

    <!-- Bootstrap core CSS-->
    <link href="UI/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template-->
    <link href="UI/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

    <!-- Custom styles for this template-->
    <link href="UI/css/sb-admin.css" rel="stylesheet">
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

</head>

<body class="bg-dark">
<div id="mainLoader">

    <div class="subloader"></div>
</div>

<div class="container" style="margin-top: 10%;">
    <div class="card card-login mx-auto mt-5">
        <div class="card-header text-center">ZingoHotels Login</div>
        <div class="card-body">
            <!--<form>-->
            <div class="form-group">
                <div class="form-label-group">
                    <input type="text" id="username" class="form-control" placeholder="UserName" required="required"
                           autofocus="autofocus">
                    <label for="username">UserName</label>
                </div>
            </div>
            <div class="form-group">
                <div class="form-label-group">
                    <input type="password" id="password" class="form-control" placeholder="Password"
                           required="required">
                    <label for="password">Password</label>
                </div>
            </div>
            <!--                    <div class="form-group">-->
            <!--                        <div class="checkbox">-->
            <!--                            <label>-->
            <!--                                <input type="checkbox" value="remember-me">-->
            <!--                                Remember Password-->
            <!--                            </label>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <button class="btn btn-primary btn-block" id="loginbtn">Login</button>
            <!--          </form>-->
            <div class="text-center">
                <!--                        <a class="d-block small mt-3" href="register.php">Register an Account</a>-->
                <!--                        <a class="d-block small" href="forgot-password.php">Forgot Password?</a>-->
            </div>
        </div>
    </div>
</div>

<!-- Bootstrap core JavaScript-->

<script src="UI/vendor/jquery/jquery.min.js"></script>
<script src="UI/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Core plugin JavaScript-->
<script src="UI/vendor/jquery-easing/jquery.easing.min.js"></script>
<script src="UI/js/pages/constants.js"></script>
<script src="UI/js/pages/helper.js"></script>
<script src="UI/js/pages/login.js"></script>
</body>

</html>

