document.addEventListener("DOMContentLoaded", function() {
    function celsiusParaFahrenheit(celsius) {
        let fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit;
    }

    let temperaturaCelsius = 25;
    let temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);
    document.body.textContent = "A temperatura atual é: " + temperaturaFahrenheit + "°F";
});
