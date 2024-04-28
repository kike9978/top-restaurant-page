import H1 from "./components/h1"
import MenuItem from "./components/menuItem";
const menuData = [
  {
    headingText: "Comida",
    descriptionText: "Un manjar",
    priceValue: 234
  }
]

console.log({ ...menuData[0] })

const title = H1("Buenas noches")
const elem = document.createElement("div")
const menuItem = MenuItem({ ...menuData[0] })
elem.style.backgroundColor = "red";
elem.style.width = "300px"
elem.style.height = "300px"
elem.appendChild(title)
elem.appendChild(menuItem)



export default function Home() {
  return elem
}

