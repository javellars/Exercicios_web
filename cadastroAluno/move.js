/*Menu Lateral */
function toggleMenu() {
    var menuLateral = document.getElementById('menuLateral');
    var isVisible = menuLateral.style.transform === 'translateX(-45%)';

    // Adiciona ou remove a classe "visible" dependendo do estado atual do menu
    if (isVisible) {
        menuLateral.classList.remove('visible', 'align-left');
    } else {
        menuLateral.classList.add('visible', 'align-left');

    }

    // Alterna a transformação do menu
    menuLateral.style.transform = isVisible ? 'translateX(-100%)' : 'translateX(-45%)';
}

/*Limpar dados */
function limparDados() {

    const dados = document.querySelectorAll("input[type=text],input[type=number], select");

    dados.forEach((dado) => {
        if (dado.tagName === "INPUT" || dado.tagName === "SELECT") {
            dado.value = "";
        }
    });
}

/*Validação de cadastro */
function validarCadastro() {
    const name = document.getElementById("nome").value;
    const ra = document.getElementById("ra").value;
    const telefone = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const endereco = document.getElementById("end").value;
    const sexo = document.getElementById("sex").value;

    if (!name || !email || !ra || !telefone || !endereco || !sexo) {
        alert("Por favor, preencha todos os campos.");
    } 
    else {
        alert("Cadastro bem-sucedido!");
        window.location.href = "alunoLista.html";
    }
}
