import H1 from "./components/h1";
import MenuItem from "./components/menuItem";
import { menuData } from "./data/menuData"


const title = H1("Menu");
const elem = document.createElement("div");
const menuContainer = document.createElement("div")

menuContainer.classList.add("flex", "overflow-x-auto")

elem.appendChild(title);
elem.appendChild(menuContainer)


menuData.forEach(item => {
  const menuItem = MenuItem(item.title, item.description, item.price);
  menuContainer.appendChild(menuItem); // Append each menuItem inside the loop
});

export default function Menu() {
  return elem;
}
