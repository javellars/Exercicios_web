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
