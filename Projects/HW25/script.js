/*
1) Define Person class with such data (age, gender, weight, growth, education, country, city) and method .introduce() which will print all data into console
2) Create childclass Student with such data Person + (grade, institute, faculty) - include them into introduce()
3) Create another childclass Teacher with such data Person + (experience, subjects, isCurator) - include them into introduce()
4) Create instance of Person and few instances of Student, Teacher. print details of each into console
5*) Define Class entity which should contain list of students, curator + print details into console .introduce()
6*) what to do if we need a student entity which is released? new subclass?
7) read about composition*/

/*1) Define Person class with such data 
(age, gender, weight, growth, education, country, city)
 and method .introduce() which will print all data into console
*/
class Person {
    constructor(name, age, gender, weight, growth, education, country, city) {
        this.name = name || 'unkmown';
        this.age = age || 'unkmown';
        this.gender = gender || 'unknown';
        this.weight = weight || 'unkmown';
        this.growth = growth || 'unkmown';
        this.education = education || 'unkmown';
        this.country = country || 'unkmown';
        this.city = city || 'unkmown';
    }
    introduce() {
        console.log("Hi, my name is " + this.name + " I'm " + this.age + " I'm " + this.gender + " \n My weight and growth are " +
            this.weight + " " + this.growth + " \n I study at the " + this.education + " university, I'm from \n" +
            this.country + " and more specifically " + this.city);
    }
}
const Person1 = new Person('David', 12, 'male', 60, 158, '', 'USA', 'Washington');
Person1.introduce();

//2) Create childclass Student with such data Person + (grade, institute, faculty) - include them into introduce()
class Student extends Person {
    constructor(name, age, gender, weight, growth, country, city, grade, institute, faculty) {
        super(name, age, gender, weight, growth, country, city);
        this.grade = grade || 'unknown';
        this.institute = institute || 'unknown';
        this.faculty = faculty || 'unknown';
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} I'm ${this.age} I'm ${this.gender} My weight and growth are 
        ${this.weight} ${this.growth} I am student ${this.institute} on ${this.faculty},
         I'm from ${this.country} and more specifically ${this.city}`);
    }
}
const Person2 = new Student('Samanta', 22, 'famale', '', '', 'USA', 'Elpasso', '', 'California institute', 'sociplogy');
Person2.introduce();

//3) Create another childclass Teacher with such data Person + (experience, subjects, isCurator) - include them into introduce()
class Teacher extends Person {
    constructor(name, age, country, city, experience, subjects, faculty, isCurator) {
        super(name, age, country, city);
        this.experience = experience;
        this.subjects = subjects;
        this.faculty = faculty || 'unknown';
        this.isCurator = isCurator;
    }
    introduce() {
        if (this.isCurator === true) {
            console.log(`my name is ${this.name} I'm ${this.age} I'm ${this.gender} My weight and growth are 
            ${this.weight} ${this.growth} I am  ${this.experience} on ${this.subjects} ${this.faculty},
             I'm Curator `);
        } else {
            console.log(`my name is ${this.name} I'm ${this.age} I'm ${this.gender} My weight and growth are 
         I am  ${this.experience} on ${this.subjects}, ${this.faculty}
         I'm not curator `);
        }
    }
}

const Person3 = new Teacher('Vidrot', 44, 'Ukraine', 'Kyiv', 'teacher', 'Chemistry', 'Science', true);
Person3.introduce();

//4) Create instance of Person and few instances of Student, Teacher. print details of each into console
var Persons = [Person1, Person2, Person3];
for (let i = 0; i < Persons.length; i++) {
    console.log(Persons[i]);
}