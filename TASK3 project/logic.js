function convert() {
    var temperatureInput = document.getElementById('temperatureInput').value;
    var unitSelect = document.getElementById('unitSelect').value;
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
  
    if (isNaN(temperatureInput)) {
      resultDiv.innerHTML = 'Please enter a valid number!';
      return;
    }
  
    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;
  
    switch (unitSelect) {
      case 'celsius':
        convertedTemperature = {
          fahrenheit: temperature * 9/5 + 32,
          kelvin: temperature + 273.15
        };
        break;
      case 'fahrenheit':
        convertedTemperature = {
          celsius: (temperature - 32) * 5/9,
          kelvin: (temperature - 32) * 5/9 + 273.15
        };
        break;
      case 'kelvin':
        convertedTemperature = {
          celsius: temperature - 273.15,
          fahrenheit: (temperature - 273.15) * 9/5 + 32
        };
        break;
    }
  
    for (var unit in convertedTemperature) {
      if (convertedTemperature.hasOwnProperty(unit)) {
        resultDiv.innerHTML += `${unit}: ${convertedTemperature[unit].toFixed(2)}<br>`;
      }
    }
  }
  