//RGB Color Mixer Project by Kurtis Bassmann
document.addEventListener("DOMContentLoaded", run);
function run(){
    buttonsList = $('button');
    buttonsList.on("click",buttonHandler);

    var colorsToMix = new Array(0);

    function buttonHandler(event){
        console.log("in handler")
        var color = $(event.target).attr("class")
        console.log(color);
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
        var c3 = "unknown";

        //handling secondary color name result
        if(c1==="Red" && c2==="Yellow" || c2==="Red" && c1==="Yellow")
            c3 = "Orange";

        else if(c1==="Blue" && c2==="Red" || c2==="Blue" && c1==="Red")
            c3 = "Violet";
        
        else if(c1==="Yellow" && c2==="Blue" || c2==="Yellow" && c1==="Blue")
            c3 = "Green";
        
        //handling tertiary color name result
        else if(c1==="Orange" || c2==="Orange"){
            if(c1==="Red" || c2==="Red")
                c3 = "Red-Orange"   //
            else if(c1==="Yellow" || c2==="Yellow")
                c3 = "Yellow-Orange"//
        }
        else if(c1==="Green" || c2==="Green"){
            if(c1==="Yellow" || c2==="Yellow")
                c3 = "Yellow-Green" //
            else if(c1==="Blue" || c2==="Blue")
                c3 = "Blue-Green"   //
        }
        else if(c1==="Violet" || c2==="Violet"){
            if(c1==="Blue" || c2==="Blue")
                c3 = "Blue-Violet"  //
            else if(c1==="Red" || c2==="Red")
                c3 = "Red-Violet"   //
        }

        //handler for red + green, yellow + violet, and blue + orange, these colors result in black
        return c3;
    }

    function addButton(color){
        //find out if button exists already
        if(!isValidColor(color))
            alert("These colors result in Black, when mixing subtractively")
        else if($("."+color)[0]) {
            alert("button duplicate found")
        }
        
        else{
            //create new button element w/ color, text and class
            newButton = $("<button class ='"+color+"'></button>")
            newButton.text(color)
            newButton.css("background-color", color);
            console.log(newButton)
            newButton.on("click",buttonHandler);


            //figure out accurate hex value corresponding to the String passed in.
            var hex;
                //values for secondary colors
            if(color==="Orange")
                hex = "#ff8000"
            else if(color==="Green")
                hex = "#00ff00"
            else if(color==="Violet")
                hex = "#9900cc"
            
                //values for tertiary colors
            else if(color==="Red-Orange")
                hex = "#ff3300"
            else if(color==="Yellow-Orange")
                hex = "#ffbf00"
            else if(color==="Yellow-Green")
                hex = "#80ff00"
            else if(color==="Blue-Green")
                hex = "#00ff40"
            else if(color==="Blue-Violet")
                hex = "#0000ff"
            else if(color==="Red-Violet")
                hex = "#bf00ff"


            //set color of button to hex value
            newButton.css("background-color", hex);

            //figure out where to append the button
            // if color name is secondary
            if(color==="Orange" || color==="Green" || color==="Violet") {
                $("#secondary").append(newButton);
                
            }

            // if color name is tertiary
            else{
                $("#tertiary").append(newButton);
            }
        }
    }

    function isValidColor(colorName) {
        if(
            (colorName === "Red") || (colorName === "Yellow") || (colorName === "Blue")
            ||
            (colorName === "Orange") || (colorName === "Green") || (colorName === "Violet")
            ||
            (colorName === "Red-Orange") || (colorName === "Yellow-Orange")
            ||
            (colorName === "Yellow-Green") || (colorName === "Blue-Green")
            ||
            (colorName === "Blue-Violet") || (colorName === "Red-Violet")
        )
            return true;
        else
            return false;

    }
}