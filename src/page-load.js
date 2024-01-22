import image from "./assets/image.png"

export default function Pompis(title = "No llevaba dinero") {

  const pompis = document.createElement("div")
  const titleElem = document.createElement("h1")
  const bg = new Image(300)



  pompis.appendChild(titleElem)
  pompis.appendChild(bg)

  titleElem.innerHTML = title;
  bg.src = image


  // <p>Este restaurante es el mejor wuu</p>
  return pompis
}

