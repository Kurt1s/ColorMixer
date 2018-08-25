//RGB Color Mixer Project by Kurtis Bassmann
document.addEventListener("DOMContentLoaded", run);
function run(){

    buttonsList = $('button');
    buttonsList.on("click",buttonHandler);
    var colorsToMix = new Array(0);

    function buttonHandler(event){
        var color = $(event.target).attr("class")
        console.log(color);
        colorsToMix.push(color);

        console.log("Clicked on " + $(event.target).attr('class'));
        if(colorsToMix.length === 2) {
            if (colorsToMix[0]===colorsToMix[1]) {
                alert("Colors are the same. Try again."+ colorsToMix[0] + " " + colorsToMix[1])
                colorsToMix = new Array(0);    
            }
            else{
                var newColor = mixColors(colorsToMix);
                addButton(newColor);
                console.log("added button")
            }
        }
    }



    function mixColors(colorsArr) {
        var c1 = colorsArr[0];
        var c2 = colorsArr[1];
        var c3 = "Unknown"

        if(c1==="Red" && c2==="Yellow")
            c3 = "Orange";

        else if(c1==="Blue" && c2==="Red")
            c3 = "Purple";
        
        else if(c1==="Yellow" && c2==="Blue")
            c3 = "Green";
        
            console.log(c3);
        return c3;

    }

    function addButton(colorStr){
        var list = $("#rybButtons .button")
        console.log(list, "list")
        var newButton = $("<button class='" + colorStr + "'>")
        newButton.css("background-color", colorStr);
        console.log(newButton)
        list.append(newButton);
    }
}