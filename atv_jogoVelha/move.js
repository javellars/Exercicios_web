let jogador1, jogador2, icon= 'X';


function obterJogador(){
    const urlParams = new URLSearchParams(window.location.search);
    jogador1 = urlParams.get('firstName1');
    jogador2 = urlParams.get('firstName2');
}


function jogar(celula) {
    if (celula.innerHTML === "") {
        celula.innerHTML = icon;
       if( verificarResultado()){
           return true;
       }
        if(icon == 'X'){
            icon = "O";
        } else{
            icon = 'X';
        }
    
        atualizarJogadorDaVez();
    }
}




function atualizarJogadorDaVez() {
    const jogadorDaVezElement = document.querySelector(".JogadorVez");
    const jogador = icon === "X" ? jogador1 : jogador2;
    jogadorDaVezElement.textContent = `Jogador da vez: ${jogador}`;
}

function verificarResultado() {
    const celulas = document.querySelectorAll(".linha");
    const q1 = celulas[0].innerHTML;
    const q2 = celulas[1].innerHTML;
    const q3 = celulas[2].innerHTML;
    const q4 = celulas[3].innerHTML;
    const q5 = celulas[4].innerHTML;
    const q6 = celulas[5].innerHTML;
    const q7 = celulas[6].innerHTML;
    const q8 = celulas[7].innerHTML;
    const q9 = celulas[8].innerHTML;

    if (
        (q1 && q1 === q2 && q2 === q3) ||
        (q4 && q4 === q5 && q5 === q6) ||
        (q7 && q7 === q8 && q8 === q9) ||
        (q1 && q1 === q4 && q4 === q7) ||
        (q2 && q2 === q5 && q5 === q8) ||
        (q3 && q3 === q6 && q6 === q9) ||
        (q1 && q1 === q5 && q5 === q9) ||
        (q3 && q3 === q5 && q5 === q7)
    ) {
        const jogador = icon === "X" ? jogador1 : jogador2;
        alert(`O jogador ${jogador} venceu!`);
        reiniciarJogo();
        return true;
    } else if ([...celulas].every(celula => celula.innerHTML !== "")) {
        alert("O jogo terminou em empate!");
        reiniciarJogo();
        return true;
    }
    return false;
}

function reiniciarJogo() {
    const celulas = document.querySelectorAll(".linha");
    celulas.forEach(celula => (celula.innerHTML = ""));
    icon = "";
}

document.addEventListener("DOMContentLoaded", () => {
    obterJogador();
    atualizarJogadorDaVez();

    const celulas = document.querySelectorAll(".linha");
    celulas.forEach(celula => celula.addEventListener("click", () => jogar(celula)));
});

function processarFormulario(e) {    
 
    const jogador1 = document.forms["cad"]["firstName1"].value;
    const jogador2 = document.forms["cad"]["firstName2"].value;

    if (jogador1.trim() === "" || jogador2.trim() === "") {
        e.preventDefault();
        alert("Por favor, insira os nomes dos jogadores.");
        return;
    }

} 

document.cad.addEventListener("submit", processarFormulario);
