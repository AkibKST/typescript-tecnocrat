{
    // 1. Create a function that takes an input parameter of type unknown. Inside the function, implement type guards to check if the input is of type string or number and perform different operations based on the type.


    // ----------------

    function processInputType(input: unknown){
        if(typeof input === "string"){
            console.log("bhai string paichi");
        }
        else if (typeof input === "number"){
            console.log("Bhai number paichi");
        }
        else{
            console.log("Please give me string or number type input");
        }
    }

    const test = processInputType(463);
    console.log(test);
    // 
}