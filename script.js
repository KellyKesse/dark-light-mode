function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //função toggle aplica condições de forma automática

  const img = document.querySelector("#profile img")

  //substituir a imagem
   if(html.classList.contains('light')) {
     img.setAttribute('src', './assets/avatar-light.png')
     //setAttribute modifica um atributo
   } else {
    img.setAttribute("src", "./assets/avatar.png")
   }
}