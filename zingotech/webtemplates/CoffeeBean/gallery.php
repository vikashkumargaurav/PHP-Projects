<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'header.php';
include 'navbar.php';
?>
<!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
<link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css">
<link rel="stylesheet" href="css/gallery-grid.css">
<header class="masthead3">
    <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 ">Gallery</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">Discover our world's #1 Luxury Room For VIP.</h2>
        </div>
    </div>
</header>

<section id="#" class=" bg-light">
    <div class="container gallery-container">

        <h1>Hotel Gallery</h1>

        <p class="page-description text-center">Coffee Bean Inn Photo Gallery</p>

        <div class="tz-gallery">

            <div class="row">
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="img/food.jpg">
                        <img src="img/food.jpg" alt="img/food.jpg">
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="img/food1.jpg">
                        <img src="img/food1.jpg" alt="Bridge">
                    </a>
                </div>
                <div class="col-sm-12 col-md-4">
                    <a class="lightbox" href="img/food2.jpg">
                        <img src="img/food2.jpg" alt="Tunnel">
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="img/food3.jpg">
                        <img src="img/food3.jpg" alt="Coast">
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="img/modal.jpg">
                        <img src="img/modal.jpg" alt="Rails">
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="img/restauran1.jpg">
                        <img src="img/restauran1.jpg" alt="Traffic">
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="img/restaurant.jpg">
                        <img src="img/restaurant.jpg" alt="Rocks">
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="img/room7.jpg">
                        <img src="img/room7.jpg" alt="Benches">
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="img/sub.jpg">
                        <img src="img/sub.jpg" alt="Sky">
                    </a>
                </div>
            </div>

        </div>

    </div>

</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
<script>
    baguetteBox.run('.tz-gallery');
</script>




<?php
include 'footer.php';
?>