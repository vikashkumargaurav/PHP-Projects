<html>
    <head>
        <script src="vendor/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap/3/css/bootstrap.css" />

        <!-- Include Date Range Picker -->
        <script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />
        <script src="js/pages/helper.js"></script>
    </head>
    <body>
        <input type="text" id="date" name="daterange" />
        <button id="getDate">Get Date</button>
        <script type="text/javascript">
//            alert(getNextDayDate());
var inDate;
var outDate;
            $(function () {
                $('input[name="daterange"]').daterangepicker(
                        {
                            locale: {
                                format: 'MM/DD/YYYY'
                            },
                            minDate :getCurrentDate(),
                            startDate: getCurrentDate(),
                            endDate: getNextDayDate(getCurrentDate())
                        },
                        function (start, end, label) {
                            inDate = start.format('MM/DD/YYYY');
                            outDate = end.format('MM/DD/YYYY') 
//                            alert(start.format('MM-DD-YYYY'));
//                            alert(end.format('YYYY-MM-DD'));
//                            alert("A new date range was chosen: " + start.format('MM-DD-YYYY') + ' to ' + end.format('YYYY-MM-DD'));
                        });
                        
            });

            $('#getDate').click(function () {
                var str = $('#date').val();
                var res = str.split(' - ');
                console.log(res);
                console.log($('#date').val());
                console.log(inDate);
                
            })
        </script>
    </body>
</html>