const botaoStart = document.querySelector('.start-button');
const botaoPause = document.querySelector('.pause-button');
const botaoReset = document.querySelector('.reset-button');
const cronometro = document.querySelector('.cronometer');

let horas = `00`;
let minutos = `00`;
let segundos = `00`;
let cronometer;

botaoStart.addEventListener('click', iniciaCronometro);
botaoPause.addEventListener('click', pausaCronometro);
botaoReset.addEventListener('click', resetaCronometro);

function iniciaCronometro(){
    if(cronometro.dataset.tipo == "off"){
        cronometro.dataset.tipo = "on";
        cronometer = setInterval(timer, 1000);
    }
}

function pausaCronometro(){
    if(cronometro.dataset.tipo == "on"){
        clearInterval(cronometer);
        cronometro.dataset.tipo = "off";
    }
}

function resetaCronometro(){
    clearInterval(cronometer);
        cronometro.innerText = `00:00:00`;
        horas=`00`;
        minutos=`00`;
        segundos=`00`;
    if(cronometro.dataset.tipo=="on"){
        cronometro.dataset.tipo="off";
        iniciaCronometro();
    }
    
}

function timer(){
    
    segundos++;

    if(segundos < 10) segundos = `0` + segundos;
    if(segundos > 59){
        segundos = `00`;
        minutos++;

        if(minutos< 10) minutos = `0` + minutos;
    }

    
    if(minutos>59){
        
        minutos=`00`;
        horas++;

        if(horas<10) horas = `0` + horas;
    }

    cronometro.innerText = `${horas}:${minutos}:${segundos}`;
}
