window.onload = function(){ 
document.getElementById('calculate').onclick = function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    var total = (billAmt * (serviceQual / 100 )) / numOfPeople;
    alert('Sprepitne je: ' + total + " Eur na osobu");
  };
}
