//identification
let htmlObj = document.getElementById("identification");
htmlObj.innerHTML =
    `id: ${customer.id}<br>`+
    `Vorname: ${customer.firstname}<br>`+
    `Name: ${customer.lastname}<br>`+
    `Geschlecht: ${customer.gender}<br>`;

//Location
htmlObj = document.getElementById("location");
htmlObj.innerHTML =
    `Land: ${customer.location.country}<br>`+
    `Stadt: ${customer.location.city}<br>`+
    `Strasse: ${customer.location.street}`;

//product - coffe
htmlObj = document.getElementById("product");
customer.drinks.coffe.forEach(coffeid => {
    htmlObj.innerHTML += `Coffe: ${coffeid}<br>`;
})

//restaurant or takeaway
htmlObj = document.getElementById("food");
customer.food.sweet.forEach(foodid => {
    htmlObj.innerHTML += `Food: ${foodid}<br>`;
})

