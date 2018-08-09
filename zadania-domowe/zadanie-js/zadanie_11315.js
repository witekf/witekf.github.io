function sortChar(inputText) {
    
//    let arrayText = [];
//    let sortedArrayText = [];
    if(inputText.length<=0) {
        return 'Nieprawidłowy parametr'
    }
    
    arrayText = inputText.split('');
    sortedArrayText = arrayText.sort();    
    outputText = sortedArrayText.join('');
    return outputText;
}


console.log(sortChar('Akasdemia108'));