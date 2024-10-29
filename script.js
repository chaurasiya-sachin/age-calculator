let dateVal = document.querySelector("#dateValue");

let calculateBtn = document.querySelector('#submit');

let errorBox = document.querySelector('.error-message');

let greetMsgBox = document.querySelector('.message');



calculateBtn.addEventListener('click',()=>{
    errorBox.textContent="";
    document.querySelector('#img1').style.display='none';
    document.querySelector('#img2').style.display='none';
    document.querySelector('#img3').style.display='none';
    document.querySelector('#img4').style.display='none';
    document.querySelector('#img5').style.display='none';
    document.querySelector('#img6').style.display='none';
    document.querySelector('#img7').style.display='none';
    document.querySelector('#img8').style.display='none';
    
    let dob = new Date(dateVal.value);
    let currentDate = new Date();

    if(!dateVal.value){
        errorBox.textContent="Please Select the valid Date !!"
    }else{
    //calculate age
    let age = currentDate.getFullYear()- dob.getFullYear();
    let month = currentDate.getMonth()-dob.getMonth();
    let day = currentDate.getDate()-dob.getDate();

    if(month<0 || (month===0 && day<0)){
        age--;
    } 
    
    // display real values
    let resultBox = document.querySelector('.bottom');
   
   
    
    resultBox.style.display="flex";
     
    switch(true){
        case (age>=0 && age <=1):
            greetMsgBox.textContent="Welcome to the adventure, tiny miracle! You're pure joy!";
            document.querySelector('#img1').style.display='block';
            break;
        case(age<12):
            greetMsgBox.textContent="Hey, superstar! Your curiosity makes the world magical!";
            document.querySelector('#img2').style.display='block';
            break;
        case (age < 18):
            greetMsgBox.textContent = "Hello, trailblazer! The future is yours—make it epic!";
            document.querySelector('#img3').style.display='block';
            break;
        case (age < 30):
            greetMsgBox.textContent = "Cheers to you, dream chaser! Life is your canvas—create boldly!";
            document.querySelector('#img4').style.display='block';
            break;
        case (age < 40):
            greetMsgBox.textContent = "Hey, vibrant spirit! Your energy lights up every room!";
            document.querySelector('#img5').style.display='block';
            break;
        case (age < 60):
            greetMsgBox.textContent = "Look at you, shining star! Keep spreading your joy everywhere!";
            document.querySelector('#img6').style.display='block';
            break;
        case (age < 90):
            greetMsgBox.textContent = "Hello, sage! Your experiences are gems—share your brilliance!";
            document.querySelector('#img7').style.display='block';
            break;
        default: // This will handle age >= 80
            greetMsgBox.textContent = "You’re a beacon of wisdom! Your legacy inspires generations!";
            document.querySelector('#img8').style.display='block';
            break;
    }

    // display age on the screen
    document.querySelector('#Dyear').textContent=age;
    document.querySelector('#Dmonth').textContent=month;
    document.querySelector('#Dday').textContent=day;
}
 

})