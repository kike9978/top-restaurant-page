// import Pompis from "./page-load";
import TabMenu from "./tab-menu";
import About from "./about";
import Contact from "./contact";
import Menu from "./menu";
import "./styles/reset.css"
import "./styles/global.css"

const content = document.querySelector("div#content")
const main = document.createElement("main")

main.classList.add("w-full")

const tabMenu = TabMenu()
content.appendChild(tabMenu)
content.appendChild(main)

const [menu, about, contact] = [Menu(), About(), Contact()];

// TabMenu().childNodes.forEach(item => {
//   item.addEventListener("click", (e) => console.log("hola"))
// })


tabMenu.childNodes.forEach(item => {
  item.addEventListener("click", e => handleTabMenu(e));
});

console.log(tabMenu.childNodes)


function handleTabMenu(e) {

  if (e.target.parentNode.getAttribute("tab-active")) {
    return
  }
  tabMenu.childNodes.forEach(item => {
    item.setAttribute("tab-active", "")
    item.classList.remove("active")
  })
  e.target.parentNode.setAttribute("tab-active", true)

  switch (e.target.innerText) {
    case "Menu":
      main.replaceChildren(menu)
      e.target.parentNode.classList.add("active")
      break;
    case "About":
      main.replaceChildren(about)
      e.target.parentNode.classList.add("active")
      break;
    case "Contacto":
      main.replaceChildren(contact)
      e.target.parentNode.classList.add("active")
      break;
    default:
      console.error('No se encontro la opción')
  }
}

main.appendChild(menu)



// content.appendChild(Pompis("Hola"))
// content.appendChild(Pompis("Adios"))
// content.appendChild(Pompis("Hasta luego"))
// content.appendChild(Pompis())