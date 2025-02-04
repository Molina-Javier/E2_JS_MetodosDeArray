const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
// =================================================================

//a)  Las pizzas que tengan un id impar.

// const pizzasImpares = pizzas.filter((pizza) =>{
//   if(pizza.id % 2 !==0){
//     console.log(`Pizza con id ${pizza.id}, ${pizza.nombre}`)
//   }
 
// }); 
// console.log(pizzasImpares);

// ----------------------------------------------------------------

//  b) Responder: ¿Hay alguna pizza que valga menos de $600
 
// const menoresDe600 = pizzas.map((pizza) => {
//   if(pizza.precio < 600){
//     console.log(`Si estas buscando una pizza menor de $600 que sea la mas rica, Te recomendamos la ${pizza.nombre} que vale solo $${pizza.precio}`)
//   }
// })


// ------------------------------------------------------------------

// c) El nombre de cada pizza con su respectivo precio.

//  const NombreYPrecio = pizzas.map( (pizza) => {
//    return console.log(`La ${pizza.nombre} vale $ ${pizza.precio}`)
//  });


// ------------------------------------------------------------------

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

// const IngredientesDeCadaPizza = pizzas.forEach((pizza) => {
//   console.log(pizza.nombre);

// const ingredientesPizza = pizza.ingredientes.join(`, ` );

// console.log(`Ingredientes: ${ingredientesPizza}`);
// console.log(" ");
// })