window.addEventListener("DOMContentLoaded", domLoaded);


/* calls event listener to register click event for convert button, calls
setImage function and displays error message if a number is not input */
function domLoaded() {

}

function convertDegrees (event) {
    //
}

function convertFtoC(fahrenheitDegree) {
    // returns fahrenheit conversion
    return (fahrenheitDegree - 32) * 5/9
}

function convertCtoF(celciusDegree) {
    // returns celcius conversion
    return celciusDegree * 9/5 + 32
}
