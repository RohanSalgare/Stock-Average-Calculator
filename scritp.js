const intlLanguage = Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Calcutta' ? 'en-IN' : 'en-US';

function calculateSIP() {

    var investment = parseInt(document.getElementById("monthlyInvestment").value);
    var rateOfInterest = parseInt(document.getElementById("rateOfInterest").value);
    var years = parseInt(document.getElementById("years").value);
    var monthlyRate = rateOfInterest / 12 / 100;
    var months = years * 12;
    var totalGain = (investment * (Math.pow((1 + monthlyRate), months) - 1) / monthlyRate * (1 + monthlyRate));

    if (investment && rateOfInterest && years) {
        document.getElementById("inam").innerHTML = Number(investment * months).toFixed(2).toLocaleString(intlLanguage);
        document.getElementById("estam").innerHTML = Number(totalGain - (investment * months)).toFixed(2).toLocaleString(intlLanguage);
        document.getElementById("totv").innerHTML = Number(totalGain.toFixed(2)).toLocaleString(intlLanguage);
    }
    else{
        alert("Enter values of all Fields");
    }

}


let flag = "ave";
var SIPview = document.getElementById("SIP-cal");
var aveView = document.getElementById("ave-cal");

var sipLabel = document.getElementById("sipcal");
var aveLabel = document.getElementById("avecal");

function switchToSIP() {

    if (flag == "ave") {

        aveView.classList.remove("block");
        aveView.classList.add("hidden");

        SIPview.classList.remove("hidden");
        SIPview.classList.add("block");
        flag = "SIP";


    }
    aveLabel.classList.remove("text-blue-400");
    sipLabel.classList.add("text-blue-400");

}

function switchToAve() {

    if (flag == "SIP") {
        SIPview.classList.remove("block");
        SIPview.classList.add("hidden");

        aveView.classList.remove("hidden");
        aveView.classList.add("block");

        flag = "ave";
    }
    sipLabel.classList.remove("text-blue-400");
    aveLabel.classList.add("text-blue-400");


}

function calculateAve() {
    let firstPrice = parseInt(document.getElementById("current-price").value);
    let newPrice = parseInt(document.getElementById("new-price").value);
    let firstBuyQuantity = parseInt(document.getElementById("first-units").value);
    let newBuyQuantity = parseInt(document.getElementById("second-units").value);

    let totalQuantity = firstBuyQuantity + newBuyQuantity;
    let totalInvestment = (firstBuyQuantity * firstPrice) + (newBuyQuantity * newPrice);

    if (firstPrice && newPrice && firstBuyQuantity && newBuyQuantity) {
        document.getElementById("totq").innerHTML = Number(totalQuantity).toLocaleString(intlLanguage);
        document.getElementById("avep").innerHTML = Number(totalInvestment / totalQuantity).toFixed(2).toLocaleString(intlLanguage);
        document.getElementById("toti").innerHTML = Number(totalInvestment).toLocaleString(intlLanguage);
        document.getElementById("totif").innerHTML = Number(firstPrice*firstBuyQuantity).toLocaleString(intlLanguage);
        document.getElementById("totis").innerHTML = Number(newPrice*newBuyQuantity).toLocaleString(intlLanguage);
    }
    else{
        alert("Enter Values of all Fields");
    }
}

function ClearFields() {
    if (flag == "ave") {
        document.getElementById("current-price").value = "";
        document.getElementById("new-price").value = "";
        document.getElementById("first-units").value = "";
        document.getElementById("second-units").value = "";
        document.getElementById("totq").innerHTML =0;
        document.getElementById("avep").innerHTML = 0;
        document.getElementById("toti").innerHTML =0;
    }

    if (flag == "SIP") {
        document.getElementById("monthlyInvestment").value = "";
        document.getElementById("rateOfInterest").value = "";
        document.getElementById("years").value = "";
        document.getElementById("inam").innerHTML =0;
        document.getElementById("estam").innerHTML = 0;
        document.getElementById("totv").innerHTML =0;
    }
}

function enterKeyPressed(event) {
    if (event.keyCode == 13 && aveView.classList.contains("block") ) {
       document.getElementById("cal-Ave").click();
    } 
    if (event.keyCode == 13 && SIPview.classList.contains("block") ) {
        document.getElementById("cal-SIP").click();
     } 
 }
