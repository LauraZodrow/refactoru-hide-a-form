$(document).on('ready', function() {
 	$('form').on('submit', function() {
 		$('input').atr('data-target').text(input.val());
 		$(this).val();
 	});

 	$('form').on('submit', function(e) {
  		e.preventDefault();
	});

});


// ($('input').atr("data-target")).text(input.val())

  // $('form').on('submit', function() {
  // 	$('textarea').text(update);
 



