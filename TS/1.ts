{
    //NUmber Array
    const rolls: number[] = [22, 21, 23, 56, 88, 12, 1];
    console.log(rolls)
    //Number Array to --> Object
    const x = { ...rolls };
    x['3'] = 77;
    console.log(x);

    //Tuple (New Array)
    const ageEmail: [number, string] = [22, 'x@gmail.com']
    console.log(ageEmail)
    console.log(ageEmail[0])

    //Object
    const User: {
        //readonly company: string;
        company : 'XYZ Comp.'
        name: string;
        email?: string;
        age?: number
    } = {
        company: 'XYZ Comp.',
        name: 'John',
        email: 'john@gmail.com',
        age: 22
    }
    User['name'] = 'samio';
    // User.company = 'PH'
    console.log(User);


}