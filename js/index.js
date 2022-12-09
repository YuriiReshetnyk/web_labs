import {
    DELETE_BUTTON_PREFIX,
    EDIT_BUTTON_PREFIX,
    clearInputs,
    getInputValues,
    renderItems,
    renderTotalPrice,
}
from './dom_util.js';



const addButton = document.getElementById("add-button");
const findButton = document.getElementById("find-button");
const findInput = document.getElementById("find-input");
const showAllButton = document.getElementById("show-all-button");
const sortButton = document.getElementById("sort-button");

let cars = [];

const onDeleteItem = async (e) => {
    const itemId = e.target.id.replace(`${DELETE_BUTTON_PREFIX}`, "");

    fetch(`http://localhost:8080/cars/${itemId}`, {
        method: 'DELETE'
    })
    .then(res => getItemsFromDB())
}

const onEditItem = async (e) => {
    const itemId = e.target.id.replace(`${EDIT_BUTTON_PREFIX}`, "");

    const { producer, price, horsepower, image_uri} = getInputValues();

    fetch(`http://localhost:8080/cars/${itemId}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'producer': producer,
            'price': price,
            'horsepower': horsepower,
            'image_uri': image_uri
        })
    })
    .then(res => {
        getItemsFromDB();
        clearInputs();
    })
}

export async function getItemsFromDB () {
    fetch('http://localhost:8080/cars/')
    .then(res => res.json())
    .then(data => {
        cars = data;
        renderItems(cars, onDeleteItem, onEditItem);
        countTotalPrice(cars);
    })
    .catch(err => console.log(err));
}

async function addItem ({ producer, price, horsepower, image_uri}) {

    await fetch('http://localhost:8080/cars/', {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            'producer': producer,
            'price': price,
            'horsepower': horsepower,
            'image_uri': image_uri
        })
        
    })
    .then(res => getItemsFromDB())
}

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { producer, price, horsepower, image_uri} = getInputValues();

    clearInputs();
    addItem({
        producer: producer,
        price: price,
        horsepower: horsepower,
        image_uri: image_uri,
    })
    

    countTotalPrice(cars);
})

findButton.addEventListener("click", (event) => {
    event.preventDefault();

    const foundCars = cars.filter(car => car.producer.search(findInput.value) !== -1);

    renderItems(foundCars, onDeleteItem, onEditItem);
    countTotalPrice(foundCars);
})

showAllButton.addEventListener("click", (event) => {
    event.preventDefault();
    findInput.value = "";
    renderItems(cars, onDeleteItem, onEditItem);
    countTotalPrice(cars);
})

sortButton.addEventListener("click", (event) => {
    event.preventDefault();
    const sortedCars = cars.sort(function(a, b){
        return b.price - a.price;
    })
    renderItems(sortedCars, onDeleteItem, onEditItem);
})

const countTotalPrice = (myCars) => {
    const totalPrice = myCars.reduce(function(totalPrice, b){
        return totalPrice + parseInt(b.price);
    }, 0)
    renderTotalPrice(totalPrice);
}

getItemsFromDB();
