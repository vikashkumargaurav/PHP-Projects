<?php
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'header.php';
include 'navbar.php';
?>


<div class="fh5co-hero">
    <div class="fh5co-overlay"></div>
    <div class="fh5co-cover" data-stellar-background-ratio="0.5" style="background-image: url(img/banner.jpg);">
        <div class="desc">
            <div class="container">
                <div class="row">
                    <div class="col-sm-5 col-md-5">
                        <div class="tabulation animate-box">

                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active">
                                    <a href="#flights" aria-controls="flights" role="tab" data-toggle="tab">Hotel</a>
                                </li>

                            </ul>

                            <!-- Tab panes -->
                            <div class="tab-content">
                                <div role="tabpanel" class="tab-pane active" id="flights">
                                    <div class="row">

                                        <div class="col-sm-12 mt">
                                            <section>
                                                <label for="class">Enter City Name or Hotel Name
                                                </label>
                                                <select class="cs-select cs-skin-border">
                                                    <option value="" disabled selected>New Delhi</option>
                                                    <option value="economy">Pune</option>
                                                    <option value="business">Paradise Beach</option>
                                                </select>
                                            </section>
                                        </div>
                                        <div class="col-xxs-12 col-xs-6 mt alternate">
                                            <div class="input-field">
                                                <label for="date-start">Check In:</label>
                                                <input type="text" class="form-control" id="date-start" placeholder="mm/dd/yyyy"/>
                                            </div>
                                        </div>
                                        <div class="col-xxs-12 col-xs-6 mt alternate">
                                            <div class="input-field">
                                                <label for="date-end">Check Out:</label>
                                                <input type="text" class="form-control" id="date-end" placeholder="mm/dd/yyyy"/>
                                            </div>
                                        </div>

                                        <div class="col-sm-12 mt">
                                            <section>
                                                <label for="class">Rooms:</label>
                                                <select class="cs-select cs-skin-border">
                                                    <option value="" disabled selected>1</option>
                                                    <option value="economy">1</option>
                                                    <option value="first">2</option>
                                                    <option value="business">3</option>
                                                </select>
                                            </section>
                                        </div>
                                        <div class="col-xxs-12 col-xs-6 mt">
                                            <section>
                                                <label for="class">Adult:</label>
                                                <select class="cs-select cs-skin-border">
                                                    <option value="" disabled selected>1</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </section>
                                        </div>
                                        <div class="col-xxs-12 col-xs-6 mt">
                                            <section>
                                                <label for="class">Children:</label>
                                                <select class="cs-select cs-skin-border">
                                                    <option value="" disabled selected>1</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>

                                                </select>
                                            </section>
                                        </div>
                                        <div class="col-xs-12">
                                            <input type="submit" class="btn btn-primary btn-block" value="Search Room">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="desc2 animate-box">
                        <div class="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">

                            <h2>Exclusive Limited Time Offer</h2>
                            <h3>Travel to India </h3>
                            <!--<span class="price">$599</span>-->
                            <!-- <p><a class="btn btn-primary btn-lg" href="#">Get Started</a></p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<div id="fh5co-blog-section" class="fh5co-section-gray">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                <h3>Our Hotels</h3>
                <!--<p></p>-->
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row row-bottom-padded-md">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="fh5co-blog animate-box">
                    <a href="#"><img class="img-responsive" src="images/place-1.jpg" alt=""></a>
                    <div class="blog-text">
                        <div class="prod-title">
                            <h3><a href="#">T 3 Resort</a></h3>
                            <span class="posted_by">INR 2300 per/night</span>
                            <span class="comment"><a href="">3000<i class="icon-price-tag"></i></a></span>
                            <p>Hotel T3 Resort is located in the Balaghat district of Madhya Pradesh state. The nearest airport is the Jabalpur Airport and the closest railway sta</p>
                            <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="fh5co-blog animate-box">
                    <a href="#"><img class="img-responsive" src="images/place-2.jpg" alt=""></a>
                    <div class="blog-text">
                        <div class="prod-title">
                            <h3><a href="#">Sai Sahuu Hotel</a></h3>
                            <span class="posted_by">INR 2300 per/night</span>
                            <span class="comment"><a href="">3000<i class="icon-price-tag"></i></a></span>
                            <p>A Unique Blend of luxury And Hospitality. We take immense pleasure in introducing "Hotel Shahu &amp; Sai Shahu" as a Business Hotel catering to busin</p>
                            <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="clearfix visible-sm-block"></div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="fh5co-blog animate-box">
                    <a href="#"><img class="img-responsive" src="images/place-3.jpg" alt=""></a>
                    <div class="blog-text">
                        <div class="prod-title">
                            <h3><a href="#">Farmers corner</a></h3>
                            <span class="posted_by">INR 2300 per/night</span>
                            <span class="comment"><a href="">3000<i class="icon-price-tag"></i></a></span>
                            <p>Hotel Farmers corner is located in the Goa district of Goa state. The Goa International Airport nearest airport is the and the closest railway station</p>
                            <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                        </div>
                    </div> 
                </div>
            </div>
            
        </div>

    </div>
