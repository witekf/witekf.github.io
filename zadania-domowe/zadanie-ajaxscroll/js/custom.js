function ajax(method, url) {
    let httpReq = new XMLHttpRequest();
    httpReq.open(method, url);
    httpReq.onreadystatechange = function() {
        if(httpReq.readyState == 4) {
           if(httpReq.status == 200) {
                let returnData = httpReq.responseText;
                httpReq.onsuccess(returnData);
                httpReq = null;
            }
        }
    }
    
    httpReq.onsuccess = function(response) {
        let jsonObj = JSON.parse(response);
       
        console.log(jsonObj[0].id);
        for(let i=0; i < jsonObj.length; i++) {
            let paragraf1 = document.createElement('p');
            let paragraf2 = document.createElement('p');
            let paragraf3 = document.createElement('p');
            
            paragraf1.innerHTML = jsonObj[i].id;
            paragraf2.innerHTML = jsonObj[i].name;
            paragraf3.innerHTML = jsonObj[i].website;
            
            document.body.appendChild(paragraf1);
            document.body.appendChild(paragraf2);
            document.body.appendChild(paragraf3);
        }
    }
    
    httpReq.send();
}


window.addEventListener('scroll', function() {
    let windowHeight = this.innerHeight;
//    console.log(windowHeight); 
    let scrolled = this.pageYOffset;
//    console.log(scrolled);
    let documentHeight = document.documentElement.offsetHeight;
//    console.log(documentHeight);
//    console.log(windowHeight+scrolled);
    
    if(windowHeight + scrolled == documentHeight) {
//        console.log('koniec strony');
     ajax( "GET", "http://jsonplaceholder.typicode.com/users" );   
    }
})