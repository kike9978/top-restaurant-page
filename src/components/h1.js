export default function h1(text) {
    const h1 = document.createElement("h1")
    h1.classList.add("text-lg", "font-bold")
    h1.innerText = text

    return h1
}