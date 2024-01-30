
// Get all the DOM Element
let billAmountInput = document.getElementById("bill");
let peopleCount = document.getElementById("people");
let customInput = document.getElementById("custom");

let person_tip = document.getElementById("tip-person");
let total_tip = document.getElementById("tip-total");
let tip_btn = document.querySelectorAll(".tip-btn");
let errorEmpty = document.getElementById("errorEmpty");

// Add Event Listener on Input Bill & No of People 
billAmountInput.addEventListener("input", showInputValue)
peopleCount.addEventListener("input", showInputValue)
function showInputValue () {
  let billAmount = billAmountInput.value;
  let numberOfPeople = peopleCount.value;
  let parsedBill = parseInt(billAmount);
  let parsedPeople = parseInt(numberOfPeople);

    let total = parsedBill;
    total_tip.textContent = '$' + total.toFixed(2);

  if (parsedPeople === 0 ) {
    errorEmpty.style.display = 'inline';
} else if (parsedPeople >= 1 ) {
    let total = parsedBill / parsedPeople;

    total_tip.textContent = '$' + total.toFixed(2);
    errorEmpty.style.display = 'none';
}
};

// Add Event Listener on All Tips Button
tip_btn.forEach((b) => {
  b.addEventListener("click", function () {
    let parsedPercent = this.value;
    let billAmount = billAmountInput.value;
    let numberOfPeople = peopleCount.value;
    let parsedBill = parseInt(billAmount);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0 ) {
        errorEmpty.style.display = 'inline';
        peopleCount.classList.add("add");
    } else if (parsedPeople >= 1 ) {
        let tax = parsedPercent / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        person_tip.textContent = '$' + tipCalculation.toFixed(2);
        total_tip.textContent = '$' + total.toFixed(2);
        errorEmpty.style.display = 'none';
        peopleCount.classList.remove("add");
    }
  })
});

// Add Event Listener on Custom Input Tips
customInput.addEventListener("input", function () {
  let customAmount = customInput.value;
  let parsedCustom = parseInt(customAmount);

  let billAmount = billAmountInput.value;
    let numberOfPeople = peopleCount.value;
    let parsedBill = parseInt(billAmount);
    let parsedPeople = parseInt(numberOfPeople);

    if (parsedPeople === 0 ) {
        errorEmpty.style.display = 'inline';
    }else if (parsedPeople >= 1 ) {
        let tax = parsedCustom / 100;
 
        let tipCalculation = (parsedBill * (tax)) / parsedPeople;
        let total = (parsedBill + (parsedBill * tax)) / parsedPeople;
    
        person_tip.textContent = '$' + tipCalculation.toFixed(2);
        total_tip.textContent = '$' + total.toFixed(2);
        errorEmpty.style.display = 'none';
    }
})

// Reset Button 
let resetBtn = document.getElementById("reset");

resetBtn.addEventListener('click', () => {
    person_tip.textContent = '$0.00';
    total_tip.textContent = '$0.00';
    billAmountInput.value = "";
    customInput.value = "";
    peopleCount.value="";
    errorEmpty.style.display = 'none';
    peopleCount.classList.remove("add");
})