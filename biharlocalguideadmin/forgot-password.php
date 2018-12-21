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

  </head>

  <body class="bg-dark">

    <div class="container">
      <div class="card card-login mx-auto mt-5">
        <div class="card-header">Reset Password</div>
        <div class="card-body">
          <div class="text-center mb-4">
            <h4>Forgot your password?</h4>
            <p>Enter your Phone Number attached to your account and we will send you instructions on how to reset your password.</p>
          </div>
<!--          <form>-->
            <div class="form-group">
              <div class="form-label-group">
                <input type="email" id="PhoneNumber" class="form-control" placeholder="Enter Phone Number" required="required" autofocus="autofocus">
                <label for="PhoneNumber">Enter  Phone Number</label>
              </div>
            </div>
            <button id="getProfileByPhoneBtn" class="btn btn-danger btn-block" >Reset Password</button>
<!--          </form>-->
          <div class="text-center">
            <a class="d-block small mt-3" href="register.php">Register an Account</a>
            <a class="d-block small" href="index.php">Login Page</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container" id="resetPasswordDiv">
        <div class="card card-login mx-auto mt-5">
            <div class="card-header">Reset Password</div>
            <div class="card-body">
                <div class="text-center mb-4">
                    <h4>Reset your password</h4>
                </div>
                <!--          <form>-->
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="email" id="Password" class="form-control" placeholder="Enter Password" required="required" autofocus="autofocus">
                        <label for="Password">Enter Password</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="form-label-group">
                        <input type="email" id="confirmPassword" class="form-control" placeholder="Confirm Password " required="required" autofocus="autofocus">
                        <label for="confirmPassword">Confirm Password</label>
                    </div>
                </div>
                <button id="resetPasswordBtn" class="btn btn-danger btn-block" >Reset Password</button>
                <!--          </form>-->
                <div class="text-center">
                    <a class="d-block small mt-3" href="register.php">Register an Account</a>
                    <a class="d-block small" href="index.php">Login Page</a>
                </div>
            </div>
        </div>
    </div>

    <script src="UI/vendor/jquery/jquery.min.js"></script>
    <script src="UI/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="UI/vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="js/constants.js"></script>
    <script src="js/helper.js"></script>
    <script src="js/forget-password.js"></script>

  </body>

</html>

