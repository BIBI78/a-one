let one;
let two;
let compareValueOne = 1;
let compareValueTwo = 2;


function spin() {
  document.getElementById('img').className = 'spinImg'
  document.getElementById('img2').className = 'spinImg'
  document.getElementById('img3').className = 'spinImg'


}




function removeSpinClass() {
  snake.classList.remove('spinImg');
}



function play() {
  var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
  audio.play();
}











function rollSpinKompare(){
  
 
  document.getElementById('d1').className = 'spinImg'
  document.getElementById('d2').className = 'spinImg'
  document.getElementById('d3').className = 'spinImg'
  document.getElementById('d4').className = 'spinImg'
  document.getElementById('d5').className = 'spinImg'
  document.getElementById('d6').className = 'spinImg'


const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');


function removeSpinClass() {
 
  d1.classList.remove('spinImg');
  d2.classList.remove('spinImg');
  d3.classList.remove('spinImg');
  d4.classList.remove('spinImg');
  d5.classList.remove('spinImg');
  d6.classList.remove('spinImg');
   

}


d1.addEventListener('animationend', removeSpinClass);
d2.addEventListener('animationend', removeSpinClass);
d3.addEventListener('animationend', removeSpinClass);
d4.addEventListener('animationend', removeSpinClass);
d5.addEventListener('animationend', removeSpinClass);
d6.addEventListener('animationend', removeSpinClass);


  const firstNumber = Math.floor(Math.random() * 6) + 1;
  const secondNumber = Math.floor(Math.random() * 6) + 1;
  const thirdNumber = Math.floor(Math.random() * 6) + 1;
  const fourthNumber = Math.floor(Math.random() * 6) + 1;
  const fifthNumber = Math.floor(Math.random() * 6) + 1;
  const sixthNumber = Math.floor(Math.random() * 6) + 1;

  const myRollOne = [firstNumber, secondNumber, thirdNumber];
  const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
  




  
    const firstDie = "assets/images/d" + firstNumber + ".png";
    const secondDie = "assets/images/d" + secondNumber + ".png";
    const thirdDie = "assets/images/d" + thirdNumber + ".png";
  
    const fourthDie = "assets/images/d" + fourthNumber + ".png";
    const fifthDie = "assets/images/d" + fifthNumber + ".png";
    const sixthDie = "assets/images/d" + sixthNumber + ".png";
  
    document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);
    document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
    document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
    document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);

    document.getElementById('d1').setAttribute("src", firstDie);
    document.getElementById('d2').setAttribute("src", secondDie);
    document.getElementById('d3').setAttribute("src", thirdDie);
    document.getElementById('d4').setAttribute("src", fourthDie);
    document.getElementById('d5').setAttribute("src", fifthDie);
    document.getElementById('d6').setAttribute("src", sixthDie);

    if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {

    const rollOneValue = myRollOne;
    compareValueOne = 0;
    console.log("I. automatic lose// first condition "+compareValueOne);


  } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
   
    compareValueOne = 100;
    console.log("I. automatic win // second conditon "+compareValueOne);

  } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
    
    const rollOneValue = myRollOne[0];
    
    compareValueOne = rollOneValue;
    console.log("I.tripples //third conditon "+compareValueOne);


   } else if (myRollOne[0] === myRollOne[1]){ 

      const rollOneValue = myRollOne;
      
      compareValueOne = myRollOne[2];
      console.log("I. snake eyes//fourth conditon "+compareValueOne);
      
    } else if ((myRollOne[1] === myRollOne[2])) {
      const rollOneValue = myRollOne;
      compareValueOne = myRollOne[0];
      console.log("I. snake eyes//fifth conditon "+compareValueOne);
    
    } else if ((myRollOne[0] === myRollOne[2])){
      const rollOneValue = myRollOne;
      compareValueOne = myRollOne[1];
      console.log("I. snake eyes//sixth conditon "+compareValueOne);

      
    } else {
     /// palyer one should roll again , not rolling shit 
      compareValueOne = 999;
      console.log("I technially no roll.seventh conditon "+compareValueOne);
      
 

  }






  if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
  (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
  (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
 
  const rollTwoValue = myRollTwo;
  
  compareValueTwo = 0;
  
  console.log("first conditon "+compareValueTwo);



 


} else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
  (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
  (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
  
  compareValueTwo = 100;
  console.log("second conditon "+compareValueTwo);


} else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
  
  const rollTwoValue = myRollTwo[0];
  compareValueTwo = myRollTwo[0];
  console.log("third conditon "+compareValueTwo);

}else if (myRollTwo[0] === myRollTwo[1]){ 

  const rollTwoValue = myRollTwo;
  compareValueTwo = myRollTwo[2];
  console.log("fourth conditon "+compareValueTwo);
 
  
} else if ((myRollTwo[1] === myRollTwo[2])) {
  const rollTwoValue = myRollTwo;
  compareValueTwo = myRollTwo[0];
  console.log("fifth conditon "+compareValueTwo);
 

} else if ((myRollTwo[0] === myRollTwo[2])){
  const rollTwoValue = myRollTwo;
  compareValueTwo = myRollTwo[1];
  console.log("sicth conditon "+compareValueTwo);
  

  
} else {
  compareValueTwo = 999;
  console.log("seventh conditon "+compareValueTwo);

 
}


if (compareValueOne < compareValueTwo){
console.log("Player TWo Wins");

} else if(compareValueOne > compareValueTwo) {
console.log("Player one Wins");

}else if(compareValueOne ===100)  {
console.log("automatic win player 1");
} else if (compareValueOne === 0){
console.log("automatic lose player 1");

} else if (compareValueTwo === 0){
console.log("automatic lose player 2")

}  else if (compareValueTwo === 100){
console.log("automatic lose player 2")
} else if (compareValueOne === compareValueTwo){
console.log("equals , so roll again ")

} else {
console.log("no idea what case this is")






}



  






   
}


