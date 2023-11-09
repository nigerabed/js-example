
let signup = document.querySelector("#signup");

signup.addEventListener("submit", submitHandle );


function submitHandle(event){
    // to prevent form sumit and reload
    event.preventDefault();
     
    let arrayData = Array.from(event.target);

    console.log(arrayData);

    for(let i=0; i<arrayData.length; i++){

        if(arrayData[i].name == "fullname"){
            let nameSpan = document.querySelector("#name");
             
            if( arrayData[i].value ==""){
                nameSpan.style.display="block";
            }else
            {
                nameSpan.style.display="none";
            }     
        } 

        if(arrayData[i].name == "mobile"){
            let nameSpan = document.querySelector("#mobile");
            
            let mobileInput = arrayData[i].value + '';

            if(  mobileInput.length !=8 ){
                nameSpan.style.display="block";
            }else
            {
                nameSpan.style.display="none";
            }     
        } 
    }
    

}