// buttons
// selectRealm = document.getElementById('select-realm')
// selectBlueEssence = document.getElementById('select-blue-essence')
selectRealms = document.querySelectorAll('.select-realm')
selectBlueEssences = document.querySelectorAll('.select-blue-essence')
// sekcije
chooseServer = document.getElementById('choose-server-section')
chooseEssence = document.getElementById('choose-essence')
checkoutSection = document.getElementById('checkout-section')

selectRealms.forEach(selectRealm => {
    selectRealm.addEventListener('click', e => {
      chooseServer.style.display = "none"
      chooseEssence.style.display = "block"
      console.log(e.target);
    });
});


selectBlueEssences.forEach(selectBlueEssence => {
    selectBlueEssence.addEventListener('click', e => {
      chooseEssence.style.display = "none"
      chooseServer.style.display = "none"
      checkoutSection.style.display = "flex"
      console.log(e.target);
    });
});


// selectRealm.onclick = function(){
//     chooseServer.style.display = "none"
//     chooseEssence.style.display = "block"
// }

// selectBlueEssence.onclick = function(){
//     chooseEssence.style.display = "none"
//     chooseServer.style.display = "none"
//     checkoutSection.style.display = "flex"
// }
// if checbox checked
function checkboxFunction() {
    var checkBox = document.getElementById("checkbox-warranty")
    var text = document.getElementById("check-warranty")
    var price = document.getElementById('warranty-price')
    if (checkBox.checked == true){
        text.innerHTML = "Lifetime Warranty"
        price.innerHTML = "$24.00"
    } else {
        text.innerHTML = "20 DAYS WARRANTY"
        price.innerHTML = "$11.00"
    }
  }

