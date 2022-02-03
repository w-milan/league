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

  // circle pagination

// const numberButtons = document.querySelectorAll('.numbers-button');
// const numberButtonsArr = Array.from(numberButtons);
// numberButtonsArr.forEach(numberButton => {
//     numberButton.addEventListener('click', e => {
//         if(numberButton.classList.contains("button-active")){
//             console.log('test')
//         }
//       console.log(e.target);
//     });
// });


// Display kartica NUMBERS

// chooseServer
// chooseEssence
// checkoutSection

numberOne = document.getElementById('number-second-1') // pozivanje iz druge sekcije broja jedan
numberTwo = document.getElementById('number-second-2') 
numberThree = document.getElementById('number-third-3')

numberThirdSecond = document.getElementById('number-third-2') // poziva drugi broj u trecem koraku

chooseEssence.style.display = "none"
checkoutSection.style.display = "none"

// number 1
numberOne.addEventListener('click', function(){ // Ova funkcije ne radi na prvom koraku vec na drugom
  chooseEssence.style.display = "none"
  chooseServer.style.display = "block"
})

// number 2
numberTwo.addEventListener('click', function(){
  chooseServer.style.display = "none"
  chooseEssence.style.display = "flex"
})

// number 3 and number 2 in third section
numberThree.addEventListener('click', function(){
  chooseEssence.style.display = "none"
  checkoutSection.style.display = "flex"
})

numberThirdSecond.addEventListener('click', function(){ // iskljucivo radi u koraku 3 za redni broj 2
  chooseEssence.style.display = "block"
  checkoutSection.style.display = "none"
})
