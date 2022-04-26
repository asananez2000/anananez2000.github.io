function main()
{

}

/*1. Modifica el siguiente elemento para mostrar 
la posición del mouse en el documento: */

document.addEventListener('mousemove', event => {
    let mousePos = document.getElementById('mousePosition')
    mousePos.textContent = `Posición del mouse: ${event.clientX} - ${event.clientY}`
})

/*2. Al dar click al siguiente botón, obtén el nombre y apellido 
de las siguientes cajas de texto, y agrega, después del botón,
 un elemento que tenga el nombre completo. */

let submitCount = true

function getFormvalue()
{
    event.preventDefault() // hacer que en cada submit no se haga reload
    
    //Crear o actualizar la informacion que se va a agregar
    let inputs = document.getElementById("form1").getElementsByTagName("input")
    fullName = inputs[0].value + " " + inputs[1].value
    
    //Evaluar que sea la primera vez que se le da submit
    if(submitCount)
    {
        //Se crea el elemento p y se coloca al final del form
        let p_tag = document.createElement("p")
        p_tag.setAttribute("id", "fullname")
        let form = document.getElementById("form1")
        form.appendChild(p_tag)
        submitCount = false // se indica que ya ocurrio el primer submit

    }
    
    // se llena el p_tag con el nombre completo
    document.getElementById("fullname").textContent = fullName
     
} 

/* 3. Agrega el código para agregar una fila, 
o una columna, a la siguiente tabla al dar click 
al botón correspondiente.*/

rowCount = 2
columnCount = 2

function insertRow()
{
    //Crear fila
    let row = document.createElement("tr")
    rowCount++ //actualizar contador de filas
    
    //Determinar arreglo con las columnas actuales
    let currentColumns = document.getElementById("sampleTable").getElementsByTagName("tr")[0].getElementsByTagName("td")

    // Iterar el mismo numero de veces que columnas (en cada iteracion se le agrega a la fila su valor de la columna correspondiente)
    for(let i=0; i<=currentColumns.length-1; i++)
    {
        let element = document.createElement("td") //crear elemento
        element.textContent = "Row " + rowCount + " column " + (i+1) //ecribir contenido
        row.appendChild(element) // agregarle el elemento a la fila

    }

    //Agregar la fila a la tabla
    document.getElementById("sampleTable").appendChild(row)

}

function insertColumn()
{
    //Obtener arrglo con cada una de las filas de la tabla
    let rowsArray = document.getElementById("sampleTable").getElementsByTagName("tr")
    console.log(rowsArray)
    
    columnCount++ //Actualizar contador de columnas

    //Iterar sobre cada fila
    for(let i=0; i<rowsArray.length; i++)
    {
        let element = document.createElement("td") //Crear elemento de tabla
        element.textContent = "Row " + (i+1) + " column " + columnCount // escribir texto adecuado del elemento
        rowsArray[i].appendChild(element) // agregar el elemento a la fila
    }
}


/* 4. Incluye dos cajas de input, para solicitar 
al usuario la posición de la fila y columna de la siguiente tabla, 
y otra para solicitar un texto. Al apretar el botón, 
actualiza el contenido de esa tabla en la posición que solicitaste, 
con la cadena de texto que solicitaste.*/

function changeContent()
{
    //Obtener info ingresada en los inputs
    let inputs = document.getElementById("form2").getElementsByTagName("input")
    rowNum = inputs[0].value
    columnNum = inputs[1].value
    newContent = inputs[2].value

    //Obtener lista con cada una de las filas
    let rowsArray = document.getElementById("myTable").getElementsByTagName("tr")

    //Evaluar si el rowNum y columnNum ingresado existe en la tabla, y acceder a el
    if((1 <= rowNum && rowNum <= 3) && (1 <= columnNum && columnNum <= 3))
    {
        let currentRow = rowsArray[rowNum-1] //obtener fila a modificar
        let element = currentRow.getElementsByTagName("td")[columnNum-1] //obtener elemento (columna dentro de la fila) a modificar
        element.textContent = newContent // modificar el contenido
    }
}


/*5. Agrega el código para quitar o 
agregar elementos a la lista de opciones. 
Los colores pueden ser aleatorios.*/

function addColor()
{
    //Crear arreglo con los colores seleccionables 
    let colorArray = ["Red", "Green", "White", "Black", "Blue", "Purple", "Magenta", "Orange", "Yellow"]

    let option = document.createElement("option") //Crear un nuevo tag "Option"
    option.textContent = colorArray[Math.floor(Math.random()*colorArray.length)] //seleccionar el color de forma aleatoria
    document.getElementById("colorSelect").appendChild(option) //Agregar elemento 
}

function removeColor()
{
    //Obtener arreglo de todas las opciones existentes
    let optionArray = document.getElementById("colorSelect").getElementsByTagName("option")

    //Obtener y eliminar de forma aleatoria a un elemento/opcion (solo si aun quedan elementos)
    if(optionArray.length > 0)
        optionArray[Math.floor(Math.random()*optionArray.length)].remove()
}


/*6. Al poner el mouse encima de la siguiente imagen, 
genera dos números aleatorios entre 300 y 600 para el 
width y height de una imagen. Reemplaza la imagen de 
placeholder por otra similar con el tamaño random que 
generaste. El evento solo se dispara cuando pones el 
mouse en la imagen. */

//Funcion que se ejecuta cuando el mouse esta en la imagen
function imgHover()
{
    // Obtener dimensiones aleatorias
    let newWidth = Math.floor(Math.random()*(600-300) + 300)
    let newHeight = Math.floor(Math.random()*(600-300) + 300)

    //Obtener imagen actual 
    let img = document.getElementById("kittenImg")
    
    //Cambiar dimensiones e imagen
    img.width = newWidth
    img.height = newHeight
    img.src = "https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg?w=585&scale=down"

}

// Funcion que detecta que el mouse se fue de la imagen y resetea a los valores originales
function imgLeave()
{
    //Obtener imagen actual 
    let img = document.getElementById("kittenImg")
    
    //Cambiar dimensiones e imagen a el original
    img.width = 200
    img.height = 300
    img.src = "http://placekitten.com/200/300"

}