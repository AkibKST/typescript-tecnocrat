// Reference Type --> Object

const user: {
    readonly company: string;  // type --> literal type
    firstName:string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
} = {
    company: "Programing Hero",
    firstName: "Mezbaul",
    lastName: "Abedin",
    isMarried: true,
}

// user.company = 'PH' // because its a read only property