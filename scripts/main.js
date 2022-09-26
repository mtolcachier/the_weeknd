let product;
let productPrice;
let shipping ;
let shippingCost;
let payment;

//Funcion para agregar prodcuto al carrito
function addToBag () {
    product = prompt("¿Que producto queres agregar al carrito? (Crewneck/Hoodie/Shirt/CD/Cassette)").toLowerCase();
    if (product == 'hoodie') {
        productPrice = 78
        alert(`se agrego ${product} al carrito, el precio de la prenda es de ${productPrice} U$D`);
    }
    else if (product == 'crewneck') {
        productPrice = 58
        alert(`se agrego ${product} al carrito, el precio de la prenda es de ${productPrice} U$D`);
    }
    else if (product == 'shirt') {
        productPrice = 28
        alert(`se agrego ${product} al carrito, el precio de la prenda es de ${productPrice} U$D`);
    }
    else if (product == 'cd') {
        productPrice = 15
        alert(`se agrego ${product} al carrito, el precio de la prenda es de ${productPrice} U$D`);
    }
    else if (product == 'cassette') {
        productPrice = 8
        alert(`se agrego ${product} al carrito, el precio de la prenda es de ${productPrice} U$D`);
    }
    else {
        alert(`El dato ingresado es incorrecto. Por favor, vuelva a intenarlo.`);
        product = prompt("¿Que producto queres agregar al carrito? (Crewneck/Hoodie/Shirt/CD/Cassette)").toLowerCase();
    }
    return productPrice
}

//Funcion para calcular el envio segun pais
function shippingFee () {
    shippingCost = prompt(`¿A donde lo queres enviar? (Argentina/EEUU/Europa)`).toLowerCase();
    while ((shippingCost != `argentina`) && (shippingCost != `eeuu`) && (shippingCost != `europa`)) {
        alert(`El dato ingresado es incorrecto. Por favor, vuelva a intenarlo.`);
        shippingCost = prompt(`¿A donde lo queres enviar? (Argentina/EEUU/Europa)`).toLowerCase();
    }
    if (shippingCost == `argentina`) {
        shipping = 15;
        alert(`El costo de envio a Argentina es de ${shipping} U$D`);
    }
    else if (shippingCost == `eeuu`) {
        shipping = 8;
        alert(`El costo de envio a EEUU es de ${shipping} U$D`);
    }
    else {
        shipping = 10;
        alert(`El costo de envio a Europa es de ${shipping} U$D`);
    }
    return shipping
}

//Funcion para metodo de pago
function pay () {
    payment = prompt(`Ingrese el metodo de pago con el que va a abonar: tarjeta de credito (TC)/tarjeta de debito (TD)/Transferencia (T)`).toLowerCase();
    while ((payment !=`tc`) && (payment !=`td`) && (payment !=`t`)) {
        alert(`El dato ingresado es incorrecto. Por favor, vuelva a intenarlo.`);
        payment = prompt(`Ingrese el metodo de pago con el que va a abonar: tarjeta de credito (TC)/tarjeta de debito (TD)/Efectivo (EF)`).toLowerCase();
    }
    if ((payment == `tc`) || (payment == `td`)){
        alert (`En la siguiente pestaña podra seguir los pasos para finalizar su compra.`);
    }
    else {
        alert (`Muchas gracias por su compra! Le pedimos que nos deje su numero de contacto para coordinar el pago.`);
        let contacto = parseInt(prompt(`Ingrese su numero de telefono. Nos estaremos comunicando pronto!`));
    }
    return payment;
}

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
        let suma = productPrice + shipping;
        alert(`El total de su compra es de: U$D ${productPrice} + U$D ${shipping} = U$D ${suma}`);
    }
    else {
        alert(`Gracias, vuelva pronto!`);
    }
}

total();

