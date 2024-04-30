import mask from "./assets/arc-mask.svg"
import restaurant from "./assets/restaurant.jpg"




const elem = document.createElement("div")
const img = document.createElement("img")

elem.innerHTML = `<div class="flex flex-col-reverse md:flex-row flex-grow">
    <div class="flex flex-col justify-between flex-grow">
        <div class="flex flex-grow flex-col mt-14 gap-4">
        <h1 class="text-5xl font-bold text-purple-700">Déjanos un comentario</h1>
          <form action="" class="flex flex-col items-start gap-3">
              <label class="flex flex-col">
                  Nombre
                  <input type="text" placeholder="Juana Martinez" class="border border-solid border-zinc-400 p-1  text-black text-opacity-60" required>
              </label>
              <label class="flex flex-col">
                  Correo
                  <input type="email" placeholder="juana@martinez.com" class="border border-solid border-zinc-400 p-1  text-black text-opacity-60" required>
              </label>
              <label class="flex flex-col">
                  Comentario
                  <textarea name="" id="" cols="30" rows="4" class="border border-solid border-zinc-400 p-1  text-black text-opacity-60 resize-none" required placeholder="Tu comentario aquí"></textarea>
              </label>
              <button class="bg-purple-950 text-white px-2 py-1 rounded">Envíar</button>
          </form>
        </div>
        <div class="mb-6 text-black text-opacity-60">
            <p>Callejón Brisa Marina #22, Veracruz, Ver. 
            <p>(555) 555-5555</p>
            <p>correo@email.com</p>
        </div>
    </div>
    <div>
        
        <img src="${restaurant}" style="mask-image:url(${mask}); mask-repeat:no-repeat; mask-size:60%; mask-position:center" class="w-60">
        
    </div>
</div > `

elem.classList.add("h-full", "flex-col", "flex")

export default function Contact() {

  return elem
}