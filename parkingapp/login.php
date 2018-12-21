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
    <title>Login</title>
</head>
<body id="sign_in_body">


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

<section class="sign-in" style="margin-top: 80px; margin-bottom: 80px">
    <div class="container">
        <div class="signin-content">
            <div class="signin-image">
                <figure><img src="img/signin-image.jpg" alt="sing up image"></figure>
                <a href="signup.html" class="signup-image-link">Create an account</a>
            </div>

            <div class="signin-form">
                <h2 class="form-title">Sign in</h2>
                <form method="POST" class="register-form" id="login-form">
                    <div class="form-group">
                        <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                        <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                        <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                        <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember me</label>
                    </div>
                    <div class="form-group form-button">
                        <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                    </div>
                </form>
                <div class="social-login">
                    <span class="social-label">Or login with</span>
                    <ul class="socials">
                        <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                        <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                        <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>




<footer id="footer_signup" class="container-fluid pt-3" >
    <!--footer bottom-->
    <div class="text-white row pb-2">
        <div class="col-3 align-self-center">
            <img src="img/logo.png" width="40" height="40" >&nbsp;&nbsp;&nbsp;
            <span class="font-weight-light">zingo<strong>parking</strong>space</span>
        </div>

        <div class="col-9 align-self-center align-self-auto">
        <br> <p class="text-right  text-monospace text-white ">&copy; Zingo Hotels Pvt Limited</p>
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