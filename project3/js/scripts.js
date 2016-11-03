var data1;
var data2;

$(document).ready(function(){

  $('#example').DataTable( {
      "ajax": 'dataExample.json'
  } );

  loadData("education.json");
});


function loadData(dataURL){

  $.ajax({
  method: "GET",
  url: dataURL,
  dataType: "json",
  success: parseData
});

} //loadData()

function parseData(data){
  console.log("here");
  buildChart();
}

function buildChart() {


}


// Pie Charts
// gender pie chart
var genderPie = c3.generate({
  bindto: '#gender-pie',
  data: {
    columns: [
      ['Men', 44],
      ['Women', 56]
    ],
    type: 'pie',
  }
});

// race pie chart
var racePie = c3.generate({
  bindto: '#race-pie',
  data: {
    columns: [
      ['White', 17],
      ['Black', 35],
      ['Asian', 17],
      ['Hispanic', 31]
    ],
    type: 'pie',
  }
});

// age pie chart
var agePie = c3.generate({
  bindto: '#age-pie',
  data: {
    columns: [
      ['Under 18', 48],
      ['18 to 64', 30],
      ['65 and Up', 22]
    ],
    type: 'pie',
  }
});
