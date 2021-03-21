/*
   Em javascript existem operações que podem ser lentas, como:

=> Requisição de dados para a API;
=> Processamento intenso de dados;
=> Comunicação com Banco de dados;

// É extremamente importante que o JS não espere o término das operações lentas;

============================================================================
SET TIMEOUT
Essa função é utilizada para atrasar a execução de uma função após x 
milissegundos, aproveitando-se do event loop. A função interna ao setTimeout
(callback) é geralmente expressa como arrow function devido a uma melhor 
legibilidade do código. 

============================================================================
SET INTERVAL
Com setInterval, a execução do callback é repetida a cada x 
milissegundos. Portanto, é importante que a referência seja guardada em uma 
variável para uma posterior paralização através da função clearInterval. Caso isso 
não aconteça, podem ocorrer bugs de vazamento de memória, cuja detecção é 
geralmente difícil.
Cancele a setInterval com cancelInterval;

*/

'use scrict';

window.addEventListener('load', timer = () => {
    const div = document.querySelector("#timer");
    let count = 0;
    const btn = document.getElementById("btn");
    const btnRestart = document.getElementById('btnRestart');
    btnRestart.style.display = 'none';

    const timeout = setTimeout(() => {
        const interval = setInterval(() => {
            div.textContent = count++;

            if(btn.addEventListener('click', () => {
                clearInterval(interval);
                div.textContent = `Seu contador parou nos ${count} segundos `;
                btn.style.display = 'none';
                btn.style.display = 'block';

            }));
    }, 1000);
    }, 1000)
});

