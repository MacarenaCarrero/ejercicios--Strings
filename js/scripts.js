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

// 6 Camila quiere asegurarse de que un número de teléfono tiene el formato correcto. Debe tener exactamente 9 caracteres. Crea una función que reciba un número como string y determine si es válido o no.

const numberPhone = number => {
  if (number.length === 9) {
    console.log('Es un numero de teléfono');
  } else {
    console.log('No es un numero de teléfono');
  }
};
numberPhone('918756520');
numberPhone('1544');

// 7 Bego está eligiendo un dominio para su nueva web. Si la web termina en ".com", se usará para negocios. Si termina en ".org", será para una organización. Si no es ninguno de estos, el dominio no es válido. Crea una función que reciba un dominio y determine su clasificación.

const checkDomain = mail => {
  if (mail.endsWith('.com')) {
    console.log('Es un dominio para negocios.');
  } else if (mail.endsWith('.org')) {
    console.log('Es un dominio para una organización.');
  } else {
    console.log('No es un dominio válido.');
  }
};
checkDomain('macarena@mc.com');
checkDomain('macarena@mc.org');
checkDomain('macarena@mc.nm');

// 8 Sabrina está revisando una lista de palabras. Si una palabra contiene la letra "z", la marcará como especial. Si no, será una palabra común. Crea una función que reciba una palabra y determine su categoría.

const listWords = word => {
  if (word.includes('z')) {
    console.log('Es una palabra especial.');
  } else {
    console.log('Es una palabra común.');
  }
};
listWords('zara');
listWords('roma');

// 9 Macarena está clasificando documentos según su urgencia. Si un mensaje contiene la palabra "urgente" en cualquier parte, lo priorizará. Si no, será un mensaje normal. Crea una función que reciba un mensaje y determine su nivel de prioridad.

const urgentMessage = message => {
  if (message.includes('urgente')) {
    console.log('Es un mensaje urgente.');
  } else {
    console.log('Es un mensaje normal.');
  }
};
urgentMessage('Vamos a poner aquí algo');
urgentMessage('Este si es urgente ¡leeme plis!.');

// 10 Abby encontró una nota con un código en una casa abandonada. Si el código es un número par y tiene exactamente 4 dígitos, puede ser la combinación de una caja fuerte. Si es impar o tiene otra longitud, lo descartará. Crea una función que reciba un código y determine si Abby debe investigarlo.

const secretCode = code => {
  if (code % 2 === 0 && code.length === 4) {
    console.log('Investiga Abby, esto puede ser el código.');
  } else {
    console.log('Esto es un numero random.');
  }
};
secretCode('2000');
secretCode('0277');

// 11 Camila está revisando invitaciones para un evento. Si el nombre del invitado empieza con "A", "E", "I", "O" o "U", se le asignará una mesa especial. Si empieza con otra letra, se le asignará una mesa normal. Crea una función que reciba un nombre y determine su ubicación.

const checkInvitation = name => {
  const vowels = 'AEIOU';
  if (vowels.includes(name.charAt(0))) {
    console.log('¡Enhorabuena! estás sentado en una mesa especial.');
  } else {
    console.log('Vas a una mesa normalita.');
  }
};
checkInvitation('Macarena');
checkInvitation('Antoniaaa');

// 12 Bego está verificando si un texto contiene lenguaje ofensivo. Si un mensaje contiene la palabra "tonto" o "feo", se marcará como inapropiado. Si no, será aceptado. Crea una función que reciba un mensaje y determine su categoría.

const checkLanguage = message => {
  if (message.includes('tonto') || message.includes('feo')) {
    console.log('Es un mensaje inapropiado.');
  } else {
    console.log('Mensaje aceptado.');
  }
};
checkLanguage('Eres más feo que pegar a un padre.');
checkLanguage('Hola developers preciosos.');

// 13 Sabrina quiere imprimir etiquetas con iniciales. Crea una función que reciba un nombre y un apellido y devuelva sus iniciales en mayúsculas, separadas por un punto.

const printLabels = (names, surname) => {
  const firstLetterName = names.charAt(0).toUpperCase();
  const firstLetterSurname = surname.charAt(0).toUpperCase();
  console.log(firstLetterName + '.' + firstLetterSurname);
};
printLabels('macarena', 'carrero');

// 14 Macarena está diseñando una campaña publicitaria. Si el título del anuncio tiene más de 20 caracteres, lo reducirá. Si tiene 20 o menos, lo usará tal cual. Crea una función que reciba un título y determine si debe ajustarse.

const advertisingTitle = title => {
  if (title.length > 20) {
    console.log('Hay que reducir el título.');
  } else {
    console.log(title);
  }
};
advertisingTitle('Hola soy Macarena y me quedan muchos ejercicios.');
advertisingTitle('Este vale?'); // como no hay que reducir te devuelve el mensaje

// 15 Abby encontró una radio funcionando con interferencias. Si la señal incluye la palabra "ayuda" o "suministros", significa que alguien está pidiendo asistencia. Si no contiene estas palabras, lo ignorará. Crea una función que reciba un mensaje de radio y determine si Abby debe responder.

const helpMessage = message => {
  if (message.includes('ayuda') || message.includes('suministros')) {
    console.log('Están pidiendo ayuda.');
  } else {
    console.log('Pasa de este mensaje.');
  }
};
helpMessage('No necesito nada.');
helpMessage('Estoy cansada de hacer esto, necesito ayuda.');
helpMessage('Necesito suministros.');

// 16 Camila quiere asegurarse de que los nombres de usuario no contengan espacios. Si un nombre tiene espacios, será inválido. Si no tiene, será aceptado. Crea una función que reciba un nombre de usuario y determine su validez.

const noSpacesUserName = userName => {
  if (userName.includes(' ')) {
    console.log('Nombre de usuario inválido.');
  } else {
    console.log('Nombre de usuario aceptado.');
  }
};
noSpacesUserName('maquitauser');
noSpacesUserName('user macarena');

// 17 Bego está registrando nuevas cuentas de clientes. Si un correo electrónico contiene "@" y ".", será válido. Si no tiene alguno de estos elementos, será inválido. Crea una función que reciba un email y determine si es correcto.

const newCounts = email => {
  if (email.includes('@') && email.includes('.')) {
    console.log('Correo electrónico válido.');
  } else {
    console.log('Es un correo inválido.');
  }
};

newCounts('macarena@gmail.com');
newCounts('macarena@');

// 19  Macarena está validando números de identificación. Si un número tiene exactamente 8 caracteres y termina en una letra, será válido. Si no cumple estas condiciones, será inválido. Crea una función que reciba un número de identificación y determine si es correcto.

// const identificationNumbers = characters =>{
//   if (characters.length === 8 && )
// }

// 20 Abby encontró una combinación de caja fuerte que parece ser un número de 4 dígitos. Quiere probar combinaciones aleatorias hasta encontrar una que termine en 7. Crea una función que genere un número de 4 dígitos que termine en 7.
