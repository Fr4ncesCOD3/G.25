// classe User per la creazione di oggetti di tipo “utente”

class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    // metodo che restituisca il confronto con l'età di un'altra persona.
    compareAge(otherUser) {
        // > serve per confrontare le due età
        // ? serve per restituire il primo valore se la condizione è vera
        // : serve per restituire il secondo valore se la condizione è falsa
        return this.age > otherUser.age ? `${this.firstName} è più vecchio di ${otherUser.firstName}` : `${this.firstName} è più giovane di ${otherUser.firstName}`;
    }
}


const user1 = new User("Mario", "Rossi", 30, "Milano");
const user2 = new User("Luigi", "Bianchi", 25, "Roma");

console.log(user1);
console.log(user2);
console.log(user2.compareAge(user1));
console.log(user1.compareAge(user2));