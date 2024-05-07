{
    // {2. Create a base class called Shape with a method calculateArea that returns the area of the shape. Extend this class to create subclasses for specific shapes like Rectangle and Circle. Implement the calculateArea method in esch subclass and test it with different dimensions.}

    // ------------------------------------------

    abstract class Shape {
        abstract calculateArea(): number;
    }

    class Rectangle extends Shape {
        constructor(private height: number, private width: number){
            super();
        }
        calculateArea(): number {
            return (this.height*this.width);
        }
    }

    const rectangle = new Rectangle(5, 10);
    console.log(rectangle);
    console.log(rectangle.calculateArea());


    class Circle extends Shape {
        constructor(private redius: number){
            super();
        }
        calculateArea(): number {
            return (Math.PI * this.redius * this.redius);
        }
    }

    const circle = new Circle(5);
    console.log(circle);
    console.log(circle.calculateArea());

    // 
}