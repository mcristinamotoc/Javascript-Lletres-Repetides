//L’exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms amb diferents variants (fases).

/* FASE 1:
Crea un array amb el teu nom on cada posició correspongui a una lletra.
Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres. */

var nombre = ["C", "R", "I", "S", "T", "I", "N", "A"];
for (var i = 0; i < nombre.length; i++) {
    console.log(nombre[i]);
}

/* FASE 2:
Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’ */

var miNombre = "CRISTINA6";
var vocal = "AEIOU"
for (var i = 0; i < miNombre.length; i++) {
    if (miNombre[i].match(/[AEIOU]/gi)) {
        console.log("He trobat la VOCAL: " + miNombre[i])
    } else if (!isNaN(miNombre[i])) {
        console.log("Els noms de les persones no contenen el numero: " + miNombre[i])
    } else {
        console.log("He trobat la CONSONANTE: " + miNombre[i])
    }
}

/*FASE 3: Emmagatzemar en un objecte o una estructura Map (a la teva elecció) les lletres de l'array y el nombre de vegades que apareixen.*/

var miNombre = ['C', 'R', 'I', 'S', 'T', 'I', 'N', 'A']
var mapNombre = new Map();
for (var i = 0; i < miNombre.length; i++) {
    var letra = miNombre[i];
    if (!mapNombre[letra]) {
        mapNombre[letra] = 1;
    } else {
        mapNombre[letra]++;
    }
}
console.log(mapNombre);

/*FASE 4
Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem una que es dirà fullName.
*/
var nombre = ["C", "R", "I", "S", "T", "I", "N", "A"];
var apellido = ["M", "0", "T", "0", "C"];
var fullName = nombre.concat(" ", apellido);
console.log(fullName);