//Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param, valueToFind) {

  for (let i = 0; i < param.length; i++) {
    
    if (param[i] === valueToFind) {
      return {
        found: true,
        position: i
      };
    }
  }
  return {
    found: false,
  };
}


console.log(finderName(nameFinder, 'Tony')); // { found: true, position: 2 }
console.log(finderName(nameFinder, 'Bruce')); // { found: true, position: 7 }
console.log(finderName(nameFinder, 'Thanos')); // { found: false}

/*function finderName(array, element) {
  if (array.includes(element)) {
      return `${true}, posicion: ${array.indexOf(element)}`
  } else {
      return false;
  }
}

console.log(finderName(nameFinder, "Steve")) // true, posición 1

  function finderName(array, element) {
    for (let i = 0; i < array.length; i++) {
        console.log(element);
        console.log(array[i]);
        if (element === array[i]) {
            return `${true}, posicion: ${i}`
        }
    }
    return false;
  }

  console.log(finderName(nameFinder, "Steve")) // true, posición 1*/
