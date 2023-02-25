class School {
  constructor(name, numberOfStudents) {
    this._name = name;
    this._level = "";
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(number) {
    if (typeof this._numberOfStudents === "number") {
      return (this._numberOfStudents = number);
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

  quickFacts() {
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`;
  }

  static pickSubstituteTeacher(substitudeTeacher) {
    // this.substitudeTeacher = [substitudeTeacher];
    const randomIndex = Math.floor(Math.random() * substitudeTeacher.length);
    return substitudeTeacher[randomIndex];
  }
  // TODO: fix this static method
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._level = "primary";
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
    this._level = "middle";
  }
}

class High extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
    this._level = "high";
    this._sportsTeams = [];
  }
  get sportsTeams() {
    return `Theas are teams of our school: [...${this._sportsTeams}]`;
  }
}

const lorrainHansbury = new Primary(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

console.log(lorrainHansbury.quickFacts());
// console.log(
//   lorrainHansbury.pickSubstituteTeacher([
//     "Jamal Crawford",
//     "Lou Williams",
//     "J. R. Smith",
//     "James Harden",
//     "Jason Terry",
//     "Manu Ginobli",
//   ])
// );

const alSmith = new High("Al Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

// TODO:
// Create a middle school class
// Add more properties to each class (averageTestScores, schoolOverview, etc.)
// Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.
