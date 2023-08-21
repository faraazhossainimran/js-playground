
// handle btn 
function updateButtonAvailability(totalPrice) {
    var applyButton = document.getElementById("apply-btn");
    
    if (totalPrice >= 200) {
      applyButton.removeAttribute("disabled");
    } else {
      applyButton.setAttribute("disabled", "true");
    }
  }
  
// coupon code function
function couponCode(){
    const code = "SELL200";
    const couponCode = document.getElementById('coupon-code');
    const couponCodeValue = couponCode.value; 
    // 1 price total element
    const priceElementNumRound = getInnerPrice('total-price')
    const discountElement = document.getElementById('discount');
    //  3 total element
    const totalElementNumRound = getInnerPrice('total');
    console.log(totalElementNumRound)
    // check discount amount and apply discount
    if (couponCodeValue === code && priceElementNumRound >= 200) {
        const discountPrice = priceElementNumRound * 0.20;
        discountElement.innerText = discountPrice.toFixed(2);
        const finalSum = totalElementNumRound - discountPrice;
        totalElement.innerText = finalSum;
    }
}
  
  function handleTextChange() {
    var priceText = priceContainer.textContent;
    var totalPrice = parseInt(priceText);
    updateButtonAvailability(totalPrice);
  }
  
  function customFunction() {
    // Your custom function logic here
    console.log("Custom function called after text change");
  }
  
  // Add input event listener to priceContainer
  var priceContainer = document.getElementById("total");
  priceContainer.addEventListener("input", function() {
    handleTextChange();
    customFunction();
  });
  
  // Initial check
  var initialTotalPrice = parseInt(priceContainer.textContent);
  updateButtonAvailability(initialTotalPrice);


// function updateButtonAvailability(totalPrice) {
//     const applyButton = document.getElementById("apply-btn");
//     console.log(applyButton)
//     if (totalPrice >= 200) {
//       applyButton.removeAttribute("disabled");
//     } else {
//       applyButton.setAttribute("disabled", "true");
//     }
//   }
//   const totalPrice = getInnerPrice('total'); 
//   console.log(totalPrice);
//   updateButtonAvailability(totalPrice);



// const finalTotalElement = document.getElementById('total');
// const finalTotalElementValue = finalTotalElement.innerText;
// const finalTotalElementNum = parseFloat(finalTotalElementValue);
// const finalTotalElementNumRound = finalTotalElementNum.toFixed(2);
// console.log(finalTotalElementNumRound)
// if (finalTotalElementNumRound >= 200){
//     console.log("200 er cheye boro")
// }
// document.getElementById('coupon-code').addEventListener('keyup', function(event){
//     const text = event.target.value;
//     console.log(text);
// })








// test 
    // Select the target div element
    const targetDiv = document.getElementById('total');

    // Create a new MutationObserver instance
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.target === targetDiv) {
          // Inner text of the div has changed
          console.log('innerText changed:', targetDiv.innerText);

          // Trigger your desired event or function here
          if (targetDiv < 200) {
            myButton.disabled = true;
          } else {
            myButton.disabled = false;
          }
        }
      }
    });

    // Configure and start observing the target div
    observer.observe(targetDiv, { childList: true, subtree: true });

    // Function to change the inner text of the div (for demonstration purposes)
    function changeInnerText() {
        const targetDivRound = getInnerPrice('total')
        targetDivRound.innerText = 0.00;
    }

    // Call the function to demonstrate the inner text change event
    setTimeout(changeInnerText, 100); // Simulate a change after 2 seconds