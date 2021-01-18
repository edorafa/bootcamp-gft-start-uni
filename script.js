const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let qtdPulos = -1;
let gameOver = false;

function handleKeyup(event) {
    if (event.keyCode === 32) // site keycode.info
        if(!isJumping){
            jump();
        }         
}

function jump () {
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150) {
            clearInterval(upInterval);
        
        //Descendo
        let downInterval = setInterval(() => {
            if (position <= 0) {
                clearInterval(downInterval);
                isJumping = false;
            }else {
                position -= 20;
                dino.style.bottom = position + 'px';
            }
        }, 20);

        }else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20)
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let ramdomTime = Math.random() * 6000;
    qtdPulos++;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if (!gameOver){
            if (cactusPosition < -60) {
                clearInterval(leftInterval);
                background.removeChild(cactus);
            } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
                clearInterval(leftInterval);
                
                gameOver = true;
                const pulos = qtdPulos;

                fimDeJogo = '<h1 class="game-over"> Fim de jogo</h1>' +
                '<p>Voce conseguiu pular ' + pulos + ' vezes!</p>' + 
                '<button onclick="recarregarPagina()">Jogar novamente</button>';
                document.body.innerHTML = fimDeJogo;
                qtdPulos = 0;
            } else {
                cactusPosition -= 10;
                cactus.style.left = cactusPosition + 'px';
            }
        }
        
    }, 20)

    setTimeout(createCactus, ramdomTime);
}

createCactus();
document.addEventListener('keyup',handleKeyup);

function recarregarPagina(){
    
    //window.open("index.html");
    location.reload();
}