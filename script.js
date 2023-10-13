function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputTemperatureElement = document.getElementById('outputTemperature');

    if (isNaN(inputTemperature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    if (inputUnit === 'celsius') {
        const fahrenheit = (inputTemperature * 9/5) + 32;
        outputTemperatureElement.textContent = `${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (inputTemperature - 32) * 5/9;
        outputTemperatureElement.textContent = `${celsius.toFixed(2)}°C`;
    }
}
