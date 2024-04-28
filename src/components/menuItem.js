

export default function menuItem(headingText, descriptionText, priceValue) {
    const itemContainer = document.createElement("article")
    const heading = document.createElement("h2")
    const description = document.createElement("p")
    const price = document.createElement("p")
    const header = document.createElement("div")
    const image = document.createElement("div")

    itemContainer.classList.add("p-4")
    heading.classList.add("text-lg", "font-bold")
    header.classList.add("flex", "justify-between")
    image.classList.add("h-40", "w-40", "bg-zinc-900", "rounded-lg")

    header.appendChild(heading)
    header.appendChild(price)

    itemContainer.appendChild(image)
    itemContainer.appendChild(header)
    itemContainer.appendChild(description)


    heading.innerText = headingText;
    description.innerText = descriptionText;
    price.innerText = priceValue + "$";

    return itemContainer;
}