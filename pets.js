class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

const pets = [];

function createPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  displayPetList();
}

function displayPetList() {
  const petListElement = document.getElementById("petList");
  petListElement.innerHTML = "";

  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "m-3 fw-semibold fs-5");
    listItem.textContent = `Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petListElement.appendChild(listItem);
  });
}
