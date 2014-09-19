$(document).on('ready', function() {
 	$('form').on('submit', function() {
 		var original = $('input').val();
 		var update = $('p').val(orginal);
 	});

 	$('form').on('submit', function(e) {
  	e.preventDefault();
	});

});



  // $('form').on('submit', function() {
  // 	$('textarea').text(update);
 



