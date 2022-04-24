
let products = [
    { id: 1, name: 'Escuadra', price: 3.20},
    { id: 2, name: 'Regla', price: 1.23},
    { id: 3, name: 'Cuaderno', price: 2.00},
    { id: 4, name: 'Reloj', price: 4.45},
    { id: 5, name: 'Mochila', price: 49.99},
    { id: 6, name: 'Cartuchera', price: 25.43},
]

// Product names in a string separated by commas

let productString = products.map( product =>{
    return product.name;
}).toString();

// console.log(`String: ${productString}`);

// Total price
let totalPrice = 0;
products.forEach( product =>{
    totalPrice += product.price;
});

// console.log(`Total price: ${totalPrice.toFixed(2)}`);

// Average price
let avgPrice = totalPrice / products.length;
// console.log(`Average price: ${avgPrice.toFixed(2)}`);

// Cheapest product
let cheapestProduct;
products.forEach( product =>{
    if(!cheapestProduct){
        cheapestProduct = product;
    } else if(cheapestProduct.price > product.price){
        cheapestProduct = product;
    }
});

// console.log(`Cheapest product: ${cheapestProduct.name}`);

// Most expensive product
let expensiveProduct;
products.forEach( product =>{
    if(!expensiveProduct){
        expensiveProduct = product;
    } else if(expensiveProduct.price < product.price){
        expensiveProduct = product;
    }
});

// console.log(`Cheapest product: ${expensiveProduct.name}`);

let result = {
    'Products string': productString,
    'Total price': totalPrice.toFixed(2),
    'Average price': avgPrice.toFixed(2),
    'Cheapest product': cheapestProduct.name + ' ' + cheapestProduct.price.toFixed(2),
    'Most expensive product': expensiveProduct.name + ' ' + expensiveProduct.price.toFixed(2)
}

console.log(result);
