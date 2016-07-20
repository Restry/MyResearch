
// Buttons.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - Back of China -


$(document).ready(function(){



	// STATE BUTTON
	// =================================================================
	// Require Bootstrap Button
	// -----------------------------------------------------------------
	// http://backofchina.com/javascript/#buttons
	// =================================================================
	$('#gsp-state-btn').on('click', function () {
		var btn = $(this).button('loading')
		// business logic...

		var doSomething = setTimeout(function(){
			clearTimeout(doSomething);
			btn.button('reset')
		}, 3000);
	});



});
