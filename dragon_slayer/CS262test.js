

function gcd(a,b) {
    if (a == b){
        return a
    }
    else if (a > b){
        return(gcd(a-b,b))
    }
    else if (a < b ){
        return (gcd(a,b-a))
    }
}

console.log(gcd(24,8))

