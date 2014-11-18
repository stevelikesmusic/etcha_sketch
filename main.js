var etch = $('#eas'),
		gridCol = 64,
		gridRow = 64;


// Create Grid
for (var i = 0; i < gridCol; i += 1) {
	var row = $('<div class="row" id="' + i + '"></div>');
	for (var ib = 0; ib < gridRow; ib += 1) {
		$('<div class="box"></div>').appendTo(row);
		console.log("inner" + ib);
	}
	//row += $('</div>');
	console.log(i);
	$('#eas').append(row);
	//row = $('<div>');
}

// Set eas size
//etch.css('width', 15.03 * gridRow + "px"); 

// Color box when mouse hovers
$('.box').on(' mouseenter', function() {
	$(this).css('backgroundColor', 'black');
});

// Reset grid
$('#reset').on('click', function() {
	$('.box').css('backgroundColor', '');
});