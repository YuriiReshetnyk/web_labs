import {getItemsFromDB} from "./index.js"

export const EDIT_BUTTON_PREFIX = "edit-elem-";
export const DELETE_BUTTON_PREFIX = "delete-elem-";

const producerInput = document.getElementById("producer-input");
const priceInput = document.getElementById("price-input");
const horsepoweInput = document.getElementById("horsepower-input");
const imageUriInput = document.getElementById("image-input");
const itemsContainer = document.getElementById("items-container");
const totalPrice = document.getElementById("total-price");

const totalPriceTemplate = (totalPrice) => `
${totalPrice} $
`;


const itemTemplate = ({id, producer, price, horsepower, image_uri}) => `
<li id="${id}" class="item">
    <img src=${image_uri} />
    <div class="item-body">
        <h1 class="item-producer">"${producer}"</h4>
            <div class="item-info">
                <h3 class="item-price">${price} $</h3>
                <h3 class="item-horsepower">${horsepower} hp</h3>
            </div>
            <div class="change">
                <button class="edit" id="edit-elem-${id}">Edit</button>
                <button class="delete" id="delete-elem-${id}">Delete</button>
            </div>
    </div>
</li>
`;

export const clearInputs = () => {
    producerInput.value = "";
    priceInput.value = "";
    horsepoweInput.value = "";
    imageUriInput.value = "";
};

export const addItemToPage = ({id, producer, price, horsepower, image_uri}, onRemoveItem, onEditItem) => {
    itemsContainer.insertAdjacentHTML(
        "beforeend",
        itemTemplate({id, producer, price, horsepower, image_uri})
    )

    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);
    deleteButton.addEventListener("click", onRemoveItem);

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click", onEditItem); 
}

export const getInputValues = () => {
    return{
        producer: producerInput.value,
        price: priceInput.value,
        horsepower: horsepoweInput.value,
        image_uri: imageUriInput.value
    }
};

export const renderItems = (items, onDeleteItem, onEditItem) => {
    itemsContainer.innerHTML = "";

    for (let i = 0 ; i < items.length ; i++) {
        addItemToPage({
            id: items[i].id,
            producer: items[i].producer,
            price: items[i].price,
            horsepower: items[i].horsepower,
            image_uri: items[i].image_uri,
        }, onDeleteItem, onEditItem);
    } 
}

export const renderTotalPrice = (price) => {
    totalPrice.innerHTML = "";
    totalPrice.insertAdjacentHTML(
        "afterbegin",
        totalPriceTemplate(price),
    )
}

export async function deleteCar (id) {
    
}