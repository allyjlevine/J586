$(document).ready(function(){

  function loadData() {
    $.ajax({
      method:"GET",
      url:"race-history.json",
      dataType:"JSON",
      success: function(raceData) {
        console.log("Worked!");
        console.log(raceData);
      }
    })
  }


});



var sexChart = c3.generate({
  bindto: '#sex-chart',
  data: {
    columns: [
      ['Men', 44],
      ['Women', 56]
    ],
    type: 'pie',
  }
});



function parseData ( ) {
  console.log(raceData);
}

var chart = c3.generate({
  bindto: '#race-chart',
  data: {

    // json: [
    //   // white
    //   {
    //     "Total": 53550,
    //     "In Poverty": 9204
    //   },
    //   // black
    //   {
    //     "Total": 11087,
    //     "In Poverty": 3651
    //   },
    //   // asian
    //   {
    //     "Total": 3786,
    //     "In Poverty": 466
    //   },
    //   // hispanic
    //   {
    //     "Total": 18231,
    //     "In Poverty": 5269
    //   }
    // ],

    keys: {
     value: ['Total', 'In Poverty'],
    },
    x : 'x',
    columns: [
      ['x','White', 'Black', 'Asian', 'Hispanic'],
      ['Total', 53550, 11087, 3786, 18231],
      ['In Poverty', 9204, 3651, 466, 5269],
    ],




    type: 'bar',
    groups: [
      ['Total', 'In Poverty']
    ]
  },
  axis: {
        x: {
            type: 'category'
        },
        rotated: true
    },
  grid: {
    y: {
      lines: [{value:0}]
    }
  }
});
