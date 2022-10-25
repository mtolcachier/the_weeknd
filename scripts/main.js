const content = document.getElementById("content");
const showAll = document.getElementById("all");
const showHoodies = document.getElementById("hoodies");
const showShirts = document.getElementById("shirts");
const showMusic = document.getElementById("music");
const filterBtn = document.getElementsByClassName("filter-btn");


const products = [
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
] || JSON.parse(localStorage.getItem("products"));

showAll.addEventListener('click',()=> {
    let items = document.getElementsByName('item');
    items.forEach(item => {
        item.removeAttribute('hidden')
    })
})

showHoodies.addEventListener('click',()=> {
    let items = document.getElementsByName('item');
    items.forEach(item => {
        if (item.classList.contains('hoodie')) {
            item.removeAttribute('hidden');
        } else {
            item.setAttribute('hidden',true);
        }
    })
})

showShirts.addEventListener('click',()=> {
    let items = document.getElementsByName('item');
    items.forEach(item => {
        if (item.classList.contains('shirt')) {
            item.removeAttribute('hidden');
        } else {
            item.setAttribute('hidden',true);
        }
    })
})

showMusic.addEventListener('click',()=> {
    let items = document.getElementsByName('item');
    items.forEach(item => {
        if (item.classList.contains('music')) {
            item.removeAttribute('hidden');
        } else {
            item.setAttribute('hidden',true);
        }
    })
})

products.forEach(product => {
    content.innerHTML +=`
                        <div name="item" class="col my-5 ${product.category}">
                            <article>
                                <img src= ${product.image} alt="${product.name}" title="${product.name}" width=300px />
                                <p class="name">${product.name} </p>
                                <p>U$D ${product.price} </p>
                                <button id="addToCart" type="button" class="btn btn-sm btn-outline-dark">+ Add to cart</button>
                            </article>
                        </div>`;
}); 
localStorage.setItem("products", JSON.stringify(products));
