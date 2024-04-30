export default function p(text, className = []) {
    const p = document.createElement("p")
    p.classList.add("text-opacity-60", "text-black", "text-lg", ...className)
    p.innerText = text

    return p
}