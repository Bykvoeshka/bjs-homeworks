//1-2 задание
class Weapon {
  constructor(
    weaponObj = {
      name: "undefined",
      attack: 0,
      durability: 0,
      range: 0
    }
  ) {
    this.name = weaponObj.name;
    this.attack = weaponObj.attack;
    this.durability = weaponObj.durability;
    this.range = weaponObj.range;
    this.startDurability = weaponObj.durability;
  }

  takeDamage(damage) {
    this.durability = this.durability - damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability >= this.startDurability * 0.3) {
      return this.attack;
    } else if (this.durability == 0) {
      return 0;
    } else {
      return this.attack / 2;
    }
  }

  isBroken() {
    return this.durability == 0;
  }
}

class Arm extends Weapon {
  constructor() {
    super();
    this.name = "Рука";
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
    this.startDurability = this.durability;
  }
}

class Bow extends Weapon {
  constructor() {
    super();
    this.name = "Лук";
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
    this.startDurability = this.durability;
  }
}

class Sword extends Weapon {
  constructor() {
    super();
    this.name = "Меч";
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
    this.startDurability = this.durability;
  }
}

class Knife extends Weapon {
  constructor() {
    super();
    this.name = "Нож";
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
    this.startDurability = this.durability;
  }
}

class Staff extends Weapon {
  constructor() {
    super();
    this.name = "Посох";
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
    this.startDurability = this.durability;
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = "Длинный лук";
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = "Секира";
    this.attack = 27;
    this.durability = 800;
    this.startDurability = this.durability;
  }
}

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = "Посох Бури";
    this.attack = 10;
    this.range = 3;
  }
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const longBow = new LongBow();
const axe = new Axe();
const stormStaff = new StormStaff();

knife.takeDamage(200);
console.log(knife.durability);
console.log(knife.getDamage());
console.log(knife.isBroken());

console.log(stormStaff.name);
stormStaff.takeDamage(100);
console.log(stormStaff.durability);
console.log(stormStaff.getDamage());
console.log(stormStaff.isBroken());

//3 Задание
class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (grade > 5 || grade < 0 || typeof grade !== "number") {
      return `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются числа от 1 до 5`;
    } else {
      if (this.subjects[subject] !== undefined) {
        this.subjects[subject].push(grade);
      } else {
        this.subjects[subject] = [grade];
      }
      return this.subjects[subject].length;
    }
  }

  getAverageBySubject(subject) {
    let gradeSum = 0;
    let average = 0;
    if (this.subjects[subject] !== undefined) {
      for (let i = 0; i < this.subjects[subject].length; i++) {
        gradeSum += this.subjects[subject][i];
      }
      average = gradeSum / this.subjects[subject].length;
    }
    return average;
  }

  getTotalAverage() {
    if (this.subjects.length === 0) {
      return 0;
    }

    let summ = 0,
      length = 0;

    for (let subj in this.subjects) {
      for (let i in this.subjects[subj]) {
        summ += this.subjects[subj][i];
        length++;
      }
    }

    return summ / length;
    return average;
  }

  getGradesBySubject(subject) {
    return this.subjects[subject] || [];
  }

  getGrades() {
    return this.subjects;
  }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());
console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade('отлично!', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'geometry'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra')); 
console.log(log.getAverageBySubject('math'));

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); 
