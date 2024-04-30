import H1 from "./components/elements/h1";
import H2 from "./components/elements/h2";
import P from "./components/elements/p";
import MenuItem from "./components/menuItem";
import { menuData } from "./data/menuData"


// Component creation
const elem = document.createElement("div");
const firstSection = document.createElement("section")
const title = H1("Las Picaditas de la Abuela", ["max-w-[40%]"]);
const secondSection = document.createElement("section")
const menuContainer = document.createElement("div")
const subHeading = H2("Nuestro sabroso menú");

// Class assignment
elem.classList.add("h-full", "flex", "flex-col", "justify-between")
menuContainer.classList.add("flex", "overflow-x-auto", "no-scrollbar", "gap-2", "-mx-10", "px-10")
firstSection.classList.add("flex", "w-full", "justify-between", "items-baseline", "mt-14")
secondSection.classList.add("mb-8", "gap-4", "flex", "flex-col")

// Child appending
elem.appendChild(firstSection)
elem.appendChild(secondSection)
firstSection.appendChild(title)
firstSection.appendChild(P("Las Picaditas de la Abuela te transporta a la cocina de tu abuela en Veracruz. Somos un restaurante familiar que honra la tradición de las picadas veracruzanas hechas a mano. Utilizamos ingredientes frescos locales y recetas heredadas de generaciones pasadas para crear una experiencia culinaria hogareña y deliciosa.  ", ["w-[50%]"]))
secondSection.appendChild(subHeading)
secondSection.appendChild(menuContainer)



menuData.forEach(item => {
  const menuItem = MenuItem(item.title, item.description, item.price, item.imgSrc);
  menuContainer.appendChild(menuItem);
  console.log(item.title)
});

export default function Menu() {
  return elem;
}
