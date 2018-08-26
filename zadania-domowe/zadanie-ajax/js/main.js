//definicja funkcji ajax
function ajax(method, url) {
//    1. utworzenie nowej instancji XMLHttpRequest()
    let httpReq = new XMLHttpRequest();
    
//    2. otwarcie polaczenia
    httpReq.open(method, url);
    
//    onreadystatechange - wykonuje sie za kazdym razem, kiedy zmienia sie readyState
    
//    3. wywolanie petli sprawdzajacej zmiane readyState
    httpReq.onreadystatechange = function() {
        // jesli status polaczenia zostal zmieniony -> httpReq.readyState
        // 0: połączenie nie nawiązane,
        // 1: połączenie nawiązane,
        // 2: żądanie odebrane,
        // 3: przetwarzanie,
        // 4: dane zwrócone i gotowe do użycia.
        
//        4. Sprawdzenie readyState
        if(httpReq.readyState == 4) {
            
//          5.  sprawdzenie statusu HTTP
            if(httpReq.status == 200) {
                
//                6. Przypisanie danych do zmiennej
                let returnData = httpReq.responseText;
                
//                7. wykonanie funkcji na danych z wczesniejszego kroku
                httpReq.onsuccess(returnData);
                
//                8. zamkniecie polaczenia
                httpReq = null;
            }
        }
    }
    
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
//        console.log(response);
//        console.log(jsonObj.userId);
        
        let paragraf1 = document.createElement('p');
        let paragraf2 = document.createElement('p');
        let paragraf3 = document.createElement('p');
        
        paragraf1.innerHTML = jsonObj.userId;
        paragraf2.innerHTML = jsonObj.userName;
        paragraf3.innerHTML = jsonObj.userURL;
        
        document.body.appendChild(paragraf1);
        document.body.appendChild(paragraf2);
        document.body.appendChild(paragraf3);
        
    }
    
//    9. wyslanie żądania
    httpReq.send();
}


//wywołanie funkcji z parametrami

function pobierzDane() {
        ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" );  
    }


document.getElementById('pobierzDane').addEventListener('click', pobierzDane);



    

