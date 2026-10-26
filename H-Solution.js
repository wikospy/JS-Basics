const products = [
    { name: "Aventador", price: 65000 },
    { name: "Huracan", price: 49999 },
    { name: "Veneno", price: 129999 },
    { name: "Revelto", price: 57999 },
    { name: "Essenza", price: 39000 },
    { name: "Urus", price: 68889 },
    { name: "Sian", price: 38999 },
    { name: "Tarzo", price: 70000 },
    { name: "Vision", price: 60000 }
];
const cheap = products.find((low) => low.name == "Aventador" );
console.log(cheap);