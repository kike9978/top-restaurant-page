

export default function menuItem(headingText, descriptionText, priceValue) {
    const itemContainer = document.createElement("article")
    const heading = document.createElement("h2")
    const description = document.createElement("p")
    const price = document.createElement("p")
    const header = document.createElement("div")

    itemContainer.classList.add("bg-zinc-900", "text-white", "p-4")
    heading.classList.add("text-lg", "font-bold")
    header.classList.add("flex", "justify-between")

    header.appendChild(heading)
    header.appendChild(price)

    itemContainer.appendChild(header)
    itemContainer.appendChild(description)
    heading.innerText = headingText;
    description.innerText = descriptionText;
    price.innerText = priceValue + "$";

    return itemContainer;
}