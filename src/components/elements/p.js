export default function p(text) {
    const p = document.createElement("p")
    p.classList.add("text-opacity-60", "text-black", "text-lg")
    p.innerText = text

    return p
}