<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 18-Sep-18
 * Time: 2:48 PM
 */?>
<body>
<div class="page">
    <!-- Main Navbar-->
    <header class="header">
        <nav class="navbar">
            <!-- Search Box-->
            <div class="search-box">
                <button class="dismiss"><i class="icon-close"></i></button>
                <form id="searchForm" action="#" role="search">
                    <input type="search" placeholder="What are you looking for..." class="form-control">
                </form>
            </div>
            <div class="container-fluid">
                <div class="navbar-holder d-flex align-items-center justify-content-between">
                    <!-- Navbar Header-->
                    <div class="navbar-header">
                        <!-- Navbar Brand --><a href="index.php" class="navbar-brand d-none d-sm-inline-block">
                            <div class="brand-text d-none d-lg-inline-block"><span>Zingo </span><strong> Dashboard</strong></div>
                            <div class="brand-text d-none d-sm-inline-block d-lg-none"><strong>BD</strong></div></a>
                        <!-- Toggle Button--><a id="toggle-btn" href="#" class="menu-btn active"><span></span><span></span><span></span></a>
                    </div>
                    <!-- Navbar Menu -->
                    <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                        <li class="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link"><i class="fa fa-bell-o"></i><span class="badge bg-red badge-corner">12</span></a>
                            <ul aria-labelledby="notifications" class="dropdown-menu">
                                <li><a rel="nofollow" href="#" class="dropdown-item">
                                        <div class="notification">
                                            <div class="notification-content"><i class="fa fa-envelope bg-green"></i>You have 6 new messages </div>
                                            <div class="notification-time"><small>4 minutes ago</small></div>
                                        </div></a></li>
                                <li><a rel="nofollow" href="#" class="dropdown-item">
                                        <div class="notification">
                                            <div class="notification-content"><i class="fa fa-twitter bg-blue"></i>You have 2 followers</div>
                                            <div class="notification-time"><small>4 minutes ago</small></div>
                                        </div></a></li>
                                <li><a rel="nofollow" href="#" class="dropdown-item">
                                        <div class="notification">
                                            <div class="notification-content"><i class="fa fa-upload bg-orange"></i>Server Rebooted</div>
                                            <div class="notification-time"><small>4 minutes ago</small></div>
                                        </div></a></li>
                                <li><a rel="nofollow" href="#" class="dropdown-item">
                                        <div class="notification">
                                            <div class="notification-content"><i class="fa fa-twitter bg-blue"></i>You have 2 followers</div>
                                            <div class="notification-time"><small>10 minutes ago</small></div>
                                        </div></a></li>
                                <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center"> <strong>view all notifications                                            </strong></a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown"> <a id="messages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link"><i class="fa fa-envelope-o"></i><span class="badge bg-orange badge-corner">10</span></a>
                            <ul aria-labelledby="notifications" class="dropdown-menu">
                                <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                                        <div class="msg-profile"> <img src="img/avatar-1.jpg" alt="..." class="img-fluid rounded-circle"></div>
                                        <div class="msg-body">
                                            <h3 class="h5">Jason Doe</h3><span>Sent You Message</span>
                                        </div></a></li>
                                <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                                        <div class="msg-profile"> <img src="img/avatar-2.jpg" alt="..." class="img-fluid rounded-circle"></div>
                                        <div class="msg-body">
                                            <h3 class="h5">Frank Williams</h3><span>Sent You Message</span>
                                        </div></a></li>
                                <li><a rel="nofollow" href="#" class="dropdown-item d-flex">
                                        <div class="msg-profile"> <img src="img/avatar-3.jpg" alt="..." class="img-fluid rounded-circle"></div>
                                        <div class="msg-body">
                                            <h3 class="h5">Ashley Wood</h3><span>Sent You Message</span>
                                        </div></a></li>
                                <li><a rel="nofollow" href="#" class="dropdown-item all-notifications text-center"> <strong>Read all messages   </strong></a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="logout.php" class="nav-link logout"> <span class="d-none d-sm-inline">Logout</span><i class="fa fa-sign-out"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <div class="page-content d-flex align-items-stretch">
        <!-- Side Navbar -->
        <nav class="side-navbar">
            <!-- Sidebar Header-->
            <div class="sidebar-header d-flex align-items-center">
                <div class="avatar"><img src="img/avatar-11.jpg" alt="..." class="img-fluid rounded-circle"></div>
                <div class="title">
                    <h1 class="h4" id="FirstName"></h1>
                    <p id="PhoneNumber"></p>

                </div>
            </div>
            <!-- Sidebar Navidation Menus--><span class="heading">Traveller</span>
            <ul class="list-unstyled">
                <li class="active"><a href="index.php"> <i class="icon-home"></i>Home </a></li>
                <li><a href="index.php?page_name=bookings"> <i class="icon-interface-windows"></i>Bookings </a></li>

            </ul><span class="heading">Extras</span>
            <ul class="list-unstyled">
                <li> <a href="#"> <i class="icon-form"></i>FeedBack </a></li>
                <li> <a href="#"> <i class="icon-mail"></i>Chat </a></li>
            </ul>
        </nav>
