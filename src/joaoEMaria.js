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
    maria = mariaNovoValor;
}
function setJoao(joaoNovoValor)
{
    joao = joaoNovoValor;
}

export { getMaria, getJoao, deJoaoParaMaria, deMariaParaJoao, setJoao, setMaria};