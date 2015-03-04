
// on document load files
(function(){
$.getScript("/js/build/time-min.js", function(){});
// only temporary until I figure out if/else statment
// $.getScript("/js/build/navEvent-min.js", function(){});
})();


if ($('footer ul li a').hasAttribute( "nav-event" ).length > 0) {
	$.getScript("/js/build/navEvent-min.js", function(){});
}

