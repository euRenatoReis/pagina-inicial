

const menucabecalho = document.getElementById('opcao');

const listamenu = document.querySelector('.listamenu')



menucabecalho.addEventListener('touch', () => {


    listamenu.classList.add('revelar');
    menucabecalho.classList.add('aberto');

})
