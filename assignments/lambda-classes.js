// CODE here for your Lambda Classes

//Helper Log, logs and returns.
const log = phrase => {
  console.log(phrase);
  return phrase;
};

//
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }

  speak() {
    return log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attr) {
    super(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    return log(`Today we are learning about ${subject}`);
  }

  grade(student, subject) {
    let score = Math.floor(Math.random() * 100);
    student.grade = (student.grade + score) / 2;
    return log(`${student.name} receives a ${score} on ${subject}`);
  }
}

class ProjectManagers extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(channel) {
    return log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }

  debugsCode(student, subject) {
    return log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

class Student extends Person {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    this.grade = attr.grade;
    this.currentStudent = true;
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => log(subject));
  }

  PRAssignment(subject) {
    return log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    return log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    this.currentStudent = this.grade < 70;
    return this.currentStudent
      ? log(`${this.name} fails to graduate. Keep Studying.`)
      : log(`${this.name} graduates! Way to go!`);
  }
}

const student = new Student({
  name: 'William',
  age: 24,
  location: 'Texas',
  previousBackground: '7 years',
  className: 'WEB23',
  favSubjects: 'JavaScript',
  grade: 0,
});

const projectManager = new ProjectManagers({
  name: 'Mikaela',
});

let subjects = ['JavaScript', 'CSS', 'HTML'];

while (student.currentStudent) {
  let subject = subjects[Math.floor(Math.random() * subjects.length)];
  student.PRAssignment(subject);
  projectManager.grade(student, subject);
  student.graduate();
}
