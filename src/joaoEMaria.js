console.log('módulo joaoEMaria');

let maria = 2;
let joao = 1;

function deJoaoParaMaria()
{
    maria = maria + joao;
    joao = 0;
}
function deMariaParaJoao()
{
    joao = joao + maria;
    maria = 0;
}

function getMaria()
{
    return maria;
}
function getJoao()
{
    return joao;
}

function setMaria(mariaNovoValor)
{
    if(mariaNovoValor > 0)
    {
        maria = mariaNovoValor;
    }
    else
    {
        maria = 0;
    }
}
function setJoao(joaoNovoValor)
{
    if(joaoNovoValor > 0)
    {
        joao = joaoNovoValor;
    }
    else
    {
        joao = 0;
    }
}

export { getMaria, getJoao, deJoaoParaMaria, deMariaParaJoao, setJoao, setMaria };