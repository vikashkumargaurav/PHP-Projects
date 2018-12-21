<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 01-Nov-18
 * Time: 3:24 PM
 */?>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active"> Contents</li>
</ol>

<!-- Icon Cards-->


<div class="row">
    <div class="col-lg-12">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create Contents </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="cityinput">Select CityName</label>
                    <select class="form-control" id="cityinput" >

                    </select>
                </div>
                <div class="row">
                    <div class="col-12">
                        <input type="text" id="videoTitle" placeholder="Title"
                               style="width: 100%;border: none;height: 50px;font-size: 26px;">

                        <textarea id="videoDescription" placeholder="Write your story here " rows="5"
                                  style="width: 100%;border: none;font-size: larger"></textarea>
                        <select class="form-control text-primary" id="videoSubCategoriesinput"
                                style="width: 100%;border: none;font-size: larger;">
                            <option selected disabled>Select Category</option>
                        </select>
                    </div>
                    <div class="col-12" style="margin-top: 10px;">
                        <div class="ui-widget">
                            <input placeholder="#tags" id="videotags"
                                   style="padding:5px;width: 100%;border: none;font-size: larger;">
                        </div>
                    </div>
                    <div class="col-12" style="margin-top: 10px;">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon1"><i
                                        class="ion-ios-cloud-upload"></i></button>
                            </div>
                            <input title="https://www.youtube.com/embed/" id="videoContentURL" type="text"
                                   class="form-control" placeholder="youtube video url" aria-label=""
                                   aria-describedby="button-addon1">

                        </div>
                        <small>https://www.youtube.com/embed/<strong class="text-danger">ppE8q1S4ubo</strong></small>
                    </div>


                </div>

                <button onclick="addvideopostbtn()" id="addvideopostbtn" class="btn btn-primary">Share</button>

            </div>
            <div class="card-footer small text-muted">Add / Update City Name</div>
        </div>
    </div>

</div>

<div class="card mb-3">
    <div class="card-header">

        <div class="form-group"><i class="fas fa-table"></i>
            <label for="cityinput">Contents Data By CityName  </label>
            <select class="form-control" id="searchcityinput" >

            </select>
        </div></div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table  table-hover" id="contentDiv" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Contents Id</th>
                    <th>Title </th>
                    <th>CreatedBy </th>
                    <th>ContentType </th>
                    <th>ContentUrl </th>
                    <th>Delete </th>
                    <th>CreatedDate </th>
                    <!--                    <th>Description</th>-->
                    <!--                    <th>Action </th>-->

                </tr>
                </thead>

                <tbody >

                </tbody>

            </table>
        </div>
    </div>
    <div class="card-footer small text-muted"><span id=""></span></div>

</div>

<script src="js/pages/addcontents.js"></script>
<script src="js/pages/contents.js"></script>
