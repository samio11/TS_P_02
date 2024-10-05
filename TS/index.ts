{
    //

    const greetMyFriends = (x: string[]):string=>{
        let msg = `Welcome ${x.map((x1:string)=>x1)}`;
        return msg;
    }

    const email : string = 'samiohasan6@gmail.com';
    const age: number = 22;
    const isEmployed: boolean = true;
    const myFriends : string[] = ['samio','asra','sumaiya','Nishat'];
    const ageName : [number,string] = [23,'Samio'];
    console.log(ageName[1])
    
    console.log(greetMyFriends(myFriends))
    //
}