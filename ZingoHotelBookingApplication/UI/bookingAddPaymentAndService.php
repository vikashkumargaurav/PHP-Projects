<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 01-Nov-18
 * Time: 11:16 AM
 */


?>
<button class="btn btn-danger" id="addServiceBtn"><i class="fas fa-plus"></i>Add Service</button>
<button class="btn btn-danger" id="addPaymentBtn"><i class="fas fa-plus"></i>Add Payment</button>

<div class="ServiceDiv" id="ServiceDiv" style="display: none; margin-top: 30px">
    <div class="form-group">
        <div class="row">
            <div class="col">
                <label for="Description">Service Name </label>
                <input type="text" id="Description" class="form-control" placeholder="Service Name">
            </div>
            <div class="col">
                <label for="Amount">Service Price</label>
                <input type="text" id="Amount" class="form-control" placeholder="Service Price">
            </div>
        </div>

        <div class="row">
            <div class="col">
                <label for="PaidStatus">PaidStatus</label>
                <select style="margin-left: 10px;color: red" id="PaidStatus" class="form-control">
                    <option value="Paid">Paid</option>
                    <option value="Unpaid">Unpaid</option>
                </select>
            </div>

            <div class="col">
                <label for="PaidStatus">PaymentMode</label>
                <select style="margin-left: 10px;color: red" id="PaymentMode" class="form-control">
                    <option value="Paid">Cash</option>
                    <option value="Online">Online</option>
                    <option value="Card">Card</option>
                    <option value="BTC(Prepaid)">BTC(Prepaid)</option>
                    <option value="BTC(Postpaid)">BTC(Postpaid)</option>
                </select>
            </div>

        </div>

    </div>
    <button type="button" id="AddServiceApiPostBtn" class="btn btn-primary">Add</button>
</div>
<div class="PaymentDiv" id="PaymentDiv" style="display: none;margin-top: 30px">
    <div class="form-group">
        <div class="row">
            <div class="col">
                <label for="PaymentName">PaymentName</label>
                <select style="margin-left: 10px;color: red" id="PaymentName" class="form-control">
                    <option value="Room Payment">Room Payment</option>
                    <option value="Service Payment">Service Payment</option>
                    <option value="None">None</option>
                </select>
            </div>
            <div class="col">
                <label for="PaymentAmount">Payment Amount</label>
                <input type="text" id="PaymentAmount" class="form-control" placeholder="Payment Amount">
            </div>
        </div>

        <div class="row">


            <div class="col">
                <label for="PaymentType">PaymentType</label>
                <select style="margin-left: 10px;color: red" id="PaymentType" class="form-control">
                    <option value="Paid">Cash</option>
                    <option value="Online">Online</option>
                    <option value="Card">Card</option>
                    <option value="BTC(Prepaid)">BTC(Prepaid)</option>
                    <option value="BTC(Postpaid)">BTC(Postpaid)</option>
                </select>
            </div>
            <div class="col">
                <label for="Remarks">Remarks</label>
                <textarea rows="3" style="margin-left: 10px;color: red" id="Remarks" class="form-control">

                                    </textarea>
            </div>

        </div>

    </div>
    <button type="button" id="AddPaymentApiPostBtn" class="btn btn-primary">Add</button>
</div>


