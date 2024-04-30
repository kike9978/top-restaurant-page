import Nav from "./components/nav";
import About from "./about";
import Contact from "./contact";
import Menu from "./menu";
import "./styles/reset.css"
import "./styles/global.css"


const content = document.querySelector("div#content")
const main = document.createElement("main")

main.classList.add("w-full", "h-full")
content.classList.add("px-10")

const tabMenu = Nav()
content.appendChild(tabMenu)
content.appendChild(main)

const [menu, about, contact] = [Menu(), About(), Contact()];


tabMenu.childNodes.forEach(item => {
  item.addEventListener("click", e => handleNav(e));
});

console.log(tabMenu.childNodes[1].childNodes)
function handleNav(e) {

  if (e.target.parentNode.getAttribute("tab-active")) {
    return
  }
  tabMenu.childNodes[1].childNodes.forEach(item => {
    item.setAttribute("tab-active", "")
  })
  e.target.parentNode.setAttribute("tab-active", true)

  switch (e.target.innerText) {
    case "MENU":
      main.replaceChildren(menu)
      break;
    case "ABOUT":
      main.replaceChildren(about)
      break;
    case "CONTACTO":
      main.replaceChildren(contact)
      break;
    default:
      console.log(e.target.innerText)
      console.error('No se encontro la opción')
  }
}

main.appendChild(menu)

