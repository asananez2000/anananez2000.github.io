/* 1. Escribe una función que encuentre el primer carácter 
de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec' */

function repeat(string)
{
    for(let i=0; i < string.length; i++)
    {
        for(let j=0; j < string.length; j++)
        {
            // Si son iguales y no se esta comparando a si misma, se repite por lo que se va al siguiente caracter 
            if((string[i] === string[j]) && (i != j))
                break
            
            // Evaluar si no son iguales y además se llego al final del string -> entonces ese es el primero que se repite 
            else if(j === (string.length - 1))
                return string[i]
            
        }
    }

    return "Todos los caracteres se repiten"
}

/*Pruebas*/
console.log(repeat('abacddbec'))
console.log(repeat('abacddbece'))
console.log(repeat('abcdefghi'))


/* Escribe una función que implemente el algoritmo 
'bubble-sort' para ordenar una lista de números.*/

function intercambiar(array, indx1, indx2)
{
    let temp = array[indx1] // varible temporal que guarda el contenido de la posición 1 
	array[indx1] = array[indx2] // se remplaza el contenido del indx1 por el del indx 2 (en otras palabras se borra)
	array[indx2] = temp // se asigna el contenido guardado del indx1 en el indx 2
}

// Bubble Sort
function bubbleSort(array)
{
    // Se itera "i" n veces, (sinedo n = número de elementos en el vector)
    for(let i=0; i<array.length; i++)
    {
        // j comienza siendo el segundo elemento y comienza iterando sobre todos los elementos del vector 
        for(let j=1; j<array.length-i; j++) //con cada aumento de i queda ordenado un número al final del vector, por lo que no es necesario que j itere de nuevo sobre aquellos elementos (data.size()-i)
        {
            // Evaluar si el elemento anterior al de la posición en j es mayor que este
            if(array[j-1]>array[j])
                intercambiar(array, j-1, j) // se intercambian de lugar (los números pequeños quedan adelante y los grandes van flotando hacia atrás)
        }

    }

    // Regresar array ordenado
    return array
				
}

// Pruebas
console.log("BubbleSort 1: ", bubbleSort([5, 2, 4, 8, 1]))
console.log("BubbleSort 2: ",bubbleSort([1, 2, 3, 4, 5]))
console.log("BubbleSort 3: ",bubbleSort([5, 4, 3, 2, 1]))

/*Escribe una función que implemente el algoritmo 
'quick-sort' para ordenar una lista de números. */

function quickSort(array)
{
    return quickSortAux(array, 0, array.length-1)
}


// Función recursiva que realiza el quick sort
function quickSortAux(array, lo, hi)
{
    // Cuando el sub-arreglo es de 1 elemento lo=hi, se devuelve y detiene la recursión 
    if(lo>=hi)
        return array
    
    let posOrdenado=Partition(array, lo, hi) // se hace partition del arreglo y se devuelve el indx final del pivote

    if(lo < posOrdenado-1)
        return quickSortAux(array, lo, posOrdenado-1) // a traves de recursion de sigue con el partition del sub-arreglo izquierdo del index del pivote 
    if(posOrdenado < hi)
        return quickSortAux(array, posOrdenado+1, hi) // a traves de recursion de sigue con el partition del sub-arreglo derecho del index del pivote
}

// Función que realiza la partición
function Partition(array, lo, hi)
{
    let p=lo // pivote comienza teniendo el index del primer elemento
    let i=lo+1 // comienza teniendo el index del segundo elemento (se mueve hacia la der, nums menores o igual al pivote)
    let j=hi // comienza teniendo el index del último elemento (se mueve hacia la izq, nums mayores al pivote)

    while (true)
    {
        // Mientras el elemento en i sea menor o igual al pivote y no haya llegado al final
        while(array[i]<=array[p] && i<hi)
        {
            i++ // i avanza un lugar a la derecha
        }

        // Mientras el elemento en j sea mayor al pivote y no haya llegado al inicio 
        while(array[j]>array[p] && j>lo)
        {
            j-- // j avanza a la izquierda
        } 

        // Cuando la j sea menor o igual que el pivote; i sea mayor al pivote (o hayan llegado al extremo del arreglo)
        // Evaluar si el index de i es menor al de j
        if(i<j)
            intercambiar(array, i,j) // se intercambian los elementos en i y j

        // Si i=j se han evaluado todos los elementos
        else
        {
            intercambiar(array, p, j) // se pone al pivote en medio (del lado derecho el grupo i, del izq el grupo j)
            break; // se sale del ciclo
        }
    }
    return j; // se devulve el index de j (que es el que tomó el pivote al final)
}


// Pruebas
console.log("QuickSort 1: ", quickSort([5, 2, 4, 8, 1]))
console.log("QuickSort 2: ", quickSort([1, 2, 3, 4, 5]))
console.log("QuickSort 3: ", quickSort([5, 4, 3, 2, 1]))


/*Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo 
arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. 
No se permite usar la función integrada 'reverse'.*/

