export default function h2(text) {
    const h2 = document.createElement("h2")
    h2.classList.add("text-3xl", "font-semi-bold")
    h2.innerText = text

    return h2
}