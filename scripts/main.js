const content = document.getElementById("content");
const quantity = document.getElementById('cart-quantity');
const cartContent = document.getElementById('cart-body');
const totalAmount = document.getElementById('total-amount');
let shoppingBag = JSON.parse(localStorage.getItem('products')) || [];

//CREATES THE OBJECT OF THE SHOPPONG BAG
class Bag {
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

//ASYNC FUNCTION THAT GETS THE STOCK DATA
const getData = async () => {
    try { 
        let response = await fetch('./data/products.json');
        let result = await response.json();
        let data = result;
        
        //CREATES THE WEBSITE HTML
        data.forEach(product => {
            content.innerHTML +=`
                <div class="item col mx-2 my-3 ${product.category}">
                    <article>
                        <img src= ${product.image} alt="${product.name}" title="${product.name}" width=350px />
                        <p class="name">${product.name}</p>
                        <span>U$D ${product.price} </span>
                        </br><button type="button" name="${product.name}" class="add-to-cart btn btn-sm mt-2 btn-outline-dark">+ Add to cart</button>
                    </article>
                </div>`;
                    })

        const addBtn = document.querySelectorAll('.add-to-cart');
        addBtn.forEach(btn => {

            //GETS THE INFORMATION OF EACH PRODUCT
            let parent = btn.parentElement;
            let productName = parent.querySelector("p").textContent;
            let productPrice = parseFloat(parent.querySelector("span").textContent.replace("U$D ",""))
            let productImg = parent.querySelector("img").src;

            const addedProduct = new Bag(productName,productPrice,productImg);

            btn.addEventListener('click', () => {
                //ALERTS THE USER THAT THE PRODUCT WAS ADDED TO THE CART
                toast();
                //SENDS THE SELECTED PRODUCT TO THE SHOPPING BAG
                shoppingBag.push(addedProduct);
                //CALLS FOR THE FUNCTION THAT SUMS HOW MANY ITEMS ARE IN THE CART
                updateBag();
            })
        })
        updateBag();

    } catch(error) {
        console.log(error)
    }
}; getData();



//TOAST FOR ADDED PRODUCT
const toast = () => {
    Toastify({
        text: "successfully added to cart!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
            style: {
                border: "1px solid black",
                background: "white",
                color: "black",
            }
    }).showToast()
}