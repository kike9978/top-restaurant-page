

export default function menuItem(headingText, descriptionText, priceValue) {
    const itemContainer = document.createElement("article")
    const heading = document.createElement("h2")
    const description = document.createElement("p")
    const price = document.createElement("p")
    const header = document.createElement("div")
    const image = document.createElement("div")

    heading.classList.add("text-xl")
    header.classList.add("flex", "justify-between")
    image.classList.add("size-80", "bg-zinc-900", "rounded-3xl")
    itemContainer.classList.add("flex", "flex-col", "gap-2")

    header.appendChild(heading)
    header.appendChild(price)

    itemContainer.appendChild(image)
    itemContainer.appendChild(header)
    itemContainer.appendChild(description)


    heading.innerText = headingText;
    description.innerText = descriptionText;
    price.innerText = "$" + priceValue;

    return itemContainer;
}