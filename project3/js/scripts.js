$(document).ready(function() {
    $('#allData').DataTable( {
        "ajax": 'json/dataSummary.json',
        "order": [[4, "desc"]],
        "lengthChange": false,
        "paging": false,
        "searching": false,
        "pageLength": 13
    } );
    $('#regionData').DataTable( {
        "ajax": 'json/regionData.json',
    } );
} );

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

//Line chart
var eduLine = c3.generate({
  bindto: '#edu-line',
  data: {
    columns: [
      ['data1', 26.3, 12.9, 9.6, 4.5]
    ],
  }

});
