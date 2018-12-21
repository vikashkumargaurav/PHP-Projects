<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 07-Sep-18
 * Time: 12:01 PM
 */
if (isset($_GET['bookingDetails'])) {
    $data = $_GET['bookingDetails'];
//    var_dump($data);
    $dec = base64_decode($data, true);
    $val = json_decode($dec);
    $BookingId = $val->BookingId;
//    $UserName = $val->UserName;
//    var_dump($val);
}
//call the FPDF library
require('fpdf17/fpdf.php');

class PDF extends FPDF
{
// Page header
    function Header()
    {




    }

    function Main($val){
        // Logo
//        $this->Image('logo.png',10,6,30);
        $this->SetTextColor(0, 0, 0);
        $this->SetFont('Times', '', 18);
        $this->SetTextColor(255, 0, 0);
        $this->Cell(0, 15, "Lucida Hospitality Pvt Ltd", 0, 0, 'C');
        $this->Ln(10);
        $this->SetTextColor(0, 0, 0);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(0, 15, "Mob: +91- 7065 651 651 | Email- hello@zingohotels.com", 0, 0, 'C');
        $this->Ln(18);
        $this->SetTextColor(255, 0, 0);
        $this->SetFont('Times', 'U', 13);
        $this->write(5, 'Booking Source: '.$val->BookingSource);
        $this->Ln(7);
        if($val->ResponseBookingId == ""){
            $this->write(5, 'Booking ID: '.$val->BookingId);
        }else{
            $this->write(5, 'Booking ID: '.$val->ResponseBookingId);
        }

        // Line break
        $this->Ln(10);
        $this->SetFont('Times', 'B', 12);
        $this->SetTextColor(0, 0, 0);
        $this->write(5, 'Dear Hotel Partner,');
        $this->Ln(5);
        $message = "We Thank you for your continued support in ensuring the highest level of service Standards. Please
find the reservation for you.";
        $this->MultiCell(0, 6, $message);

    }
    function PriceTable($val)
    {

        $this->SetFont('Arial', 'B', 12);
        $this->SetTextColor(0);
        $this->SetFillColor(230,230,255);
//        $this->SetMargins(25, 0);
        $this->SetLineWidth(0);
        $this->Cell(80, 10, "Item Description", 'LTR', 0, 'C', true);
        $this->Cell(80, 10, "Price", 'LTR', 1, 'C', true);

        $this->SetFont('Arial', '',12);
        $this->SetFillColor(238);
        $this->SetLineWidth(0.2);
        $fill = false;
        $lineHeight = 10;

        if($val->ResponseBookingId == ""){
            $this->Cell(80, $lineHeight, 'BOOKING ID', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight, $val->BookingId, 1, 1, 'L', $fill);
        }else{
            $this->Cell(80, $lineHeight, 'BOOKING ID', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight, $val->ResponseBookingId, 1, 1, 'L', $fill);
        }



        $this->Cell(80, $lineHeight, 'BOOKING Source', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight, $val->BookingSource, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'HOTEL NAME', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight, $val->PropetyName, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'LOCATION', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight, $val->Localty, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'CITY', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight, $val->City, 1, 1, 'L', $fill);


        $this->Cell(80, $lineHeight, 'GUEST NAME', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->GuestName, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'GUEST MOBILE', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->GuestMobile, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'BOOKING DATE', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->BookingDate, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'CHECK-IN DATE', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->checkindate, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'CHECK-OUT DATE', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->checkoutdate, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'NUMBER OF NIGHTS', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->TotalNoOfNights, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'ROOM TYPE', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->RoomType, 1, 1, 'L', $fill);


        $this->Cell(80, $lineHeight, 'TOTAL ROOM(S)', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->NoOfRooms, 1, 1, 'L', $fill);


        $this->Cell(80, $lineHeight, 'TOTAL GUEST(S)', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->TotalGuest, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'RATE PLAN', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->RatePlaneName, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'PAYMENT MODE', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->PaymentMode, 1, 1, 'L', $fill);

        $this->Cell(80, $lineHeight, 'INCLUSION', 1, 0, 'L', $fill);
        $this->Cell(80, $lineHeight,  $val->Inclusion, 1, 1, 'L', $fill);



    }
    function PaymentTable($val)
    {
        $this->SetFont('Arial', 'B', 12);
        $this->SetTextColor(0);
        $this->SetFillColor(230,230,255);
//        $this->SetMargins(25, 0);
        $this->SetLineWidth(0);
        $this->Cell(80, 10, "Item Description", 'LTR', 0, 'C', true);
        $this->Cell(80, 10, "Price", 'LTR', 1, 'C', true);

        $this->SetFont('Arial', '',12);
        $this->SetFillColor(238);
        $this->SetLineWidth(0.2);
        $fill = false;
        $lineHeight = 10;



        if($val->BookingSourceType == "ota"){

            $this->Cell(80, $lineHeight, '(i) ROOM CHARGES '.$val->NoOfRooms.' Room,'.$val->TotalNoOfNights.' Night', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight, $val->RoomCharge, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, '(ii) EXTRA CHARGES', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->ExtraCharge, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, '(iii) HOTEL TAXES', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->HotelTax, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, '(A) HOTEL GROSS CHARGES (i+ii+iii)', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->HotelGrossCharges, 1, 1, 'L', $fill);


            $this->Cell(80, $lineHeight, 'OTA Commission', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->OTACommissionAmount, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, 'OTA GST @ 18 % (Incl IGST/CGST/SGST)', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->OTAGst, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, '(B) OTA  (Incl GST)', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->OTACommissionIncludingGST, 1, 1, 'L', $fill);
            $this->Cell(80, $lineHeight, '(C) ZINGOHOTELS.COM COMMISSION', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->ZingoHotelsTotalCommission, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, 'Hotel to Pay Zingo(C)', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->HotelToPayZingo, 1, 1, 'L', $fill);
            if($val->PaymentMode == "PaY@Hotel"){
                $amounttoPay = ($val->CustomerPaymentAtOTA - $val->OTACommissionIncludingGST - $val->OTAServiceFee);
                $this->Cell(80, $lineHeight, 'AdditionalCharge', 1, 0, 'L', $fill);
                $this->Cell(80, $lineHeight,  $val->AdditionalCharge , 1, 1, 'L', $fill);
                $this->MultiCell(80, $lineHeight, '(E)Customer Payment at OTA Customer Per-Payment includes discount coupon offered by OTA or Payment Made Through Wallets ', 1);

                $this->setXY(105,74);
                $this->MultiCell(80, 24,  $val->CustomerPaymentAtOTA , 1);
                if($amounttoPay < 0){
                    $this->Cell(80, $lineHeight, 'Amount To Be Paid By HOTEL to OTA (E-B) ',1, 0, 'L');
                }else{
                    $this->Cell(80, $lineHeight, 'Amount To Be Paid By OTA to HOTEL (E-B) ', 1, 0, 'L');
                }
                $this->Cell(80, $lineHeight,abs($amounttoPay)    , 1, 1, 'L');

            }else{//prepaid/online
                $this->Cell(80, $lineHeight, 'OTA to Pay Hotel(A-B)', 1, 0, 'L', $fill);
                $this->Cell(80, $lineHeight,  ($val->HotelGrossCharges - $val->OTACommissionIncludingGST ), 1, 1, 'L', $fill);



            }
            if($val->BookingSource == "MAKEMY TRIP"){
                $this->Cell(80, $lineHeight, 'OTA Service Fee', 1, 0, 'L', $fill);
                $this->Cell(80, $lineHeight,  $val->OTAServiceFee, 1, 1, 'L', $fill);
            }
            if($val->PaymentMode == "PaY@Hotel"){
                $CustomerToPayAtHotel = ($val->HotelGrossCharges + $val->OTAServiceFee + $val->AdditionalCharge) - $val->CustomerPaymentAtOTA;
                $this->Cell(80, $lineHeight, 'Customer To Pay@Hotel', 1, 0, 'L', $fill);
                $this->Cell(80, $lineHeight,  $CustomerToPayAtHotel, 1, 1, 'L', $fill);
            }

            $this->Cell(80, $lineHeight, 'NET AMOUNT (A-B)', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->NetAmount, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, 'ARR', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->ARR, 1, 1, 'L', $fill);


        }else{
            $this->Cell(80, $lineHeight, '(i) ROOM CHARGES '.$val->NoOfRooms.' Room,'.$val->TotalNoOfNights.' Night', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight, $val->RoomCharge, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, '(ii) EXTRA CHARGES', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->ExtraCharge, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, '(iii) HOTEL TAXES', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->HotelTax, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, '(A) HOTEL GROSS CHARGES (i+ii+iii)', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->HotelGrossCharges, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, '(B) ZINGOHOTELS.COM COMMISSION', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->ZingoHotelsTotalCommission, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, 'Hotel to Pay Zingo(B)', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->HotelToPayZingo, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, 'NET AMOUNT (A-B)', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->NetAmount, 1, 1, 'L', $fill);

            $this->Cell(80, $lineHeight, 'ARR', 1, 0, 'L', $fill);
            $this->Cell(80, $lineHeight,  $val->ARR, 1, 1, 'L', $fill);



        }

        if($val->Comments != ""){
            $this->Ln(12);
            $this->SetFont('Times', '', 18);
            $this->SetTextColor(0, 0, 0);
            $this->Cell(0, 15, "Additional NOTES", 0, 0, 'L');
            $this->Ln(12);
            $this->SetFont('Times', '', 12);

            $this->MultiCell(0, 6, $val->Comments);
        }




    }
// Page footer
    function Footer()
    {
        // Position at 1.5 cm from bottom
        $this->SetY(-15);
        // Arial italic 8
        $this->SetFont('Arial', 'I', 8);
        // Page number
        $this->Cell(0, 10, 'Page ' . $this->PageNo(), 0, 0, 'C');
    }
}

