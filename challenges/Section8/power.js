function power(num,pow){
    if (pow === 0) return 1;
    return num * power(num,pow-1)
}

console.log(power(2,12))
console.log(Math.pow(2,12))