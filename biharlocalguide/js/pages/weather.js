$.ajax({
    url:'http://api.openweathermap.org/data/2.5/weather?q=London',
    type : 'GET',
    dataType :'jsonp',
    success:function (data) {
        console.log(data)
    }
})