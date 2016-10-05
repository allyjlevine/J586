
		jQuery(document).ready(function($) {
      console.log( "ready!" );
      $('.my-slider').unslider({





				arrows: {
					//  Unslider default behaviour
					prev: '<a class="unslider-arrow prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>',
					next: '<a class="unslider-arrow next"> <i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
				}


			});

			function myMove() {
			  var elem = document.getElementById("myAnimation");
			  var pos = 130;
			  var id = setInterval(frame, 10);
			  function frame() {
			    if (pos == 200) {
			      clearInterval(id);
			    } else {
			      pos++;

			      elem.style.left = pos + 'px';
			    }
			  }
			}

		});
