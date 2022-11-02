// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
//  const objet = {
//       D: 1,
//       B: 2,
//       C: 3
//     };]
  //Escribe tu código aquí
  let res = Object.entries(objeto);
  return res
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //string = "adsjfdsfsfjsdjfhacabcsbajda"
  const reps = {};
  var text = string.split("")


  text.forEach(letra => {
    reps[letra] = (reps[letra] || 0) + 1;
    
  });
  return reps
  }
  



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 // var s = "soyHENRY";
  // var mayus = "";
  // var minus = "";
  // function comprobarMayus(s){
  //   return s === s.toUpperCase();
  // }

  // for (let i = 0; i < s.length; i++) {
  //   var letra = s[i];
  //   var mayuscula = comprobarMayus(letra)

  //   if(mayuscula){
  //     mayus += letra;
  //   }else {
  //     minus += letra
  //   }
  // }
  // return mayus + minus;
  var arr = [];
  for (let i in s) {
    if(s[i] === s[i].toUpperCase()){
      arr.push(s[i]);
    }
  }
  for (let i in s) {
    if(s[i] !== s[i].toUpperCase()){
      arr.push(s[i]);
    }
  }
  return arr.toString().replace(/,/g, "");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  console.log(str)
var array = str.split("").reverse().join("");

var array2 = array.split(" ").reverse().join(" ");
return array2 
} 
//console.log(asAmirror("The Henry Challenge is close!"));


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // var aux = numero; 
  // var n = 0
  // while (aux>0) {
  //   n = n + aux % 10;
  //   n = n * 10
  //   aux = Math.trunc(aux/10)
  // }
  // n = n/10

  // if (n === numero){
  //   return "Es capicua";
  // }else return "No es capicua";

  numero = numero.toString();
  if(numero.split("").reverse().join("") === numero) {return "Es capicua"}
  else {return "No es capicua"}

}
//console.log(capicua(2992));


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadena2 = ""
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== "a" && cadena[i] !== "c" &&  cadena[i] !== "b") {
        cadena2 += cadena[i]
    }
  }
  return cadena2
}
//.log(deleteAbc("bisarac"))


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  //const arr = ["You", "are", "beautiful", "looking",];
  var array = []
  console.log(arr);
  array.push(arr)
  array.sort((a,b) => {
    return a.length - b.length
  });
  console.log(array)
}
console.log(sortArray["You" ,"are", "beautiful", "looking"])

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var newArray = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
        if (arreglo1[i] === arreglo2[j]){
          newArray.push(arreglo1[i]);
        }
    }  
  }
    return newArray;
    
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
}

