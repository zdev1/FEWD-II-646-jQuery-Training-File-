/* all jQuery scripts that were used in lecture 02 are listed below. They have been commented out so that the subsequent script can run. */

/* basic document ready  command
jQuery(document).ready(function(){
	alert('the page ie ready!');
});
*/


/* testing the selection, result is all li elements
$(document).ready(function(){
	alert($('li').length + ' elements');
});
*/

/* testing the selection, get more specific
$(document).ready(function(){
	alert($('ul.numbers li').length + ' elements');
});
*/

/* using a filter to test for even or odd
$(document).ready(function(){
	alert($('ul.numbers li:even').length + ' elements');
});
*/

/* selecting multiple elements
$(document).ready(function(){
	alert($('ul.numbers li:even, ul.colors li:odd').length + ' elements');
});
*/

/* Using css to decorate
$(document).ready(function(){
	var fontSize = $('ul.numbers li:first').css('font-size');alert(fontSize);
});
*/

/* Using css to make all even list items different
$(document).ready(function(){
	$('ul.numbers li:even').css('background-color','#999');
});
*/

/* Using css to target multiple css properties
$(document).ready(function(){
	$('ul.numbers li:even').css('background-color','#999');
	$('ul.numbers li:even').css('color','#e6e6e6');
});
*/

/* Using object literal*/
$(document).ready(function(){
	$('ul.numbers li:even').css({
	'background-color': '#999',
	'color': '#e6e6e6'
 });
});