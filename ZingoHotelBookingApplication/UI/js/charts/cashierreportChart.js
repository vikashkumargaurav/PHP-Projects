function makeDailyCashierdoughnutChart(data){
    // Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';
    console.log(data)
// Pie Chart Example
    var ctx = document.getElementById("myDailyCashierPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Cash Payment", "Online Payment","Card Payment"," BTC PostPaid"," BTC PrePaid"],
            datasets: [{
                data: data,
                backgroundColor: ['#28a745', '#ffc107', '#dc3545','#FF75B0','#A75AD2'],
            }],
        },
    });
}


//  make chart for weekly  -----------------------------------------------------

function makeweeklyCashierdoughnutChart(data){
    // Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';
    console.log(data)
// Pie Chart Example
    var ctx = document.getElementById("myweeklyCashierPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Cash Payment", "Online Payment","Card Payment"," BTC PostPaid"," BTC PrePaid"],
            datasets: [{
                data: data,
                backgroundColor: ['#28a745', '#ffc107', '#dc3545','#FF75B0','#A75AD2'],
            }],
        },
    });
}


//  make chart for monthly  -----------------------------------------------------

function makemonthlyCashierdoughnutChart(data){
    // Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';
    console.log(data)
// Pie Chart Example
    var ctx = document.getElementById("mymonthlyCashierPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Cash Payment", "Online Payment","Card Payment"," BTC PostPaid"," BTC PrePaid"],
            datasets: [{
                data: data,
                backgroundColor: ['#28a745', '#ffc107', '#dc3545','#FF75B0','#A75AD2'],
            }],
        },
    });
}

