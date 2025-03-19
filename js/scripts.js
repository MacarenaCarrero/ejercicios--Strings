// 1 Camila está revisando nombres en una lista. Si un nombre tiene más de 6 caracteres, debe marcarlo como "Nombre largo". Si tiene 6 o menos, lo marcará como "Nombre corto". Crea una función que reciba un nombre y determine su clasificación.

const namesCamila = names => {
  if (names.length > 6) {
    console.log(`Es un nombre largo.`);
  } else {
    console.log('Es un nombre corto');
  }
};
namesCamila('Effy');
namesCamila('Macarena');

// 2 Bego está escribiendo un email, pero quiere asegurarse de que el texto termina en un punto. Crea una función que reciba una frase y determine si acaba con "." ("Formato correcto") o no ("Falta el punto final").

const dotBegoña = phrase => {
  if (phrase.endsWith('.')) {
    console.log('Formato correcto.');
  } else {
    console.log('Falta el punto final.');
  }
};
dotBegoña('Hola');
dotBegoña('Hola.');

// 3 Sabrina está verificando contraseñas. Si la contraseña tiene más de 8 caracteres y empieza con un número, será válida. Si no cumple estas condiciones, será inválida. Crea una función que reciba una contraseña y determine si es segura.

const passwordSabrina = password => {
  const numbers = '0123456789';
  if (password.length > 8 && numbers.includes(password.charAt(0))) {
    console.log('Contraseña valida');
  } else {
    console.log('Contraseña inválida');
  }
};
passwordSabrina('3macarena');
passwordSabrina('maca');

// 4 Macarena está revisando la gramática de un texto. Si la primera letra de la frase está en mayúscula y la frase termina con un punto, es correcta. Si no, está mal escrita. Crea una función que reciba una frase y determine si cumple ambas reglas.

const textMacarena = phrase => {
  const upperCase = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  if (upperCase.includes(phrase.charAt(0)) && phrase.endsWith('.')) {
    console.log('Esta correcta');
  } else {
    console.log('No esta correcta');
  }
};
textMacarena('macarena');
textMacarena('Macarena.');

// 5 Abby encontró un mensaje pintado en la pared con dos palabras. Si ambas palabras tienen la misma cantidad de letras, lo tomará como una pista. Si no, lo ignorará. Crea una función que reciba dos palabras y determine si el mensaje es importante.

const playAbby = (word1, word2) => {
  if (word1.length === word2.length) {
    console.log('Es una pista');
  } else {
    console.log('No es una pista');
  }
};
playAbby('maca', 'effy');
playAbby('maca', 'alfito');
