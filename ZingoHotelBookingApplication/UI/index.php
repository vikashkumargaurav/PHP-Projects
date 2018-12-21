<?php
if (!isset($_SESSION))
    session_start();
define("REDIRECT_LOC", "../login.php");
if ((!isset($_SESSION) || !isset($_SESSION['ProfleId']) || !isset($_SESSION['UserName']))) {
    header("Location:../login.php");
    exit;
}

if (!isset($_GET['pagename']) || ((isset($_GET['pagename'])) && trim($_GET['pagename']) != 'logout')) {
    include_once 'header.php';
    include_once 'navbar.php';
}

echo "<script>var aid=" . $_SESSION['ProfleId'] . "</script>";
echo "<script>var authData = saveDataforSessionInLocal('authData');
    auth = getAuthKey(authData.UserName,authData.PhoneNumber );</script>"
//echo "<script>var aname=" . $_SESSION['UserName'] . "</script>";
?>
<style>
    #mainLoader{
        display: none;
        width: 100%;
        height: 100%;
        position: fixed;
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
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
<div id="mainLoader">

    <div class="subloader"></div>  
</div>

<div id="content-wrapper">

    <div class="container-fluid">
        <?php
        if (isset($_GET['page_name'])) {
            include_once '' . $_GET['page_name'] . '.php';
        } else {
            include_once 'dashboard.php';
        }
        ?>

    </div>

    <!-- /.container-fluid -->

    <script src="js/pages/index.js"></script>

    <?php
    include_once 'footer.php';
    ?>
<!--Change password model for profile -->
    <div class="modal fade" id="changePasswordModel" style="z-index: 9999" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Change Password</h5>
                    <button type="button" id="closemodelbtn" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col-md-12" style="margin-bottom: 10px;">
                                <div class="form-label-group">
                                    <input type="password" id="OldPassword" class="form-control" placeholder="Old Password"
                                           required="required">
                                    <label for="OldPassword">Old Password</label>
                                </div>
                            </div>

                            <div class="col-md-12" style="margin-bottom: 10px;">
                                <div class="form-label-group">
                                    <input type="password" id="Password" class="form-control" placeholder="New Password"
                                           required="required">
                                                                <label for="Password">New Password</label>
                                </div>
                            </div>
                            <div class="col-md-12" style="margin-bottom: 10px;">
                                <div class="form-label-group">
                                    <input type="password" id="confirmPassword" class="form-control"
                                           placeholder="Confirm password" required="required">
                                                                <label for="confirmPassword">Confirm New password</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button onclick="changePassword()" class="btn btn-primary">Change Password</button>
                </div>
            </div>
        </div>
    </div>
    <script src="js/pages/gstcalculator.js"></script>

