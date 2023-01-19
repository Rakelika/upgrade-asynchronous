// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch('https://api.agify.io?name=michael')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.

// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io/?name=';
const input$$ = document.querySelector('input');
const button$$ = document.querySelector('button');

const eliminarParrafo= (elemento) => {
    elemento.remove()
}

const consultInput  = () => {
  const valueInput = input$$.value;
    fetch(`${baseUrl}${valueInput}`)
      .then(response => response.json())
      .then(data => { 
        console.log(data);

    const newParrafo$$ = document.createElement('p')
    const newBoton$$ = document.createElement('button')
    newBoton$$.innerText = 'X'
   
    const porcentajeApi = data.country[0].probability
    const nacionalidadApi = data.country[0].country_id

    newParrafo$$.innerText = `El nombre ${valueInput} tiene un ${porcentajeApi} porciento de ser de ${nacionalidadApi}  `

    newParrafo$$.appendChild(newBoton$$)
    document.body.appendChild(newParrafo$$)
    
    newBoton$$.addEventListener('click', ()=> eliminarParrafo(newParrafo$$))

    })}

  button$$.addEventListener('click', consultInput);







