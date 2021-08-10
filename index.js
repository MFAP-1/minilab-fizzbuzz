// WEEK 1 - DAY 1: MINILAB | Fizz Buzz [MFAP-1]

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0){
        console.log("fizz buzz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}

/*
múltiplo de 3 => imprima a palavra 'fizz'.
múltiplo de 5 => imprima 'buzz'.
múltiplo de 3 e de 5 => imprima 'fizz buzz'.
*/