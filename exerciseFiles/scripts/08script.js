
$(document).ready(function() {
	$('ul.numbers li:even, ul.colors li:odd').addClass('striped underline');
	$('ul.numbers li:first').removeClass('striped');
});