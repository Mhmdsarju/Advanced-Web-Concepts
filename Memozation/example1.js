const cache={};

function square(num){
    if(cache[num]){
        console.log("From Cache");
        return cache[num];
    }
    console.log("Calculating");
    let res=num*num;
    cache[num]=res;
    return res
}


console.log(square(5));
console.log(square(5))
