import H1 from "./components/h1";
import MenuItem from "./components/menuItem";

const menuData = [
  {
    title: "Comida",
    description: "Un manjar",
    price: 234
  },
  {
    title: "Pato sabroso",
    description: "Sabrusar injustificada",
    price: 234
  }
]

const title = H1("Buenas noches");
const elem = document.createElement("div");
elem.style.backgroundColor = "red";
elem.style.width = "300px";
elem.style.height = "300px";
elem.appendChild(title);

menuData.forEach(item => {
  const menuItem = MenuItem(item.title, item.description, item.price);
  elem.appendChild(menuItem); // Append each menuItem inside the loop
});

export default function Home() {
  return elem;
}
