// Obtener todas las imágenes con la clase "cambiar-imagen"
let cartIcons = document.getElementsByClassName("add-to-cart-icon");

// Iterar sobre las imágenes y agregar el evento onclick
for (let i = 0; i < cartIcons.length; i++) {
  cartIcons[i].addEventListener("click", changer);
}

// Función para cambiar la imagen al hacer clic
function changer() {
  let newIcon = "../icons/bt_added_to_cart.svg"; // Ruta de la nueva imagen

  // Obtener el índice de la imagen actual en el arreglo de imágenes
  let index = Array.from(cartIcons).indexOf(this);

  // Cambiar la fuente (src) de la imagen actual por la nueva imagen
  this.src = newIcon;

}
