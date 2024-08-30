var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = ""
var inimigoOpt = ""
function validarVitoria(){
    let vencedor = document.querySelector('.vencedor')
    if(playerOpt == "paper"){

        if(inimigoOpt == "paper"){
            //empate
            vencedor.innerHTML = 'empate'
        }
        else if(inimigoOpt == "scissor"){
            //inimigo ganhou
            vencedor.innerHTML = 'inimigo ganhou'
        }
        else if(inimigoOpt == "rock"){
            //player ganhou
            vencedor.innerHTML = 'player ganhou'
        }
    }
    if(playerOpt == "rock"){

        if(inimigoOpt == "paper"){
            //empate
            vencedor.innerHTML = 'inimigo ganhou'
        }
        else if(inimigoOpt == "scissor"){
            //inimigo ganhou
            vencedor.innerHTML = 'player ganhou'
        }
        else if(inimigoOpt == "rock"){
            //player ganhou
            vencedor.innerHTML = 'empate'
        }
    }
    if(playerOpt == "scissor"){

        if(inimigoOpt == "paper"){
            //empate
            vencedor.innerHTML = 'player ganhou'
        }
        else if(inimigoOpt == "scissor"){
            //inimigo ganhou
            vencedor.innerHTML = 'empate'
        }
        else if(inimigoOpt == "rock"){
            //player ganhou
            vencedor.innerHTML = 'inimigo ganhou'
        }
    }
}
function resetInimigo(){ 
    const enemyOptions = document.querySelectorAll('.enemy-options div')
    for(var i = 0; i < enemyOptions.length; i++ ){
       
            enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
    }

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3)
    const enemyOptions = document.querySelectorAll('.enemy-options div')
    resetInimigo()
    for(i = 0; i < enemyOptions.length; i++ ){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
        }
    }
    validarVitoria()
    
}
function resetOpacityPlayer(){ 
    for(i=0; i < elementos.length; i++){
        elementos[i].style.opacity= 0.3;
    }
}


for(i=0; i < elementos.length; i++){elementos[i].addEventListener('click', (t)=>{
    resetOpacityPlayer()
    t.target.style.opacity= 1
    playerOpt= t.target.getAttribute('opt')
    inimigoJogar()
})}