{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGenerics = <T>(param: T): T[] => {
        return [param]
    }


    const res1 = createArray('Bangladesh');
    const resGenerics = createArrayWithGenerics<string>('Bangladesh');

    type User = { id: number; name: string };

    const resGenericObj = createArrayWithGenerics<User>({
        id: 222,
        name: "Mr. Pashan",
    })


    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    }


    const res10 = createArrayWithTuple<string, number>('Bangladesh', 222);
    const resTuple11 = createArrayWithTuple<string, {name: string}>('Bangladesh', {name:'Asia'});



    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course,
        }
    }

    const student1 = addCourseToStudent({name: 'Mr.X', email: 'x@gmail.com', devType: 'NLWD'}
    );

    const student2 = addCourseToStudent({name: 'Mr. Y', email: 'y@gmail.com', hasWatch: 'Apple Watch'});

    // 
}