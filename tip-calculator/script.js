
function multiply(x, y) {
	return x * y;
}

function calculateCosts(){
	console.log('calculating...');

	var baseCost = parseFloat(document.getElementById('baseCost').value),
		taxPercent = parseFloat(document.getElementById('taxPercent').value),
		tipPercent = parseFloat(document.getElementById('tipPercent').value),
		taxCost = multiply(baseCost, taxPercent/100),
		tipCost = multiply(baseCost, tipPercent/100),
		totalCost = baseCost + taxCost + tipCost,
		info = "Your tip comes to: $" + tipCost.toFixed(2) + ". Your tax comes to: $" + taxCost.toFixed(2) + ". The total for your meal comes to: $" + totalCost.toFixed(2),
		outputTab = document.getElementById('output');

	if (validateFields(baseCost) === false) {
		outputInfo('You must enter a valid cost for your meal!', output);
	} else if (validateFields(taxPercent) === false) {
		outputInfo('You must enter a valid tax percentage!', output);
	} else if (validateFields(tipPercent) === false) {
		outputInfo('You must enter a valid tip percentage!', output);
	} else {
		outputInfo(info, output);
	}
}

function validateFields(elem) {
	console.log('validating...' + elem);
	var valid = !/^\s*$/.test(elem) && !isNaN(elem) && elem != null && elem != undefined;
	console.log(valid);
	return valid;
}

function outputInfo(data, output){
	///clear values
	baseCost = '';
	taxPercent = '';
	tipPercent = '';

	//display output
	document.getElementById("outputContainer").style.display = "block";
	output.innerHTML = data;
}

window.onload = function() {
	document.getElementById("outputContainer").style.display = "none";
}
 
// window.onload=function(){
// 	var baseCost = parseFloat(prompt('How much was your meal?'));
// 	var taxPercent = parseFloat(prompt('What is the tax percentage'));
// 	var tipPercent = parseFloat(prompt('What percentage would you like to tip?'));
// 	var taxCost = multiply(baseCost, taxPercent/100);
// 	var tipCost = multiply(baseCost, tipPercent/100);
// 	var totalCost = baseCost + taxCost + tipCost;
// 	var info = "Your tip comes to: $" + tipCost.toFixed(2) + ". Your tax comes to: $" + taxCost.toFixed(2) + ". The total for your meal comes to: $" + totalCost.toFixed(2);
// 	alert(info);
// }