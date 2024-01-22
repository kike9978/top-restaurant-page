export default function TabMenu() {
  const tabMenu = document.createElement("ul")
  tabMenu.id = "tab-menu"
  const menuItems = [
    {page: "Home", isActive: true},
    {page: "About", isActive: false},
    {page: "Contacto", isActive: false}
  ]

  menuItems.forEach(item => {
    const li = document.createElement("li");
    li.className = "tab-element";
    li.innerText = item.page;
    li.style.cursor = "pointer"
    item.isActive && li.setAttribute("tab-active", "true")
    tabMenu.appendChild(li);
  })


  return tabMenu;
}