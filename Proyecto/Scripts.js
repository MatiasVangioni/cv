document.getElementById('boton_color').addEventListener("click", function() {
    document.body.style.backgroundColor = '#ffff00';
});

document.getElementById('boton_default').addEventListener("click", function() {
    document.body.style.backgroundColor = 'white';
});

let ocultartextoboton = document.getElementById('ocultartextoboton')

let ocultartexto = document.getElementById('ocultartexto')

ocultartextoboton.addEventListener('click', toggleText);

function toggleText () {
    ocultartexto.classList.toggle('show');
}