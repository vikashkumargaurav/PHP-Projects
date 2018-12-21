<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'header.php';
include 'navbar.php';
?>
<link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css">
<link rel="stylesheet" href="css/fluid-gallery.css">
<div class="fh5co-parallax" style="background-image: url(img/banner2.jpg);" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
                <div class="fh5co-intro fh5co-table-cell">
                    <h1 class="text-center">Gallery</h1>
                    <!--<p>Made with love by ZingoHotels at <a href="http://freehtml5.co">FreeHTML5.co</a></p>-->
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container gallery-container">

    <h1>Hotel Gallery</h1>

    <p class="page-description text-center">Hotel Photo Gallery</p>

    <div class="tz-gallery">

        <div class="row">




            <!--            <div class="col-sm-12 col-md-4">
                            <a class="lightbox" href="hotelimg/suitRoom/pic5.jpg">
                                <img src="hotelimg/suitRoom/pic5.jpg" alt="Bridge">
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a class="lightbox" href="hotelimg/hotel1.jpg">
                                <img src="hotelimg/hotel1.jpg" alt="Bridge">
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a class="lightbox" href="hotelimg/hotel3.jpg">
                                <img src="hotelimg/hotel3.jpg" alt="Bridge">
                            </a>
                        </div>-->

            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/img4.jpg">
                    <img src="hotelimg/img4.jpg" alt="Bridge">
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/room1.jpg">
                    <img src="hotelimg/room1.jpg" alt="Bridge">
                </a>
            </div> 
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/room2.jpg">
                    <img src="hotelimg/room2.jpg" alt="Bridge">
                </a>
            </div>

            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/suitRoom/pic6.jpg">
                    <img src="hotelimg/suitRoom/pic6.jpg" alt="Bridge">
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/suitRoom/pic7.jpg">
                    <img src="hotelimg/suitRoom/pic7.jpg" alt="Bridge">
                </a>
            </div> 
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/suitRoom/pic8.jpg">
                    <img src="hotelimg/suitRoom/pic8.jpg" alt="Bridge">
                </a>
            </div>

            <div class="col-sm-12 col-md-4">
                <a class="lightbox" href="hotelimg/kitchen.jpg">
                    <img src="hotelimg/kitchen.jpg" alt="Bridge">
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/room3.jpg">
                    <img src="hotelimg/room3.jpg" alt="Bridge">
                </a>
            </div> 
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/suitRoom/pic1.jpg">
                    <img src="hotelimg/suitRoom/pic1.jpg" alt="Bridge">
                </a>
            </div>
            <div class="col-sm-12 col-md-4">
                <a class="lightbox" href="hotelimg/room4.jpg">
                    <img src="hotelimg/room4.jpg" alt="Bridge">
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/room5.jpg">
                    <img src="hotelimg/room5.jpg" alt="Bridge">
                </a>
            </div> 

            <div class="col-sm-12 col-md-4">
                <a class="lightbox" href="hotelimg/rest1.jpg">
                    <img src="hotelimg/rest1.jpg" alt="Bridge">
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/rest2.jpg">
                    <img src="hotelimg/rest2.jpg" alt="Bridge">
                </a>
            </div>
            <div class="col-sm-12 col-md-4">
                <a class="lightbox" href="hotelimg/suitRoom/pic5.jpg">
                    <img src="hotelimg/suitRoom/pic5.jpg" alt="Bridge">
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a class="lightbox" href="hotelimg/hotel1.jpg">
                    <img src="hotelimg/hotel1.jpg" alt="Bridge">
                </a>
            </div>


        </div>

    </div>

</div>

<?php
include 'footer.php';
?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
<script>
    baguetteBox.run('.tz-gallery');
</script>