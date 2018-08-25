//RGB Color Mixer Project by Kurtis Bassmann
document.addEventListener("DOMContentLoaded", run);
function run(){
    buttonsList = $('button');
    buttonsList.on("click",buttonHandler);

    var colorsToMix = new Array(0);

    function buttonHandler(event){
        var color = $(event.target).attr("class")
        colorsToMix.push(color);
        
        if(colorsToMix.length === 2) {
            if (colorsToMix[0] === colorsToMix[1]) {
                alert("Colors are the same. Try again."+ colorsToMix[0] + " " + colorsToMix[1])
            }
            else{
                //here
                addButton(mixColors(colorsToMix));
                console.log(mixColors(colorsToMix))
                console.log("added button")
                
            }

            colorsToMix = new Array(0);    

        }
    }



    function mixColors(colorsArr) { // compares Strings in colorsArray, returns String name of combined color
        var c1 = colorsArr[0];
        var c2 = colorsArr[1];
        var c3;

        if(c1==="Red" && c2==="Yellow" || c2==="Red" && c1==="Yellow")
            c3 = "Orange";

        else if(c1==="Blue" && c2==="Red" || c2==="Blue" && c1==="Red")
            c3 = "Purple";
        
        else if(c1==="Yellow" && c2==="Blue" || c2==="Yellow" && c1==="Blue")
            c3 = "Green";
        
        return c3;

    }

    function addButton(color){
        //find out if button exists already
        if($("."+color)[0]) {
            alert("button duplicate found")
        }
        else {
            //create new button element w/ color, text and class
            newButton = $("<button class ='"+color+"'></button>")
            newButton.text(color)
            newButton.css("background-color", color);
            console.log(newButton)

            //figure out accurate hex value corresponding to the String passed in.
            var hex;
            if(color==="Orange")
                hex = "#ff8000";
            else if(color==="Green")
                hex = "#00ff00"
            else if(color==="Purple")
                hex = "#9900cc"
            

            //set color of button to hex value
            newButton.css("background-color", hex);

            //figure out where to append the button
            if(color==="Orange" || color==="Green" || color==="Purple") {
                $("#secondary").append(newButton);
                
            }

            else{
                $("#tertiary").append(newButton);
            }
        }
    }
}