function copyReverse(array)
{
    let finalArray = []

    //Iterar de atras para adelante el arreglo original, i comienza siendo el indx del ultimo elemento 
    for(let i=array.length-1; i>=0; i--)
    {
        finalArray.push(array[i]) // se le agrega el elemento actual de la iteracion
    }

    // Se devuelve el nuevo arreglo con los numeros invertidos
    return finalArray
}

function originalReverse(array) 
{
    //Iterar de atras para adelante el arreglo original, i comienza siendo el indx del ultimo elemento
    let size = array.length-1

    // Se itera por el doble de elementos que hay en la lista original (ya que se pondran los digitos en reversa adelante de los que ya estan en el arreglo original)
    for(let i=0; i<=2*size; i+=2)
    {
        array.unshift(array[i]) // se añaden al principio los digitos del arreglo original en orden de principio a final (como se están agregando número el indice va en incrementos de 2)
        //*Nota: al utilizar funciones se modifica el objeto del arreglo que se pasa como argumento siendo este el original
    }

    // En este cilo se itera la mitad de los elementos del arreglo, borrando lo digitos originales y quedando solo la parte en reversa
    for(let i=size; i>=0; i--)
    {
        array.pop() // se elimina el ultimo elemento del arreglo
    }
}

//Pruebas
let testArray1 = [1, 2, 3, 4, 5]
let testArray2 = [7, 8, 9]
let testArray3 = [3, 4, 5, 6, 7]

console.log("1. Usando copy reverse: ", copyReverse(testArray1))
console.log("1. El arreglo original no se modifica: ", testArray1)

console.log("2. Usando copy reverse: ", copyReverse(testArray2))
console.log("2. El arreglo original no se modifica: ", testArray2)

console.log("3. Usando copy reverse: ", copyReverse(testArray3))
console.log("3. El arreglo original no se modifica: ", testArray3)



let testArray4 = [6, 7, 8, 9, 10]
let testArray5 = [1, 2, 3, 4]
let testArray6 = [9, 10, 11, 12]

console.log("Antes de aplicar la función originalReverse(): ", testArray4)
originalReverse(testArray4)
console.log("Despues de aplicar la función originalReverse():", testArray4)

console.log("Antes de aplicar la función originalReverse(): ", testArray5)
originalReverse(testArray5)
console.log("Despues de aplicar la función originalReverse():", testArray5)

console.log("Antes de aplicar la función originalReverse(): ", testArray6)
originalReverse(testArray6)
console.log("Despues de aplicar la función originalReverse():", testArray6)




/* Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, 
obtener el vector unitario, y multiplicar por un escalar. */

class Vector 
{
    //Constructor
    constructor(x, y, z)
    {
        this.x = x
        this.y = y
        this.z = z
    }

    //Métodos
    sum(vector)
    {
        let xSum = this.x + vector.x
        let ySum = this.y + vector.y
        let zSum = this.z + vector.z

        let sumVect = new Vector(xSum, ySum, zSum)
        return sumVect

    }

    subtraction(vector)
    {
        let xSub = this.x - vector.x
        let ySub = this.y - vector.y
        let zSub = this.z - vector.z

        let subVect = new Vector(xSub, ySub, zSub)
        return subVect
    }

    magnitude()
    {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2))
    }

    unitVector()
    {
        let xUnit = this.x / this.magnitude()
        let yUnit = this.y / this.magnitude()
        let zUnit = this.z / this.magnitude()

        let unitVect = new Vector(xUnit, yUnit, zUnit)
        return unitVect
    }

    scalarMult(scalar)
    {
        let xMult = this.x * scalar
        let yMult = this.y * scalar
        let zMult = this.z * scalar

        let multVect = new Vector(xMult, yMult, zMult)
        return multVect

    }

    dotProduct(vector)
    {
        let xMult = this.x * vector.x
        let yMult = this.y * vector.y
        let zMult = this.z * vector.z

        return xMult+yMult+zMult
    }
}

//Pruebas de la Clase
let myVector1 = new Vector(3, 4, 5)
let myVector2 = new Vector(9, 3, 1)
let myVector3 = new Vector(5, 7, 8)


let otherVector = new Vector(1, 0, -4)

console.log("Suma: ", myVector1.sum(otherVector))
console.log("Resta: ", myVector1.subtraction(otherVector))
console.log("Magnitude: ", myVector1.magnitude())
console.log("Unit Vector: ", myVector1.unitVector())
console.log("Multiplicacion Escalar: ", myVector1.scalarMult(5))

console.log("Suma: ", myVector2.sum(otherVector))
console.log("Resta: ", myVector2.subtraction(otherVector))
console.log("Magnitude: ", myVector2.magnitude())
console.log("Unit Vector: ", myVector2.unitVector())
console.log("Multiplicacion Escalar: ", myVector2.scalarMult(5))

