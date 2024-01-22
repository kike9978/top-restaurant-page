export default function TabMenu() {
  const tabMenu = document.createElement("ul")
  tabMenu.className = "tabmenu"
  tabMenu.id = "tab-menu"
  const menuItems = [
    { page: "Home", isActive: true },
    { page: "About", isActive: false },
    { page: "Contacto", isActive: false }
  ]

  menuItems.forEach(item => {
    const li = document.createElement("li");
    li.className = "tab-element";
    li.innerText = item.page;
    li.style.cursor = "pointer"
    if (item.isActive) {
      li.setAttribute("tab-active", "true")
      li.classList.add("active")
    }
    tabMenu.appendChild(li);
  })


  return tabMenu;
}