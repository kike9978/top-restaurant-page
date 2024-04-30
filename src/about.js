import picoOrizaba from "./assets/pico-de-orizaba.png"
import H1 from "./components/elements/h1"
import P from "./components/elements/p"


const elem = document.createElement("div")
const imageContainer = document.createElement("div")
const img = document.createElement("img")
const container = document.createElement("div")
const container2 = document.createElement("div")

imageContainer.classList.add("rounded-3xl", "overflow-hidden", "max-h-80", "flex")
img.classList.add("object-cover")
container.classList.add("flex", "flex-col", "md:flex-row", "gap-4", "mt-6", "justify-between")

img.setAttribute("src", picoOrizaba)

imageContainer.appendChild(img)
elem.appendChild(imageContainer)
elem.appendChild(container)
container.appendChild(H1("Los antojitos veracruzanos: Un viaje por el sabor ", [`max-w-[40rem]`]))
container.appendChild(container2)
container2.appendChild(P("Los antojitos jarochos son la esencia de la gastronomía veracruzana, un festín de sabores y texturas que te cautivarán desde el primer bocado. Fruto de la fusión de culturas indígenas y españolas, estos platillos reflejan la alegría y el ingenio del pueblo jarocho. ", [`max-w-[40rem]`]))
container2.appendChild(P("Desde los clásicos bocoles y empanadas hasta las exóticas picadas y el suculento zacahuil, cada antojito es una obra de arte culinario que te transportará a un viaje sensorial sinigual. Ven a Veracruz y déjate cautivar por su magia. Un viaje culinario que te transportará a un mundo de tradiciones y sabores inolvidables.", [`max-w-[40rem]`, "mt-3", "mb-4", "md:mb-0"]))

export default function About() {

  return elem
}