// exercicio3.js

// 1) Par: 1 e "1"
console.log(1 == '1');  // true
console.log(1 === '1'); // false
// A comparação simples (==) retorna true pois o JavaScript converte a string '1' em número 1 antes de comparar.
// A comparação estrita (===) retorna false porque os tipos são diferentes (number vs string).

// 2) Par: 0 e false
console.log(0 == false);  // true
console.log(0 === false); // false
// == converte false para 0 e compara, resultado true.
// === compara tipo e valor, são diferentes (number vs boolean).

// 3) Par: null e undefined
console.log(null == undefined);  // true
console.log(null === undefined); // false
// == considera null e undefined iguais em valor, por convenção do JavaScript.
// === compara tipo, são diferentes tipos.


// 4) Par: " \t\r\n " e 0
console.log(" \t\r\n " == 0);  // true
console.log(" \t\r\n " === 0); // false
// == converte a string contendo apenas espaços e quebras de linha para número 0 antes de comparar.
// === compara tipo e valor, string vs number, resultado false.

// 5) Par: [] e false
console.log([] == false);  // true
console.log([] === false); // false
// == converte [] para string vazia "", que ao ser convertido para número vira 0, que é igual a false.
// === compara tipo e valor, array (object) vs boolean, resultado false.
