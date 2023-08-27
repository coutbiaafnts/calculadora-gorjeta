function calculateTip(event) {
	event.preventDefault();
	let bill = document.getElementById("bill").value;
	let serviceQual = document.getElementById("serviceQual").value;
	let numOfPeople = document.getElementById("people").value;

	if ((bill == "") | (serviceQual == 0)) {
		alert("Por favor, preencha os valores");
		return;
	}

	if ((numOfPeople == 0) | (numOfPeople <= 1)) {
		numOfPeople = 1;
		document.getElementById("each").style.display = "none";
        document.getElementById("container").style.height = "520px";
	} else {
		document.getElementById("each").style.display = "block";
        document.getElementById("container").style.height = "540px";
	}

	let total = (bill * serviceQual) / numOfPeople;
	total = total.toFixed(2);

	document.getElementById("tip").innerHTML = total;
	document.getElementById("totalTips").style.display = "block";
}

document.getElementById("totalTips").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip);
