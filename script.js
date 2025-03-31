const jsonData = [
{"type8130":"Solid","material8130":"Plain Copper","area":"0.5","value":"36"},{"type8130":"Solid","material8130":"Plain Copper","area":"0.75","value":"24.5"},{"type8130":"Solid","material8130":"Plain Copper","area":"1","value":"18.1"},{"type8130":"Solid","material8130":"Plain Copper","area":"1.5","value":"12.1"},{"type8130":"Solid","material8130":"Plain Copper","area":"2.5","value":"7.41"},{"type8130":"Solid","material8130":"Plain Copper","area":"4","value":"4.61"},{"type8130":"Solid","material8130":"Plain Copper","area":"6","value":"3.08"},{"type8130":"Solid","material8130":"Plain Copper","area":"10","value":"1.83"},{"type8130":"Solid","material8130":"Plain Copper","area":"16","value":"1.15"},{"type8130":"Solid","material8130":"Plain Copper","area":"25","value":"0.727"},{"type8130":"Solid","material8130":"Plain Copper","area":"35","value":"0.524"},{"type8130":"Solid","material8130":"Plain Copper","area":"50","value":"0.387"},{"type8130":"Solid","material8130":"Plain Copper","area":"70","value":"0.268"},{"type8130":"Solid","material8130":"Plain Copper","area":"95","value":"0.193"},{"type8130":"Solid","material8130":"Plain Copper","area":"120","value":"0.153"},{"type8130":"Solid","material8130":"Plain Copper","area":"150","value":"0.124"},{"type8130":"Solid","material8130":"Tinned Copper","area":"0.5","value":"36.7"},{"type8130":"Solid","material8130":"Tinned Copper","area":"0.75","value":"24.8"},{"type8130":"Solid","material8130":"Tinned Copper","area":"1","value":"18.2"},{"type8130":"Solid","material8130":"Tinned Copper","area":"1.5","value":"12.2"},{"type8130":"Solid","material8130":"Tinned Copper","area":"2.5","value":"7.56"},{"type8130":"Solid","material8130":"Tinned Copper","area":"4","value":"4.7"},{"type8130":"Solid","material8130":"Tinned Copper","area":"6","value":"3.11"},{"type8130":"Solid","material8130":"Tinned Copper","area":"10","value":"1.84"},{"type8130":"Solid","material8130":"Tinned Copper","area":"16","value":"1.16"},{"type8130":"Solid","material8130":"Aluminium","area":"1.5","value":"18.1"},{"type8130":"Solid","material8130":"Aluminium","area":"2.5","value":"12.1"},{"type8130":"Solid","material8130":"Aluminium","area":"4","value":"7.41"},{"type8130":"Solid","material8130":"Aluminium","area":"6","value":"4.61"},{"type8130":"Solid","material8130":"Aluminium","area":"10","value":"3.08"},{"type8130":"Solid","material8130":"Aluminium","area":"16","value":"1.91"},{"type8130":"Solid","material8130":"Aluminium","area":"25","value":"1.2"},{"type8130":"Solid","material8130":"Aluminium","area":"35","value":"0.868"},{"type8130":"Solid","material8130":"Aluminium","area":"50","value":"0.641"},{"type8130":"Solid","material8130":"Aluminium","area":"70","value":"0.443"},{"type8130":"Solid","material8130":"Aluminium","area":"95","value":"0.32"},{"type8130":"Solid","material8130":"Aluminium","area":"120","value":"0.253"},{"type8130":"Solid","material8130":"Aluminium","area":"150","value":"0.206"},{"type8130":"Solid","material8130":"Aluminium","area":"185","value":"0.164"},{"type8130":"Solid","material8130":"Aluminium","area":"240","value":"0.125"},{"type8130":"Solid","material8130":"Aluminium","area":"300","value":"0.1"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1","value":"18.1"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1.5","value":"12.1"},{"type8130":"Stranded","material8130":"Plain Copper","area":"2.5","value":"7.41"},{"type8130":"Stranded","material8130":"Plain Copper","area":"4","value":"4.61"},{"type8130":"Stranded","material8130":"Plain Copper","area":"6","value":"3.08"},{"type8130":"Stranded","material8130":"Plain Copper","area":"10","value":"1.83"},{"type8130":"Stranded","material8130":"Plain Copper","area":"16","value":"1.15"},{"type8130":"Stranded","material8130":"Plain Copper","area":"25","value":"0.727"},{"type8130":"Stranded","material8130":"Plain Copper","area":"35","value":"0.524"},{"type8130":"Stranded","material8130":"Plain Copper","area":"50","value":"0.387"},{"type8130":"Stranded","material8130":"Plain Copper","area":"70","value":"0.268"},{"type8130":"Stranded","material8130":"Plain Copper","area":"95","value":"0.193"},{"type8130":"Stranded","material8130":"Plain Copper","area":"120","value":"0.153"},{"type8130":"Stranded","material8130":"Plain Copper","area":"150","value":"0.124"},{"type8130":"Stranded","material8130":"Plain Copper","area":"185","value":"0.0991"},{"type8130":"Stranded","material8130":"Plain Copper","area":"240","value":"0.0754"},{"type8130":"Stranded","material8130":"Plain Copper","area":"300","value":"0.0601"},{"type8130":"Stranded","material8130":"Plain Copper","area":"400","value":"0.047"},{"type8130":"Stranded","material8130":"Plain Copper","area":"500","value":"0.0366"},{"type8130":"Stranded","material8130":"Plain Copper","area":"630","value":"0.0283"},{"type8130":"Stranded","material8130":"Plain Copper","area":"800","value":"0.0221"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1000","value":"0.0176"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1200","value":"0.0151"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1400","value":"0.0129"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1600","value":"0.0113"},{"type8130":"Stranded","material8130":"Plain Copper","area":"1800","value":"0.0101"},{"type8130":"Stranded","material8130":"Plain Copper","area":"2000","value":"0.009"},{"type8130":"Stranded","material8130":"Plain Copper","area":"2500","value":"0.0072"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1","value":"18.2"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1.5","value":"12.2"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"2.5","value":"7.56"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"4","value":"4.7"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"6","value":"3.11"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"10","value":"1.84"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"16","value":"1.16"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"25","value":"0.734"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"35","value":"0.529"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"50","value":"0.391"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"70","value":"0.27"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"95","value":"0.195"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"120","value":"0.154"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"150","value":"0.126"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"185","value":"0.1"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"240","value":"0.0762"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"300","value":"0.0607"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"400","value":"0.0475"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"500","value":"0.0369"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"630","value":"0.0286"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"800","value":"0.0224"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1000","value":"0.0177"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1200","value":"0.0151"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1400","value":"0.0129"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1600","value":"0.0113"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"1800","value":"0.0101"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"2000","value":"0.009"},{"type8130":"Stranded","material8130":"Tinned Copper","area":"2500","value":"0.0072"},{"type8130":"Stranded","material8130":"Aluminium","area":"1.5","value":"18.1"},{"type8130":"Stranded","material8130":"Aluminium","area":"2.5","value":"12.1"},{"type8130":"Stranded","material8130":"Aluminium","area":"4","value":"7.41"},{"type8130":"Stranded","material8130":"Aluminium","area":"6","value":"4.61"},{"type8130":"Stranded","material8130":"Aluminium","area":"10","value":"3.08"},{"type8130":"Stranded","material8130":"Aluminium","area":"16","value":"1.91"},{"type8130":"Stranded","material8130":"Aluminium","area":"25","value":"1.2"},{"type8130":"Stranded","material8130":"Aluminium","area":"35","value":"0.868"},{"type8130":"Stranded","material8130":"Aluminium","area":"50","value":"0.641"},{"type8130":"Stranded","material8130":"Aluminium","area":"70","value":"0.443"},{"type8130":"Stranded","material8130":"Aluminium","area":"95","value":"0.32"},{"type8130":"Stranded","material8130":"Aluminium","area":"120","value":"0.253"},{"type8130":"Stranded","material8130":"Aluminium","area":"150","value":"0.206"},{"type8130":"Stranded","material8130":"Aluminium","area":"185","value":"0.164"},{"type8130":"Stranded","material8130":"Aluminium","area":"240","value":"0.125"},{"type8130":"Stranded","material8130":"Aluminium","area":"300","value":"0.1"},{"type8130":"Stranded","material8130":"Aluminium","area":"400","value":"0.0778"},{"type8130":"Stranded","material8130":"Aluminium","area":"500","value":"0.0605"},{"type8130":"Stranded","material8130":"Aluminium","area":"630","value":"0.0469"},{"type8130":"Stranded","material8130":"Aluminium","area":"800","value":"0.0367"},{"type8130":"Stranded","material8130":"Aluminium","area":"1000","value":"0.0291"},{"type8130":"Stranded","material8130":"Aluminium","area":"1200","value":"0.0247"},{"type8130":"Stranded","material8130":"Aluminium","area":"1400","value":"0.0212"},{"type8130":"Stranded","material8130":"Aluminium","area":"1600","value":"0.0186"},{"type8130":"Stranded","material8130":"Aluminium","area":"1800","value":"0.0165"},{"type8130":"Stranded","material8130":"Aluminium","area":"2000","value":"0.0149"},{"type8130":"Stranded","material8130":"Aluminium","area":"2500","value":"0.0127"},{"type8130":"Flexible","material8130":"Plain Copper","area":"0.5","value":"39"},{"type8130":"Flexible","material8130":"Plain Copper","area":"0.75","value":"26"},{"type8130":"Flexible","material8130":"Plain Copper","area":"1","value":"19.5"},{"type8130":"Flexible","material8130":"Plain Copper","area":"1.5","value":"13.3"},{"type8130":"Flexible","material8130":"Plain Copper","area":"2.5","value":"7.98"},{"type8130":"Flexible","material8130":"Plain Copper","area":"4","value":"4.95"},{"type8130":"Flexible","material8130":"Plain Copper","area":"6","value":"3.3"},{"type8130":"Flexible","material8130":"Plain Copper","area":"10","value":"1.91"},{"type8130":"Flexible","material8130":"Plain Copper","area":"16","value":"1.21"},{"type8130":"Flexible","material8130":"Plain Copper","area":"25","value":"0.78"},{"type8130":"Flexible","material8130":"Plain Copper","area":"35","value":"0.554"},{"type8130":"Flexible","material8130":"Plain Copper","area":"50","value":"0.386"},{"type8130":"Flexible","material8130":"Plain Copper","area":"70","value":"0.272"},{"type8130":"Flexible","material8130":"Plain Copper","area":"95","value":"0.206"},{"type8130":"Flexible","material8130":"Plain Copper","area":"120","value":"0.161"},{"type8130":"Flexible","material8130":"Plain Copper","area":"150","value":"0.129"},{"type8130":"Flexible","material8130":"Plain Copper","area":"185","value":"0.106"},{"type8130":"Flexible","material8130":"Plain Copper","area":"240","value":"0.0801"},{"type8130":"Flexible","material8130":"Plain Copper","area":"300","value":"0.0641"},{"type8130":"Flexible","material8130":"Plain Copper","area":"400","value":"0.0486"},{"type8130":"Flexible","material8130":"Plain Copper","area":"500","value":"0.0384"},{"type8130":"Flexible","material8130":"Plain Copper","area":"630","value":"0.0287"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"0.5","value":"40.1"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"0.75","value":"26.7"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"1","value":"20"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"1.5","value":"13.7"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"2.5","value":"8.21"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"4","value":"5.09"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"6","value":"3.39"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"10","value":"1.95"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"16","value":"1.24"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"25","value":"0.795"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"35","value":"0.565"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"50","value":"0.393"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"70","value":"0.277"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"95","value":"0.21"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"120","value":"0.164"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"150","value":"0.132"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"185","value":"0.108"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"240","value":"0.0817"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"300","value":"0.0654"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"400","value":"0.0495"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"500","value":"0.0391"},{"type8130":"Flexible","material8130":"Tinned Copper","area":"630","value":"0.0292"},{"type8130":"Flexible","material8130":"Aluminium","area":"25","value":"1.23"},{"type8130":"Flexible","material8130":"Aluminium","area":"35","value":"0.901"},{"type8130":"Flexible","material8130":"Aluminium","area":"50","value":"0.634"},{"type8130":"Flexible","material8130":"Aluminium","area":"70","value":"0.445"},{"type8130":"Flexible","material8130":"Aluminium","area":"95","value":"0.334"},{"type8130":"Flexible","material8130":"Aluminium","area":"120","value":"0.256"}

];

