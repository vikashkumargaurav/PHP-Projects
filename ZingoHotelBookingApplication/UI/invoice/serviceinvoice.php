<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 07-Sep-18
 * Time: 5:37 PM
 */
if (isset($_GET['bookingDetails'])) {
    $data = $_GET['bookingDetails'];
//    var_dump($data);
    $dec = base64_decode($data, true);
    $val = json_decode($dec);
//    $BookingId = $val->HotelObj->BookingId;
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

        if($val->BookingObj->BookingStatus=='Complete'||$val->BookingObj->BookingStatus=='Complete'){
            $this->Cell(90, 10, "Invoice", '', 1, 'R', false);
        }else if($val->BookingObj->BookingStatus=='Active'){
            $this->Cell(90, 10, "Dummy Invoice", '', 1, 'R', false);
        }else{
            $this->Cell(90, 10, "Invoice", '', 1, 'R', false);
        }

        // Line break
        $this->Ln(10);
        $this->SetDrawColor(0, 0, 0);
        $this->Cell(90, 10, "HOTEL DETAILS  ", 'TB', 0, 'L', false);
        $this->Cell(90, 10, "GST : #".$val->HotelObj->GSTNumber, 'TB', 1, 'R', false);

        $this->SetFont('Times', '', 12);

        $this->Ln(0);
        $this->Cell(120, 6, '', 'R', 2);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(120, 6, $val->HotelObj->HotelName.' Hotel', 'R', 2);
        $this->SetFont('Times', '', 12);
        $this->Cell(120, 6, $val->HotelObj->Localty, 'R', 2);
        $this->Cell(120, 6, $val->HotelObj->PlaceName.', (PinCode : '.$val->HotelObj->PinCode.')', 'R', 2);
        $this->Cell(120, 6, '', 'R', 2);

        $this->SetXY(135, 43);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(30, 6, 'Email', 0, 2, 'L');
        $this->SetFont('Times', '', 12);
        $this->Cell(30, 6, $val->HotelObj->Email, 0, 2, 'L');
        $this->SetFont('Times', 'B', 15);
        $this->Cell(30, 6, 'Phone Number', 0, 2, 'L');
        $this->SetFont('Times', '', 12);
        $this->Cell(30, 6, $val->HotelObj->ContactNo, 0, 2, 'L');
        $this->Cell(120, 3, '', '', 2);
        $this->SetX(10);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(182, 10, "BILL TO", 'TB', 1, 'L', false);
        $this->SetX(10);
        $this->SetFont('Times', 'B', 13);
        //traveller booking details ----------------------------------------------------above is header
        $this->Ln(0);
        $this->Cell(120, 4, "", '', 0, 'L', false);
        $this->Cell(62, 4, "", 'L', 1, 'L', false);
        $this->Cell(120, 7, "Guest Name : ".$val->TravellerObj->FirstName, '', 0, 'L', false);
        $this->Cell(62, 7, "Booking No : ".$val->BookingObj->BookingNumber, 'L', 1, 'L', false);
        $this->SetFont('Times', '', 13);
        $this->Ln(0);
        $this->Cell(120, 7, "Guest Email : ".$val->TravellerObj->Email, '', 0, 'L', false);
        $this->Cell(62, 7, "Check In   : ".$val->BookingObj->CheckInDate, 'L', 1, 'L', false);
        $this->Cell(120, 7, "Guest Phone No : ".$val->TravellerObj->PhoneNumber, '', 0, 'L', false);
        $this->Cell(62, 7, "Check Out : ".$val->BookingObj->CheckOutDate, 'L', 1, 'L', false);
        $this->Cell(120, 7, "", '', 0, 'L', false);
        $this->Cell(62, 7, "Invoice No : ".$val->BookingObj->BookingId.'ZH', 'L', 1, 'L', false);
        $this->Cell(120, 4, "", 'B', 0, 'L', false);
        $this->Cell(62, 4, "", 'LB', 1, 'L', false);
//        $this->MultiCell(100, 5, 'No 67, RA Puram, Chamiers Road Nandanam, Chennai 600 028 GST No- 29AAACT2916R1ZR', '');
//        $this->Ln(5);
//        $this->Cell(180, 0, "", '', 0, 'L', false);

        $this->Ln(0);
        $this->SetFont('Times', 'B', 13);
        $this->Cell(90, 10, "BILLING DETAILS  ", '', 0, 'L', false);
        $this->Cell(90, 10, "", '', 1, 'R', false);

        $this->SetLineWidth(0);
        $this->Cell(100, 10, " Description", 'LTR', 0, 'C', false);
        $this->Cell(40, 10, "Quantity", 'LTR', 0, 'C', false);
        $this->Cell(40, 10, "Amount", 'LTR', 0, 'C', false);
//        $this->Ln(10);

        $paidAmount=0;
        $unPaidAmount=0;

        if(sizeof($val->BookingObj->servicesList) != 0){
//            $this->Ln(10);
/*            $this->Cell(100, 10, " SERVICES", 'TL', 0, 'L', false);
            $this->Cell(40, 10, "", 'T', 0, 'C', false);
            $this->Cell(40, 10, "", 'TR', 0, 'C', false);
            $this->SetFont('Times', '', 13);*/


            for($i =0 ;$i <sizeof($val->BookingObj->servicesList);$i++){
                if( strcasecmp($val->BookingObj->servicesList[$i]->PaidStatus, 'paid') )
                {
                    $paidAmount = $paidAmount + $val->BookingObj->servicesList[$i]->Amount;
                }else{
                    $unPaidAmount = $unPaidAmount + $val->BookingObj->servicesList[$i]->Amount;
                }
                $this->Ln(10);
                $this->Cell(100, 10,$val->BookingObj->servicesList[$i]->Description , 'TLR', 0, 'L', false);
                $this->Cell(40, 10, '', 'TLR', 0, 'C', false);
                $this->Cell(40, 10, 'Rs. '.$val->BookingObj->servicesList[$i]->Amount, 'TLR', 0, 'C', false);
            }

            $this->SetFont('Times', '', 13);
            $this->Ln(10);
            $this->Cell(100, 10, "", 'LT', 0, 'L', false);
            $this->Cell(40, 10, "Service Amount", 'TLRB', 0, 'C', false);
            $this->Cell(40, 10, "Rs.".$val->HotelObj->ServiceTotalAmount, 'TLRB', 0, 'C', false);
        }


        $this->Ln(10);
        $this->Cell(100, 10, "", 'T', 0, 'L', false);
        $this->Cell(40, 10, "Total", 'TLRB', 0, 'C', false);
        $this->Cell(40, 10, "Rs.".$val->HotelObj->ServiceTotalAmount, 'TLRB', 0, 'C', false);

        $this->Ln(10);
        $this->Cell(100, 10, "", '', 0, 'L', false);
        $this->Cell(40, 10, "Amount Paid", 'LRB', 0, 'C', false);
        $this->Cell(40, 10, "Rs. ".$paidAmount, 'LRB', 0, 'C', false);

        $this->Ln(10);
        $this->Cell(100, 10, "", '', 0, 'L', false);
        $this->Cell(40, 10, "Balance Due", 'LRB', 0, 'C', false);
        $this->Cell(40, 10, "Rs. ".$unPaidAmount, 'LRB', 0, 'C', false);



    }

    function BankDetails()
    {
        $this->SetFont('Times', 'B', 15);
        $this->Cell(180, 10, "BANK DETAILS", 'TB', 1, 'L', false);
        $fill = false;
        $lineHeight = 8;
        $this->SetFont('Times', '', 12);

        $this->Cell(60, $lineHeight, 'BANK NAME', 1, 0, 'L', $fill);
        $this->Cell(120, $lineHeight, '$' . '3253', 1, 1, 'R', $fill);
        $this->Cell(60, $lineHeight, 'ACCOUNT NAME', 1, 0, 'L', $fill);
        $this->Cell(120, $lineHeight, '$' . 'mmt', 1, 1, 'R', $fill);
        $this->Cell(60, $lineHeight, 'ACCOUNT NO', 1, 0, 'L', $fill);
        $this->Cell(120, $lineHeight, '$' . 'swswsq', 1, 1, 'R', $fill);

        $this->Cell(60, $lineHeight, 'IFSC NO', 1, 0, 'L', $fill);
        $this->Cell(120, $lineHeight, '$' . '3253', 1, 1, 'R', $fill);

        $this->Cell(60, $lineHeight, 'ADDRESS', 1, 0, 'L', $fill);
        $this->Cell(120, $lineHeight, '$' . 'mmt', 1, 1, 'R', $fill);

        $this->Cell(60, $lineHeight, 'PAN CARD ', 1, 0, 'L', $fill);
        $this->Cell(120, $lineHeight, '$' . 'swswsq', 1, 1, 'R', $fill);
        $this->Ln(5);
        $this->SetFont('Times', 'I', 11);
        $this->Cell(180, 10, "This is a computer generated invoice and does not required signature", '', 1, 'L', false);
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
$pdf->Ln(10);

$pdf->SetFont('Times', '', 13);
$pdf->SetTextColor(0, 0, 0);
$pdf->Cell(0, 15, "IMPORTANT NOTES", 0, 0, 'L');

$pdf->Ln(12);
$pdf->SetFont('Times', '', 11);

$pdf->MultiCell(0, 6, 'Please Note that this is an Estimated invoice, Final Bill will be shared during Final Check-out');
$pdf->Ln(10);
//$pdf->BankDetails();

//$pdf->BankDetails();
//$pdf->Ln(5);

//$pdf->SetFont('Times', 'B', 15);
//$pdf->SetTextColor(0, 0, 0);
//$pdf->write(5, 'Payment Breakup');
//$pdf->Ln(12);
//$pdf->SetFont('Times', '', 12);
//
//$pdf->PaymentTable();
$pdf->Ln(12);


$pdf->Output();


?>

