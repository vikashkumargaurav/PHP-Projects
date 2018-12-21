<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="stylesheet" href="styles/style_register_login.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">
    <title>Register with us </title>
</head>
<body id="sign_up_body">


<!--For Navigations -->
<div >
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
</div> <!--Nav end -->


<section class="signup">
    <div class="container">
        <div class="signup-content">
            <div class="signup-form">
                <h2 class="form-title">Sign up</h2>
                <form method="POST" class="register-form" id="register-form">
                    <div class="form-group">
                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="name" id="name" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                        <input type="email" name="email" id="email" placeholder="Your Email"/>
                    </div>
                    <div class="form-group">
                        <label for="mobile"><i class="zmdi zmdi-phone"></i></label>
                        <input type="email" name="email" id="mobile" placeholder="Your Mobile"/>
                    </div>
                    <div class="form-group">
                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label for="re_pass"><i class="zmdi zmdi-lock-outline"></i></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                    </div>
                    <div class="form-group form-button">
                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                    </div>
                </form>
            </div>
            <div class="signup-image">
                <figure><img src="img/signin-image.jpg" alt="sing up image"></figure>
                <a href="login.html" class="signup-image-link">I am already member</a>
            </div>
        </div>
    </div>
</section>s


<footer id="footer_signup" class="container-fluid pt-3" >
        <!--footer bottom-->
        <div class="text-white row pb-2">
            <div class="col-3 align-self-center">
                <img src="img/logo.png" width="40" height="40" >&nbsp;&nbsp;&nbsp;
                <span class="font-weight-light">zingo<strong>parking</strong>space</span>
            </div>
            <div class="col-9 align-self-center">
                <br><p class="text-right text-monospace text-white ">&copy; Zingo Hotels Pvt Limited</p>
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