const buttonn = document.getElementById("btn")

buttonn.addEventListener("click", function(){

  rollSpinKompareLoop()
} )






function p1RollAgain(){
  document.getElementById('d1').className = 'spinImg'
  document.getElementById('d2').className = 'spinImg'
  document.getElementById('d3').className = 'spinImg'

  const firstNumber = Math.floor(Math.random() * 6) + 1;
  const secondNumber = Math.floor(Math.random() * 6) + 1;
  const thirdNumber = Math.floor(Math.random() * 6) + 1;

  const myRollOne = [firstNumber, secondNumber, thirdNumber];

  function removeSpinClass() {
 
    d1.classList.remove('spinImg');
    d2.classList.remove('spinImg');
    d3.classList.remove('spinImg');
  }

  d1.addEventListener('animationend', removeSpinClass);
  d2.addEventListener('animationend', removeSpinClass);
  d3.addEventListener('animationend', removeSpinClass);


    const firstDie = "assets/images/d" + firstNumber + ".png";
    const secondDie = "assets/images/d" + secondNumber + ".png";
    const thirdDie = "assets/images/d" + thirdNumber + ".png";

    document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);

    document.getElementById('d1').setAttribute("src", firstDie);
    document.getElementById('d2').setAttribute("src", secondDie);
    document.getElementById('d3').setAttribute("src", thirdDie);

    if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {

    const rollOneValue = myRollOne;
    compareValueOne = 0;
    console.log("I. automatic lose// first condition "+compareValueOne);


  } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
   
    compareValueOne = 100;
    console.log("I. automatic win // second conditon "+compareValueOne);

  } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
    
    const rollOneValue = myRollOne[0];
    
    compareValueOne = rollOneValue;
    console.log("I.tripples //third conditon "+compareValueOne);


   } else if (myRollOne[0] === myRollOne[1]){ 

      const rollOneValue = myRollOne;
      
      compareValueOne = myRollOne[2];
      console.log("I. snake eyes//fourth conditon "+compareValueOne);
      
    } else if ((myRollOne[1] === myRollOne[2])) {
      const rollOneValue = myRollOne;
      compareValueOne = myRollOne[0];
      console.log("I. snake eyes//fifth conditon "+compareValueOne);
    
    } else if ((myRollOne[0] === myRollOne[2])){
      const rollOneValue = myRollOne;
      compareValueOne = myRollOne[1];
      console.log("I. snake eyes//sixth conditon "+compareValueOne);

      
    } else {
   
      // compareValueOne = 999;
      // console.log("I. seventh conditon, dont want "+compareValueOne);
      p1RollAgain()
      
    }
}


