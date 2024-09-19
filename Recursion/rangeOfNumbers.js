console.log("Range of numbers");

function rangeofnumbers(startnum, endnum){
    if(endnum < startnum){
        return [];
    }else{
        const numbers = rangeofnumbers(startnum , endnum - 1 );
        numbers.push(endnum)
        return numbers;
    }
}

console.log(rangeofnumbers(1,5));



