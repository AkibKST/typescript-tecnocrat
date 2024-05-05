{
    // conditional type

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false; // conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    // keyof Sheikh "bike" | "car" | "ship"

    // car ache kina / bike ache kina / ship ache kina / tracktor ache kina
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type hasPlane = CheckVehicle<"plane">;


    // 
}