function p2RollAgain(){
  document.getElementById('d4').className = 'spinImg'
  document.getElementById('d5').className = 'spinImg'
  document.getElementById('d6').className = 'spinImg'

  const fourthNumber = Math.floor(Math.random() * 6) + 1;
  const fifthNumber = Math.floor(Math.random() * 6) + 1;
  const sixthNumber = Math.floor(Math.random() * 6) + 1;

  const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];

  function removeSpinClass() {
 
    d4.classList.remove('spinImg');
    d5.classList.remove('spinImg');
    d6.classList.remove('spinImg');
  }

  d4.addEventListener('animationend', removeSpinClass);
  d5.addEventListener('animationend', removeSpinClass);
  d6.addEventListener('animationend', removeSpinClass);


    const fourthDie = "assets/images/d" + fourthNumber + ".png";
    const fifthDie = "assets/images/d" + fifthNumber + ".png";
    const sixthDie = "assets/images/d" + sixthNumber + ".png";

    document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
    document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
    document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);

    document.getElementById('d4').setAttribute("src", fourthDie);
    document.getElementById('d5').setAttribute("src", fifthDie);
    document.getElementById('d6').setAttribute("src", sixthDie);


    if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
    (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
    (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
   
    const rollTwoValue = myRollTwo;
    
    compareValueTwo = 0;
    
    console.log("II first conditon "+compareValueTwo);



   


  } else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
    (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
    (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
    
    compareValueTwo = 100;
    console.log("II second conditon"+compareValueTwo);


  } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
    
    const rollTwoValue = myRollTwo[0];
    compareValueTwo = myRollTwo[0];
    console.log("II third conditon "+compareValueTwo);

  }else if (myRollTwo[0] === myRollTwo[1]){ 

    const rollTwoValue = myRollTwo;
    compareValueTwo = myRollTwo[2];
    console.log("II fourth conditon "+compareValueTwo);
   
    
  } else if ((myRollTwo[1] === myRollTwo[2])) {
    const rollTwoValue = myRollTwo;
    compareValueTwo = myRollTwo[0];
    console.log("II fifth conditon "+compareValueTwo);
   
  
  } else if ((myRollTwo[0] === myRollTwo[2])){
    const rollTwoValue = myRollTwo;
    compareValueTwo = myRollTwo[1];
    console.log("II sixth conditon "+compareValueTwo);
    

    
  } else {
    p2RollAgain()
    // compareValueTwo = 999;
    // console.log("seventh conditon "+compareValueTwo);
  

   
}

   
}




