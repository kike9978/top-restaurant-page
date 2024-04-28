const itemContainer = document.createElement("article")
const heading = document.createElement("h2")
const description = document.createElement("p")
const price = document.createElement("p")

itemContainer.appendChild(heading)
itemContainer.appendChild(description)
itemContainer.appendChild(price)

export default function menuItem(headingText, descriptionText, priceValue) {
    heading.innerText = headingText;
    description.innerText = descriptionText;
    price.innerText = priceValue;

    return itemContainer;
}