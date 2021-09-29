//script
//hie the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


//cal tip function
function calculateTip()
{
    //store inpute data
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //validate 
    if (billAmount === "" || serviceQuality == 0)
    {
        return window.alert("please enter some value!");
    }


    //validate num of people sharing the bill
    if (numPeople ===""|| numPeople <=1){
        numPeople = 1;

        document.getElementById("each").style.display = "none"
    }
    else 
    {
        document.getElementById("each").style.display = "block"
    }

    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //display tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}



//on click call >>
document.getElementById("calculate").onclick = function() 
    {
        calculateTip();
    };