function triggerDashBoard(){

    // alert('3rd trigger dashboard');

    $(document).ready(function () {
        makeAjaxWithoutLoader(MAIN_API_IRL + 'Calculation/GetStatisticsForWeek/' + hotelId, 'GET', GetStatisticsForWeek, auth);
        makeAjaxWithoutLoader(MAIN_API_IRL + 'Calculation/GetStatisticsForMonth/' + hotelId, 'GET', GetStatisticsForMonth, auth);
        makeAjaxWithoutLoader(MAIN_API_IRL + 'Calculation/GetStatisticsForCurrentDate/'+hotelId, 'GET', GetStatisticsForCurrentDate, auth);
        // ---------------------------------------------------------------------------------
        // makeAjax(MAIN_API_IRL + 'Dashboard/GetDashboardDataForDailyDate/' + hotelId, 'GET', GetDashboardDataForDailyDate, auth);
        // makeAjax(MAIN_API_IRL + 'Dashboard/GetDashboardDataForWeeklyDate/' + hotelId, 'GET', GetDashboardDataForWeeklyDate, auth);
        // makeAjax(MAIN_API_IRL + 'Dashboard/GetDashboardDataForMonthlyDate/' + hotelId, 'GET', GetDashboardDataForMonthlyDate, auth);
    });

}


var DailyCashierGraphData = [];
var WeeklyCashierGraphData = [];
var MonthlyCashierGraphData = [];

function GetStatisticsForCurrentDate(data) {
    // console.log(data);
    DailyCashierGraphData[0] = data.DailyCashPayment;
    DailyCashierGraphData[1] = data.DailyOnlinePayment;
    DailyCashierGraphData[2] = data.DailyCardPayment;
    DailyCashierGraphData[3] = data.DailyBTCPostPaidPayment;
    DailyCashierGraphData[4] = data.DailyBTCPrePaidPayment;
    makeDailyCashierdoughnutChart(DailyCashierGraphData);
}

function GetStatisticsForWeek(data) {
    // console.log(data);
    WeeklyCashierGraphData[0] = data.WeeklyCashPayment;
    WeeklyCashierGraphData[1] = data.WeeklyOnlinePayment;
    WeeklyCashierGraphData[2] = data.WeeklyCardPayment;
    WeeklyCashierGraphData[3] = data.WeeklyBTCPostPaidPayment;
    WeeklyCashierGraphData[4] = data.WeeklyBTCPrePaidPayment;
    makeweeklyCashierdoughnutChart(WeeklyCashierGraphData);
}

function GetStatisticsForMonth(data) {
    console.log(data);
    MonthlyCashierGraphData[0] = data.MonthlyCashPayment;
    MonthlyCashierGraphData[1] = data.MonthlyOnlinePayment;
    MonthlyCashierGraphData[2] = data.MonthlyCardPayment;
    MonthlyCashierGraphData[3] = data.MonthlyBTCPostPaidPayment;
    MonthlyCashierGraphData[4] = data.MonthlyBTCPrePaidPayment;
    makemonthlyCashierdoughnutChart(MonthlyCashierGraphData);
}




function makeDashboardStaysChart(data){
    // Set new default font family and font color to mimic Bootstrap's default styling
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';
    console.log(data)
// Pie Chart Example
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Arrival", "Departure", "Booking","Stay"],
            datasets: [{
                data: data,
                backgroundColor: ['#28a745', '#ffc107', '#dc3545', '#FF5722'],
            }],
        },
    });
}

function makeDashboardRevenueChart(data){
    // Bar Chart Example
   var MaxRevValue = Math.max.apply(null, data) // 4
    MaxRevValue = MaxRevValue +2000

    var ctx = document.getElementById("myRevenuePieChart");
    var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Daily Revenue TotalCost", " Avg Daily ", "Seven Day Revenue"],
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
                        maxTicksLimit: 6
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: MaxRevValue,
                        maxTicksLimit: 5
                    },
                    gridLines: {
                        display: true
                    }
                }],
            },
            legend: {
                display: false
            }
        }
    });
}

