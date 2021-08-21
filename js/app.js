//Update extra memory, stroage and deliver cost calculation
function updateCost(cost,price,costType)
{
    const costTotal = document.getElementById(cost);
    costTotal.innerText = price;
    updateTotalPrice();
}


//update total price calculation
function updateTotalPrice()
{
    const totalPrice = document.getElementById('total-price');
    const bestPrice = document.getElementById('best-price').innerText;
    const extraMemoryPrice = document.getElementById('extra-memory-cost').innerText;
    const extraStroagePrice = document.getElementById('extra-stroage-cost').innerText;
    const extraDeliveryPrice = document.getElementById('delivery-charge').innerText;
    totalPrice.innerText = parseInt(bestPrice)+parseInt(extraMemoryPrice)+parseInt(extraStroagePrice)+parseInt(extraDeliveryPrice);
    updateTotal(); 

}

// update Total price and discouny calculation
function updateTotal(){
    const totalPrice = document.getElementById('total-price').innerText;
    let total = document.getElementById('total');
    total.innerText = totalPrice;
}

//---------------------------------Coupon Discount handler ---------------------------
document.getElementById('apply-promo-btn').addEventListener('click', 
function(){
    discountCalculate();
});

//Calculate Discount function
function discountCalculate()
{
    const pomoCodeInput = document.getElementById('pomo-code-input');
    const pomoCode = pomoCodeInput.value;
    if(pomoCode.toLowerCase() == 'stevekaku')
    {
        const totalPrice = document.getElementById('total-price').innerText;
        let total = document.getElementById('total');
        total.innerText = totalPrice - percentage(totalPrice,20);
    }
    
    pomoCodeInput.value ="";
}

//Calculate percentage function
function percentage(num, per)
{
  return (num/100)*per;
}



// -------------------------------memory handler change--------------------------

// 8gb memory handler
document.getElementById('memory-btn-8gb').addEventListener('click', 
function(){
    updateCost('extra-memory-cost',0);
});

// 16gb memory handler
document.getElementById('memory-btn-16gb').addEventListener('click', 
function(){
    updateCost('extra-memory-cost',180);
});

// -------------------------------stroage handler change--------------------------


// 256gb Stroage handler
document.getElementById('ssd-btn-256gb').addEventListener('click', 
function(){
    updateCost('extra-stroage-cost',0);
});

// 512gb stroage handler
document.getElementById('ssd-btn-512gb').addEventListener('click', 
function(){
    updateCost('extra-stroage-cost',100);
});

// 1tb stroage handler
document.getElementById('ssd-btn-1tb').addEventListener('click', 
function(){
    updateCost('extra-stroage-cost',180);
});


// -------------------------------Delivery handler change--------------------------

// 8gb memory handler
document.getElementById('free-delivery').addEventListener('click', 
function(){
    updateCost('delivery-charge',0);
});

// 16gb memory handler
document.getElementById('paid-delivery').addEventListener('click', 
function(){
    updateCost('delivery-charge',20);
});


