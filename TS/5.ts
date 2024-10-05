{
    const msg = (age:number):string =>{
        const result = age>18 ? 'Adult' : 'Child';
        return `You are ${result}`;
    }

    console.log(msg(19)); 

    const person : {name:string; email:string | null} = {
        name: 'John Doe',
        email: 'samio@gmail.com'
    }

    console.log(person?.email ?? 'No Email Set')



}