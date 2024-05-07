{
    // class and object

    // class
    interface Car {
        brand: string;
        model: string;
        year: number;
        isElectric: boolean;
        startEngine(): string;
        stopEngine(): void;
    }

    class Car {
        brand: string;
        model: string;
        year: number;
        isElectric: boolean;

        constructor(brand: string,
            model: string,
            year: number,
            isElectric: boolean,){
                this.brand = brand;
                this.model = model;
                this.year = year;
                this.isElectric = isElectric;
            }
        startEngine(): string{
            return (`${this.brand} is started!`)
        }
        stopEngine(): void{
            console.log(`engine stoped!`)
        }
    }


// instance
    const myCar = new Car( "Tesla", "A1234", 2020, true);

    console.log(myCar);
    // 
}