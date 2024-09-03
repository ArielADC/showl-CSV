
function quebraLinhas(csv) {
    let linhas = csv.trim().split('\n');
    return linhas;
}

function separaColunas(linha) {
    let colunas = linha.trim().split(';')
    return colunas;
}

function separaConteudo(conteudo) {
    const result = [];

    for(let i=0; i<conteudo.length; i++) {
    const linhatabla = conteudo [i];
    let colunas = separaColunas(linhatabla);
    
    result.push(colunas);

 
    }

    return result;
}

function parteDificil(headers,conteudo) {
    const listaDeObjeto = [];

    for (let i=0; i<conteudo.length; i++) {
        const linhatabla = conteudo[i];
      //  const obj = parteDificil(headers,linhatabla)
      let obj = {};
      listaDeObjeto.push(obj);

      for(let j=0; j<headers.length; j++){
        let titulo = headers [j];
        let coluna = linhatabla[j];
        
        obj[titulo] = coluna;
    }
 
    }
    return listaDeObjeto
   
}



module.exports = {
    quebraLinhas,
    separaColunas,
    separaConteudo,
    parteDificil,
}