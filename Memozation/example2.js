const cache = {};

function factorial(n){

    if(n in cache){
        console.log("Cache Hit");
        return cache[n];
    }

    console.log("Calculating");

    let result;

    if(n === 0){
        result = 1;
    }else{
        result = n * factorial(n - 1);
    }

    cache[n] = result;

    return result;
}

console.log(factorial(5));
console.log(factorial(5));