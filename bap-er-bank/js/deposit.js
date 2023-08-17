document.getElementById("deposit-btn").addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputString = depositInput.value;
    const depositInputNumber = parseFloat(depositInputString);
    // deposit increment
    const depositBalance = document.getElementById('deposit-balance');
    const previousDepositBalanceTotalString = depositBalance.innerText;
    const previousDepositBalanceTotal = parseFloat(previousDepositBalanceTotalString);
    const newDepositBalanceTotal = previousDepositBalanceTotal + depositInputNumber;
    depositBalance.innerText = newDepositBalanceTotal;
    
    // balance total 
    const previousBalance = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalance.innerText; 
    const preViousBalanceTotal = parseFloat(previousBalanceTotalString);
    const balanceTotal = preViousBalanceTotal + depositInputNumber
    previousBalance.innerText = balanceTotal;
    depositInput.value = '';

    // withdraw part
    
})
