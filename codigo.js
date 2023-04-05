//exercício 1:
for(int i = 1; i <= 10; i++) {
  System.out.println(i);
}

//int i = 1;
while(i <= 10) {
    System.out.println(i);
    i++;
}

//exercício 2: 
function verificaParImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " é par.");
  } else {
    console.log(numero + " é ímpar.");
  }
}

//exercício 3:
function calculaMedia(lista) {
  var soma = 0;
  for (var i = 0; i < lista.length; i++) {
    soma += lista[i];
  }
  var media = soma / lista.length;
  return media;
}

//exercício 4: 
function encontraMaiorNumero(lista) {
  var maior = lista[0];
  for (var i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
  }
  return maior;
}

//exercício 5:
function contaOcorrencias(lista, elemento) {
  var contador = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      contador++;
    }
  }
  return contador;
}

//exercício 6:
function removeOcorrencias(lista, elemento) {
  for (var i = lista.length - 1; i >= 0; i--) {
    if (lista[i] === elemento) {
      lista.splice(i, 1);
    }
  }
  return lista;
}

//exercício 7:
function inverteString(str) {
  var novaStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    novaStr += str[i];
  }
  return novaStr;
}

//exercício 8:
function verificaPalindromo(palavra) {
  palavra = palavra.toLowerCase().replace(/[\W_]/g, "");
  if (palavra === palavraInvertida) {
    return true;
  } else {
    return false;
  }
}

//exercício 9:
function calcularFatorial(numero) {
  if (numero < 0) {
  if (numero === 0) {
    return 1;
  }
  var fatorial = 1;
  for (var i = 1; i <= numero; i++) {
  }
  return fatorial;
}

//exercício 10:
function gerarFibonacci(n) {
  var fibonacci = [0, 1];
    var proximo = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(proximo);
  }
  
  return fibonacci;
}