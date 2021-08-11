const name = 'Ganesh';
const userAge = 26;

const user = {
    name: name,
    age: userAge,
    location:'narasaraopet'
};

console.log(user);

//object destructuring

const product = {
    label: 'Red notebook',
    price: 10,
    stock: 200,
    saleprice:undefined,
    rating: 4.5
};

// const label = product.label
// const stock = product.stock

// const {label, stock, rating = 5} = product
// console.log(label);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label,stock = 0 } = {}) => {
    console.log(type, label, stock);
}
transaction('order', product)