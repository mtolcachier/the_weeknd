const products = [
    {producto: "hoodie", precio: 58},
    {producto: "crewneck", precio: 58},
    {producto: "shirt", precio: 25},
    {producto: "cd", precio: 15},
    {producto: "cassette", precio: 8},
];

const shipping = [
    {pais: "argentina", envio: 15},
    {pais: "europa", envio: 10},
    {pais: "eeuu", envio: 8},
];

const payment = ["t", "tc", "td"]; 

let precio;
let envio;

// Funcion para agregar prodcuto al carrito
function addToBag () {
    let wishList = prompt("¿Que producto queres agregar al carrito? (Crewneck/Hoodie/Shirt/CD/Cassette)").toLowerCase();
    const filterProd = products.find(el => {
        if (el.producto !== wishList) {
            return false;
        }
        return true;
    });
    if (filterProd == undefined) {
        alert(`El dato ingresado es incorrecto. Por favor, vuelva a intenarlo.`);
        wishList = prompt("¿Que producto queres agregar al carrito? (Crewneck/Hoodie/Shirt/CD/Cassette)").toLowerCase();
    }
    else { 
        console.log(filterProd);
        let prod = filterProd.producto;
        precio = filterProd.precio;
        alert(`se agrego ${prod} al carrito, su precio es de U$D${precio}`);
        return precio;
    }
};

//Funcion para calcular el envio segun pais
function shippingFee () {
    let shippingCost = prompt(`¿A donde lo queres enviar? (Argentina/EEUU/Europa)`).toLowerCase();
    const filterShip = shipping.find(el => {
        if (el.pais !== shippingCost) {
            return false;
        }
        return true;
    });
    if (filterShip == undefined) {
        alert(`El dato ingresado es incorrecto. Por favor, vuelva a intenarlo.`);
        shippingCost = prompt(`¿A donde lo queres enviar? (Argentina/EEUU/Europa)`).toLowerCase();
    }
    else { 
        console.log(filterShip);
        let pais = filterShip.pais;
        envio = filterShip.envio;
        alert(`El costo de envio a ${pais} es de U$D${envio}`);
        return envio;
    }
};

//Funcion para metodo de pago
function pay () {
    let pay = prompt("Ingrese el metodo de pago con el que va a abonar: tarjeta de credito (TC)/tarjeta de debito (TD)/Transferencia (T)").toLowerCase();
    const filterPay = payment.includes(pay);
    if (filterPay == true) {
        alert("En la siguiente pestaña podra seguir los pasos para finalizar su compra.");
    }
    else {
        alert(`El dato ingresado es incorrecto. Por favor, vuelva a intenarlo.`);
        pay = prompt("Ingrese el metodo de pago con el que va a abonar: tarjeta de credito (TC)/tarjeta de debito (TD)/Transferencia (T)").toLowerCase();
    }
};

//Funcion para calcular el total de la compra
function total () {
    let checkout = prompt(`¿Desea realizar la compra? Si/No`).toLowerCase();
    while ((checkout != `si` ) && (checkout != `no` )){
        alert(`El dato ingresado es incorrecto. Por favor, vuelva a intenarlo.`);
        checkout = prompt(`¿Desea realizar la compra? Si/No`).toLowerCase();
    }
    if (checkout == `si`){
        addToBag();
        shippingFee();
        pay();
        let suma = precio + envio;
        alert(`El total de su compra es de: U$D${precio} + U$D${envio} = U$D${suma}`);
    }
    else {
        alert(`Gracias, vuelva pronto!`);
    }
};

total();

