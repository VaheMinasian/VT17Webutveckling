"use strict"

$(document).ready(function () {
    $(".rating input").click(
        function () {
           var myRating = $(this).index() + 1;
            rateRequest(myRating);
        }
    );
});

function rateRequest(myRating){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function (){
		
		if(this.readyState === 4 && this.status === 200){
			displayResults();
		}
	}
	xhttp.open("GET",
		"https://edu.oscarb.se/sjk15/api/recipe/?api_key=91a5fd546b1086ec&recipe=appelpaj&rating=" + myRating,
		true);
	xhttp.send();
}

function displayResults () {
    $.ajax({
        method: "GET",
        url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=91a5fd546b1086ec&recipe=appelpaj",
        success: function(data) {
            var rating = data.rating.toFixed(1);
            $("#average").text(rating);
            $("#voters").text(data.votes);
        },
    });
}
