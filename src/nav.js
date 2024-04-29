const nav = document.createElement("nav")

nav.classList.add("w-full", "bg-red-400", "flex", "justify-between")
const tabMenu = document.createElement("ul")
const logo = document.createElement("button")

tabMenu.classList.add("tabmenu", "flex", "justify-between", "gap-4")
tabMenu.id = "tab-menu"


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


  li.classList.add("tab-element", "hover:bg-black", "hover:text-white", "cursor-pointer", "tracking-widest")
  btn.classList.add("p-2")

  btn.innerText = item.page.toUpperCase();
  li.appendChild(btn)
  if (item.isActive) {
    li.setAttribute("tab-active", "true")
    li.classList.add("active")
  }
  tabMenu.appendChild(li);
})


export default function Nav() {

  return nav;
}