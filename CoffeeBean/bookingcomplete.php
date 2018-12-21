<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include 'header.php';
//include 'navbar.php';
?>
<script>
    var bookingData = loadData('bookingData');

    var roomPriceData = loadData('roomPrice');

    var travellerData = loadData('travellerData')




</script>
<link href="css/bookingcomplete.css" rel="stylesheet">
<section id="#" class="projects-section " style="background-color: #ced4da!important; padding-top: 5rem;">
    <div class="container" style="width: 70%;">
        <div class="note row">
            <div class="col-sm-6 align-self-start">
                <h4 class="font-weight-bold">Booking Invoice</h4>
                <button id="getPrint" style="padding: 0.6rem 1.4rem;" class="btn btn-danger">Print</button>
            </div>
            <div class="col-sm-4 align-self-end  ml-auto ">
                <h5 class="float-right font-weight-bold">CoffeeBean.com</h5>
                <p style="font-size: 11px" class="float-right text-justify font-italic">20th Main Road, No-1850, 14th Cross Rd, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
            </div>
            <div class="w-100"></div>
            <br>
            <div class="col-sm-6 align-self-start">
                <h6 id="FirstName" style="margin-bottom: 0px;" class="font-weight-bold"></h6>
                <p id="Email" style="margin-bottom: 0px;"></p>
                <p id="PhoneNumber" style="margin-bottom: 0px;"></p>
            </div>
            <div class="text-white col col-sm-4 align-self-end  ml-auto">
                <table class="display_font_medium" style="width:100%;border: 1px solid black;">
                    <tr>
                        <th class="table-dark ">Booking ID:</th>
                        <td id="bookingid">xxxxx</td>
                    </tr>
                    <tr>
                        <th class="table-dark">Booking Date:</th>
                        <td id="bookingdate">08 Aug 2018</td>
                    </tr>
                    <tr>
                        <th class="table-dark">Check In Date:</th>
                        <td id="CheckInDate"></td>
                    </tr>
                    <tr>
                        <th class="table-dark">Check Out Date:</th>
                        <td id="CheckOutDate"></td>
                    </tr>
                </table>

            </div><br>
            <div class="col-sm-12 align-self-start"><br>
                <table class="table display_font_medium">
                    <thead class="thead-dark">
                        <tr>

                            <th scope="col">Particulars</th>
                            <th scope="col">Tariff</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody id="roomDetailsDiv">


                    </tbody>
                </table>

            </div>
            <div class="col-sm-12 align-self-end">
                <table class="balance display_font_medium">
                    <tr>
                        <th><span contenteditable>SubTotal</span></th>
                        <td><span data-prefix>INR </span><span id="SellRate"></span></td>
                    </tr>

                    <tr>
                        <th><span contenteditable>Tax & GST</span></th>
                        <td><span data-prefix>INR </span><span id="GSTAmount"></span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Total</span></th>
                        <td><span data-prefix>INR </span><span id="TotalAmount"></span></td>
                    </tr>
                    <tr>
                        <th><span contenteditable>Balance Amt</span></th>
                        <td><span data-prefix>INR </span><span id="BalanceAmount"></span></td>
                    </tr>
                </table>
            </div>
            <hr><br>
            <div class="col-sm-12 " style="border-top-style: ridge;"><br>
                <p >ADDITIONAL NOTES</p>
                <p style="margin-bottom: 0px;" class="display_font_medium">This Hotel is powered by ZingoHotels.</p>
                <p style="margin-bottom: 0px;" class="display_font_medium">This is computer generated Invoice hence Signature is not required.</p>
            </div>
        </div>

    </div>
</section>
<script src="js/pages/bookingcomplete.js"></script>
<?php

//include 'footer.php';
?>
