let buyBtn = document.getElementById('buy-btn');
const cart = document.getElementById('cart');

//FUNCTION THAT UPDATES HOW MANY ITEMS ARE IN THE CART
const updateBag = () => {
    quantity.textContent = shoppingBag.length;
}

//REMOVES ITEM FROM THE SHOPPING BAG
const removeItem = (i) =>{
    let index = shoppingBag.indexOf(x => x.name === i);
    shoppingBag.splice(index,1);
    amountItems();
    updateCartContent();
    updateBag();
}

//SUMS THE PRICES OF EACH PRODUCT
const amountItems = () => {
    let amount = shoppingBag.reduce((acc,curr)=> {
        return acc + curr.price
    },0)
    totalAmount.innerHTML = `
            <div class="row">
                <div class="col me-0">
                    <p>Total: U$D ${amount} </p>
                </div>
            </div>
        `
}


//UPDATES DE CONTENT OF THE CART MODAL WHEN AN ITEM IS ADDED TO THE CART
const updateCartContent = () => {

    if (shoppingBag.length == 0) {
        cartContent.innerHTML = '<p class="text-center">Your bag is empty</p>'
        amountItems();
        buyBtn.setAttribute("disabled", "")
    } else {
        buyBtn.removeAttribute("disabled")
        amountItems();
        cartContent.innerHTML = '';
        shoppingBag.forEach(item => {
            cartContent.innerHTML += `
                <article class="row align-items-center justify-content-start mb-2">
                    <div class="col-4">
                        <img src= ${item.image} alt="${item.name}" title="${item.name}" width=150px />
                    </div>
                    <div class="col ms-0">
                        <p class="name">${item.name}</p>
                        <p>U$D ${item.price}</p>
                    </div>
                    <button value="${item.name}" class="remove-btn btn col-2">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </article>
            `
        })

        //SETS THE FUNCTION THAT REMOVES A PRODUCT FROM THE BAG TO EACH PRODUCT
        const remove = document.querySelectorAll('.remove-btn');
        remove.forEach(btn => {
            btn.addEventListener('click', ()=> {
                let prodId = btn.getAttribute('name');
                removeItem(prodId);
            })
        })

    }
}


cart.addEventListener('click', updateCartContent)

//PROCEEDS TO PAYMENT HTML
buyBtn.addEventListener('click',() => {
    location.href = "payment.html";
    localStorage.setItem('products', JSON.stringify(shoppingBag));
})