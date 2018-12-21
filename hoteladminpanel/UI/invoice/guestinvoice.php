<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 07-Sep-18
 * Time: 3:01 PM
 */
//call the FPDF library
if (isset($_GET['bookingDetails'])) {
    $data = $_GET['bookingDetails'];
//    var_dump($data);
    $dec = base64_decode($data, true);
    $val = json_decode($dec);
    $BookingId = $val->BookingId;
//    $UserName = $val->UserName;
//    var_dump($val);
}
require('fpdf17/fpdf.php');

class PDF extends FPDF
{
// Page header
    function Header()
    {


    }

    function Main($val)
    {
        // Logo
//
        $this->SetTextColor(0, 0, 0);
        $this->SetFont('Times', 'B', 13);
        $this->SetTextColor(0, 0, 0);
        $this->SetLineWidth(0);
        $this->Image('zingo.png', 10, 6, 18, '', "PNG");
        $this->Cell(90, 10, "", '', 0, 'l', false);
        $this->Cell(90, 10, $val->PropetyName, '', 1, 'R', false);
        // Line break
        $this->Ln(10);
        $this->SetDrawColor(0, 0, 0);

        $this->SetFont('Times', '', 12);
        $this->Ln(5);
        $this->Cell(40, 10, "Guest Name:", 'TB', 0, 'L', false);
        $this->Cell(150, 10, $val->GuestName, 'TB', 1, 'L', false);
        $this->Ln(5);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(30, 6,$val->PropetyName , 0, 2);
        $this->Cell(30, 6, $val->Localty, 0, 2);
        $this->Cell(30, 6, $val->City, 0, 2);


        $this->SetXY(50, 50);
        $this->SetFont('Times', '', 12);
        $this->Cell(30, 6, 'Check-In', 0, 2);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(30, 6, $val->checkindate, 0, 2);

        $this->SetXY(100, 50);
        $this->SetFont('Times', '', 12);
        $this->Cell(30, 6, 'Check-Out', 0, 2);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(30, 6, $val->checkindate, 0, 2);
        $this->SetX(10);
        $this->Cell(190, 10, "", 'B', 1, 'L', false);
        $this->SetFont('Times', '', 13);
        // booking details ----------------------------------------------------above is header
        $this->Ln(5);
        if($val->ResponseBookingId == "") {
            $this->Cell(40, 10, "Booking ID:", '', 0, 'L', false);
            $this->Cell(150, 10, $val->BookingId, '', 1, 'L', false);
            $this->Ln(0);
        }else{
            $this->Cell(40, 10, "Booking ID:", '', 0, 'L', false);
            $this->Cell(150, 10, $val->ResponseBookingId, '', 1, 'L', false);
            $this->Ln(0);
        }
        $this->Cell(40, 10, "Date of Booking:", '', 0, 'L', false);
        $this->Cell(150, 10, $val->BookingDate, '', 1, 'L', false);

        $this->Ln(0);
        $this->Cell(40, 10, "Room Type:", '', 0, 'L', false);
        $this->Cell(150, 10, $val->RoomType, '', 1, 'L', false);

        $this->Ln(0);
        $this->Cell(40, 10, "No of Rooms:", '', 0, 'L', false);
        $this->Cell(150, 10, $val->NoOfRooms, '', 1, 'L', false);

        $this->Ln(0);
        $this->Cell(40, 10, "No of PAX:", '', 0, 'L', false);
        $this->Cell(150, 10, $val->TotalGuest, '', 1, 'L', false);

        $this->Ln(0);
        $this->Cell(40, 10, "Inclusion:", '', 0, 'L', false);
        $this->Cell(150, 10, $val->Inclusion, '', 1, 'L', false);
        //dhe---------------------------------------------------------------------------------
        $this->SetFont('Times', 'B', 15);
        $this->Cell(190, 10, "Payment BreakUp", 'T', 1, 'L', false);
        $this->SetFont('Times', '', 13);


        $this->Ln(0);
        $this->Cell(40, 10, "Room Charges:", '', 0, 'L', false);
        $this->Cell(150, 10, "Rs ". $val->RoomCharge, '', 1, 'L', false);

        $this->Ln(0);
        $this->Cell(40, 10, "Extra Charges:", '', 0, 'L', false);
        $this->Cell(150, 10,  "Rs ".$val->ExtraCharge, '', 1, 'L', false);

        $this->Ln(0);
        $this->Cell(40, 10, "Hotel Taxes:", '', 0, 'L', false);
        $this->Cell(150, 10,  "Rs ".$val->HotelTax, '', 1, 'L', false);

        $this->Ln(0);
        $this->Cell(40, 10, "Net Amount :", '', 0, 'L', false);
        $this->Cell(150, 10, "Rs ".$val->HotelGrossCharges, '', 1, 'L', false);

        $this->Ln(0);
        $this->Cell(40, 10, "Payment Mode :", '', 0, 'L', false);
        $this->Cell(150, 10, $val->PaymentMode, '', 1, 'L', false);

        //-------------------------------------------------------------
        $this->Ln(10);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(190, 10, "Additional Information", 'T', 1, 'L', false);
        $this->SetFont('Times', '', 15);
        $this->MultiCell(100, 10, '* Hotel Policy', '');
        $this->Ln(0);
        $this->MultiCell(100, 10, '* Cancellation Amendment Policy', '');

    }

