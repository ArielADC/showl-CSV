//// Função Principal
const fs = require('fs');
const csv = fs.readFileSync('./sample.csv').toString();
const {
    quebraLinhas,separaColunas,separaConteudo,parteDificil,
} = require ("./lib/CSV")
const linhas = quebraLinhas(csv);
const primeiraLinha = linhas.shift();
const headers = separaColunas(primeiraLinha);
const conteudo = separaConteudo(linhas);

console.log(headers);
console.log(conteudo);
const json = parteDificil(headers, conteudo);

console.table(json, ["Filme", "Ano", "Gênero"]);

/////////////////////////////
