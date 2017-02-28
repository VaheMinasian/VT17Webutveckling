initialPortions=[];
window.onload = updateIngredients();

function updateIngredients() {
    "use strict";
    var i, pieCount, portion, tempNumber; 
    pieCount = document.getElementById("pieCount").value;
    if (pieCount < 1) pieCount=1;
    else if (pieCount > 10) pieCount=10;
    document.getElementById("pieCount").value = pieCount;
    
    var ulist = document.getElementsByTagName('ul')[0];
    var listItem = ulist.getElementsByTagName('li');

    for (i = 0; i < listItem.length; i++) {
        var tempStr = listItem[i].innerHTML;
       var tempNumber = parseInt(tempStr.match(/[0-9]+/));
       if (typeof (initialPortions[i]) === "undefined"){
            initialPortions[i] = tempNumber;
       }
        tempNumber = initialPortions[i] * pieCount;
        tempStr = tempStr.replace(/[0-9]+/, tempNumber);
        listItem[i].textContent= tempStr;
    }
}