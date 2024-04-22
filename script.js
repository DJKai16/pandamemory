window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');

    // Mostrar el loader inicialmente
    loader.classList.remove('hidden');

    // Ocultar el loader y mostrar el contenido después de ciertos segundos (por ejemplo, 3 segundos)
    setTimeout(function() {
      loader.classList.add('hidden');
      content.style.display = 'block';
    }, 4000); // 3000 milisegundos = 3 segundos
  });
  
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});

function performSearch() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    // Aquí puedes agregar la lógica de redirección para la búsqueda
    // Por ejemplo, redirigir a las imágenes relacionadas con el término de búsqueda en la página de galería
    alert("Realizar búsqueda con: " + searchTerm);
}

// function para la fienda desde aqui.

// hasta aqui. 




// Obtén los elementos de búsqueda
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Agrega un evento de tecla al campo de búsqueda
searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // Llama a la función de búsqueda al presionar Enter
        performSearch();
    }
});

// Agrega un evento de clic al botón de búsqueda
searchButton.addEventListener("click", performSearch);

// Función para realizar la búsqueda
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    // Aquí puedes agregar la lógica de redirección para la búsqueda
    // Por ejemplo, redirigir a las imágenes relacionadas con el término de búsqueda en la página de galería

    switch (searchTerm) {
        case "dls":
            window.location.href = "descargas.html"; // Redirigir al post de Free Fire
            break;
        case "freefire":
            window.location.href = "descargas.html"; // Redirigir al post de cuentos de terror
            break;
         case "macro":
            window.location.href = "descargas.html"; // Redirigir al post de cuentos de terror
            break;   
            case "bajoterra":
            window.location.href = "descargas.html"; // Redirigir al post de cuentos de terror
            break;  
            case "videos":
            window.location.href = "https://www.youtube.com/"; // Redirigir al post de cuentos de terror
            break;  
        // Puedes agregar más casos para otros términos de búsqueda y redirigir a las páginas correspondientes
        default:
            alert("No se encontraron resultados para la búsqueda: " + searchTerm); // Mostrar un mensaje de alerta si no se encontraron resultados
            break;
    }
}



let likeCount = 0;
let dislikeCount = 0;
let likeButtonClicked = false;
let dislikeButtonClicked = false;

function handleReaction(reactionType) {
    if (reactionType === 'like' && !likeButtonClicked) {
        likeCount++;
        document.getElementById('like-count').innerText = likeCount;
        likeButtonClicked = true;
        document.getElementById('like-button').disabled = true;
        document.getElementById('dislike-button').disabled = true;
    } else if (reactionType === 'dislike' && !dislikeButtonClicked) {
        dislikeCount++;
        document.getElementById('dislike-count').innerText = dislikeCount;
        dislikeButtonClicked = true;
        document.getElementById('like-button').disabled = true;
        document.getElementById('dislike-button').disabled = true;
    }
}



function downloadImage(imageUrl) {
    // Crea un enlace temporal
    const link = document.createElement('a');
    link.href = imageUrl;
    link.target = '_blank'; // Abre el enlace en una nueva pestaña o ventana
    link.download = 'imagen'; // Puedes personalizar el nombre del archivo si lo deseas

    // Agrega el enlace al DOM y simula un clic
    document.body.appendChild(link);
    link.click();

    // Elimina el enlace temporal del DOM después de un breve período de tiempo
    setTimeout(function() {
        document.body.removeChild(link);
    }, 100);
}
