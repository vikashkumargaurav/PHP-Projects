
function makeDailyoccupancydoughnutChart(data){
    // Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';
    // console.log(data)
// Pie Chart Example
    var ctx = document.getElementById("myDailyPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Arrival", "Free Rooms","Stay"],
            datasets: [{
                data: data,
                backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
            }],
        },
    });
}

function makeDailyoccupancybarChart(data){
    // Bar Chart Example
    var MaxRevValue = Math.max.apply(null, data) // 4
    MaxRevValue = MaxRevValue + 2000

    var ctx = document.getElementById("myDailyRevenuePieChart");
    var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [" Daily Room Revenue", " Avg Room Revenue ", "OTA Revenue","Tax Amount","Daily Discount Amount","Daily Commission","Net Amount","Company Revenue","Offline Revenue"],
            datasets: [{
                label: "Revenue",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: data,
            }],
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'price'
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 10
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: MaxRevValue,
                        maxTicksLimit: 10
                    },
                    gridLines: {
                        display: true
                    }
                }],
            },
            legend: {
                display: true
            }
        }
    });
}

//  make chart for weekly  -----------------------------------------------------

function makeweeklyoccupancydoughnutChart(data){
    // Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';
    // console.log(data);
// Pie Chart Example
    var ctx = document.getElementById("myweeklyPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Arrival", "Free Rooms","Stay"],
            datasets: [{
                data: data,
                backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
            }],
        },
    });
}

function makeweeklyoccupancybarChart(data){
    // Bar Chart Example
    var MaxRevValue = Math.max.apply(null, data) // 4
    MaxRevValue = MaxRevValue + 2000

    var ctx = document.getElementById("myweeklyRevenuePieChart");
    var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [" weekly Room Revenue", " Avg Room Revenue ", "OTA Revenue","Tax Amount","weekly Discount Amount","weekly Commission","Net Amount","Company Revenue","Offline Revenue"],
            datasets: [{
                label: "Revenue",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: data,
            }],
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'price'
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 10
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: MaxRevValue,
                        maxTicksLimit: 10
                    },
                    gridLines: {
                        display: true
                    }
                }],
            },
            legend: {
                display: true
            }
        }
    });
}

//  make chart for monthly  -----------------------------------------------------

function makemonthlyoccupancydoughnutChart(data){
    // Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';
    // console.log(data)
// Pie Chart Example
    var ctx = document.getElementById("mymonthlyPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Arrival", "Free Rooms","Stay"],
            datasets: [{
                data: data,
                backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
            }],
        },
    });
}

function makeMonthlyoccupancybarChart(data){
    // Bar Chart Example
    var MaxRevValue = Math.max.apply(null, data) // 4
    MaxRevValue = MaxRevValue + 5000

    var ctx = document.getElementById("mymonthlyRevenuePieChart");
    var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [" monthly Room Revenue", " Avg Room Revenue ", "OTA Revenue","Tax Amount","monthly Discount Amount","monthly Commission","Net Amount","Company Revenue","Offline Revenue"],
            datasets: [{
                label: "Revenue",
                backgroundColor: "rgba(2,117,216,1)",
                borderColor: "rgba(2,117,216,1)",
                data: data,
            }],
        },
        options: {
            scales: {
                xAxes: [{
                    time: {
                        unit: 'price'
                    },
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 10
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: MaxRevValue,
                        maxTicksLimit: 10
                    },
                    gridLines: {
                        display: true
                    }
                }],
            },
            legend: {
                display: true
            }
        }
    });
}