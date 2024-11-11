//login.html 
// form per oggetti Pet con proprieta petName, ownerName, species, breed


//classe Pet con proprietà petName, ownerName, species, breed

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    // metodo che restituisca true se due animali condividono lo stesso padrone.
    sameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

console.log(Pet);


// istanze della classe Pet raccogliendo i dati dal form


const petForm = document.getElementById("petForm");
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

// Inizializza l'array per memorizzare i pet
const petList = [];

// Funzione per creare e mostrare la lista dei pet
// se non esiste già un elemento con id petList, crea uno
// pulisce il contenuto dell'elemento e aggiunge i pet uno per uno
// || crea un elemento con id petList
const displayPets = function() {
    const petListElement = document.getElementById("petList") || createPetList();
    petListElement.innerHTML = "";
    
    petList.forEach(pet => {
        const li = document.createElement("li");
        li.className = "list-group-item bg-dark text-white";
        li.textContent = `${pet.petName} - Owner: ${pet.ownerName} - Species: ${pet.species} - Breed: ${pet.breed}`;
        petListElement.appendChild(li);
    });
}

// Funzione per creare l'elemento lista se non esiste
const createPetList = function() {
    const container = document.querySelector('.container');
    const ul = document.createElement("ul");
    ul.id = "petList";
    ul.className = "list-group mt-3";
    container.appendChild(ul);
    return ul;
}

// Funzione per controllare se ci sono altri pet con lo stesso proprietario
const checkSameOwner = function(newPet) {
    petList.forEach(existingPet => {
        if (newPet !== existingPet && newPet.sameOwner(existingPet)) {
            console.log(`🐾 ${newPet.petName} e ${existingPet.petName} hanno lo stesso proprietario: ${newPet.ownerName}`);
        }
    });
}

// event listener del form
const handleSubmit = function(event) {
    event.preventDefault();
    const pet = new Pet(
        petName.value,
        ownerName.value,
        species.value,
        breed.value
    );
    petList.push(pet);
    checkSameOwner(pet);
    displayPets();
    petForm.reset();
}

petForm.addEventListener("submit", handleSubmit);




