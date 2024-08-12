//Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false) {
    foodSchedule[i].name = fruits.splice(0, 1)[0];
    foodSchedule[i].isVegan = true;
  }
}

/*Reemplazo con Fruta:

foodSchedule[i].name = fruits.splice(0, 1)[0];
fruits.splice(0, 1) elimina el primer elemento del array fruits y lo devuelve en un array.
[0] accede al primer (y único) elemento del array devuelto por splice().
Asigna esta fruta al name de la comida no vegana en foodSchedule.
Marcar Comida como Vegana:

foodSchedule[i].isVegan = true; marca la comida como vegana después del reemplazo
El uso de splice() modifica el array fruits original, eliminando elementos. Si necesitas conservar el array original de frutas, debes hacer una copia antes de usar splice().*/