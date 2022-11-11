let checkout = JSON.parse(localStorage.getItem('products')) || [] ;
const finalCart = document.getElementById('final-cart');
const finalPrice = document.getElementById('checkout-price');

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

//HELP FROM FREE CODE CAMP
let form = id("form-checkout"),
    fName = id("first-name"),
    lName = id("last-name"),
    email = id("email"),
    adress = id("adress"),
    country = id("country"),
    city = id("city"),
    zipCode = id("zip-code"),
    cardNumber = id("card-number"),
    cardName = id("card-name"),
    expiration = id("expiration"),
    secCode = id("sec-code"),

    errorMsg = classes("error");

/*
function showAlert () {
    Toastify({
        title: "Thank you for shopping",
        text: "You will receive an email with the shipping information",
        destination: "index.html",
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            width: "300px",
            height:"300px",
            border: "1px solid black",
            background: "white",
            color: "black",
        },
    }).showToast();
}
*/

let checkValid = (id, serial, message) => {

    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "1px solid red";
} 

    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "1px solid green";
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkValid(fName, 0, "enter a first name");
    checkValid(lName, 1, "enter a last name");
    checkValid(email, 2, "enter an email");
    checkValid(adress, 3, "enter an adress");
    checkValid(country, 4, "select a country");
    checkValid(city, 5, "enter a city");
    checkValid(zipCode, 6, "enter a zip code");
    checkValid(cardNumber, 7, "enter a valid card number");
    checkValid(cardName, 8, "enter the name that's on the card");
    checkValid(expiration, 9, "enter the expiration date");
    checkValid(secCode, 10, "enter the security code");

})


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
