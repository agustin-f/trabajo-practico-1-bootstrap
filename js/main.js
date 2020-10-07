/* tomo el elemento del DOM con clase carousel y le doy un intervalo de tiempo de 500ms */
$('.carousel').carousel({
    interval: 500
})

/* lo que hace esta funcion es tomar el elemento del DOM con ID myLinks y asignarlo a la variable x , luego si el diplay es block , lo pone  a none para no mostrar el icono del 
menu y si el display es none lo pone a block para mostrarlo*/
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}