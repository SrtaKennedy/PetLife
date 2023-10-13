let elementosDuvida = document.querySelectorAll('.duvida'); // pegando todos os elementos

elementosDuvida.forEach(function (duvida) { // executar uma função para cada elemento
    duvida.addEventListener('click', function() { // para cada elemento um evento de click
        duvida.classList.toggle('ativa') // para cada evento de click, vai executar esse linha
    })
})

/* function nome (argumento) {
    conteudo da função
} */