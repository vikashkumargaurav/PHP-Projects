<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="styles/styles.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>Find Parking Anywhere</title>
</head>
<body>

    <div id="nav_container" class="h-75">
        <!--Main navigation-->
        <nav class="navbar navbar-dark   navbar-expand-lg ">
            <div class="container-fluid">
                <div id="main_logo">
                    <a class="navbar-brand" href="index.html">
                        <img src="img/logo.png" width="50" height="50" style="border-radius: 50%">
                        <span class="ml-2" > zingo<strong>parking</strong>space </span>
                    </a>
                </div>

                <button class="navbar-toggler"
                        data-toggle="collapse" data-target="#dropdownNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="dropdownNavbar">
                    <ul class="navbar-nav ml-auto " >
                        <li class="nav-item mr-4">
                            <a href="#" class="nav-link ">Top Locations</a>
                        </li>
                        <li class="nav-item  mr-4">
                            <a href="#" class="nav-link">How it works</a>
                        </li>
                        <li class="nav-item mr-4">
                            <a href="#" class="nav-link">Support</a>
                        </li>
                        <li class="nav-item mr-4">
                            <a href="#" class="nav-link">Business</a>
                        </li>
                        <li class="mr-4 text-white">
                            <span class="nav-link">|</span>
                        </li>

                        <li class="nav-item mr-4">
                            <a href="signup.html" class="nav-link">Sign up</a>
                        </li>
                        <li class="nav-item mr-4">
                            <a href="login.html" class="nav-link">Login</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

        <!--Jombotron below navigation-->
        <div class="jumbotron jumbotron-fluid bg-transparent text-white text-center text-capitalize" >
            <div class="container">
                <h1 class="display-3 text-capitalize font-weight-normal">Find and Book Parking</h1>
                <p class="lead  mb-5" style="position: relative; top: 15px">Choose from our wide variety of parking spaces nationwide </p>

                <div class="search_parkings container mt-5 form-inline  rounded">
                    <div class="container  bg-transparent p-3 row">
                        <!--Rectangular radio buttons-->
                        <div class="btn-group col-3" data-toggle="buttons">
                            <label class="btn  btn-success btn-lg">
                                <input type="radio" name="options" id="hourly_radiobtn" autocomplete="off" checked> Hourly  <!--preselected-->
                            </label>
                            <label class="btn btn-lg btn-light">
                                <input type="radio" name="options" id="monthly_radiobtn" autocomplete="off">  Monthly
                            </label>
                        </div>

                        <input type="text" class="form-control w-50 col-7 " id="location_edittext" placeholder="Where would you like to park? ">
                        <div class="col-2">
                            <button type="button" class="btn btn-success btn-lg disabled ">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!--jumbotron-->
    </div> <!--Nav + jumbotron end -->

    <section class="contents_main">
        <!--Logic for middle page-->
    </section>

    <footer class="pt-4">

        <!--Terms and conditions -->
        <div class="container pt-4 pl-4 pr-4">

            <div class="row" >
                <!-- At below 768px col are stacked upon each other-->
                <!-- At below 992px col with col2 are stacked upon each other-->
                <div class="col-sm-10 col-lg-3 text-white ">
                    <h4 class="font-weight-norma"> Download our Apps </h4>
                    <img class="img-thumbnail rounded mt-4" height="120px" width="160px" src="https://www.yourparkingspace.co.uk/images/frontend/redesign/footer/google-play.png"><br>
                </div>


                <div class="col-sm-10 col-lg-6 text-justify text-white pr-5">
                    <h4 class="font-weight-normal"> Frequently Asked Questions </h4><br>
                    <h4 class="lead"> What happens after I book a space? </h4>
                    <span class="font-weight-light font-small" > We will inform the owner of the space and automatically send you the full space address and any extra details.</span>

                    <h4 class="lead mt-4"> Is my space guaranteed?</h4>
                    <span class="font-weight-light font-small" > We will inform the owner of the space and automatically send you the full space address and any extra details.</span>
                    <br><br>
                    <a href="" class="text-success">
                        <p class="font-weight-bold text-success">More FAQ's</p>
                    </a><br>
                </div>
                <div class="col-sm-10  col-lg-3  text-white">
                    <h4 class="font-weight-normal"> Top Locations </h4><br>
                    <p>Delhi</p>
                    <p>Bangalore</p>
                    <p>Hyderabad</p>
                    <p>Mumbai</p>
                    <p>Chennai</p>
                    <p>Pune</p>

                </div>
            </div>

            <!--border-->
            <!--<p class="border"></p>-->

            <!--footer bottom-->
            <div class="text-white row pb-2">
                <div class="align-self-center col-3">
                    <img src="img/logo.png" width="40" height="40" >&nbsp;&nbsp;&nbsp;
                    <span class="font-weight-light">zingo<strong>parking</strong>space</span>
                </div>
                <div class="col-9"><br>
                    <p class="text-right text-monospace">&copy; Zingo Hotels Pvt Limited</p>
                </div>
            </div>

        </div>

    </footer>


<script src="script/index.js"></script>
<script src="bootstrap/js/fontawesome-all.js"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>