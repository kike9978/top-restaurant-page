// import Pompis from "./page-load";
import TabMenu from "./tab-menu";
import About from "./about";
import Contact from "./contact";
import Home from "./home";

const content = document.querySelector("div#content")
const main = document.createElement("main")

// function component(){
//   const element = document.createElement("div");
//   const btn = document.createElement("button");

//   element.innerText = myName("Juan")
//   element.classList.add("hello")

//   btn.innerText = 'Click me and check the console!';
//   btn.onclick = printMe;

//   const myIcon = new Image()
//   myIcon.src = Icon;

//   element.appendChild(myIcon);
//   element.appendChild(btn);

//   console.table(Data)
//   console.table(Notes)

//   return element;
// }




const tabMenu = TabMenu()
content.appendChild(tabMenu)
content.appendChild(main)

const [home, about, contact] = [Home(), About(), Contact()];

// TabMenu().childNodes.forEach(item => {
//   item.addEventListener("click", (e) => console.log("hola"))
// })


tabMenu.childNodes.forEach(item => {
  item.addEventListener("click", e => handleTabMenu(e));
});

console.log(tabMenu.childNodes)


function handleTabMenu(e) {

  if (e.target.getAttribute("tab-active")) {
    console.log("Estoy activo")
    return
  }
  tabMenu.childNodes.forEach(item => item.setAttribute("tab-active", ""))
  e.target.setAttribute("tab-active", true)
  console.log(e.target.innetText)
  switch (e.target.innerText) {
    case "Home":
      main.replaceChildren(home)
      break;
    case "About":
      main.replaceChildren(about)
      break;
    case "Contacto":
      main.replaceChildren(contact)
      break;
    default:
      console.error('No se encontro la opción')
  }
}

main.appendChild(home)



// content.appendChild(Pompis("Hola"))
// content.appendChild(Pompis("Adios"))
// content.appendChild(Pompis("Hasta luego"))
// content.appendChild(Pompis())