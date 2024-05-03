{

// spread operator
// rest operator
// destructuring

// Learn spread operator
const bros1: string[] = ['Mir', 'firoz', 'Mizan'];
const bros2: string[] = ['Tanmoy', 'Nahid', 'Rahat'];

bros1.push(...bros2)

const mentors1 = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
}

const mentors2 = {
    prisma: 'Firoz',
    next: 'Tanmoy',
    cloud: 'Nahid'
}

const mentorList = {
    ...mentors1,
    ...mentors2
}


// Learn rest operator
const greetFriends = ( ...friends: string[]) =>{
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`)
    friends.forEach((friend: string) => console.log(`Hi ${friend}`))
}

greetFriends('Abul', 'Kabul', 'Babul')


}