console.log("Suma: ", myVector3.sum(otherVector))
console.log("Resta: ", myVector3.subtraction(otherVector))
console.log("Magnitude: ", myVector3.magnitude())
console.log("Unit Vector: ", myVector3.unitVector())
console.log("Multiplicacion Escalar: ", myVector3.scalarMult(5))


/*Escribe una función que calcule el máximo común divisor 
de dos números. */

function GCD(a, b) // -> GCD Greatest Common Divisor
{
    // Condiciones que finalizan la recursión
    if(a == 0)
        return b
    if(b == 0)
        return a

    // LLamada recursiva -> a se vuelve b, y b es el residuo de a/b
    return GCD(b, a%b)
}

//Pruebas
console.log("El maximo comun divisor de 270 y 192 es: ", GCD(270, 192))
console.log("El maximo comun divisor de 180 y 46 es: ", GCD(180, 46))
console.log("El maximo comun divisor de 36 y 124 es: ", GCD(36, 124))


/*Usando ojetos de tu clase 'Vector', crea una función que reciba dos vectores, y que indique si esos vectores son ortogonales o no. */
// Creación de función
function ortogonales(vect1, vect2)
{
    // Es ortogonal si el producto punto es igual a 0
    if(vect1.dotProduct(vect2) == 0)
        return "Son ortogonales"
    // No es ortogonal si el producto punto no es igual a 0
    else
        return "No son ortogonales"
}
// Pruebas
// Creación de vectores
let myVector4 = new Vector(1, 0, -2)
let otherVector1 = new Vector(1, 2, 3)
let myVector5 = new Vector(2, 1, 1)

// Pruebas de funcionalidad
console.log(ortogonales(myVector1, otherVector))
console.log(ortogonales(myVector4, otherVector1))
console.log(ortogonales(myVector4, myVector5))

/* Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 
'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'. */

// Creación de función
function hackerSpeak(cadena)
{
    // Inicialización de variables
    let traduccion = "" // guarda la nueva frase 
    let letra // guarda la letra actual
    let hackerAlphabet = { // diccionario con letras a cambiar para el hacker speak
        a: 4,
        e: 3,
        i: 1, 
        o: 0,
        s: 5, 
        z: 2,
        q: 9
    }
    // Iterar en cadena
    for (let i = 0; i < cadena.length; i++)
    {
        // Condición para determinar si la letra en la cadena se encuentra en el diccionario
        if (hackerAlphabet.hasOwnProperty(cadena[i]) == true)
        {
            // si se encuentra
            letra = cadena[i] // definir letra 
            traduccion = traduccion + hackerAlphabet[letra] // agregar traducción a la nueva frase
        }
        else
            // si no se encuentra
            traduccion = traduccion + cadena[i] // agregar letra a nueva frase
    }
    return traduccion
}
// Pruebas
console.log(hackerSpeak("caddicakleqiuo"))
console.log(hackerSpeak('Javascript es divertido'))
console.log(hackerSpeak('Esto es un videojuego'))

/* Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: 
factoriza(12) -> [1, 2, 3, 4, 6, 12]. */

// Creación de función
function factoriza(num)
{
    // Inicializar variable
    let factores = [num] // Array con número adentro (el número siempre va a ser factor de sí mismo)
    // Probar todos los números desde num hasta 1
    for (let i = num - 1; i > 0; i--)
    {
        // si la división del número con las pruebas no tiene residuo
        if(num%i == 0)
        {
            // Agregar factor
            factores.push(i)
        }
    }
    // Voltear factores para que aparezcan en orden de menor a mayor
    return factores.reverse()
}
//Pruebas
console.log(factoriza(12))
console.log(factoriza(30))
console.log(factoriza(27))

/* Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con 
los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0] */

// Creación de función
function quitaDuplicados(array)
{
    // Inicialización de variables 
    let arrayNoDuplicados = [array[0]] // Array con primer elemento, en el que se guardarán los elementos una sola vez (sin duplicados)
    let yaExiste = false // variable para verificar si ya existe el elemento
    // Recorrer el array
    for (let n = 0; n < array.length ; n++)
    {
        yaExiste = false //  valor inicial de falso (no existe)
        // iterar en el nuevo array con elementos no repetidos
        for (let m = 0; m < arrayNoDuplicados.length ; m++)
        {
            // Si el elemento está en los dos arrays (el original y el que no tiene duplicados)
            if (arrayNoDuplicados[m] == array[n])
            {
                // Indicar que ya existe
                yaExiste = true
            }
            // si se termina el array sin duplicados y no se identificó que el elemento ya existe
            if (yaExiste == false && m == (arrayNoDuplicados.length - 1))
            {
                // Agregar elemento al array sin duplicados
                arrayNoDuplicados.push(array[n])
            }
        }
    }
    return arrayNoDuplicados
}
// Pruebas
console.log(quitaDuplicados([5, 6, 7, 5, 7, 7, 8, 2, 6, 6]))
console.log(quitaDuplicados([3, 3, 3, 3, 3, 3, 3]))
console.log(quitaDuplicados([1, 2, 3, 4, 5]))



