'use strict'

window.addEventListener('load', () => {
    mapName();
    filter();
    foreach();
    reduce();
    find();
    some();
    every();
    sort();
});

//Cria um novo array baseado naquilo que quero buscar;
const mapName = () => {
    const person = people.results.map(person => {
        return {
        name : person.name
        }
    })
    console.log(person);

    return person;
}

//Filtra meu array com base numa proposição
const filter = () => {
    const personOlder18 = people.results.filter(person => {
        return person.gender = 'male' && person.dob.age < 30
    })
   console.log(personOlder18);
}

//Aqui passei uma nova propriedade para meu array através do foreach;
const foreach = () => {
    const foreachPerson = mapName();

    foreachPerson.forEach(person => {
        person.tamanhoNomes = person.name.title.length + person.name.first.length + person.name.last.length
    })

    console.log(foreachPerson);
}

//Reduce é muito usado no lugar do for, resultando num único valor de retorno.
const reduce = () => {
    const totalAges = people.results.reduce((accumulator, current) => {
        return accumulator + current.dob.age;
    }, 0)

    console.log(totalAges);
}

//Find me traz somente o primeiro baseado no paramêtro passado;
//Diferença entre o Map e Find é que o Map gera um novo array e o Find somente me traz aquela propriedade;
const find = () => {
    const find = people.results.find(person => {
        return person.location.state === 'Goiás'
    });

    console.log(find);
}

//Ele testa se o elemento existe e retorna true or false;
const some = () => {
    const some = people.results.some(person => {
        return person.location.state === 'Goiásssa';
    })

    console.log(some);
}

//Ele testa se todos os elementos do array passam pelo teste implementado pela função fornecida, retornando true or false;
const every = () => {
    const every = people.results.every(person => {
        return person.nat === 'BR';
    })

    console.log(every);
}

//Fiz o sort e posso ordenar meus objetos com os paramêtros que quero, seja pelo tamanho, pelo alfabeto, enfim
const sort = () => {
    const sort = people.results.map(person => {
        return {
            name : person.name.first
        };
    }).filter(person => person.name.startsWith('L'))
    .sort((a, b) => {
        return a.name.localeCompare(b.name);
    })

    console.log(sort);
}


/*Os operadores rest e spread permitem trabalhar com múltiplos parâmetro em funções. Sendo o Rest utilizado para 
permitir que uma função receba um número indefinido de parâmetros, 
enquanto o spread permite definir um número indefinido de parâmetros para uma função, Array ou objeto.

Spread agrupa, Rest transforma em vetor.
*/



