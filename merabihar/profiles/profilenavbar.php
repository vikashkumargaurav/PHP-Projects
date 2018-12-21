<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 8/29/2018
 * Time: 12:21 PM
 */
?>

<header class="header">
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <!-- Navbar brand-->
            <!--<a href="index.html" class="navbar-brand font-weight-bold"><img src="img/logo.png" alt="..." class="img-fluid"></a>-->
            <a href="index.php" class="navbar-brand font-weight-bold"><span style="color: black">Mera</span><span style="color: #540CFA">Bihar</span></a>
            <!-- Navbar toggler button-->
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">Menu<i class="icon ion-md-list ml-2"></i></button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav mx-auto ml-auto">
                    <!-- Link-->
                    <li class="nav-item"> <a href="whatson.php" class="nav-link">What's on</a></li>
                    <!-- Link-->
                    <li class="nav-item"> <a href="trendingvideos.php" class="nav-link">Videos</a></li>
                    <li class="nav-item"> <a href="trendings.php" class="nav-link">Trendings</a></li>
                    <li class="nav-item"><a title="videopost" href="#" class="navbar-btn btn btn-outline-danger" data-toggle="modal" data-target="#videopost"><i class="ion-ios-cloud-upload"></i> Upload</a></li>
                    <!-- Link-->


                </ul>
                <ul class="navbar-nav">

                    <li class="nav-item"><a title="Search" href="#" class="navbar-btn btn btn-outline-primary" data-toggle="modal" data-target="#example"><i class="ion-ios-search"></i> Search</a></li>
                    <li class="nav-item dropdown"><a id="pages" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link  "><i class="fa fa-user"  aria-hidden="true"></i></a>
                        <div class="dropdown-menu">
                            <a href="profile.php" class="dropdown-item">Profile</a>
<!--                            <a href="#" class="dropdown-item">Settings</a>-->
                            <a href="profiles/logout.php" class="dropdown-item">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
<!--            <div class="col-sm-3 col-md-3">-->
<!--                <form class="navbar-form" role="search">-->
<!--                    <div class="input-group">-->
<!--                        <input type="text" class="form-control" placeholder="Search" name="q">-->
<!--                        <div class="input-group-btn">-->
<!--                            <button class="btn btn-default" type="submit"><i class="ion-ios-search"></i></button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </form>-->
<!--            </div>-->
        </div>
    </nav>
</header>

<div id="mainLoader">
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>
<div id="makeAlert" class="alert  alert-dismissible" >
    <button type="button" class="close" data-dismiss="alert">&times;</button>

</div>