

const menucabecalho = document.getElementById('opcao');

const listamenu = document.querySelector('.listamenu');



    menucabecalho.addEventListener('touchstart', () => {


         listamenu.classList.add('revelar');
        
         console.log(listamenu.classList);
    })

