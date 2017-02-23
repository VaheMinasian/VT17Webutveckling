"use strict"
window.onload = validate_number();
window.onload = validate_Leap_Year();
window.onload = sum_numbers();

function validate_number() {
	document.getElementById("idNumberResult").innerHTML = "";
	var summa=0;
    var ID_number = document.getElementById('idNumber').value;
    	if (ID_number.length==12){
    	ID_number = ID_number.substring(2,ID_number.length+1);
    	}
    	if (ID_number.length==10){
    	for (var i=0; i<ID_number.length; i++){
    		if(i%2===1){
    			summa += parseInt(ID_number.charAt(i));
    		}
    		if (i%2===0){
    			switch (ID_number.charAt(i)){
    				case '5': 
    				summa += 1; 
    				break; 

    				case '6':
    				summa += 3;
    				break;

    				case '7':
    				summa += 5;
    				break;

    				case '8':
    				summa += 7;
    				break;

    				case '9':
    				summa += 9;
    				break;

    				default:
    				summa += parseInt(ID_number.charAt(i))*2;
    				break;
    			}
    		}
    	}

    	var result = (summa%10===0) ? "giltigt nummer" : "felaktigt nummer";
    		result = (summa%10===0) ? result.fontcolor("green") : result.fontcolor("red"); 
    		document.getElementById("idNumberResult").innerHTML = result;
    		console.log(summa);
    }
}

function validate_Leap_Year(){
	document.getElementById("leapYearResult").innerHTML = "";
	var leap = "skottår"; 	leap = leap.fontcolor("green");
	var notLeap = "vanligt år"; notLeap = notLeap.fontcolor("red");
	var year = document.getElementById('leapYear').value;
	if(year!=0){
	var result = (((year%100==0)&&(year%400!=0))||(year%4!=0)) ? notLeap : leap;
    document.getElementById("leapYearResult").innerHTML = result;
	}	
}		

function sum_Numbers(){
		var number = document.getElementById('numberSum').value;
		var result = 0;
		for(var i=0; i<number.length; i++){
			result += parseInt(number.charAt(i));
		}
		document.getElementById("numberSumResult").innerHTML = result;
}
