"use strict";

/**
 * Muestra la notificación interactiva si existe el elemento con el ID 'toast-interactive'.
 * Elimina la clase 'hidden' y agrega la clase 'md:block' para hacer visible la notificación en pantallas medianas o mayores.
 * @function
 * @returns {void}
 */
const showToast = () => {
    const toast = document.getElementById('toast-interactive');
    if (toast) {
        toast.classList.remove('hidden');
        toast.classList.add('md:block');
    }
};

/**
 * Muestra un video en pantalla.
 * Esta función es un ejemplo y debe implementarse según la lógica de la aplicación.
 * @function
 * @returns {void}
 */
const showVideo = () => {
    // Implementación pendiente
};

(() => {
    showToast();
})();
