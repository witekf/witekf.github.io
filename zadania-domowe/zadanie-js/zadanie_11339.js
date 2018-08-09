function ciagF(n) {
    let ciagArray = [];
    
    ciagArray[0] = 1;
    ciagArray[1] = 1;
    
    if(n<1) {
        console.log(1);
    }
    
    for(let i=2; i<=n; i++) {
        ciagArray[i] = ciagArray[i-1] + ciagArray [i-2];
    }
    
    console.log(ciagArray[n]);
}


ciagF(7);