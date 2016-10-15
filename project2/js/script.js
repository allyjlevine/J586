
		jQuery(document).ready(function($) {
      console.log( "ready!" );

			// create our slider and set up "theSlider" as a reference for later use
      var theSlider = $('.my-slider').unslider({
				arrows: {
					prev: '<a class="unslider-arrow prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>',
					next: '<a class="unslider-arrow next"> <i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
				}
			});

			theSlider.on('unslider.change', function(event, index, slide) {
				if (index == 4) {
					myChart = window.myHorizontalBar;
					if (myChart == null) {
						setTimeout(function() { createChart(); }, 350);
					}
				}
			});

			function createChart() {
				var ctx = document.getElementById("canvas").getContext("2d");
		    window.myHorizontalBar = new Chart(ctx, {
		        type: 'horizontalBar',
		        data: horizontalBarChartData,
		        options: {
		            // Elements options apply to all of the options unless overridden in a dataset
		            // In this case, we are setting the border of each horizontal bar to be 2px wide and green
		            elements: {
		                rectangle: {
		                    borderWidth: 0,
		                    borderColor: 'rgb(40, 255, 0)',
		                    borderSkipped: 'left'

		                }
		            },
		            responsive: true,
		            legend: {
		                position: 'right',
		                display: false,
		            },
		            title: {
		                display: true,
		                text: 'Financial Losses from HB2',
		                fontFamily: 'Raleway',
		                fontSize: 40,
		                fontStyle: 900,
		                fontColor: 'black',
		                padding: 20,
		            },

		            scales: {
		              xAxes: [{
		                scaleLabel: {
		                  labelString: 'Millions of Dollars Lost',
		                  display: true,
		                },
		                ticks: {
		                  userCallback: function(tick) {
		                    return "$" + tick.toString();
		                  }
		                }

		              }]
		            }
		        }
		    });
			}

			$('.sliderman').unslider();

//  Let's say we want to use $.getScript to load our scripts for some reason






		});
