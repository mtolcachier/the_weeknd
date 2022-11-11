let checkout = JSON.parse(localStorage.getItem('products')) || [] ;
const finalCart = document.getElementById('final-cart');
const form = document.getElementById('form');
const finalPrice = document.getElementById('checkout-price');

const userName = document.querySelector('#user-name').value;
const fname = document.querySelector('#user-name');
const userLastName = document.querySelector('#last-name').value;
const userEmail = document.querySelector('#email').value;
const adress = document.querySelector('#adress').value;
const country = document.querySelector('#country').value;
const city = document.querySelector('#city').value;
const zipCode = document.querySelector('#zip-code').value;
const cardNumber = document.querySelector('#card-number').value;
const cardName = document.querySelector('#card-name').value;
const expiration = document.querySelector('#expiration').value;
const secCode = document.querySelector('#sec-code').value;

/*
const checkForm = () => {
    userName == "" ? fname.classList.add('error') : fname.classList.remove('error');

}
*/


//SUMMARY OF THE BAG IN THE CHECKOU HTML
const final = () => {
    checkout.forEach(item => {
        finalCart.innerHTML += `
            <article class="checkout row align-items-center justify-content-start">
                <div class="col">
                    <img src=${item.image} alt="${item.name}" title="${item.name}" width=150px />
                </div>
                <div class="col text-end">
                    <p class="name">${item.name}</p>
                    <p>U$D ${item.price}</p>
                </div>
            </article>
        `
    })
}; final();

//CALCULATES THE FINAL AMOUNT OF THE BAG
const price = () => {
    let price = checkout.reduce((acc,curr)=> {
        return acc + curr.price
    },0)
    finalPrice.innerHTML = `
            <div class="checkout row text-end">
                <div class="col me-0 mt-5">
                    <p class="price">Total: U$D ${price} </p>
                </div>
            </div>
        `
}; price();


form.addEventListener('submit', (e) => {
//    checkForm();

    e.preventDefault();
    e.stopPropagation();
})
