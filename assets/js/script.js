let one;
let two;
let compareValueOne = 1;
let compareValueTwo = 2;

//** this is my original spin function. but i thnk theres is a better way to spin the image. i also want to add it to my roll function */
function spin() {
  document.getElementById('img').className = 'spinImg'



}

// here is where i create a consst to i can remove what the spin function does and then be able to do it again.

const snake = document.getElementById('img');


function removeSpinClass() {
  snake.classList.remove('spinImg');
  //  these are for the future die
  //  snake1.classList.remove('spinImg');
  //  snake2.classList.remove('spinImg');


}

snake.addEventListener('animationend', removeSpinClass);

//

// this is the first rollDie fucntion , this gets a random number between 1-6 and switches the die image acordingly 

function rollDie() {
  const firstNumber = Math.floor(Math.random() * 6) + 1;
  const secondNumber = Math.floor(Math.random() * 6) + 1;
  const thirdNumber = Math.floor(Math.random() * 6) + 1;



  const firstDie = "assets/images/d" + firstNumber + ".png";
  const secondDie = "assets/images/d" + secondNumber + ".png";
  const thirdDie = "assets/images/d" + thirdNumber + ".png";

  document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
  document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
  document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);

  console.log(firstNumber);
  console.log(secondNumber);
  console.log(thirdNumber);
  console.log("first roll");

}

// same as above but for palyer 2.
function rollDieTwo() {

  const fourthNumber = Math.floor(Math.random() * 6) + 1;
  const fifthNumber = Math.floor(Math.random() * 6) + 1;
  const sixthNumber = Math.floor(Math.random() * 6) + 1;



  const fourthDie = "assets/images/d" + fourthNumber + ".png";
  const fifthDie = "assets/images/d" + fifthNumber + ".png";
  const sixthDie = "assets/images/d" + sixthNumber + ".png";

  document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
  document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
  document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);

  console.log(fourthNumber);
  console.log(fifthNumber);
  console.log(sixthNumber);
  console.log("second roll");


}


// i just added the the functions together here.

function rollBoth() {
  const firstNumber = Math.floor(Math.random() * 6) + 1;
  const secondNumber = Math.floor(Math.random() * 6) + 1;
  const thirdNumber = Math.floor(Math.random() * 6) + 1;
  const fourthNumber = Math.floor(Math.random() * 6) + 1;
  const fifthNumber = Math.floor(Math.random() * 6) + 1;
  const sixthNumber = Math.floor(Math.random() * 6) + 1;


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

  console.log(firstNumber);
  console.log(secondNumber);
  console.log(thirdNumber);
  console.log(fourthNumber);
  console.log(fifthNumber);
  console.log(sixthNumber);
  console.log("free YSL");

}

// the sound is delayed  here, this is a mp3 file for the clicking sound , i want to replace this zith a dice roll sound.
function play() {
  var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
  audio.play();
}


//  help


function p1Roll(){
  const firstNumber = Math.floor(Math.random() * 6) + 1;
  const secondNumber = Math.floor(Math.random() * 6) + 1;
  const thirdNumber = Math.floor(Math.random() * 6) + 1;

  const myRollOne = [firstNumber, secondNumber, thirdNumber];
 
  
 


  
      if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {

    const rollOneValue = myRollOne;
    const compareValueOne = 0;
    console.log("first conditon "+compareValueOne);


  } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
   
    const compareValueOne = 100;
    console.log("second conditon "+compareValueOne);

  } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
    
    const rollOneValue = myRollOne[0];
    
    const compareValueOne = rollOneValue;
    console.log("third conditon "+compareValueOne);


   } else if (myRollOne[0] === myRollOne[1]){ 

      const rollOneValue = myRollOne;
      
      const compareValueOne = myRollOne[2];
      console.log("fourht conditon "+compareValueOne);
      
    } else if ((myRollOne[1] === myRollOne[2])) {
      const rollOneValue = myRollOne;
      const compareValueOne = myRollOne[0];
      console.log("fifth conditon "+compareValueOne);
    
    } else if ((myRollOne[0] === myRollOne[2])){
      const rollOneValue = myRollOne;
      const compareValueOne = myRollOne[1];
      console.log("sixth conditon "+compareValueOne);

      
    } else {
     
      const compareValueOne = 999;
      console.log("seventh conditon "+compareValueOne);
      
 

  }
  
}

