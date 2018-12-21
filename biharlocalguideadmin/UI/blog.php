<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 03-Sep-18
 * Time: 3:01 PM
 */?>
<script src="//cdn.ckeditor.com/4.10.1/standard/ckeditor.js"></script>
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Blog</li>
</ol>

<!-- Icon Cards-->


<div class="row">
    <div class="col-lg-12">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create Blog </div>
            <div class="card-body">
                <input type="hidden" id="blogImages">
                <input type="hidden" id="BlogImagesId">
                <input type="hidden" id="BlogId">
                <input type="hidden" id="CreatedUser">
                <input type="hidden" id="CreateDate">
                <input type="hidden" id="IsApproved">
                <input type="hidden" id="ProfileId">
                <input type="hidden" id="Status">
                <div class="form-group">
                    <label for="activityinput">Select Activity</label>
                    <select class="form-control" id="activityinput">

                    </select>
                </div>
                <div class="form-group">
                    <!--                    <label for="exampleInputEmail1">Email address</label>-->
                    <input type="text" class="form-control" id="Title" aria-describedby="nameHelp" placeholder="Title">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <!--                    <label for="exampleInputEmail1">Email address</label>-->
                    <input type="text" class="form-control" id="ShortDesc" aria-describedby="nameHelp" placeholder="Short Description">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
<!--                <div class="form-group">-->
<!--                    <textarea type="text" class="form-control" id="LongDesc" aria-describedby="nameHelp" placeholder="long Description" rows="10"></textarea>-->
<!--                </div>-->
                <div class="form-group" style="margin-top: 10px;">
                                <textarea name="LongDesc" id="LongDesc" rows="10" cols="80">
                     Write your story...
                      </textarea>

                </div>
                <div class="input-group mb-3">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="fileUpload">
                        <label class="custom-file-label" for="fileUpload" id="fileUploadName" aria-describedby="fileUpload">Choose file</label>
                    </div>
                    <!--                    <div class="input-group-append">-->
                    <!--                        <span class="input-group-text" id="inputGroupFileAddon02">Upload</span>-->
                    <!--                    </div>-->
                </div>


                <button id="addblogBtn" class="btn btn-primary">Add</button>
                <button id="blogupdateBtn"  class="btn btn-primary">Update Blog</button>
            </div>
            <div class="card-footer small text-muted"></div>
        </div>
    </div>

</div>
<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        Blogs Data  </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table  table-hover" id="blogDiv" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>BlogId</th>
                    <th>Title</th>
                    <th>Activities</th>
                    <th>CreatedUser</th>
                    <th>CreateDate</th>
                    <th>Status</th>
                    <th>Short Description</th>
                    <th>Long Description</th>
                    <th>UpdatedUser</th>
                    <th>UpdateDate</th>
                    <th>blogImages</th>
                    <th>Action </th>

                </tr>
                </thead>

                <tbody >

                </tbody>

            </table>
        </div>
    </div>
    <div class="card-footer small text-muted"><span id=""></span></div>

</div>


<!-- Button trigger modal -->
<button style="display: none" type="button" class="btn btn-primary" id="blogViewBtn" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document" style="max-width: 80%">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="showTitle">Blog Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
              <i  class="fa fa-user"></i> <span id="showCreatedUser"></span> <i  class="fa fa-clock"></i> <span id="showCreatedDate"></span> <span style="float: right" class="badge " id="blogStatus"></span>
                <div class="container">
                    <div class="row">
                        <div class="col-lg">
                            <h3 id="showShortDesc"></h3>
                            <p id="showLongDesc"></p>

                        </div>
                        <div class="col-lg">

                            <p id="BlogImgDiv"></p>
                        </div>
                    </div>
                </div>


            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" id="blogRejectModelBtn" class="btn btn-danger">Reject</button>
                <button type="button" id="blogApproveModelBtn" class="btn btn-primary">Approve</button>
            </div>
        </div>
    </div>
</div>
<script>
    // Replace the <textarea id="editor1"> with a CKEditor
    // instance, using default configuration.
    CKEDITOR.replace('LongDesc');
</script>

<script src="js/pages/blog.js"></script>




