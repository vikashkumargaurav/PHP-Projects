<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 03-Sep-18
 * Time: 10:14 AM
 */
?>
<!--<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" rel="stylesheet">-->

<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/css/fileinput.css" media="all" rel="stylesheet" type="text/css"/>

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css"/>

<style type="text/css">

    .main-section{

        margin:0 auto;

        padding: 20px;

        margin-top: 10px;

        background-color: #fff;

        /*box-shadow: 0px 0px 20px #c1c1c1;*/

    }

    .fileinput-remove,

    .fileinput-upload{

        display: none;

    }

</style>


<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Activity</li>
</ol>

<!-- Icon Cards-->


<div class="row">

    <div class="col-lg-12">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create Activity
            </div>
            <div class="card-body">
                <input type="hidden" id="activityImages">
                <input type="hidden" id="ActivitiesId">
                <input type="hidden" id="ActivityImagesId">
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="categoryinput">Select Category <strong style="color: red;">*</strong> </label>
                            <select class="form-control" id="categoryinput"
                                    onchange="getSubCategoryonChangeCategoryId(event);">

                            </select>
                        </div>
                        <div class="col">
                            <label for="subcategoryinput">Select SubCategory <strong style="color: red;">*</strong> </label>
                            <select class="form-control" id="subcategoryinput">

                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="ActivityName">Activity Name <strong style="color: red;">*</strong></label>
                    <input type="email" class="form-control" id="ActivityName" aria-describedby=""
                           placeholder="ActivityName">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="ActivityName"> Highlights Of The Activity <strong style="color: red;">*</strong></label>
                    <input type="email" class="form-control" id="HighlightsOfTheActivity" aria-describedby=""
                           placeholder="HighlightsOfTheActivity">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1"> Description <strong style="color: red;">*</strong></label>
                    <textarea type="text" class="form-control" id="Description" aria-describedby="emailHelp"
                              placeholder="Description" rows="6"></textarea>
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
<hr>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="Status">Activity Status <strong style="color: red;">*</strong></label>
                            <select class="form-control" id="Status" onchange="getActivityStatus(event);" >
                                <option value="Active">Active</option>
                                <option value="ActiveEver">Active Ever (Unlimited)</option>
                                <option value="Deactive">Deactive</option>

                            </select>
                            <small class="text-primary">Validity Of Activity</small>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1"> Valid From <strong style="color: red;">*</strong></label>
                            <input type="text" id="ValidFrom" onchange="getValidFrom(event)" class="form-control"
                                   placeholder="ValidFrom">
                            <small class="text-primary">If activity have no validity pass same date to both Valid From & Valid To</small>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1"> Valid To <strong style="color: red;">*</strong></label>
                            <input type="text" id="ValidTo" class="form-control" placeholder="ValidTo">

                        </div>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1"> Availability (Optional)</label>
                            <input type="number" id="Availability" value="0" class="form-control" placeholder="Availability">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1"> Languagues <strong style="color: red;">*</strong></label>
                            <input type="text" id="Languagues" class="form-control" placeholder="Languagues">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">AboutTheActivity (Optional)</label>
                    <textarea type="text" class="form-control" id="AboutTheActivity" aria-describedby="emailHelp"
                              placeholder="AboutTheActivity"></textarea>
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">OtherDetails (Optional)</label>
                    <textarea type="text" class="form-control" id="OtherDetails" aria-describedby="emailHelp"
                              placeholder="OtherDetails"></textarea>
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1"> Address <strong style="color: red;">*</strong></label>
                    <textarea type="text" class="form-control" id="Address" aria-describedby="emailHelp"
                              placeholder="Address"></textarea>
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Location <strong style="color: red;">*</strong></label>
                    <textarea type="text" class="form-control" id="Location" aria-describedby="emailHelp"
                              placeholder="Location"></textarea>
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">WhatWeWillDo (Optional)</label>
                            <textarea type="text" id="WhatWeWillDo" class="form-control"
                                      placeholder="WhatWeWillDo"></textarea>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">WhatIWillProvide (Optional)</label>
                            <textarea type="text" id="WhatIWillProvide" class="form-control"
                                      placeholder="WhatIWillProvide"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">WhoCanCome (Optional)</label>
                            <textarea type="text" id="WhoCanCome" class="form-control"
                                      placeholder="WhoCanCome"></textarea>
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">WhereWeWillMeet (Optional)</label>
                            <textarea type="text" id="WhereWeWillMeet" class="form-control"
                                      placeholder="WhereWeWillMeet"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">GuestRequirements (Optional)</label>
                            <textarea type="text" id="GuestRequirements" class="form-control"
                                      placeholder="GuestRequirements"></textarea>
                        </div>

                        <div class="col">
                            <label for="exampleInputEmail1">GovernmentIDRequired <strong style="color: red;">*</strong></label>
                            <textarea type="text" id="GovernmentIDRequired" class="form-control"
                                      placeholder="GovernmentIDRequired"></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="exampleInputEmail1">Group Size Allowed (Optional)</label>
                            <input type="number" id="GroupSizeALlowed" class="form-control"
                                   placeholder="GroupSizeALlowed" value="0">
                        </div>
                        <div class="col">
                            <label for="exampleInputEmail1">OrderNo <strong style="color: red;">*</strong></label>
                            <input type="number" id="OrderNo" value="0" class="form-control" placeholder="OrderNo">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Notes (Optional) </label>
                    <textarea type="text" class="form-control" id="Notes" aria-describedby="emailHelp"
                              placeholder="Notes"></textarea>