</div>

<!--<div id="fh5co-features">
    <div class="container">
        <div class="row">
            <div class="col-md-12 animate-box">
                <h2 class="heading-title">Travel Booking guide to book a perfect hotel</h2>
            </div>
            <div class="col-md-6 animate-box">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed. Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. Nullam malesuada congue </p>
                <p>Pellentesque habitant morbi tristique senectus et netus ett mauada fames ac turpis egestas. Etiam euismod tempor leo, in suscipit urna condimentum sed. Vivamus augue enim, consectetur ac interdum a, pulvinar ac massa. Nullam malesuada congue </p>
                <a href="#">Read More <i class="icon-arrow-right22"></i></a>
            </div>
            <div class="col-md-6 animate-box">
                <img class="img-responsive" src="images/cover_bg_2.jpg" alt="travel">
            </div>
        </div>
    </div>
</div>-->


<div id="fh5co-destination">
    <div class="tour-fluid">
        <div class="row">
            <div class="col-md-12">
                <ul id="fh5co-destination-list" class="animate-box">
                    <li class="one-forth text-center" style="background-image: url(images/place-1.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Hotel/Clubs Operations Planning</h2>
                            </div>
                        </a>
                    </li>
                    <li class="one-forth text-center" style="background-image: url(images/place-2.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Hotel Business Development</h2>
                            </div>
                        </a>
                    </li>
                    <li class="one-forth text-center" style="background-image: url(images/place-3.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Cost &Revenue Management</h2>
                            </div>
                        </a>
                    </li>
                    <li class="one-forth text-center" style="background-image: url(images/place-4.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Pre-opening Strategies</h2>
                            </div>
                        </a>
                    </li>

                    <li class="one-forth text-center" style="background-image: url(images/place-5.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Commercial Strategies</h2>
                            </div>
                        </a>
                    </li>
                    <li class="one-half text-center">
                        <div class="title-bg">
                            <div class="case-studies-summary">
                                <h2>WE SPECIALIZE IN :-</h2>
                                <span><a href="#">View All Destinations</a></span>
                            </div>
                        </div>
                    </li>
                    <li class="one-forth text-center" style="background-image: url(images/place-6.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Online and Offline Distribution</h2>
                            </div>
                        </a>
                    </li>
                    <li class="one-forth text-center" style="background-image: url(images/place-7.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Tour Operator & Wholesaler Contracting</h2>
                            </div>
                        </a>
                    </li>
                    <li class="one-forth text-center" style="background-image: url(images/place-8.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Hotel Website Development</h2>
                            </div>
                        </a>
                    </li>
                    <li class="one-forth text-center" style="background-image: url(images/place-9.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Search Engine Optimization</h2>
                            </div>
                        </a>
                    </li>
                    <li class="one-forth text-center" style="background-image: url(images/place-10.jpg); ">
                        <a href="#">
                            <div class="case-studies-summary">
                                <h2>Internet Marketing</h2>
                            </div>
                        </a>
                    </li>
                </ul>		
            </div>
        </div>
    </div>
</div>


<?php
include 'footer.php';
?>
