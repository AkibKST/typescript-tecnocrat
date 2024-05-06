{
    // oop -- inheritence

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    class Student extends Person{

        // constructor( public name: string, public age: number, public address: string){}
        constructor(name: string, age: number, address: string){
            super(name, age, address);
        }


        getSleep(numOfHours: number){
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }


    const student1 = new Student(" Y", 20, "Uganda");
    student1


    class Teacher extends Person{
        designation: string;

        constructor( name: string, age: number, address: string, designation: string){
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(numOfClass: number){
            console.log(`${this.name} will take ${numOfClass} classes`)
        }
    }

    const teacher1 = new Teacher("Mr. Y", 40, "Uganda", "professor");
    teacher1
    // 
}