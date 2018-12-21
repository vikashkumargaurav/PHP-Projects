<?php
/**
 * Created by PhpStorm.
 * User: ZingoHotels.com
 * Date: 03-Oct-18
 * Time: 12:21 PM
 */ ?>
<!-- Button trigger modal -->

<style>
    #ui-id-1 {
        z-index: 99999;
    }

    #ui-id-2 {
        z-index: 99999;
    }

    #ui-id-3 {
        z-index: 99999;
    }

    #ui-id-4 {
        z-index: 99999;
    }
</style>
<!-- Modal for search on every page -->
<div class="modal fade" id="example" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Search </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                           aria-controls="home" aria-selected="true">Posts</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                           aria-controls="profile" aria-selected="false">Interest</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                           aria-controls="contact" aria-selected="false">People</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="input-group mb-3" style="margin-top: 10px;">
                            <input type="text" id="searchSubCategories" class="form-control" placeholder="search Posts"
                                   aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button onclick="searchSubCategoriesbutton()" class="btn btn-outline-secondary"
                                        type="button">Search
                                </button>
                            </div>
                        </div>

                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="input-group mb-3" style="margin-top: 10px;">
                            <input type="text" id="searchtags" class="form-control" placeholder="search #Tags"
                                   aria-label="Tags" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button onclick="searchtagsbutton()" class="btn btn-outline-secondary">Search</button>
                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="input-group mb-3" style="margin-top: 10px;">
                                <input type="text" id="searchprofiles" class="form-control"
                                       placeholder="search profiles" aria-label="Tags" aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button onclick="searchprofilesbutton()" class="btn btn-outline-secondary"
                                            type="button">Search
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!--            <div class="modal-footer">-->
            <!--                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>-->
            <!--                <button type="button" class="btn btn-primary">Save changes</button>-->
            <!--            </div>-->
        </div>
    </div>
</div>
<!-- Modal for search on every page -->

<!-- Modal for video post on every page -->
<div class="modal fade" id="videopost" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Search </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-12">
                        <input type="text" id="videoTitle" placeholder="Title"
                               style="width: 100%;border: none;height: 50px;font-size: 26px;">

                        <textarea id="videoDescription" placeholder="Write your story here " rows="3"
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
            </div>
            <div class="modal-footer">
                <button onclick="addvideopostbtn()" id="addvideopostbtn" class="btn btn-primary">Share</button>
            </div>
        </div>
    </div>
</div>
<!-- Modal for video post on every page -->
<!-- Page Footer-->

<footer class="footer">
    <div class="container text-center">
        <!-- Copyrights-->
        <div class="copyrights">
            <!-- Social menu-->
            <ul class="social list-inline-item">
                <li class="list-inline-item"><a href="#" target="_blank" class="social-link"><i
                                class="icon ion-logo-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" class="social-link"><i
                                class="icon ion-logo-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" class="social-link"><i
                                class="icon ion-logo-youtube"></i></a></li>
            </ul>
            <p class="copyrights-text mb-0">Powered By <a href="#" target="_blank" class="copyrights-link">Zingo</a></p>
        </div>
    </div>
</footer>


</body>
</html>
