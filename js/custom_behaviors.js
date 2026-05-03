$(document).ready(function() {
					
	// VARIABLES
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

	const loader = new GLTFLoader();
	loader.setMeshoptDecoder(MeshoptDecoder); // This line is the fix

	loader.load('./socket/socket3.glb', (gltf) => {
    	scene.add(gltf.scene);
	});


	
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
		$(".arrow").fadeIn(1)

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


	$(".arrow").on("click", function(event){
		event.preventDefault()
		$(".containerTwo").fadeIn(1)
		$(".container").fadeOut(1)
		$(".containerThree").fadeOut(1)
		$(".containerFour").fadeOut(1)
		

	})


		$(".checkoutButton").on("click", function(event){
		event.preventDefault()
		$(".textSectionTwo").fadeIn(1)
		$(".textSection").fadeOut(1)
		$(".arrowOrder").fadeOut(1)
		$(".arrowOrderBack").fadeIn(1)

		
		

	})



		$(".checkoutButtonTwo").on("click", function(event){
		event.preventDefault()
		$(".textSectionTwo").fadeOut(1)
		$(".textSectionThree").fadeIn(1)
		$(".arrowOrder").fadeOut(1)
		$(".arrowOrderBack").fadeIn(1)

		
		

	})



		$(".checkoutButtonThree").on("click", function(event){
		event.preventDefault()
		$(".textSectionThree").fadeOut(1)
		$(".textSectionFour").fadeIn(1)
		$(".arrowOrderBack").fadeOut(1)
		

	})



	$("#scan").on("click", function(event){
    event.preventDefault()
    $(".animationHolder").fadeIn(1)
    $(".modalHolder").fadeOut(1)
})


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

var modal2 = document.getElementById("myModalTwo");
// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
submitNow.onclick = function() {
  modal2.style.display = "none";
}

span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
} 

var modal3 = document.getElementById("myModalThree");
// Get the button that opens the modal
var btn = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
submitNow2.onclick = function() {
  modal3.style.display = "none";
}

span.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
} 



var modalSettings = document.getElementById("myModalSettings");

// Open settings from any tab's settings button
$(".settingsLogo").on("click", function() {
  modalSettings.style.display = "block";
});

// Close on X
document.querySelector(".close4").onclick = function() {
  modalSettings.style.display = "none";
}

// Close on outside click
window.addEventListener("click", function(event) {
  if (event.target == modalSettings) {
    modalSettings.style.display = "none";
  }
});







const menuItems = document.querySelectorAll('td');

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all, then add to current
    document.querySelector('td.active')?.classList.remove('active');
    this.classList.add('active');
  });
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  });
}







	
	// FUNCTIONS
	
	
	// INITIALIZATION
	
	
});