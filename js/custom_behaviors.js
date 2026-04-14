$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS
	$(".designButton").on("click", function(event){
		event.preventDefault()
		$(".containerTwo").fadeIn(1)
		$(".container").fadeOut(1)
		$(".containerThree").fadeOut(1)
		$(".containerFour").fadeOut(1)

	})


	$(".dashboardButton").on("click", function(event){
		event.preventDefault()
		$(".container").fadeIn(1)
		$(".containerTwo").fadeOut(1)
		$(".containerThree").fadeOut(1)
		$(".containerFour").fadeOut(1)

	})



	$(".communityButton").on("click", function(event){
		event.preventDefault()
		$(".containerTwo").fadeOut(1)
		$(".container").fadeOut(1)
		$(".containerFour").fadeOut(1)
		$(".containerThree").fadeIn(1)


	})



	$(".healthServicesButton").on("click", function(event){
		event.preventDefault()
		$(".containerFour").fadeIn(1)
		$(".containerTwo").fadeOut(1)
		$(".container").fadeOut(1)
		$(".containerThree").fadeOut(1)

	})
	
	// FUNCTIONS
	
	
	// INITIALIZATION
	
	
});