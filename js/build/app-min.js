var $time=new Date,$month=$time.getMonth(),$date=$time.getDate(),$day=$time.getDay(),$hours=$time.getHours(),$minutes=$time.getMinutes(),$suffix="am";10>$minutes&&($minutes="0"+$minutes),$hours>=12&&($suffix="PM",$hours-=12),0===$hours&&($hours=12);var $days=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),$months=new Array("January","February","March","April","May","June","July","August","September","October","November","December");$(".time").html($hours+":"+$minutes+' <span id="suffix">'+$suffix+"</span>"),$(".month").html($months[$month]),$(".date").html($date),$(".day").html($days[$day]),$(function(){$("#stamp").draggable(),$("#sBtn").click(function(){$("#stamp").fadeToggle("5000",function(){$("#sBtn").val($("#stamp").is(":visible")?"Hide or Drag":"Bring it Back")})})});