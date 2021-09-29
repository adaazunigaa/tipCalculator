//script
//hie the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


//cal tip function
function calculateTip(){
    //store inpute data
    var billAmount = document.getElementById("billAmount").value;
}

//on click call >>
document.getElementById("calculate").onclick = function() 
    {
        calculateTip();
    };