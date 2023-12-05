class user {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  ageComparison(otherUser) {
    if (this.age === otherUser.age) {
      return `${this.firstName} is the same age of ${otherUser.firstName}`;
    } else if (this.age > otherUser.age) {
      return `${this.firstName} is older than ${otherUser.firstName}`;
    } else {
      return `${this.firstName} is younger than ${otherUser.firstName}`;
    }
  }
}

const user1 = new user("Manuel", "Del Giudice", 21, "Udine");
const user2 = new user("Giorgo", "Giorgi", 25, "Roma");

console.log(user1.ageComparison(user2));

const user3 = new user("Marco", "Rossi", 26, "Udine");
const user4 = new user("Luca", "Bianchi", 22, "Roma");

console.log(user3.ageComparison(user4));
