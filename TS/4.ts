{
    // Type Alias | union (|) | Intersection ($)
    type User = {
        id: number;
        name: string;
        email: string;
        password: string;
        gender: 'Male' | 'Female';
    };

    const person1:User = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
        gender: 'Male'
    }
    const person2:User = {
        id: 2,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        password: 'password456',
        gender: 'Female'
    }

    const totalPerson = {...person1,...person2}
    console.log(totalPerson)

    //Intersection
    type Frontend = {
        skills: string[],
        desg1: 'Frontend Dev.'
    }
    type Backend = {
         skills: string[],
        desg2: 'Backend Dev.'
    }

    type FullStack = Frontend & Backend;
    const fullStackDeveloper: FullStack = {
        skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
        desg1: 'Frontend Dev.',
        desg2: 'Backend Dev.'
    }
}