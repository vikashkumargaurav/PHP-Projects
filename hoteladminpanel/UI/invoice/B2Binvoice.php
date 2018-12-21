<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 07-Sep-18
 * Time: 5:37 PM
 */
require('fpdf17/fpdf.php');

class PDF extends FPDF
{
// Page header
    function Header()
    {


    }

    function Main()
    {
        // Logo
//
        $this->SetTextColor(0, 0, 0);
        $this->SetFont('Times', 'B', 13);
        $this->SetTextColor(0, 0, 0);
        $this->SetLineWidth(0);
        $this->Image('zingo.png', 10, 6, 18, '', "PNG");
        $this->Cell(90, 10, "", '', 0, 'l', false);
        $this->Cell(90, 10, "Sai Invoice", '', 1, 'R', false);
        // Line break
        $this->Ln(10);
        $this->SetDrawColor(0, 0, 0);
        $this->Cell(180, 10, "HOTEL ADDRESS", 'TB', 1, 'C', false);

        $this->SetFont('Times', '', 12);

        $this->Ln(5);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(40, 6, 'Sai', 0, 2);
        $this->Cell(40, 6, 'Rajajinagar', 0, 2);
        $this->Cell(40, 6, 'Bengaluru', 0, 2);


        $this->SetXY(80, 40);

        $this->SetFont('Times', 'B', 15);
        $this->Cell(50, 6, '', 'R', 2);
        $this->Cell(50, 6, 'GST No', 'R', 2);
        $this->SetFont('Times', '', 12);
        $this->Cell(50, 6, '3687612731', 'R', 2);
        $this->Cell(50, 6, '', 'R', 2);
        $this->Cell(50, 3, '', 'R', 2);

        $this->SetXY(150, 43);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(30, 6, 'Date', 0, 2, 'L');
        $this->SetFont('Times', '', 12);
        $this->Cell(30, 6, 'Sep 08,2018', 0, 2, 'L');
        $this->SetFont('Times', 'B', 15);
        $this->Cell(30, 6, 'Invoice', 0, 2, 'L');
        $this->SetFont('Times', '', 12);
        $this->Cell(30, 6, 'XY-784366', 0, 2, 'L');
        $this->SetX(10);
        $this->SetFont('Times', 'B', 15);
        $this->Cell(182, 10, "BILL TO", 'TB', 1, 'C', false);
        $this->SetX(10);
        $this->SetFont('Times', 'B', 13);
        // booking details ----------------------------------------------------above is header
        $this->Ln(0);
        $this->Cell(120, 10, "TURBO ENERGY PRIVATE LIMITED", '', 0, 'L', false);
        $this->Cell(50, 10, "CUSTOMER ID : 348973472", '', 1, 'L', false);
        $this->SetFont('Times', '', 13);
        $this->Ln(0);
        $this->MultiCell(100, 5, 'No 67, RA Puram, Chamiers Road Nandanam, Chennai 600 028 GST No- 29AAACT2916R1ZR', '');
        $this->Ln(5);
        $this->Cell(180, 0, "", 'B', 0, 'L', false);

        $this->Ln(0);
        $this->SetFont('Times', 'B', 13);
        $this->Cell(40, 10, "Guest Name : ", 'T', 0, 'L', false);
        $this->SetFont('Times', '', 13);
        $this->Cell(140, 10, "Testing Man", 'T', 1, 'L', false);

        $this->SetLineWidth(0);
        $this->Cell(100, 10, " Description", 'LTR', 0, 'C', false);
        $this->Cell(40, 10, "Quantity", 'LTR', 0, 'C', false);
        $this->Cell(40, 10, "Amount", 'LTR', 0, 'C', false);
        $this->Ln(10);
        $this->Cell(100, 10, " Duration -Sep 09,2018 to Sep 17,2018- PAX-3", 'LTR', 0, 'L', false);
        $this->Cell(40, 10, "2", 'LTR', 0, 'C', false);
        $this->Cell(40, 10, "Rs 2500", 'LTR', 0, 'C', false);

        $this->Ln(10);
        $this->Cell(100, 10, " GST Charges @12%", 'LR', 0, 'L', false);
        $this->Cell(40, 10, "", 'LR', 0, 'C', false);
        $this->Cell(40, 10, "Rs 200", 'LR', 0, 'C', false);

        $this->Ln(10);
        $this->Cell(100, 10, " Room Category- Ac Deluxe SUIT", 'LR', 0, 'L', false);
        $this->Cell(40, 10, "", 'LR', 0, 'C', false);
        $this->Cell(40, 10, "", 'LR', 0, 'C', false);
        $this->Ln(10);
        $this->Cell(100, 10, " Payment Mode : PaY@HOTEL", 'LR', 0, 'L', false);
        $this->Cell(40, 10, "", 'LR', 0, 'C', false);
        $this->Cell(40, 10, "", 'LR', 0, 'C', false);

        $this->Ln(10);
        $this->Cell(100, 10, "", 'TLB', 0, 'L', false);
        $this->Cell(40, 10, "Sub Total", 'TLRB', 0, 'C', false);
        $this->Cell(40, 10, "Rs. 8220.0", 'TLRB', 0, 'C', false);
        $this->Ln(10);




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
$pdf->Main();
$pdf->Ln(5);
$pdf->BankDetails();

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

