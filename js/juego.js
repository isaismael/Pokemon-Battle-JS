// Pokemones
let vidaCharizard = 100;
let vidaVenasaur = 100;

//Ataques Charizard
let furia = 6,
    lanzallamas = 12,
    ascuas = 9,
    arañazo = 4;

//Ataques Venasaur
let cabezaso = 0,
    envenenar = 1,
    hojasNavajas = 2,
    fallar = 3;


//Referencias
const btnFuria = document.querySelector('#btnFuria');
const btnLanzallamas = document.querySelector('#btnLanzallamas');
const btnAscuas = document.querySelector('#btnAscuas');
const btnArañazo = document.querySelector('#btnArañazo');

const hpPlayer = document.querySelector('#hpPlayer');
const estadoPlayer = document.querySelector('#estadoPlayer');

const hpRival = document.querySelector('#hpRival');
const estadoRival = document.querySelector('#estadoRival');

// Ataques Player
const ataqueFuria = () =>{
    return vidaVenasaur = vidaVenasaur - furia;
}

const ataqueLanzallamas = () =>{
    return vidaVenasaur = vidaVenasaur - lanzallamas;
}

const ataqueAscuas = () =>{
    return vidaVenasaur = vidaVenasaur - ascuas;
}

const ataqueArañazo = () =>{
    return vidaVenasaur = vidaVenasaur - arañazo;
}

// Ataques Rival 
const ataqueRival = () => {
    let rival = Math.floor(Math.random() * 4);
    

    if (rival === cabezaso){
        vidaCharizard = vidaCharizard - 6;
        hpPlayer.innerHTML = vidaCharizard;
        console.log(rival);
    } else if (rival === hojasNavajas){
        vidaCharizard = vidaCharizard - 12;
        hpPlayer.innerHTML = vidaCharizard;
        console.log(rival);
    }
}


//BTN Ataques
btnFuria.addEventListener( 'click', () => {
    ataqueFuria();
    hpRival.innerHTML = vidaVenasaur;
    setTimeout(() => {
        btnFuria.disabled = true;
        btnLanzallamas.disabled = true;
        btnAscuas.disabled = true;
        btnArañazo.disabled = true;
        ataqueRival();
    }, 1000);
    // Habilitar btn
    setTimeout(() => {
        btnFuria.disabled = false;
        btnLanzallamas.disabled = false;
        btnAscuas.disabled = false;
        btnArañazo.disabled = false;
    }, 4000);
});

btnLanzallamas.addEventListener( 'click', ()=> {
    ataqueLanzallamas();
    hpRival.innerHTML = vidaVenasaur;
    setTimeout(() => {
        btnFuria.disabled = true;
        btnLanzallamas.disabled = true;
        btnAscuas.disabled = true;
        btnArañazo.disabled = true;
        ataqueRival();
    }, 1000);
    // Habilitar btn
    setTimeout(() => {
        btnFuria.disabled = false;
        btnLanzallamas.disabled = false;
        btnAscuas.disabled = false;
        btnArañazo.disabled = false;
    }, 4000);
});

btnAscuas.addEventListener('click', () => {
    ataqueAscuas();
    hpRival.innerHTML = vidaVenasaur;
    setTimeout(() => {
        btnFuria.disabled = true;
        btnLanzallamas.disabled = true;
        btnAscuas.disabled = true;
        btnArañazo.disabled = true;
        ataqueRival();
    }, 1000);
    // Habilitar btn
    setTimeout(() => {
        btnFuria.disabled = false;
        btnLanzallamas.disabled = false;
        btnAscuas.disabled = false;
        btnArañazo.disabled = false;
    }, 4000);
});

btnArañazo.addEventListener('click', () => {
    ataqueArañazo();
    hpRival.innerHTML = vidaVenasaur;
    setTimeout(() => {
        btnFuria.disabled = true;
        btnLanzallamas.disabled = true;
        btnAscuas.disabled = true;
        btnArañazo.disabled = true;
        ataqueRival();
    }, 1000);
    // Habilitar btn
    setTimeout(() => {
        btnFuria.disabled = false;
        btnLanzallamas.disabled = false;
        btnAscuas.disabled = false;
        btnArañazo.disabled = false;
    }, 4000);
})

console.log(vidaVenasaur);