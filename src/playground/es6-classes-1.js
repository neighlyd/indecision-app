class Person {
    constructor(name, age=1) {
        this.name = name;
        this.age = age;
    }
    
    getGreeting() {
        return `Hi, my name is ${this.name}.`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major='') {
        super(name, age);
        this.major = major
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription()
        if (this.hasMajor()){
            description += ` their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation=''){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHomeLocation()){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}

const me = new Student('Dustin', 36, 'history');
const sebastien = new Student('Sébastien');

console.log(me.getDescription());
console.log(sebastien.getDescription());

const Natasha = new Traveler('Natasha', 33, 'Seattle');
const Madeline = new Traveler('Madeline');

console.log(Natasha.getGreeting());
console.log(Madeline.getGreeting());