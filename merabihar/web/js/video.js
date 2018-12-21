$(document).ready(function () {


    var videoRow = '';
    console.log(videoData);
    for(i=0;i<videoData.length;i++){
        // console.log(i);

        if(videoData[i].videoType != "Image"){
            console.log(i);
            videoRow += '<div class="swiper-slide">';
            videoRow += '<div class="feed-block" style="padding: 0px;">';
            videoRow += '<div class="video">';
            videoRow += '<video class="thevideo" loop preload="none">';
            videoRow += '<source src="'+videoData[i].videoUrl+'" type="'+videoData[i].videoType+'">';
            videoRow += '</video>';
            videoRow += '</div>';
            videoRow += '</div>';
            videoRow += '</div>';
            videoRow += '</div>';
        }else{

        }
        $('#videoDiv').append(videoRow);
    }




    var figure = $(".video").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {
        $('video', this).get(0).play();
        console.log('yes');
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }
})


// $('#videoDiv').append(videoRow);
