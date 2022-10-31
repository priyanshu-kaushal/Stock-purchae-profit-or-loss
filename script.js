var initialPrice = document.querySelector('#initial-price');
var stockquantity = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stockquantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, curr)
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial>current){
        var loss =(initial-current) *quantity;
        var lossPercentage = (loss/initial)*100;
        outputBox.innerText=`loss is ${loss} and the loss percentage is ${lossPercentage}%`;
    } else if (current > initial){
        var profit =(current - initial) * quantity;
        var profitPercentage = (profit/initial) *100;
        outputBox.innerText=`Profit is ${profit} and the profit percentage is ${profitPercentage}%`;
    } else{
        outputBox.innerText=`No pain no gain, No gain no pain`
    }
}
