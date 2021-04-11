window.onload = function(){ 
document.getElementById('calculate').onclick = function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    var total = (billAmt * (serviceQual / 100 )) / numOfPeople;
    if (billAmt === '') {
      alert('Nevyplnil si vsetky policka')
      return;
    }
    if (serviceQual === '') {
      alert('Nevyplnil si vsetky policka')
      return;
    }
    if (numOfPeople === '') {
      alert('Nevyplnil si vsetky policka')
      return;
    }
    if (numOfPeople === '0') {
      alert('Nemohlo vas byt 0 :) ')
      return;
    }
    if (numOfPeople < 0) {
      alert('Napisal si zaporne cislo, skus to znovu a pouzi len kladne cisla :)')
      return;
    }
    if (billAmt < 0) {
      alert('Napisal si zaporne cislo, skus to znovu a pouzi len kladne cisla :)')
      return;
    }
    if (serviceQual < 0) {
      alert('Napisal si zaporne cislo, skus to znovu a pouzi len kladne cisla :)')
      return;
    }
    alert('Kazdy z vas zaplati ' + total + " Eur na sprepitne");
  };
}
