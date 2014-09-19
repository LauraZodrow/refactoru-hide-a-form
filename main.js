$(document).on('ready', function() {
 	$('form').css('display', 'none');
 	$('form').on('submit', function(e) {
 		$('.form-update input[type=text]').each(function() {
 			var targetSelector = $(this).attr("data-target");
 			var inputVal = $(this).val();
 			$(targetSelector).text(inputVal);
 		});

 		e.preventDefault();
 	});

 	$('.show-form').on('click', function() {
 		$('form').toggle();
 		$('.show-form').text("Hide Form");
 	});
});


// var original = $($('input').attr('data-target')).text($('input').val());
// var newText = $('.profile-page'). find('p').val(original);



  // $('form').on('submit', function() {
  // 	$('textarea').text(update);

  // var newText = $(this).val();
 	// 	$('p').text(newText);
 



