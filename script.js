
// Buscamos los enlaces del menú y las noticias
const enlaces = document.querySelectorAll("nav a");
const noticias = document.querySelectorAll(".noticias article");

// Filtrar noticias según la categoría elegida
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (evento) => {
    evento.preventDefault();

    const categoria = enlace.textContent.trim().toLowerCase();

    noticias.forEach((noticia) => {
      const titulo = noticia.querySelector("h3")
        .textContent.toLowerCase();

      if (
        categoria === "inicio" ||
        titulo.includes(categoria) ||
        (categoria === "videojuegos" && titulo.includes("videojuegos")) ||
        (categoria === "celulares" && titulo.includes("celulares")) ||
        (categoria === "inteligencia artificial" && titulo.includes("inteligencia artificial"))
      ) {
        noticia.style.display = "block";
      } else {
        noticia.style.display = "none";
      }
    });

    // Mostrar u ocultar la noticia principal
    const principal = document.querySelector(".noticia-principal");

    if (categoria === "inicio") {
      principal.style.display = "block";
    } else {
      principal.style.display = "none";
    }
  });
});

// Mostrar un mensaje cuando se hace clic en una noticia
noticias.forEach((noticia) => {
  noticia.addEventListener("click", () => {
    const titulo = noticia.querySelector("h3").textContent;
    alert("Seleccionaste la noticia: " + titulo);
  });
});
