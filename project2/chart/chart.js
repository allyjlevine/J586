var randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
};

var horizontalBarChartData = {
    labels: ["Pay Pal", "NCAA", "ACC", "NBA"],
    datasets: [{
        label: 'Lost $',
        backgroundColor: '#2130E9',
        data: [24 , 49 , 33 , 100 ]
    }]
};

window.onload = function() {
    // var ctx = document.getElementById("canvas").getContext("2d");
    // window.myHorizontalBar = new Chart(ctx, {
    //     type: 'horizontalBar',
    //     data: horizontalBarChartData,
    //     options: {
    //         // Elements options apply to all of the options unless overridden in a dataset
    //         // In this case, we are setting the border of each horizontal bar to be 2px wide and green
    //         elements: {
    //             rectangle: {
    //                 borderWidth: 0,
    //                 borderColor: 'rgb(40, 255, 0)',
    //                 borderSkipped: 'left'
    //
    //             }
    //         },
    //         responsive: true,
    //         legend: {
    //             position: 'right',
    //             display: false,
    //         },
    //         title: {
    //             display: true,
    //             text: 'Financial Losses from HB2',
    //             fontFamily: 'Raleway',
    //             fontSize: 40,
    //             fontStyle: 900,
    //             fontColor: 'black',
    //             padding: 20,
    //         },
    //
    //         scales: {
    //           xAxes: [{
    //             scaleLabel: {
    //               labelString: 'Millions of Dollars Lost',
    //               display: true,
    //             },
    //             ticks: {
    //               userCallback: function(tick) {
    //                 return "$" + tick.toString();
    //               }
    //             }
    //
    //           }]
    //         }
    //     }
    // });
};
