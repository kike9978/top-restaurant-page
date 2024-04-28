export default function TabMenu() {
  const tabMenu = document.createElement("ul")
  tabMenu.className = "tabmenu"
  tabMenu.classList.add("w-full", "flex", "justify-end", "gap-4", "bg-red-400")
  tabMenu.id = "tab-menu"
  const menuItems = [
    { page: "Menu", isActive: true },
    { page: "About", isActive: false },
    { page: "Contacto", isActive: false }
  ]

  menuItems.forEach(item => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    li.classList.add("tab-element", "hover:bg-black", "hover:text-white", "cursor-pointer")
    btn.classList.add("p-2")

    btn.innerText = item.page;
    li.appendChild(btn)
    if (item.isActive) {
      li.setAttribute("tab-active", "true")
      li.classList.add("hover:bg-black", "hover:text-white")
    }
    tabMenu.appendChild(li);
  })


  return tabMenu;
}