function rollSpinKompareLoop(){


  document.getElementById('d1').className = 'spinImg'
  document.getElementById('d2').className = 'spinImg'
  document.getElementById('d3').className = 'spinImg'
  document.getElementById('d4').className = 'spinImg'
  document.getElementById('d5').className = 'spinImg'
  document.getElementById('d6').className = 'spinImg'


const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');


function removeSpinClass() {
 
  d1.classList.remove('spinImg');
  d2.classList.remove('spinImg');
  d3.classList.remove('spinImg');
  d4.classList.remove('spinImg');
  d5.classList.remove('spinImg');
  d6.classList.remove('spinImg');
   

}


d1.addEventListener('animationend', removeSpinClass);
d2.addEventListener('animationend', removeSpinClass);
d3.addEventListener('animationend', removeSpinClass);
d4.addEventListener('animationend', removeSpinClass);
d5.addEventListener('animationend', removeSpinClass);
d6.addEventListener('animationend', removeSpinClass);


  const firstNumber = Math.floor(Math.random() * 6) + 1;
  const secondNumber = Math.floor(Math.random() * 6) + 1;
  const thirdNumber = Math.floor(Math.random() * 6) + 1;
  const fourthNumber = Math.floor(Math.random() * 6) + 1;
  const fifthNumber = Math.floor(Math.random() * 6) + 1;
  const sixthNumber = Math.floor(Math.random() * 6) + 1;

  const myRollOne = [firstNumber, secondNumber, thirdNumber];
  const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
  




  
    const firstDie = "assets/images/d" + firstNumber + ".png";
    const secondDie = "assets/images/d" + secondNumber + ".png";
    const thirdDie = "assets/images/d" + thirdNumber + ".png";
  
    const fourthDie = "assets/images/d" + fourthNumber + ".png";
    const fifthDie = "assets/images/d" + fifthNumber + ".png";
    const sixthDie = "assets/images/d" + sixthNumber + ".png";
  
    document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);
    document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
    document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
    document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);

    document.getElementById('d1').setAttribute("src", firstDie);
    document.getElementById('d2').setAttribute("src", secondDie);
    document.getElementById('d3').setAttribute("src", thirdDie);
    document.getElementById('d4').setAttribute("src", fourthDie);
    document.getElementById('d5').setAttribute("src", fifthDie);
    document.getElementById('d6').setAttribute("src", sixthDie);

    if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {

    const rollOneValue = myRollOne;
    compareValueOne = 0;
    console.log("I. automatic lose// first condition "+compareValueOne);


  } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
   
    compareValueOne = 100;
    console.log("I. automatic win // second conditon "+compareValueOne);

  } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
    
    const rollOneValue = myRollOne[0];
    
    compareValueOne = rollOneValue;
    console.log("I.tripples //third conditon "+compareValueOne);


   } else if (myRollOne[0] === myRollOne[1]){ 

      const rollOneValue = myRollOne;
      
      compareValueOne = myRollOne[2];
      console.log("I. snake eyes//fourth conditon "+compareValueOne);
      
    } else if ((myRollOne[1] === myRollOne[2])) {
      const rollOneValue = myRollOne;
      compareValueOne = myRollOne[0];
      console.log("I. snake eyes//fifth conditon "+compareValueOne);
    
    } else if ((myRollOne[0] === myRollOne[2])){
      const rollOneValue = myRollOne;
      compareValueOne = myRollOne[1];
      console.log("I. snake eyes//sixth conditon "+compareValueOne);

      
    } else {
    
      p1RollAgain()
      // console.log("I. I Should Not Be Seeing This")


  }

  if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
  (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
  (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
 
  const rollTwoValue = myRollTwo;
  
  compareValueTwo = 0;
  
  console.log("II first conditon "+compareValueTwo);



 


} else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
  (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
  (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
  
  compareValueTwo = 100;
  console.log("II second conditon "+compareValueTwo);


} else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
  
  const rollTwoValue = myRollTwo[0];
  compareValueTwo = myRollTwo[0];
  console.log("II third conditon "+compareValueTwo);

}else if (myRollTwo[0] === myRollTwo[1]){ 

  const rollTwoValue = myRollTwo;
  compareValueTwo = myRollTwo[2];
  console.log("II fourth conditon "+compareValueTwo);
 
  
} else if ((myRollTwo[1] === myRollTwo[2])) {
  const rollTwoValue = myRollTwo;
  compareValueTwo = myRollTwo[0];
  console.log("II fifth conditon "+compareValueTwo);
 

} else if ((myRollTwo[0] === myRollTwo[2])){
  const rollTwoValue = myRollTwo;
  compareValueTwo = myRollTwo[1];
  console.log("II sixth conditon "+compareValueTwo);
  

  
} else {
  p2RollAgain()
  // console.log("II. I Should Not Be Seeing This")

 
}


if (compareValueOne < compareValueTwo){
console.log("Player Two Wins");

} else if(compareValueOne > compareValueTwo) {
console.log("Player One Wins");

}else if(compareValueOne ===100)  {
console.log("automatic win player 1");
} else if (compareValueOne === 0){
console.log("automatic lose player 1");

} else if (compareValueTwo === 0){
console.log("automatic lose player 2")

}  else if (compareValueTwo === 100){
console.log("automatic lose player 2")
} else if (compareValueOne === compareValueTwo){
console.log("equals , so roll again ")

} else {
console.log("no idea what case this is")






}



  






   

}