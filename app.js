console.log("js works!");

$(document).ready(function(){
	$('body').on('click', '.callButton', function(){
		$.ajax('insert.html', {
			success: function(response){
				$('.awesomeDiv').html(response)
			}});
		//$('.awesomeDiv').append();
	});

});

//Type this into terminal if you need to localize server --> python -m SimpleHTTPServer 8080
//THEN open a new tab in chrome and navigate to http://127.0.0.1:8080