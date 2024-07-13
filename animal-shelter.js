const animalData = require("./animal-data.json");

class Animal {
  constructor(name, species, color, hunger = 50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }

  greet(greeting = "Hello") {
    console.log(`${greeting}, I'm ${this.name} the ${this.species}!`);
  }

  feed(food = "food") {
    this.hunger -= 20;
    console.log(`Yum! I love ${food}.`);
  }
}

class Cat extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, "cat", color, hunger);
  }
  greet() {
    super.greet("Meow");
  }
  feed() {
    super.feed("fish");
  }
}

class Dog extends Animal {
  constructor(name, color, hunger = 50) {
    super(name, "dog", color, hunger);
  }
  greet() {
    super.greet("Woof");
  }
  feed() {
    super.feed("kibble");
  }
}

class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }

  adopt(animal) {
    const animalIndex = this.animals.indexOf(animal);
    this.animals.splice(animalIndex, 1);
  }

  getAnimalsBySpecies(species) {
    // const animalList = this.animals.filter((animal) => {
    //   animal.species === species;
    // });
    // return animalList;

    return this.animals.filter((animal) => animal.species === species);
  }
}

const shelter = new AnimalShelter();
// for (const animal of animalData) {
//   if (animal.species === "cat") {
//     const newCat = new Cat();

//     newCat.name = animal.name;
//     newCat.color = animal.color;

//     if (animal.hunger) {
//       newCat.hunger = animal.hunger;
//     } else {
//       newCat.hunger = 50;
//     }

//     shelter.addAnimal(newCat);
//   } else if (animal.species === "dog") {
//     const newDog = new Dog();
//     newDog.name = animal.name;
//     newDog.color = animal.color;

//     if (animal.hunger) {
//       newDog.hunger = animal.hunger;
//     } else {
//       newDog.hunger = 50;
//     }

//     shelter.addAnimal(newDog);
//   } else {
//     const newAnimal = new Animal();
//     newAnimal.name = animal.name;
//     newAnimal.species = animal.species;
//     newAnimal.color = animal.color;

//     if (animal.hunger) {
//       newAnimal.hunger = animal.hunger;
//     } else {
//       newAnimal.hunger = 50;
//     }

//     shelter.addAnimal(newAnimal);
//   }

for (const a of animalData) {
  let animal;
  const hunger = a.hunger ? a.hunger : 50;

  if (a.species === "dog") {
    animal = new Dog(a.name, a.color, hunger);
  } else if (a.species === "cat") {
    animal = new Cat(a.name, a.color, hunger);
  } else {
    animal = new Animal(a.name, a.species, a.color, hunger);
  }

  shelter.addAnimal(animal);
}

const james = new Cat("James", "black");

const louis = new Dog("Louis", "red/white");

console.log(
  shelter.animals.forEach((animal) => {
    animal.greet();
    animal.feed();
  })
);
