{
    // Function
    const add = (n1: number = 1, n2: number = 3): number => n1 + n2
    console.log(add())
    console.log(add(12, 13))

    //Pass Total Array to add

    const addNumbers = (value:number[]):number =>{
        const total = value.reduce((current,sum)=>current+sum,0)
        return total
    }
    console.log(addNumbers([1,2,3,4,5]))







}