    function AdditionalInfo()
    {
        $info_0 = chr(149) . " The standard check-in time is 12:00 PM and the standard check-out time is 11:00 AM. Early check-in or late check-out is strictly subjected to availability and may be chargeable by the hotel. Any early check-in or late check-out request must be directed and reconfirmed with hotel directly";
        $info_1 = chr(149) . "Guest need to present their ID's before check in";
        $info_2 = chr(149) . "Most hotels do not allow unmarried/unrelated couples to check-in. This is at the full discretion of the hotel management. No refund would be applicable in case the hotel denies check-in under such circumstances";
        $info_3 = chr(149) . "Any increase in the price due to taxes will be borne by you and payable at the hotel.";
        $info_4 = chr(149) . "The primary age of the guest must be at least 18 years old to be able to check into this hotel";
        $info_5 = chr(149) . "Your stay does not include additional personal expenses like telephone charges, meals that aren't part of your meal plan, any hotel services you use (like laundry and room service) or tips. The hotel will charge you directly for these when you";
        $info_6 = chr(149) . "It is mandatory for guests to present valid photo identification at the time of check-in. According to government regulations, a valid Photo ID has to be carried by every person above the age of 18 staying at the hotel.";
        $info_7 = chr(149) . "Hotels may charge a mandatory meal surcharge on festive periods e.g. Christmas, New Year's Eve etc... All additional charges (including mandatory meal surcharges) need to be cleared directly at the hotel.";
        $info_8 = chr(149) . "Please note that it takes minimum of 4 to 8 working hours to confirm a reservation at the hotel for same day check-ins.";
        $info_9 = chr(149) . "Hotels may not allow local residents as guests to check-in. This is strictly subjected to the Hotel Policies and goibibo will not be responsible for such check-in denials";
        $info_10 = chr(149) . "For Invoice & tax breakup please contact the Hotel as per the details provided or collect the same from the hotel during checkout.";
        $info_11 = chr(149) . "Hotels reserves the right of admission. Unmarried/unrelated couples may not be allowed to check-in. Similarly accommodation can be denied to guests posing as a 'couple' if suitable proof of identification is not presented at check-in. Goibibo will not be responsible for any check-in denied by the hotel due to the aforesaid reason. No refund would be applicable in case the hotel denies check-in under such circumstances.";


        $info_12 = chr(149) . "Non-Refundable on cancellation or No Show";
        $info_13 = chr(149) . "Any Add On charges are non-refundable.";
        $info_14 = chr(149) . "You can not change the check-in or check-out date.";
        $this->Ln(0);
        $this->SetFont('Times', 'B', 15);
        $this->cell(140, 10, 'Hotel Policy', '', '');
        $this->Ln(10);
        $this->SetFont('Times', '', 11);

        $this->Ln(0);
        $this->MultiCell(180, 6, $info_0, '');

        $this->Ln(0);
        $this->MultiCell(180, 6, $info_1, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_2, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_3, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_4, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_5, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_6, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_7, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_8, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_9, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_10, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_11, '');

        $this->Ln(0);
        $this->SetFont('Times', 'B', 15);
        $this->cell(140, 10, 'Cancellation & Amendment Policy', '', '');
        $this->Ln(10);
        $this->SetFont('Times', '', 11);
        $this->MultiCell(180, 6, $info_12, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_13, '');
        $this->Ln(0);
        $this->MultiCell(180, 6, $info_14, '');
        $this->SetTextColor(255, 0, 0);
        $note = "Zingo Hotels only acts as a booking agent facilitating hotel room reservations between hotels which are the primary service providers with respect to hotel accommodation services and the customer who are the ultimate users of the hotel accommodation services rendered by the hotel";

        $this->Ln(4);
        $this->MultiCell(180, 6, $note, '');
        $this->SetTextColor(0, 0, 0);
        $this->Ln(4);
        $this->Cell(90, 6, 'Zingo Hotel Contact Info', 'TRL', 2, 'L', false);
        $this->Cell(90, 6, 'Lucida Hospitality Pvt Ltd', 'RL', 2, 'L', false);
        $this->Cell(90, 6, 'No 88,First Floor,Koramangala Industrial Layout', 'RL', 2, 'L', false);
        $this->Cell(90, 6, '5th Block Near Jyothi Niwas College., Bengaluru', 'RL', 2, 'L', false);
        $this->Cell(90, 6, 'Karanataka 560095', 'RLB', 2, 'L', false);

        $this->SetXY(100, 190);
        $this->Cell(90, 6, 'Email: hello@zingohotels.com', 'TRL', 2, 'L', false);
        $this->Cell(90, 6, 'Telephone: +91-7065651651', 'RL', 2, 'L', false);
        $this->Cell(90, 6, 'Website: www.zingohotels.com', 'RL', 2, 'L', false);
        $this->Cell(90, 6, '', 'RL', 2, 'L', false);
        $this->Cell(90, 6, '', 'BR', 2, 'L', false);


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

$pdf->AdditionalInfo();
$pdf->Ln(5);

//$pdf->SetFont('Times', 'B', 15);
//$pdf->SetTextColor(0, 0, 0);
//$pdf->write(5, 'Payment Breakup');
//$pdf->Ln(12);
//$pdf->SetFont('Times', '', 12);
//
//$pdf->PaymentTable();
$pdf->Ln(12);


$pdf->Output('guestinvoice.pdf','D');


?>

