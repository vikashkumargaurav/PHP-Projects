function getProfileId(data) {
    // console.log(data);
    window.location.href = "userprofile.php?u=" + data;
}

function getInterestId(data) {
    // console.log(data); i is the interest id
    window.location.href = "contents.php?i=" + data;
}

function getContentsId(data) {
    // console.log(data); i is the interest id
    window.location.href = "post.php?c=" + data;
}

function getCategoriesId(data) {
    // console.log(data); i is the interest id
    window.location.href = "catcontents.php?cat=" + data;
}

function searchObjectByKey(a, key, value ,returnkey) {
    for (var i = 0; i < a.length; i++) {
        if (a[i][key] === value) {
            return a[i][returnkey];
        }
    }
    return 0;
}