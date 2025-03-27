// Nav
const navInicio = document.querySelector("#nav_inicio")
const navServicios = document.querySelector("#nav_servicios")
const navTrabajos = document.querySelector("#nav_trabajos")
const navInfo = document.querySelector("#nav_info")

navInicio.addEventListener("click", () => {
    window.location.href = "index.html"
})
navServicios.addEventListener("click", () => {
    window.location.href = "servicios.html"
})
navTrabajos.addEventListener("click", () => {
    window.location.href = "trabajos.html"
})
navInfo.addEventListener("click", () => {
    window.location.href = "informacion.html"
})
// Boton de ir
const btnServicio = document.getElementById("btn_servicio");
const btnGaleria = document.getElementById("btn_galeria");
const btnubicacion = document.getElementById("btn_ubicacion");

if (btnServicio) {
    btnServicio.addEventListener("click", () => {
        let servicio = document.querySelector(".title_servicio");
        if (servicio) {
            servicio.scrollIntoView({ behavior: "smooth" });
        } 
    });
} 
if (btnGaleria) {
    btnGaleria.addEventListener("click", () => {
        let galeria = document.querySelector(".section_galeria");
        if (galeria) {
            galeria.scrollIntoView({ behavior: "smooth" });
        } 
    });
}
if (btnubicacion) {
    btnubicacion.addEventListener("click", () => {
        let ubicacion = document.querySelector(".subtitle");
        if (ubicacion) {
            ubicacion.scrollIntoView({ behavior: "smooth" });
        } 
    });
}

// Redes
const phoneNumber = '584146991739';
const message = '¡Hola valerith! Me gustaria agendar una cita';
const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
const facebookURL = "https://www.facebook.com/profile.php?id=100084706573592"
const instagramURL = "https://www.instagram.com/valerithmedina_?igsh=bWhpbG53enBmMXQ1"

document.querySelector(".footer_btnws1").addEventListener('click', function () {
    window.open(whatsappURL, '_blank'); 
});

document.querySelector('.footer_btnfb1').addEventListener('click', function() {
    window.open(facebookURL, '_blank');
})

document.querySelector('.footer_btnig1').addEventListener('click', function() {
    window.open(instagramURL, '_blank');
})


//Boton de ws flotante
document.querySelector(".btn_ws").addEventListener('click', function () {
    const phoneNumber = '584146991739';
    const message = '¡Hola valerith! Me gustaria agendar una cita';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank'); 
});
document.getElementById("btn_whatsapp").addEventListener('click', function () {
    const phoneNumber = '584146991739';
    const message = '¡Hola valerith! Me gustaria agendar una cita';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank'); 
});


