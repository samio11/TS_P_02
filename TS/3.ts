//Spread/Destructure

const person1 = {
  name: "John",
  age: 30,
  hobbies: ["reading", "painting"]
};
const person2 = {
   email: 'samio@123.gmail.com',
   address: {
     street: "123 Main St",
     city: "New York",
     state: "NY"
   },
   friends: ['samio','asra','shanta']

};

const person = {
    ...person1,
   ...person2
}

// Destructuring
const {email:personEmail,address:{street},friends} = person;
console.log(personEmail,friends);

const [a,...b] = friends
console.log(a,b);

console.log(person)