{
    const gessType = (x:unknown)=>{
        if(typeof x === 'string')
        {
            return 'String';
        }
        else if(typeof x === 'number')
        {
            return 'Number';
        }
        else if(typeof x === 'boolean') return 'Boolean';
        else{
            return 'Unknown';
        }
    }
    console.log(gessType('Samio'));
}