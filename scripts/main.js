const content = document.getElementById("content");
const cart = document.getElementById("cart");
const addBtn = document.getElementsByName('add-to-cart');
const shoppingBag = [];

//declaration of my products
/*const products = [
    {category: "shirt", name: "Dawn FM Plane Tee", price: 30, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DAWNFMPLANETEE_800x.png?v=1642780477"},
    {category: "hoodie", name: "Dawn FM Logo Hoodie", price: 78, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/XO-CHROME-LOGO-PULLOVER-HOOD_bf9e5811-2cb1-4819-aa0d-4f5f131ae1df_800x.png?v=1651004473"},
    {category: "shirt", name: "Dawn FM Longsleeve Tee", price: 38, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-SOLAR-LS-BLACK-FRONT_800x.png?v=1641073242"},
    {category: "hoodie", name:"Dawn FM Cover Hoodie", price: 80, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-COVER-HOODIE-BLACK-BACK_800x.png?v=1641073302"},
    {category: "hoodie", name: "Dawn FM Logo Crewneck", price: 58, image:"https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-CHROME-TITLE-CREWNECK-BLACK-FRONT_800x.png?v=1641073319"},
    {category: "music", name: "Dawn FM CD", price: 15, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DFMCOLLECTORS02FRONT_800x.png?v=1641073211"},
    {category: "music", name: "Dawn FM Cassette", price: 8, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DFMCOLLECTORS01CSFRONT_593ddedb-39db-4d6c-a9ce-92423b143ce1_800x.png?v=1641073329"},
    {category: "hoodie", name: "Dawn FM Crewneck ERA", price: 58, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-CREWNECK-BLACK-FRONT_800x.png?v=1641073286"},
    {category: "music", name: "Dawn FM Vinyl Hits", price: 22, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/TheWeeknd_TheHighlights_StandardD2C-Front_2_800x.png?v=1632860374"},
    {category: "hoodie", name: "Dawn FM Radio Hoodie", price: 75, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-HOODIE-BLACK-BACK_440x.png?v=1641073269"},
    {category: "shirt", name: "Dawn FM Chrome Tee", price: 33, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-CHROME-TITLE-TEE-BLACK-FRONT_300x.png?v=1641073307"},
    {category: "music", name: "Dawn FM CD Remixes", price: 13, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DAWNFMALTERNATEWORLDDIGITALALBUMARTcopy_800x.png?v=1650487441"},
    {category: "shirt", name: "Dawn FM Cover Tee", price: 30, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-COVER-TEE-BLACK-FRONT_800x.png?v=1641073291"},
    {category: "shirt", name: "Dawn FM Persona Tee", price: 33, image: "https://cdn.shopify.com/s/files/1/1429/6260/products/DFM-TEE-BLACK-FRONT_800x.png?v=1641073237"},
] || JSON.parse(localStorage.getItem("products"));*/

//declaration of the shopping bag
class Bag {
    constructor(category, name, price, image){
        this.category = category;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

fetch('./data/products.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach(product => {
            content.innerHTML +=`
                                <div class="item col mx-2 my-3 ${product.category}">
                                    <article>
                                        <img src= ${product.image} alt="${product.name}" title="${product.name}" width=350px />
                                        <p class="name">${product.name} </p>
                                        <p>U$D ${product.price} </p>
                                        <button type="button" name="add-to-cart" class="btn btn-sm btn-outline-dark">+ Add to cart</button>
                                    </article>
                                </div>`;
        })
    })

/*
products.forEach(product => {
    content.innerHTML +=`
                        <div class="item col mx-2 my-3 ${product.category}">
                            <article>
                                <img src= ${product.image} alt="${product.name}" title="${product.name}" width=350px />
                                <p class="name">${product.name} </p>
                                <p>U$D ${product.price} </p>
                                <button type="button" name="add-to-cart" class="btn btn-sm btn-outline-dark">+ Add to cart</button>
                            </article>
                        </div>`;
}); */
//localStorage.setItem("products", JSON.stringify(products));

addBtn.forEach(btn => {
    btn.addEventListener('click',()=> {
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
            },
        }).showToast();
    })
})