// Instanciation of inherited class
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Times', '', 12);
$pdf->Main($val);
$pdf->Ln(5);
$pdf ->SetLeftMargin(25);
$pdf->PriceTable($val);
$pdf->Ln(10);
$pdf->SetFont('Times', 'B', 15);
$pdf->SetTextColor(0, 0, 0);
$pdf->write(5, 'Payment Breakup');
$pdf->Ln(12);
$pdf->SetFont('Times', '', 12);

$pdf->PaymentTable($val);
$pdf->Ln(12);

if($val->PaymentMode == "PaY@Hotel"){
    $pdf->SetFont('Times', '', 18);
    $pdf->SetTextColor(0, 0, 0);
    $pdf->Cell(0, 15, "ADDITIONAL NOTES", 0, 0, 'L');

    $pdf->Ln(12);
    $pdf->SetFont('Times', '', 11);

    $pdf->MultiCell(0, 6, chr(149) .' If the booking is cancelled or changed by guest at a later stage, you will be notified. In such a case, this confirmation email & OTA Booking ID will be null and void. ');
    $pdf->MultiCell(0, 6, chr(149) .' Since this is a Pay at Hotel booking, OTA will not pay any retention charge in case the booking is changed or cancelled or there is a no-show.');
    $pdf->MultiCell(0, 6, chr(149) .' As this is pay at check-out booking, you may ask for a security deposit as per hotel policy at the time of check-in');
    $pdf->MultiCell(0, 6, chr(149) .' If the customer does not show up by 5:00 pm on the day of check-in and does not intimate the same in advance, you may release the room.');
    $pdf->MultiCell(0, 6, chr(149) .' Within a day of the customer\'s check-in, OTA will send you an automated email asking if the customer checked-in or there was a no-show. Please mark the appropriate response.');
    $pdf->MultiCell(0, 6, chr(149) .' In case there is any discrepancy in the voucher related to payment , we request you to let the guest check-in and send us your issue to bookings@zingohotels.com. Our team will assist you regarding the payments and settlements');
    $pdf->Ln(12);
}else{
    $pdf->SetFont('Times', '', 18);
    $pdf->SetTextColor(0, 0, 0);
    $pdf->Cell(0, 15, "IMPORTANT NOTES", 0, 0, 'L');

    $pdf->Ln(12);
    $pdf->SetFont('Times', '', 11);

    $pdf->MultiCell(0, 6, chr(149) . 'Under no circumstances must you charge guest for services listed on this voucher! ');
    $pdf->MultiCell(0, 6, chr(149) .' Only payments for extra services are to be collected from clients ');
    $pdf->MultiCell(0, 6, chr(149) .' Hotel shall issue invoice to the customer/guests, as and when required by the customer/Guest ');
    $pdf->Ln(10);
}
$pdf->SetTextColor(255, 0, 0);
$pdf->Cell(0, 15, "ZingoHotels.com", 0, 0, 'C');
$pdf->Ln(5);
$pdf->Cell(0, 15,'#88, 1st Floor, Koramangala Industrial Layout 5th Block, Near JNC College, Bangalore-560095 ');
$pdf->Ln(5);
$pdf->SetTextColor(0, 0, 0);
$pdf->Output('BookingInvoice.pdf','D');


?>