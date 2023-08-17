document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInput.value;
    const newWithDraw = parseFloat(withdrawInputString);
    
    // withdraw card
    const previousWithDraw = document.getElementById('withdraw-balance');
    const previousWithdrawString = previousWithDraw.innerText;
    const previousWithAmount = parseFloat(previousWithdrawString);
    previousWithDraw.innerText = newWithDraw + previousWithAmount;
    withdrawInput.value = '';

    // withdraw amount decreases to balance total
    
});