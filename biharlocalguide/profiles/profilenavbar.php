<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 8/29/2018
 * Time: 12:21 PM
 */
?>

<body>

<header class="header">
    <!-- Main Navbar-->
    <nav class="navbar navbar-expand-lg" style="z-index: auto;">
        <div class="search-area">
            <div class="search-area-inner d-flex align-items-center justify-content-center">
                <div class="close-btn"><i class="icon-close"></i></div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8">
                        <form action="#">
                            <div class="form-group">
                                <input type="search" name="search" id="search"
                                       placeholder="Hello, What are you looking for?">
                                <button type="submit" class="submit"><i class="icon-search-1"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <!-- Navbar Brand -->
            <div class="navbar-header d-flex align-items-center justify-content-between logoNavDiv">
                <!-- Navbar Brand --><a style="text-transform: uppercase;color: #001B43"  href="index.php" class="navbar-brand"><img  src="img/biharlogo.jpg"/> </a>
                <!-- Toggle Button-->
                <button type="button" data-toggle="collapse" data-target="#navbarcollapse"
                        aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation"
                        class="navbar-toggler"><span></span><span></span><span></span></button>
            </div>
            <!-- Navbar Menu -->
            <div >

                <div id="google_translate_element"></div><script type="text/javascript">
                        function googleTranslateElementInit() {
                            new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, multilanguagePage: true}, 'google_translate_element');
                        }
                    </script><script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

                <ul class="langs navbar-text"><a style="text-transform: uppercase;color: #001B43"  href="blogs.php" class="active">Blogs</a></ul>
<!--                <div class="navbar-text"><a href="#" class="search-btn"><i class="icon-search-1"></i></a></div>-->
                <ul class="langs navbar-text"><a style="text-transform: uppercase;color: #00009d"  href="about.php" class="active">About Bihar</a></ul>

                <ul style="margin-left: 15px;" class="langs navbar-text"><div class="btn-group">
                        <a style="cursor: pointer" href="profile.php" class="fas fa-user"  aria-haspopup="true" aria-expanded="false">

                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a style="margin-left: 0px;height: 31px;" href="profile.php" class="dropdown-item" >Profile</a>
                            <a style="margin-left: 0px;height: 31px;" href="newstory.php" class="dropdown-item" >New Story</a>
                            <a style="margin-left: 0px;height: 31px;" href="stories.php" class="dropdown-item" >Stories</a>
                            <a title="Profile" style="margin-left: 0px;height: 31px;" href="profiles/logout.php" class="dropdown-item" >Logout</a>

                        </div>
                    </div></ul>



            </div>
        </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="z-index: auto;">
        <div id="navbarcollapse" class="collapse navbar-collapse">
            <ul style="margin: auto" class="navbar-nav ml-auto " id="navcategory">
                <li style="padding: 0rem 0.1rem;" class="nav-item"><a href="videos.php" style="text-transform: uppercase;color: #001B43;cursor: pointer"  class="nav-link "  >videos</a></li>
                <li style="padding: 0rem 0.1rem;" class="nav-item"><a href="gallery.php" style="text-transform: uppercase;color: #001B43;cursor: pointer"  class="nav-link "  >GALLERY</a></li>
                <li style="padding: 0rem 0.1rem;" class="nav-item"><a href="contact.php" style="text-transform: uppercase;color: #001B43;cursor: pointer"  class="nav-link "  >CONTACT</a></li>

            </ul>



        </div>
    </nav>
</header>


<div id="mainLoader">
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</div>