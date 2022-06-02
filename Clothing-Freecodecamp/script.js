const minus = document.querySelectorAll(".minus");
const add = document.querySelectorAll(".add");
const qty = document.querySelectorAll(".qty");
const cartqty = document.querySelector('sup')

//cart.html selectors

let clearCart = document.querySelector('.clear-cart-btn');
let deleteProduct = document.querySelectorAll('.delete-p');
let checkoutItem = document.querySelector('.checkout-img-card')
let itemContainer = document.querySelector('.cart-card-container');
let itemPrice = document.querySelector('.item-price')
let totalPrice = document.querySelector('total-price');

let QuantityValue = [];

for (let m of minus) {
    QuantityValue.push(0)
}

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {
        if (QuantityValue[i] != 0) {
            QuantityValue[i]--;
            qty[i].textContent = QuantityValue[i]; 
        }

        if (cartqty.textContent != 0) {
            cartqty.textContent--;
        }
    })

    add[i].addEventListener('click', () => {
        QuantityValue[i]++;
        qty[i].textContent = QuantityValue[i]; 
        cartqty.textContent++;
    })
}


clearCart.addEventListener('click', () => {
    itemContainer.remove(); 
})

for(let d of deleteProduct) {
    d.addEventListener('click', () => {
        d.parentElement.remove();
    })
}











