<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>


<body id="page-top">

    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

        <a class="navbar-brand mr-1" href="index.php?page_name=dashboard">Zingo DashBoard</a>

        <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Navbar Search -->
        <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <!--            <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>-->
        </form>

        <!-- Navbar -->
        <ul class="navbar-nav ml-auto ml-md-0">

            <li class="nav-item dropdown no-arrow mx-1">
                <a class="nav-link dropdown-toggle" href="#">
                    <span style="color:white" id="username"></span>
                    <!--<i class="fas fa-user fa-fw"></i>-->
<!--                    <span class="badge badge-danger">7</span>-->
                </a>

            </li>
            <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-sign-out-alt fa-fw"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" data-toggle="modal" data-target="#changePasswordModel">Change Password</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="index.php?page_name=logout.php" data-toggle="modal" data-target="#logoutModal">Logout</a>
                </div>
            </li>
        </ul>
    </nav>
    <div id="wrapper">

        <!-- Sidebar -->
        <ul class="sidebar navbar-nav" >
<!--            <li class="nav-item active">-->
<!--                <a class="nav-link" href="index.php">-->
<!--                    <i class="fas fa-fw fa-tachometer-alt"></i>-->
<!--                    <span>Dashboard</span>-->
<!--                </a>-->
<!--            </li>-->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-building"></i>
                    <span>Hotels</span>
                </a>
                <div class="dropdown-menu" aria-labelledby="pagesDropdown" id="showHotelsOnNavBar" style="background-color: #212529">
                    <!--                    <h6 class="dropdown-header">Login Screens:</h6>
                                        <a class="dropdown-item" href="login.html">Login</a>-->

                </div>
            </li>
<!--            <li class="nav-item">-->
<!--                <a class="nav-link" href="index.php?page_name=billgenerate">-->
<!--                    <i class="fas fa-fw fa-chart-area"></i>-->
<!--                    <span>Bill Generate</span></a>-->
<!--            </li>-->


        </ul>
        <style>
            #makeAlert{
                display: none;
                position: fixed;
                left: 15%;
                right: 15%;
                z-index: 99999;
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
      