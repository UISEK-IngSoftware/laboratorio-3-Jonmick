function mostrarHabilidades() {
    const habilidades = document.getElementById ("habilidades")
    if (habilidades.style.display == "none") {
        habilidades.style.display = "flex"
        return
    }
    habilidades.style.display = "none"
};

function mostrarFront() {
    const frontend = document.getElementById ("front")
    if (frontend.style.display == "none") {
        frontend.style.display = "block"
        return
    }
    frontend.style.display = "none"
};

function mostrarBack() {
    const backend = document.getElementById ("back")
    if (backend.style.display == "none") {
        backend.style.display = "block"
        return
    }
    backend.style.display = "none"
};

function mostrarEducacion() {
    const educacion = document.getElementById ("educacion")
    if (educacion.style.display == "none") {
        educacion.style.display = "block"
        return
    }
    educacion.style.display = "none"
}

function mostrarExperiencia() {
    const experiencia = document.getElementById ("experiencia")
    if (experiencia.style.display == "none") {
        experiencia.style.display = "block"
        return
    }
    experiencia.style.display = "none"
}