document.getElementById('material8130').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('type8130').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('temperature8130').addEventListener('input', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('tempUnit8130').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('resistance').addEventListener('input', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('resistanceUnit').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('length').addEventListener('input', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('lengthUnit').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('diameter').addEventListener('input', () =>{calculateR20();calculateR20PerKm();});
document.getElementById('diameterUnit').addEventListener('change', () =>{calculateR20();calculateR20PerKm();});

function calculateR20() {
  const temperature8130 = parseFloat(document.getElementById('temperature8130').value);
  const resistance = parseFloat(document.getElementById('resistance').value);
  const resultElement = document.getElementById('r20result1');
  const tempUnit8130 = document.getElementById('tempUnit8130').value;
  const resistanceUnit = document.getElementById('resistanceUnit').value;

  if (isNaN(temperature8130) || isNaN(resistance)) {
    resultElement.textContent = '';
    return;
  }

  // Convert to Celsius if temperature is in Fahrenheit
  const tempCelsius = tempUnit8130 === 'F' ? (temperature8130 - 32) * 5 / 9 : temperature8130;

  // Calculate resistance at 20°C
  const resistanceAt20 = resistance / (1 + 0.004 * (tempCelsius - 20));

  resultElement.textContent = `Resistance at 20°C: ${resistanceAt20.toFixed(4)} ${resistanceUnit}`;
}

function calculateR20PerKm() {
  const resistance = parseFloat(document.getElementById('resistance').value);
  const length = parseFloat(document.getElementById('length').value);
  const resultElement = document.getElementById('r20result2');
  const resistanceUnit = document.getElementById('resistanceUnit').value;
  const lengthUnit = document.getElementById('lengthUnit').value;

  if (isNaN(resistance) || isNaN(length)) {
    resultElement.textContent = '';
    return;
  }

  // Convert resistance to Ohms
  let resistanceInOhms;
  switch (resistanceUnit) {
    case 'Micro Ohm':
      resistanceInOhms = resistance / 1e6;
      break;
    case 'Milli Ohm':
      resistanceInOhms = resistance / 1e3;
      break;
    case 'Killo Ohm':
      resistanceInOhms = resistance * 1e3;
      break;
    default:
      resistanceInOhms = resistance;
  }

  // Convert length to Km
  let lengthInKm;
  switch (lengthUnit) {
    case 'm':
      lengthInKm = length / 1000;
      break;
    case 'ft':
      lengthInKm = length * 0.0003048;
      break;
    default:
      lengthInKm = length;
  }

  // Calculate R20 in Ohm/km using resistanceAt20
  const temperature8130 = parseFloat(document.getElementById('temperature8130').value);
  const tempUnit8130 = document.getElementById('tempUnit8130').value;
  const tempCelsius = tempUnit8130 === 'F' ? (temperature8130 - 32) * 5 / 9 : temperature8130;
  const resistanceAt20 = resistanceInOhms / (1 + 0.004 * (tempCelsius - 20));

  const r20PerKm = resistanceAt20 / lengthInKm;

  resultElement.textContent = `R20: ${r20PerKm.toFixed(4)} Ohm/km`;
}

function checkConductor() {
  console.log('Function started');
  const material8130 = document.getElementById('material8130').value.replace('_', ' ');
  const type8130 = document.getElementById('type8130').value;
  const inputType = document.getElementById('inputType').value;
  const dynamicInput = parseFloat(document.getElementById('dynamicInput').value);
  const inputUnit = document.getElementById('inputUnit').value;
  const resistance = parseFloat(document.getElementById('resistance').value);
  const resistanceUnit = document.getElementById('resistanceUnit').value;
  const length = parseFloat(document.getElementById('length').value);
  const lengthUnit = document.getElementById('lengthUnit').value;
  
  //console.log('Inputs fetched:', { material, type, inputType, dynamicInput, inputUnit, resistance, resistanceUnit });
  // Convert resistance to Ohms
  let resistanceInOhms;
  switch (resistanceUnit) {
    case 'Micro Ohm':
      resistanceInOhms = resistance / 1e6;
      break;
    case 'Milli Ohm':
      resistanceInOhms = resistance / 1e3;
      break;
    case 'Killo Ohm':
      resistanceInOhms = resistance * 1e3;
      break;
    default:
      resistanceInOhms = resistance;
  }

  // Convert length to Km
  let lengthInKm;
  switch (lengthUnit) {
    case 'm':
      lengthInKm = length / 1000;
      break;
    case 'ft':
      lengthInKm = length * 0.0003048;
      break;
    default:
      lengthInKm = length;
  }

  // Calculate R20 in Ohm/km using resistanceAt20
  const temperature8130 = parseFloat(document.getElementById('temperature8130').value);
  const tempUnit8130 = document.getElementById('tempUnit8130').value;
  const tempCelsius = tempUnit8130 === 'F' ? (temperature8130 - 32) * 5 / 9 : temperature8130;
  const resistanceAt20 = resistanceInOhms / (1 + 0.004 * (tempCelsius - 20));

  const r20PerKm = resistanceAt20 / lengthInKm;  
  
  // Convert input to mm² if necessary
  let areaInSqmm = dynamicInput;
  if (inputType === 'diameter' && inputUnit === 'inch') {
    const radius = dynamicInput / 2 * 25.4; // Convert inches to mm
    areaInSqmm = 3.14 * radius * radius; //Use 3.14 and not Math.PI
  } else if (inputType === 'diameter' && inputUnit === 'mm') {
    const radius = dynamicInput / 2;
    areaInSqmm = 3.14 * radius * radius; //Use 3.14 and not Math.PI
  } else if (inputType === 'area' && inputUnit === 'sqinch') {
    areaInSqmm = dynamicInput * 645.16; // Convert inch² to mm²
  } else if (inputType === 'area' && inputUnit === 'sqmm') {
    areaInSqmm = dynamicInput * 1; // Convert inch² to mm²
  }
  
  console.log('Converted Area to mm²:', areaInSqmm);

  // Find matching data from JSON
  //const result = jsonData.find(entry => entry.material === material && entry.type === type && parseFloat(entry.area) === parseFloat(areaInSqmm));
  // Find matching or next higher data from JSON
  const filteredData = jsonData.filter(entry => entry.material8130 === material8130 && entry.type8130 === type8130);
  const sortedData = filteredData.sort((a, b) => parseFloat(a.area) - parseFloat(b.area));
  const matchingEntry = sortedData.find(entry => parseFloat(entry.area) >= areaInSqmm);
  //const matchingArea = parseFloat(matchingEntry.area);
  //const nearestrvalue = filteredData.sort((a, b) => parseFloat(a.area) - parseFloat(b.area)).find(entry => parseFloat(entry.area) >= areaInSqmm);
  
  console.log(`Material8130: ${material8130}, area_json: ${matchingEntry.area}, resistancemax_json: ${matchingEntry.value}, Type8130: ${type8130}, Area: ${areaInSqmm}, Length: ${lengthInKm}, Resistance: ${r20PerKm.toPrecision(4)}`);

  if (matchingEntry) {
    const maxResistance = parseFloat(matchingEntry.value);
    console.log(`rinohm: ${r20PerKm}, rmax: ${maxResistance}`);

    if (r20PerKm <= matchingEntry.value) {
      document.getElementById('r20result3').textContent = `Pass - ${r20PerKm.toFixed(4)} ohm/km is lower than ${maxResistance.toFixed(4)} ohm/km for ${matchingEntry.area} mm² as per IS 8130.`;
      document.getElementById('r20result3').style.color = '#25bc00';
      console.log(`Pass`);
    } else {
      document.getElementById('r20result3').textContent = `Fail - ${r20PerKm.toFixed(4)} ohm/km is higher than ${maxResistance.toFixed(4)} ohm/km for ${matchingEntry.area} mm² as per IS 8130.`;
      document.getElementById('r20result3').style.color = 'red';
      console.log(`Fail`);
    }
  } else {
    document.getElementById('r20result3').textContent = `No matching data found in IS 8130.`;
    document.getElementById('r20result3').style.color = 'black';
  }
}
