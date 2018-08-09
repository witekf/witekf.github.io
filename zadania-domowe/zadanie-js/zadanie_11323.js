function zlicz() {

    let tabela = [1,2,3,4,5,6];
    let add = 0;
    let multi = 1;
    
    for(let i=0; i<6; i++) {
        add = add + tabela[i];
        multi = multi * tabela[i];
        
    }
        
    
    console.log(add);
    console.log(multi);
}

zlicz();