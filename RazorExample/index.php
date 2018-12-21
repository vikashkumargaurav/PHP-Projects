<?php
$razorKey = 'rzp_test_pAgo8Icyb47j3u' ;
?>
<html>
    <head>
        <meta name="viewport" content="width=device-width">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
    <form action="purchase.php" method="POST">
        <!-- Note that the amount is in paise = 50 INR -->
        <script
                src="https://checkout.razorpay.com/v1/checkout.js"
                data-key="<?php echo $razorKey ?>"
                data-amount="10000"
                data-buttontext="Pay with Razorpay"
                data-name="ZIngo Hotels"
                data-description="Proceed your purchase to book room"
                data-image="https://your-awesome-site.com/your_logo.jpg"
                data-prefill.name="Gaurav Raj"
                data-prefill.email="vkgsbs@gmail.com.com"
                data-theme.color="#F37254"
        ></script>
        <input type="hidden" value="Hidden Element" name="hidden">
    </form>
</html>






