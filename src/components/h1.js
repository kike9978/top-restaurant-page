export default function h1(text) {
    const h1 = document.createElement("h1")
    h1.classList.add("text-5xl", "font-bold")
    h1.innerText = text

    return h1
}