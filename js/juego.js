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

const hpRival = document.querySelector('#hpRival');

const hpBarra = document.querySelector('#hpBarra');
const barraRival = document.querySelector('#barraRival');

const dialogo = document.querySelector(".dialogo");


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
        hpPlayer.innerHTML = `HP: ${vidaCharizard}`;
        hpBarra.style.width = `${vidaCharizard}%`;
        dialogo.innerHTML = "<h2>Venasaur utilizó Cabezaso</h2>";
    } else if (rival === hojasNavajas){
        vidaCharizard = vidaCharizard - 12;
        hpPlayer.innerHTML = `HP: ${vidaCharizard}`;
        hpBarra.style.width = `${vidaCharizard}%`;
        dialogo.innerHTML = "<h2>Venasaur utilizó Hojas Navajas</h2>";
    } else if (rival === latigoCepa) {
        vidaCharizard = vidaCharizard - 14;
        hpPlayer.innerHTML = `HP: ${vidaCharizard}`;
        hpBarra.style.width = `${vidaCharizard}%`;
        dialogo.innerHTML = "<h2>Venasaur utilizó Latigo Cepa</h2>";
    } else if (rival === fallar) {
        vidaCharizard = vidaCharizard - 0;
        hpPlayer.innerHTML = `HP: ${vidaCharizard}`;
        hpBarra.style.width = `${vidaCharizard}%`;
        dialogo.innerHTML = "<h2>Ataque de Venasaur salvaje Falló!</h2>";
    } 
}


//BTN Ataques
btnFuria.addEventListener( 'click', () => {
    ataqueFuria();
    barraRival.style.width = `${vidaVenasaur}%`;
    hpRival.innerHTML = `HP: ${vidaVenasaur}`;
    dialogo.innerHTML = "<h2>Charizard utilizó Ataque Furia</h2>";
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
    barraRival.style.width = `${vidaVenasaur}%`;
    hpRival.innerHTML = `HP: ${vidaVenasaur}`;
    dialogo.innerHTML = "<h2>Charizard utilizó Lanzallamas</h2>";
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
    barraRival.style.width = `${vidaVenasaur}%`;
    hpRival.innerHTML = `HP: ${vidaVenasaur}`;
    dialogo.innerHTML = "<h2>Charizard utilizó Ascuas</h2>";
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
    barraRival.style.width = `${vidaVenasaur}%`;
    hpRival.innerHTML = `HP: ${vidaVenasaur}`;
    dialogo.innerHTML = "<h2>Charizard utilizó Arañazo</h2>";
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


