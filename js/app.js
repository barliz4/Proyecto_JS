//alert ("Hola mundo!!!")

// Un ejemplo de variable   
//let nombre = "Ana";     //Se puede declarar variables con var y let
//alert(nombre);

    //let nombre = prompt ("Ingrese su nombre")       //Esta función que se usa para mostrar un cuadro de diálogo en el navegador que le permite al usuario ingresar información
    //alert ("Hola " + nombre)

    //nombre = prompt ("Ingrese el segundo nombre")    //Esta función que se usa para mostrar un cuadro de diálogo en el navegador que le permite al usuario ingresar información
    //alert ("Hola " + nombre)

// Imprimir mensajes en la consola
    //console.log("Mensaje de depuración");
    //console.error("Mensaje de error");
    //console.warn("Mensaje de advertencia");
            
    //-------------------------------------------------

    //function sumar(a, b) {        //Suma
    //    return a + b;
    //}
    
    //a = parseFloat(prompt("Ingrese número 1"))
   // b = parseFloat(prompt("Ingrese número 2"))

    
    //let resultado = sumar(a, b);            //El let identifica la variable tambíen se pueda usar var, y se llama una sola vez-
    //alert(resultado);  // Imprime 8

    //-------------------------------------------------

    function cambiarDom () {
        const titulo1 = document.getElementById ('titulo1');
        const parrafo1 = document.getElementById ('parrafo1');
        const titulo2 = document.getElementById ('titulo2');
        const parrafo2 = document.getElementById ('parrafo2');
        console.log(titulo1)
        console.log(parrafo1)

        titulo1.textContent = 'Nuevo Titulo'
        parrafo1.innerHTML = ' Nuevo texto del parrafo'
    }

    function otrafuncion () {
        const contenedor2 = document.getElementById ("contenedor2")
        contenedor2.innerHTML = "<h1 id='titulo3'>titulo de inherhtml</h1>  <p> parrafo deL COntenedor</p>"
 

    }
    