<!--                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Flexible Cancellation Policy (Optional)</label>
                    <textarea type="text" class="form-control" id="FlexibleCancellationPolicy"
                              aria-describedby="emailHelp" placeholder="FlexibleCancellationPolicy"></textarea>
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>

<!--                <div class="input-group mb-3">-->
<!--                    <div class="custom-file">-->
<!--                        <input type="file" class="custom-file-input" id="fileUpload">-->
<!--                        <label class="custom-file-label" for="fileUpload" id="fileUploadName"-->
<!--                               aria-describedby="fileUpload">Choose-->
<!--                            file</label>-->
<!--                    </div>-->
<!--                </div>-->
                <!--        multiple   FIle uplad -->
                <div class="row">

                    <div class="col-lg-12 col-sm-12 col-11 main-section">

                        <h1 class="text-center text-danger">Select / Drag your file here</h1><br>

                        <div class="form-group">

                            <div class="file-loading">

                                <input id="file-1" type="file" name="file[]" multiple class="file"
                                       data-overwrite-initial="false" data-min-file-count="2">

                            </div>

                        </div>

                    </div>

                </div>

                <!--        multiple   FIle uplad -->


                <button id="addactivityBtn" class="btn btn-primary">Add</button>
                <button id="updateactivityBtn" class="btn btn-primary">Update Category</button>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
        </div>
    </div>
</div>


<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        Sub Category Data
    </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table  table-hover" id="activityDivTable" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>ActivitiesId</th>
                    <th>OrderNo</th>
                    <th>ActivityName</th>
                    <th>Availability</th>
                    <th>Validity</th>
                    <th>SubCategoriesName</th>
                    <th>Languagues</th>
                    <th>GovernmentIDRequired</th>
                    <th>Location</th>
                    <th>Address</th>
                    <th> HighlightsOfTheActivity</th>
                    <th>AboutTheActivity</th>
                    <th>Description</th>
                    <th>OtherDetails</th>
                    <th>Notes</th>

                    <th>GroupSizeALlowed</th>
                    <th>GuestRequirements</th>
                    <th>WhatIWillProvide</th>
                    <th>WhatWeWillDo</th>
                    <th>WhereWeWillMeet</th>
                    <th>WhoCanCome</th>
                    <th>activityImages</th>
                    <th>CancellationPolicy</th>
                    <th>Action</th>

                </tr>
                </thead>
                <tbody>

                </tbody>

            </table>
        </div>
    </div>
    <div class="card-footer small text-muted"><span id=""></span></div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/js/fileinput.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-fileinput/4.4.7/themes/fa/theme.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" type="text/javascript"></script>
<script type="text/javascript">

    $("#file-1").fileinput({

        theme: 'fa',
        allowedFileExtensions: ['jpg', 'png', 'gif'],
        overwriteInitial: false,
        validateInitialCount: true,
        showUpload: false,
        showRemove: false,
        required: true,
        initialPreviewAsData: true,
        maxFileSize:6000,

        maxFilesNum: 5,

        slugCallback: function (filename) {

            return filename.replace('(', '_').replace(']', '_');

        }

    });

</script>

<script src="js/pages/activity.js"></script>




