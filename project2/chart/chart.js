var randomScalingFactor = function() {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
};

var horizontalBarChartData = {
    labels: ["Pay Pal", "NCAA", "ACC", "NBA"],
    datasets: [{
        label: 'Lost $',
        backgroundColor: '#5259AB',
        data: [24 , 49 , 33 , 100 ]
    }]
};

window.onload = function() {
};
