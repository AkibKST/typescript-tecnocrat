// destructuring

// object destructuring
const user = {
    id: 345,
    name: {
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName: "Persian",
    },
    contactNo: "01700000000",
    address: "Uganda",
};

const { contactNo, name: { middleName } } = user;



// array destructuring

const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoeba"];

// ross as a name of bestfriend and others in the array of rest
const [,, bestFriend, ...rest] = myFriends;