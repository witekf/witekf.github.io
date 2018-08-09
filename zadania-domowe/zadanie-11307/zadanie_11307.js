function reverseText(inputText) {
  
if(inputText.length<=0) {
    return 'nieprawidłowy parametr'
}
    
    let arrayText = [];
    let arrayReversedText = [];
    let reversedText = '';

    for(let i=0; i<inputText.length; i++) {
        arrayText[i] = inputText.charAt(i);
    }
    
    arrayReversedText = arrayText.reverse();
    
    for(let j=0; j<inputText.length; j++) {
        reversedText = reversedText + arrayReversedText[j];
    }

    return reversedText;
}


console.log(reverseText(''));

