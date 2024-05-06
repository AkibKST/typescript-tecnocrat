{
    // mapped types

    const arrOfNumbers: number[] = [1, 4, 5];

    // const arrOfString: string[] = ['1', '4', '5'];
    const arrOfString: string[] = arrOfNumbers.map((number)=> number.toString());

    console.log(arrOfString);


    type AreaNumber = {
        height: number;
        width: number;
    };

    // type AreaString = {
    //     height: string;
    //     width: string;
    // };
    // keyof AreaNumber => "height" | "width"

    // type AreaString = {
    //     [key in keyof AreaNumber]: string;
    // }

    type Height = AreaNumber["height"]  // look up type



    // mapped type with generics



    // T => {height: string; width: number}
    // key => T["width"]

    type AreaString<T> = {
        [key in keyof T]: T[key];
    };

    const area1: AreaString<{height: string; width: number}> = {
        height: "100",
        width: 50,
    };



    // 
}