const nav = document.createElement("nav")

const tabMenu = document.createElement("ul")
const logo = document.createElement("button")

nav.classList.add("w-full", "flex", "justify-between")
tabMenu.classList.add("tabmenu", "flex", "justify-between", "gap-4")
tabMenu.id = "tab-menu"
logo.classList.add("hidden", "md:block")


const menuItems = [
  { page: "Menu", isActive: true },
  { page: "About", isActive: false },
  { page: "Contacto", isActive: false }
]

logo.innerText = "HOME"


nav.appendChild(logo);
nav.appendChild(tabMenu);


menuItems.forEach(item => {
  const li = document.createElement("li");
  const btn = document.createElement("button");


  li.classList.add("tab-element", "cursor-pointer", "tracking-widest")
  btn.classList.add("p-2")

  btn.innerText = item.page.toUpperCase();
  li.appendChild(btn)
  if (item.isActive) {
    li.setAttribute("tab-active", "true")
  }
  tabMenu.appendChild(li);
})


export default function Nav() {

  return nav;
}