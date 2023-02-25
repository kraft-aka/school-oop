class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
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
    return `${this._name} ${this._level} ${this._numberOfStudents}`;
  }

  static pickSubstituteTeachers() {
    return;
  }
}

class Primary extends School {
  constructor(name,level, numberOfStudents, pickupPolicy) {
    super(name,level,numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
}

class Middle extends School {
  constructor(name,level, numberOfStudents) {
    super(name, level, numberOfStudents)
  }
}

class High extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents);
    this._sportsTeams = [];
  }
}


const goethe = new School('Goetheschule','primary', '250')
console.log(goethe.name)
console.log(goethe.numberOfStudents)
console.log(goethe.numberOfStudents = 25)
