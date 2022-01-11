
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
    fallar = 3,
    comerBaya = 4;

let BayaZidra = 10;

let derrota = 0;

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

const imgRival = document.querySelector('.rivalImg')
const playerImg =document.querySelector('.playerImg');

// Mover IMG Ataques
const movAtaque = () =>{
    imgRival.style.transform = 'translateX(-10px)';
    setTimeout(() => {
        imgRival.style.transform = 'translateX(10px)';
    }, 100);
    playerImg.style.filter = "brightness(2)";
    setTimeout(() => {
        playerImg.style.filter = "brightness(0)";
        playerImg.style.filter = "drop-shadow(-10px 0px 10px black)"; 
    }, 100);
}
// Mov Player
const movPlayer = () =>{
    playerImg.style.transform = 'translateX(10px)';
    setTimeout(() => {
        playerImg.style.transform = 'translateX(-10px)';
    }, 100);
    imgRival.style.filter = "brightness(2)";
    setTimeout(() => {
        imgRival.style.filter = "brightness(0)";
        imgRival.style.filter = "drop-shadow(-10px 10px 10px black)"; 
    }, 100);
}


//Hab/Des BTN
const desactivarBtn = () => {
    btnFuria.disabled = true
    btnLanzallamas.disabled = true
    btnAscuas.disabled = true
    btnArañazo.disabled = true
}

const activarBtn = () => {
    btnFuria.disabled = false
    btnLanzallamas.disabled = false
    btnAscuas.disabled = false
    btnArañazo.disabled = false
}

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
    let rival = Math.floor(Math.random() * 5);
    

    if (rival === cabezaso){
        vidaCharizard = vidaCharizard - 6;
        hpPlayer.innerHTML = `HP: ${vidaCharizard}`;
        hpBarra.style.width = `${vidaCharizard}%`;
        dialogo.innerHTML = "<h3>Venasaur utilizó Cabezaso</h3>";
        movAtaque();
        if ( vidaCharizard <= derrota ){
            dialogo.innerHTML = "<h3>Has sido derrotado!</h3>";
            hpPlayer.innerHTML = `HP: 0`;
            ataqueRival = false;
        }  
    } else if (rival === hojasNavajas){
        vidaCharizard = vidaCharizard - 12;
        hpPlayer.innerHTML = `HP: ${vidaCharizard}`;
        hpBarra.style.width = `${vidaCharizard}%`;
        dialogo.innerHTML = "<h3>Venasaur utilizó Hojas Navajas</h3>";
        movAtaque();
        if ( vidaCharizard <= derrota ){
            dialogo.innerHTML = "<h3>Has sido derrotado!</h3>";
            hpPlayer.innerHTML = `HP: 0`;
            ataqueRival = false;
        }  
    } else if (rival === latigoCepa) {
        vidaCharizard = vidaCharizard - 14;
        hpPlayer.innerHTML = `HP: ${vidaCharizard}`;
        hpBarra.style.width = `${vidaCharizard}%`;
        dialogo.innerHTML = "<h3>Venasaur utilizó Latigo Cepa</h3>";
        movAtaque();
        if ( vidaCharizard <= derrota ){
            dialogo.innerHTML = "<h3>Has sido derrotado!</h3>";
            hpPlayer.innerHTML = `HP: 0`;
            ataqueRival = false;
        }  
    } else if (rival === fallar) {
        vidaCharizard = vidaCharizard - 0;
        hpPlayer.innerHTML = `HP: ${vidaCharizard}`;
        hpBarra.style.width = `${vidaCharizard}%`;
        dialogo.innerHTML = "<h3>Ataque de Venasaur salvaje Falló!</h3>";
        movAtaque();
    } else if(rival === comerBaya ){
        vidaVenasaur = vidaVenasaur + BayaZidra
        hpRival.innerHTML = `HP: ${vidaVenasaur}`;
        dialogo.innerHTML = "<h3>Venasaur comió Baya Zidra y restaura 10HP!</h3>";
        if ( vidaCharizard <= derrota ){
            dialogo.innerHTML = "<h3>Has sido derrotado!</h3>";
            hpPlayer.innerHTML = `HP: 0`;
            ataqueRival = false;
        }  
    }
    
}


//BTN Ataques
btnFuria.addEventListener( 'click', () => {
    ataqueFuria();
    movPlayer();
    barraRival.style.width = `${vidaVenasaur}%`;
    hpRival.innerHTML = `HP: ${vidaVenasaur}`;
    dialogo.innerHTML = "<h3>Charizard utilizó Ataque Furia</h3>";
    desactivarBtn();
    //Victoria
    if( vidaVenasaur <= derrota ){
        dialogo.innerHTML = "<h3>Derrotaste Venasaur Salvaje</h3>";
        hpRival.innerHTML = `HP: 0`;
        ataqueRival = false;
        desactivarBtn();
    }
    setTimeout(() => {
        
        ataqueRival();
    }, 1300);
    // Habilitar btn
    setTimeout(() => {
        activarBtn();
    }, 4000);
});

btnLanzallamas.addEventListener( 'click', ()=> {
    ataqueLanzallamas();
    movPlayer();
    barraRival.style.width = `${vidaVenasaur}%`;
    hpRival.innerHTML = `HP: ${vidaVenasaur}`;
    dialogo.innerHTML = "<h3>Charizard utilizó Lanzallamas</h3>";
    desactivarBtn();
    //Victoria
    if( vidaVenasaur <= derrota ){
        dialogo.innerHTML = "<h3>Derrotaste Venasaur Salvaje</h3>";
        hpRival.innerHTML = `HP: 0`;
        ataqueRival = false;
        desactivarBtn();
    } 
    setTimeout(() => {
        ataqueRival();
    }, 1300);
    // Habilitar btn
    setTimeout(() => {
        activarBtn();
    }, 4000);
});

btnAscuas.addEventListener('click', () => {
    ataqueAscuas();
    movPlayer();
    barraRival.style.width = `${vidaVenasaur}%`;
    hpRival.innerHTML = `HP: ${vidaVenasaur}`;
    dialogo.innerHTML = "<h3>Charizard utilizó Ascuas</h3>";
    desactivarBtn();
    //Victoria
    if( vidaVenasaur <= derrota ){
        dialogo.innerHTML = "<h3>Derrotaste Venasaur Salvaje</h3>";
        hpRival.innerHTML = `HP: 0`;
        ataqueRival = false;
        desactivarBtn();
    }   
    setTimeout(() => {
        ataqueRival();
    }, 1300);
    // Habilitar btn
    setTimeout(() => {
        activarBtn();
    }, 4000);
});

btnArañazo.addEventListener('click', () => {
    ataqueArañazo();
    movPlayer();
    barraRival.style.width = `${vidaVenasaur}%`;
    hpRival.innerHTML = `HP: ${vidaVenasaur}`;
    dialogo.innerHTML = "<h3>Charizard utilizó Arañazo</h3>";
    desactivarBtn();
    //Victoria
    if( vidaVenasaur <= derrota ){
        dialogo.innerHTML = "<h3>Derrotaste Venasaur Salvaje</h3>";
        hpRival.innerHTML = `HP: 0`;
        ataqueRival = false;
        desactivarBtn();
    }  
    setTimeout(() => {
        ataqueRival();
    }, 1300);
    // Habilitar btn
    setTimeout(() => {
        activarBtn();
    }, 4000);
});



