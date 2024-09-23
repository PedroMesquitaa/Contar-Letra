function contarLetraA(texto) {
    const textoMinusculo = texto.toLowerCase();
    
    let contagem = 0;

    for (let i = 0; i < textoMinusculo.length; i++) {
      if (textoMinusculo[i] === 'a') {
        contagem++;
      }
    }
    
    if (contagem > 0) {
      console.log(`A letra "a" apareceu ${contagem} vezes na string.`);
    } else {
      console.log(`A letra "a" não foi encontrada na string.`);
    }
  }
  
 // Escreva aqui a string
  const texto = "Esta é uma string de exemplo para contar letras A e a.";
  contarLetraA(texto);
  