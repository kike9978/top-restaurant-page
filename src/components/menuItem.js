

export default function menuItem(headingText, descriptionText, priceValue, imgSrc) {

    const img = document.createElement("img")
    const itemContainer = document.createElement("article")
    const heading = document.createElement("h2")
    const description = document.createElement("p")
    const price = document.createElement("p")
    const header = document.createElement("div")
    const image = document.createElement("div")

    heading.classList.add("text-xl")
    header.classList.add("flex", "flex-col", "items-baseline")
    image.classList.add("md:size-80", "bg-zinc-900", "rounded-3xl", "overflow-hidden", "aspect-square", "w-full")
    img.classList.add("h-full", "w-full", "object-cover")
    itemContainer.classList.add("flex", "flex-col", "gap-2")
    description.classList.add("text-black", "text-opacity-60")

    image.appendChild(img)

    header.appendChild(heading)
    header.appendChild(price)

    itemContainer.appendChild(image)
    itemContainer.appendChild(header)
    itemContainer.appendChild(description)


    img.setAttribute("src", imgSrc)

    heading.innerText = headingText;
    description.innerText = descriptionText;
    price.innerText = "$" + priceValue;

    return itemContainer;
}