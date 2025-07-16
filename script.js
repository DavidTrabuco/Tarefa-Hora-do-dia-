console.log("Script loaded successfully");

let msg = document.getElementById('msg');
let img = document.getElementById('imagem');
let data = new Date();
let hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;

function carregar() {
    let background = document.body;

    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia ! Agora são ${hora} horas.`;
        img.src = 'img/imagem-manha.jpg';
        background.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde ! Agora são ${hora} horas.`;
        img.src = 'img/imagem-tarde.jpg';
        background.style.background = '#b9846f';
    } else {
        msg.innerHTML = `Boa noite ! Agora são ${hora} horas.`;
        img.src = 'img/imagem-noite.jpg';
        background.style.background = '#515154';
    }
}