function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver luz -> lightmode -> adicionar a imagem Light
    img.setAttribute("src", "./assets/avatar-light.png", "ON")
  } else {
    // se tiver sem luz -> lightmode manter a imagem
    img.setAttribute("src", "./assets/avatar.png", "OFF")
  }
}
