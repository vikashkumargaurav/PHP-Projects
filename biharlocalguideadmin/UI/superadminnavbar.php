<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 25-Sep-18
 * Time: 3:28 PM
 */?>


<body id="page-top">

<nav class="navbar navbar-expand navbar-dark bg-dark static-top">

    <a class="navbar-brand mr-1" href="index.php?page_name=dashboard">BiharTourism DashBoard</a>

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
    <ul class="navbar-nav ml-auto ml-md-0" >

        <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#">
                <span style="color:white" id="username"></span>
                <!--<i class="fas fa-user fa-fw"></i>-->
                <!--                    <span class="badge badge-danger">7</span>-->
            </a>

        </li>
        <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user fa-fw"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="index.php?page_name=profile">Profile</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="index.php?page_name=logout.php" data-toggle="modal" data-target="#logoutModal">Logout</a>
            </div>
        </li>
    </ul>

</nav>
<div id="wrapper" id="UsersRoleDiv">

    <!-- Sidebar -->
    <ul class="sidebar navbar-nav" >
        <li class="nav-item active">
            <a class="nav-link" href="index.php">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=city">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Create City</span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=category">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Category  </span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=subcategory">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Sub Category </span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=activity">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Activity</span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=coupons">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Coupon</span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=interest">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Interest</span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=package">
                <i class="fas fa-fw fa-paint-brush"></i>
                <span>Package</span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=blog">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Blog</span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=users">
                <i class="fas fa-user"></i>
                <span>Profiles/Users</span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="index.php?page_name=addcontents">
                <i class="fas fa-user"></i>
                <span> Contents</span>
            </a>
        </li>
<!--        <li class="nav-item active">-->
<!--            <a class="nav-link" href="index.php?page_name=contents">-->
<!--                <i class="fas fa-user"></i>-->
<!--                <span>Contents</span>-->
<!--            </a>-->
<!--        </li>-->



    </ul>



