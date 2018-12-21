<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 24-Sep-18
 * Time: 4:21 PM
 */
if (isset($_GET['Id'])) {
    echo '<script> var BookingId =' . trim($_GET['Id']) . '</script>';
}
?>
<style>
    input[type="number"] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }

    .number-input {
        border: 1px solid #ddd;
        display: inline-flex;
    }

    .number-input,
    .number-input * {
        box-sizing: border-box;
    }

    .number-input button {
        outline:none;
        -webkit-appearance: none;
        background-color: transparent;
        border: none;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        margin: 0;
        position: relative;
    }

    .number-input button:before,
    .number-input button:after {
        display: inline-block;
        position: absolute;
        content: '';
        width: 1rem;
        height: 2px;
        background-color: #212121;
        transform: translate(-50%, -50%);
    }
    .number-input button.plus:after {
        transform: translate(-50%, -50%) rotate(90deg);
    }

    .number-input input[type=number] {
        font-family: sans-serif;
        max-width: 3.5rem;
        padding: .5rem;
        border: solid #ddd;
        border-width: 0 2px;
        font-size: 1.3rem;
        height: 3rem;
        font-weight: 200;
        text-align: center;
    }
</style>
<header class="page-header">
    <div class="container-fluid">
        <h2 class="no-margin-bottom">Room Services</h2>
    </div>
</header>

<section class="feeds ">
    <div class="container-fluid">
        <div class="row">
            <!-- Trending Articles-->
            <div class="col-lg-6">
                <div class="articles card">

                    <div class="card-header d-flex align-items-center">
                        <h2 class="h3">Select Services </h2>
                        <div class="badge badge-rounded bg-green">     </div>
                    </div>
                    <div class="card-body no-padding" id="PaidAmenitiesDiv">


                    </div>

                </div>
                <button id="RequestAmenitiesBtn" class="btn btn-outline-primary">Request </button>
            </div>
        </div>
</section>

<script src="js/pages/roomservives.js"></script>
