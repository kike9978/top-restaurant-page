import H1 from "./components/elements/h1";
import H2 from "./components/elements/h2";
import P from "./components/elements/p";
import MenuItem from "./components/menuItem";
import { menuData } from "./data/menuData"



// Component creation
const elem = document.createElement("div");
const firstSection = document.createElement("section")
const title = H1("Antojitos veracruzanos");
const secondSection = document.createElement("section")
const menuContainer = document.createElement("div")
const subHeading = H2("Menu");

// Class assignment
elem.classList.add("h-full", "flex", "flex-col", "justify-between")
menuContainer.classList.add("flex", "overflow-x-auto", "no-scrollbar", "gap-1")
firstSection.classList.add("flex", "w-full", "justify-between", "items-baseline", "mt-14")
secondSection.classList.add("mb-8")

// Child appending
elem.appendChild(firstSection)
elem.appendChild(secondSection)
firstSection.appendChild(title)
firstSection.appendChild(P("Buenas noches, es hora de los besos de chocolate"))
secondSection.appendChild(subHeading)
secondSection.appendChild(menuContainer)



menuData.forEach(item => {
  const menuItem = MenuItem(item.title, item.description, item.price, item.imgSrc);
  menuContainer.appendChild(menuItem);
});

export default function Menu() {
  return elem;
}
