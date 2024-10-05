window.addEventListener("DOMContentLoaded", domLoaded);


/* calls event listener to register click event for convert button, calls
setImage function and displays error message if a number is not input */
function domLoaded() {
    const cInput = document.getElementById("cInput");
    const fInput = document.getElementById("fInput");
    const convertButton = document.getElementById("convertButton");
    const weatherImage = document.getElementById("weatherImage");
    const errorMessage = document.getElementById("errorMessage");

    // event listeners to prevent celsius and fahrenheit from being input at the same time
    cInput.addEventListener("input", function() {
        fInput.value = "";
    })
    fInput.addEventListener("input", function() {
        cInput.value= "";
    })

    // convert buttons event handler
    convertButton.addEventListener("click", function() {
        var celsius = parseFloat(cInput.value)
        var fahrenheit = parseFloat(fInput.value)

        if(!isNaN(fahrenheit)){
            cInput.value = convertFtoC(fahrenheit).toFixed(0);
            setImage(fahrenheit);
            errorMessage.textContent = ""
        }
        else if (!isNaN(celsius)){
            fInput.value = convertCtoF(celsius).toFixed(0);
            setImage(convertCtoF(celsius))
            errorMessage.textContent = ""
        }
        else if (isNaN(celsius) || isNaN(fahrenheit)) {
            errorMessage.textContent = `${cInput.value || fInput.value} is not a number`
        }
    })


}

// function to change image according to fahrenheit degree
function setImage(degree) {
    if (degree < 32) {
        weatherImage.src = "images/cold.png";
        weatherImage.alt = "cold";
    }
    else if (degree >= 32 && degree <= 50) {
        weatherImage.src = "images/cool.png";
        weatherImage.alt = "cool";
    }
    else {
        weatherImage.src = "images/warm.png";
        weatherImage.alt = "warm";
    }
}

function convertFtoC(fahrenheitDegree) {
    // returns fahrenheit conversion
    return (fahrenheitDegree - 32) * 5/9
}

function convertCtoF(celsiusDegree) {
    // returns celcius conversion
    return celsiusDegree * 9/5 + 32
}


