// buttons
selectRealm = document.getElementById('select-realm')
selectBlueEssence = document.getElementById('select-blue-essence')
// sekcije
chooseServer = document.getElementById('choose-server-section')
chooseEssence = document.getElementById('choose-essence')
checkoutSection = document.getElementById('checkout-section')

selectRealm.onclick = function(){
    chooseServer.style.display = "none"
    chooseEssence.style.display = "block"
}

selectBlueEssence.onclick = function(){
    chooseEssence.style.display = "none"
    chooseServer.style.display = "none"
    checkoutSection.style.display = "flex"
}
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