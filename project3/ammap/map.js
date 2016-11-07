var povLevel


$( document ).ready(function() {
  loadData("json/state15.json");
});


function loadData(dataURL){

  $.ajax({
    method: "GET",
    url: dataURL,
    dataType: "json",
    success: parseData
  });

} //loadData

function parseData(data){
  console.log(data);

  povLevel = [];


  $.each(data.statePoverty, function(i, item){

    povLevel.push({
      "id": item.id,
      "value": parseFloat(item.value)
    });
  })

  console.log(povLevel);
  buildMap();

} //parseData

function buildMap() {
  var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "light",
    "colorSteps": 10,

    "dataProvider": {
      "map": "usaLow",
      "areas": povLevel
    },

    "areasSettings": {
      "autoZoom": true
    },

    "valueLegend": {
      "right": 10,
      "minValue": "little",
      "maxValue": "a lot!"
    },

    "export": {
      "enabled": true
    }

  } );

} //buildMap
