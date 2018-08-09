function bubbleSort(tableToSort) {
 
 let len = tableToSort.length;
    
 if(len<2) {
   return;
 }

  let tableSorted = tableToSort;
  let temp;

   for(let i=0; i<len-1; i++) {
     for(let j=0; j<len-1-i; j++) {
       if(tableSorted[j] > tableSorted[j+1]) {
                temp = tableSorted[j+1];
	 			tableSorted[j+1] = tableSorted[j];
	 			tableSorted[j] = temp;

       }
     }
   }

   return tableSorted;
}

 let wynik = bubbleSort([12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]);
//  [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]
console.log(wynik);