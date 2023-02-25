class School {
  constructor(name,numberOfStudents) {
    this._name = name;
    this._level = '';
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
    if (typeof this._numberOfStudents === 'number') {
      return this._numberOfStudents = number
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts() {
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`;
  }

  static pickSubstituteTeachers(substitudeTeacher) {
    let substitudeTeachers = [];
    const randomIndex = Math.floor(Math.random()* substitudeTeacher.length);
    return substitudeTeachers[randomIndex]
  }
}

class Primary extends School {
  constructor(name,numberOfStudents, pickupPolicy) {
    super(name,numberOfStudents);
    this._level = 'primary';
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents)
  }
}

class High extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
    this._sportsTeams = [];
  }
}


const goethe = new School('Goetheschule','primary', '250')
console.log(goethe.name)
console.log(goethe.numberOfStudents)
console.log(goethe.numberOfStudents = 25)