function p2Roll(){

  const fourthNumber = Math.floor(Math.random() * 6) + 1;
  const fifthNumber = Math.floor(Math.random() * 6) + 1;
  const sixthNumber = Math.floor(Math.random() * 6) + 1;

  

  const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];


  if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
    (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
    (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
   
    const rollTwoValue = myRollTwo;
    
    const compareValueTwo = 0;
    
    console.log("first conditon "+compareValueTwo);



   


  } else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
    (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
    (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
    
    const compareValueTwo = 100;
    console.log("second conditon "+compareValueTwo);


  } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
    
    const rollTwoValue = myRollTwo[0];
    const compareValueTwo = myRollTwo[0];
    console.log("third conditon "+compareValueTwo);

  }else if (myRollTwo[0] === myRollTwo[1]){ 

    const rollTwoValue = myRollTwo;
    const compareValueTwo = myRollTwo[2];
    console.log("fourth conditon "+compareValueTwo);
   
    
  } else if ((myRollTwo[1] === myRollTwo[2])) {
    const rollTwoValue = myRollTwo;
    const compareValueTwo = myRollTwo[0];
    console.log("fifth conditon "+compareValueTwo);
   
  
  } else if ((myRollTwo[0] === myRollTwo[2])){
    const rollTwoValue = myRollTwo;
    const compareValueTwo = myRollTwo[1];
    console.log("sicth conditon "+compareValueTwo);
    

    
  } else {
    const compareValueTwo = 999;
    console.log("second conditon "+compareValueTwo);

   
}

}




function kompare(){

// let compareValueOne,compareValueTwo;
  
    const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
  
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
   console.log(compareValueOne)
    
   
  
  
    
        if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {
  
      const rollOneValue = myRollOne;
      compareValueOne = 0;
      console.log("first conditon "+compareValueOne);
  
  
    } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
     
      compareValueOne = 100;
      console.log("second conditon "+compareValueOne);
  
    } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
      
      const rollOneValue = myRollOne[0];
      
      compareValueOne = rollOneValue;
      console.log("third conditon "+compareValueOne);
  
  
     } else if (myRollOne[0] === myRollOne[1]){ 
  
        const rollOneValue = myRollOne;
        
        compareValueOne = myRollOne[2];
        console.log("fourth conditon "+compareValueOne);
        
      } else if ((myRollOne[1] === myRollOne[2])) {
        const rollOneValue = myRollOne;
        compareValueOne = myRollOne[0];
        console.log("fifth conditon "+compareValueOne);
      
      } else if ((myRollOne[0] === myRollOne[2])){
        const rollOneValue = myRollOne;
        compareValueOne = myRollOne[1];
        console.log("sixth conditon "+compareValueOne);
  
        
      } else {
       
        compareValueOne = 999;
        console.log("seventh conditon "+compareValueOne);
        
   
  
    }
    
  



    const fourthNumber = Math.floor(Math.random() * 6) + 1;
    const fifthNumber = Math.floor(Math.random() * 6) + 1;
    const sixthNumber = Math.floor(Math.random() * 6) + 1;
  
    
  
    const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
  
  
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




  // if (compareValueOne < compareValueTwo){
  //   console.log("one < two")
  // }else{
  //   console.log("one > two ")
  //   console.log(compareValueOne)
  // }
}




// function getRandomNumber(){
// return Math.floor(Math.random()*6)+1;
// }
// one = getRandomNumber();
// two = getRandomNumber();

// function compare ( numberOne, numberTwo) {
// return numberOne === numberTwo ;
// }
// console.log (one, two, compare(one, two));
