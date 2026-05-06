$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS
		$(".shape1").on("click", function(event){
		event.preventDefault()
		$(".main").fadeOut(1)
		$(".mainTwo").fadeIn(1)
		$(".answerBox").delay(1000).slideDown(1000);
		
		

	})


		$(".shape2").on("click", function(event){
		event.preventDefault()
		$(".main").fadeOut(1)
		$(".mainThree").fadeIn(1)
		$(".answerBoxTwo").delay(1000).slideDown(1000);
		
		

	})


		$(".shape3").on("click", function(event){
		event.preventDefault()
		$(".main").fadeOut(1)
		$(".mainFour").fadeIn(1)
		$(".answerBoxThree").delay(1000).slideDown(1000);
		
		

	})


		$(".shape4").on("click", function(event){
		event.preventDefault()
		$(".main").fadeOut(1)
		$(".mainFive").fadeIn(1)
		$(".answerBoxFour").delay(1000).slideDown(1000);
		
		

	})
	
	// FUNCTIONS
	
	
	// INITIALIZATION
	
	
});