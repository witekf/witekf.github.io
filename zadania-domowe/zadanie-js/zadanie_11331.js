function zliczPow() {

    let tabela = [0,1,2,3,4,5];
    let pow = 0;
    
    for(let i=0; i<6; i++) {
        pow = pow + Math.pow(tabela[i],2);
    
    }
        
    
    console.log(pow);
}

zliczPow();