  var $time = new Date();
		var $month = $time.getMonth();
		var $date = $time.getDate();
		var $day = $time.getDay();
		var $hours = $time.getHours();
		var $minutes = $time.getMinutes();
		var $suffix = "am";

		if($minutes < 10) {
			$minutes = "0" + $minutes;
		}

		if ($hours >= 12) {
			$suffix = "PM";
			$hours = $hours - 12;
		}

		if ($hours === 0) {
			$hours = 12;
		}

		var $days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

		var $months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");


		$('.time').html($hours + ":" + $minutes + " " + '<span id="suffix">' + $suffix + '</span>');
		$('.month').html($months[$month]);
		$('.date').html($date);
		$('.day').html($days[$day]);
		$(function() {
			$( "#stamp" ).draggable();
			$('#sBtn').click(function() {
				$('#stamp').fadeToggle('5000', function() {
					if ($('#stamp').is(':visible')) {
						$('#sBtn').val('Hide or Drag'); 
					} else {
						$('#sBtn').val('Bring it Back');
					}
				});
			});
		});


$("footer ul li").on("click", "a", function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});