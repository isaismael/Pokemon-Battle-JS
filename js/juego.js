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
    latigoCepa = 1,
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
        estadoRival.innerHTML = 'Ataque: Cabezaso';
    } else if (rival === hojasNavajas){
        vidaCharizard = vidaCharizard - 12;
        hpPlayer.innerHTML = vidaCharizard;
        estadoRival.innerHTML = 'Ataque: Hojas Navajas';
    } else if (rival === latigoCepa) {
        vidaCharizard = vidaCharizard - 14;
        hpPlayer.innerHTML = vidaCharizard;
        estadoRival.innerHTML = 'Ataque: Latigo Cepa';
    } else if (rival === fallar) {
        vidaCharizard = vidaCharizard - 0;
        hpPlayer.innerHTML = vidaCharizard;
        estadoRival.innerHTML = 'Ataque: Fallo!';
    } 
}


//BTN Ataques
btnFuria.addEventListener( 'click', () => {
    ataqueFuria();
    estadoPlayer.innerHTML = 'Ataque: Furia';
    hpRival.innerHTML = vidaVenasaur;
    btnFuria.disabled = true;
    btnLanzallamas.disabled = true;
    btnAscuas.disabled = true;
    btnArañazo.disabled = true;
    setTimeout(() => {
        
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
    estadoPlayer.innerHTML = 'Ataque: Lanzallamas';
    hpRival.innerHTML = vidaVenasaur;
    btnFuria.disabled = true;
    btnLanzallamas.disabled = true;
    btnAscuas.disabled = true;
    btnArañazo.disabled = true;
    setTimeout(() => {
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
    estadoPlayer.innerHTML = 'Ataque: Ascuas';
    hpRival.innerHTML = vidaVenasaur;
    btnFuria.disabled = true;
    btnLanzallamas.disabled = true;
    btnAscuas.disabled = true;
    btnArañazo.disabled = true;
    setTimeout(() => {
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
    estadoPlayer.innerHTML = 'Ataque: Arañazo';
    hpRival.innerHTML = vidaVenasaur;
    btnFuria.disabled = true;
    btnLanzallamas.disabled = true;
    btnAscuas.disabled = true;
    btnArañazo.disabled = true;
    setTimeout(() => {
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


