

function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    var total = (billAmt * serviceQual) / numOfPeople;
    alert('Sprepitne je:' + total);
  };

// function (){

// document.getElementById("calculate").addEventListener("click", calculateTip());

// }