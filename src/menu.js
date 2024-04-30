import H1 from "./components/elements/h1";
import H2 from "./components/elements/h2";
import P from "./components/elements/p";
import MenuItem from "./components/menuItem";
import { menuData } from "./data/menuData"


// Component creation
const elem = document.createElement("div");
const firstSection = document.createElement("section")
const title = H1("Las Picaditas de la Abuela", ["md:max-w-[40%]"]);
const secondSection = document.createElement("section")
const menuContainer = document.createElement("div")
const subHeading = H2("Nuestro sabroso menú");

// Class assignment
elem.classList.add("h-full", "flex", "flex-col", "justify-between")
menuContainer.classList.add("flex", "overflow-x-auto", "no-scrollbar", "gap-4", "md:gap-2", "-mx-10", "px-10", "flex-col", "md:flex-row")
firstSection.classList.add("flex", "w-full", "justify-between", "items-baseline", "mt-14", "flex-col", "md:flex-row", "gap-2", "md:gap-0")
secondSection.classList.add("mb-8", "gap-4", "flex", "flex-col", "mt-6", "md:mt-0", "snap-x")

// Child appending
elem.appendChild(firstSection)
elem.appendChild(secondSection)
firstSection.appendChild(title)
firstSection.appendChild(P("Las Picaditas de la Abuela te transporta a la cocina de tu abuela en Veracruz. Somos un restaurante familiar que honra la tradición de las picadas veracruzanas hechas a mano. Utilizamos ingredientes frescos locales y recetas heredadas de generaciones pasadas para crear una experiencia culinaria hogareña y deliciosa.", ["md:w-[50%]"]))
secondSection.appendChild(subHeading)
secondSection.appendChild(menuContainer)



menuData.forEach(item => {
  const menuItem = MenuItem(item.title, item.description, item.price, item.imgSrc);
  menuContainer.appendChild(menuItem);
});

export default function Menu() {
  return elem;
}
