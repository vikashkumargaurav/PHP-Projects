<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 8/31/2018
 * Time: 6:41 PM
 */
?>
<ol class="breadcrumb">
    <li class="breadcrumb-item">
        <a href="#">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Category / Sub Category</li>
</ol>

<!-- Icon Cards-->


<div class="row">
    <div class="col-lg-8">
        <div class="card mb-3">
            <div class="card-header">
                <i class="fas fa-chart-bar"></i>
                Create Category
            </div>
            <div class="card-body">
                <input type="hidden" id="CategoriesImage">
                <input type="hidden" id="CategoriesId">
                <div class="form-group">
                    <label for="cityinput">Select CityName</label>
                    <select class="form-control" id="cityinput">

                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">CategoriesName</label>
                    <input type="text" class="form-control" id="CategoriesName" aria-describedby=""
                           placeholder="Enter Category Name">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                                        <label for="exampleInputEmail1">OrderNo</label>
                    <input type="text" class="form-control" id="OrderNo" aria-describedby="" placeholder="OrderNo">
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                                        <label for="exampleInputEmail1"> Description</label>
                    <textarea type="text" class="form-control" id="Description" aria-describedby=""
                              placeholder="Description"></textarea>
                    <!--                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="input-group mb-3">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input"  placeholder="Browse" id="fileUpload">
                        <label class="custom-file-label" for="fileUpload" id="fileUploadName" aria-describedby="fileUpload">Choose
                            file</label>

                    </div>
<!--                                        <div class="input-group-append">-->
<!--                                            <i class="fas fa-file-invoice-dollar"></i>-->
<!--                                        </div>-->
                </div>


                <button id="addcategoryBtn" class="btn btn-primary">Add</button>
                <button id="updatecategoryBtn" class="btn btn-primary">Update Category</button>
            </div>
            <div class="card-footer small text-muted">Add / Update Category</div>
        </div>
    </div>

</div>


<div class="card mb-3">
    <div class="card-header">
        <i class="fas fa-table"></i>
        Category Data
    </div>
    <div class="card-body">
        <div class="table-responsive">

            <table class="table  table-hover" id="categoryDiv" width="100%" cellspacing="0">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Category Id</th>
                    <th>Category Name</th>
                    <th>OrderNo</th>
                    <th>Sub Category </th>
                    <th>Description</th>
                    <th>Category Images</th>
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


<script src="js/pages/category.js"></script>



