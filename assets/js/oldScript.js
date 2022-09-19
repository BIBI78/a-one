// new js code for compare rolls 


// this is my attempt at comparing the the two rolls, IT DOES NOT WORK


  const firstNumber = Math.floor(Math.random() * 6) + 1;
  const secondNumber = Math.floor(Math.random() * 6) + 1;
  const thirdNumber = Math.floor(Math.random() * 6) + 1;


  const firstDie = "assets/images/d" + firstNumber + ".png";
  const secondDie = "assets/images/d" + secondNumber + ".png";
  const thirdDie = "assets/images/d" + thirdNumber + ".png";


  document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
  document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
  document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);







  const myRollOne = [firstNumber, secondNumber, thirdNumber];
  console.log("first roll = " + myRollOne);




  // LET ME SET CONDITONS FIRST
  if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {

    const rollOneValue = myRollOne;
    console.log("automatic lose " + rollOneValue);



    // i want to add like a STOP here and get out of the code


  } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
    (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
    (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
    console.log("automatic win")

  } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
    // console.log(" all the same")
    const rollOneValue = myRollOne[0];
    console.log("all the same " + rollOneValue + "s");

    // need more conditions here  XXY condidtion 551 ,332 etc


    // second roll starts here 
    // same code 

    const fourthNumber = Math.floor(Math.random()*6) + 1;
    const fifthNumber = Math.floor(Math.random()*6) + 1;
    const sixthNumber = Math.floor(Math.random()*6) + 1;

    const fourthDie =  "assets/images/d" + fourthNumber + ".png";
    const fifthDie =  "assets/images/d" + fifthNumber + ".png";
    const sixthDie =  "assets/images/d" + sixthNumber + ".png";

    document.getElementsByTagName('img')[3].setAttribute("src",fourthDie); 
    document.getElementsByTagName('img')[4].setAttribute("src",fifthDie); 
    document.getElementsByTagName('img')[5].setAttribute("src",sixthDie); 

    // why isnt this happenening ?
    const myRollTwo = [fourthNumber,fifthNumber,sixthNumber];
    console.log("second roll"+ myRollTwo);

    if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) && 
    (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3 )&& (myRollTwo[1] !== myRollTwo[2]) &&
    (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])){
      // console.log("automatic lose")
      const rollTwoValue = myRollTwo;
    console.log("automatic lose"+rollTwoValue);


    // SSTOP


                  } else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) && 
    (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6 )&& (myRollTwo[1] !== myRollTwo[2]) &&
    (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])){
      console.log("automatic win")

                  } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]){
    // console.log(" all the same")
    const rollTwoValue = myRollTwo[0];
    console.log("all the same "+ rollTwoValue +"s");








  }
}


















function compareRolls() {
    const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
  
    // console.log(firstNumber);
    // console.log(secondNumber);
    // console.log(thirdNumber);
    // console.log("first roll");
  
    const fourthNumber = Math.floor(Math.random() * 6) + 1;
    const fifthNumber = Math.floor(Math.random() * 6) + 1;
    const sixthNumber = Math.floor(Math.random() * 6) + 1;
  
    // console.log(fourthNumber);
    // console.log(fifthNumber);
    // console.log(sixthNumber);
    // console.log("second roll");
  
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
    console.log(myRollOne);
  
    const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
    console.log(myRollTwo);
  
  
    // should these be two seperate functions ??
  
  
    if (firstNumber === fourthNumber) {
      console.log("lets see the second numbers")
  
    } else if (secondNumber === fifthNumber) {
      console.log("lets see thrid roll")
    } else if (thirdNumber === sixthNumber) {
      console.log("roll again")
    } else {
      console.log("nothing is equal")
    }
  
  
  }
  
  
  function compareRollsTwo() {
    const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
    const fourthNumber = Math.floor(Math.random() * 6) + 1;
    const fifthNumber = Math.floor(Math.random() * 6) + 1;
    const sixthNumber = Math.floor(Math.random() * 6) + 1;
  
    // 
  
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
  
  
  
    // 
  
  
  
  
  
  
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
    console.log(myRollOne);
    // console.log(firstNumber);
    // console.log(secondNumber);
    // console.log(thirdNumber);
  
    const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
    // console.log(myRollTwo);
  
    // LET ME SET CONDITONS FIRST
    if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
      console.log(" all the same")
  
    } else if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {
      console.log("automatic lose")
  
    } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
      console.log("automatic win")
      // LET ME DO THE OPPOSITE 
  
  
  
  
      // } else if (myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3){
  
      //          if ( myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3){
  
  
      //           if (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) {
      //     console.log("automatic lose")
      //           }
      //         }
  
  
  
      // HOW DO I COMAPRE ROLL 1 and ROLL 2 ??
    }
  
  
  
  
  }
  
  
  
  
  
  
  
  
  
  // code is really long , so i want this code to first roll the first die , if its gets 123 , function stops 
  // function stops and player 1 automatic loser , if XXY the value is Y and then player 2 or the cpu  rolls, if  
  // if a combination of 456 then player one automaticlaly wins and the function stops.
  // so when i get XXX numbers the code goes to roll 2 , but not under any other condirtions 
  // also if the rolls dont look like , 123 , 456 , XXY , or XXX there should be a roll again 
  
  
  function compareRollsThree() {}



function playerTwoRoll() {


    const fourthNumber = Math.floor(Math.random() * 6) + 1;
    const fifthNumber = Math.floor(Math.random() * 6) + 1;
    const sixthNumber = Math.floor(Math.random() * 6) + 1;
  
    const fourthDie = "assets/images/d" + fourthNumber + ".png";
    const fifthDie = "assets/images/d" + fifthNumber + ".png";
    const sixthDie = "assets/images/d" + sixthNumber + ".png";
  
    document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
    document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
    document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);
  
    const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
    console.log("second roll = " + myRollTwo);
  
    if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
      (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
      (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
     
      const rollTwoValue = myRollTwo;
      console.log("automatic lose = " + rollTwoValue);
      const compareValueTwo = 0;
      console.log(compareValueTwo);
  
  
  
     
  
  
    } else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
      (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
      (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
      console.log("automatic win" + rollTwoValue)
      const compareValueTwo = 100;
      console.log(compareValueTwo);
  
    } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
      
      const rollTwoValue = myRollTwo[0];
      console.log("all the same " + rollTwoValue + "s");
      const compareValueTwo = myRollTwo[0];
      console.log(compareValueTwo);
  
    }else if (myRollTwo[0] === myRollTwo[1]){ 
  
      const rollTwoValue = myRollTwo;
      console.log("there are two values equal in this roll" + rollTwoValue);
      const compareValueTwo = myRollTwo[2];
      console.log(compareValueTwo);
      
    } else if ((myRollTwo[1] === myRollTwo[2])) {
      const rollTwoValue = myRollTwo;
      console.log("there are two values the same " + rollTwoValue);
      const compareValueTwo = myRollTwo[0];
      console.log(compareValueTwo);
    
    } else if ((myRollTwo[0] === myRollTwo[2])){
      const rollTwoValue = myRollTwo;
      console.log("there are  two values the same  " + rollTwoValue);
      const compareValueOne = myRollTwo[1];
      console.log(compareValueTwo);
  
      
    } else {
      console.log("roll again")
  
      // now i need a actuall compare function.
  
  
  }
  
  
  
  
  
  
    }
  
  
  
  
  function XXY() {
  
    const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
  
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
    console.log("first roll = " + myRollOne);
  
    if (myRollOne[0] === myRollOne[1]) {
  
      const rollOneValue = myRollOne;
      console.log("there are two values equal in this roll" + rollOneValue);
    } else if ((myRollOne[1] === myRollOne[2])) {
      const rollOneValue = myRollOne;
      console.log("you got " + rollOneValue);
    
    }
  
  }
  
  
  function playerOneRoll(){
    const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
  
  
    const firstDie = "assets/images/d" + firstNumber + ".png";
    const secondDie = "assets/images/d" + secondNumber + ".png";
    const thirdDie = "assets/images/d" + thirdNumber + ".png";
  
  
    document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);
  
  
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
    console.log("first roll = " + myRollOne);
    // const compareValueOne = 0;
   
  
  
    // 
    if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {
  
      const rollOneValue = myRollOne;
      console.log("automatic lose " + rollOneValue);
      const compareValueOne = 0;
      console.log("first conditon"+compareValueOne);
  
  
    } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
      console.log("automatic win")
      const compareValueOne = 100;
      console.log("second conditon"+compareValueOne);
  
    } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
      
      const rollOneValue = myRollOne[0];
      console.log("all the same " + rollOneValue + "s");
      const compareValueOne = rollOneValue;
      console.log("third conditon"+compareValueOne);
  
      // XXY
     } else if (myRollOne[0] === myRollOne[1]){ 
  
        const rollOneValue = myRollOne;
        console.log("there are two values equal in this roll" + rollOneValue);
        const compareValueOne = myRollOne[2];
        console.log("fourht conditon"+compareValueOne);
        
      } else if ((myRollOne[1] === myRollOne[2])) {
        const rollOneValue = myRollOne;
        console.log("there are two values the same " + rollOneValue);
        const compareValueOne = myRollOne[0];
        console.log("fifth conditon"+compareValueOne);
      
      } else if ((myRollOne[0] === myRollOne[2])){
        const rollOneValue = myRollOne;
        console.log("there are  two values the same  " + rollOneValue);
        const compareValueOne = myRollOne[1];
        console.log("sixth conditon"+compareValueOne);
  
        // anything else should say ROLL AGAIN
      } else {
        console.log("roll again")
        const compareValueOne = 999;
        console.log("seventh conditon"+compareValueOne);
        // now i need a actuall compare function.
   
  
    }
    
    }
  
  
  
  
  
  
  
  
  
  
  
    function compareForReal(){
      const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
  
  
    const firstDie = "assets/images/d" + firstNumber + ".png";
    const secondDie = "assets/images/d" + secondNumber + ".png";
    const thirdDie = "assets/images/d" + thirdNumber + ".png";
  
  
    document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);
  
  
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
    console.log("first roll = " + myRollOne);
   
    
    
    if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {
  
      const rollOneValue = myRollOne;
      console.log("automatic lose " + rollOneValue);
      const compareValueOne = 0;
      console.log(compareValueOne);
  
  
    } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
      console.log("automatic win")
      const compareValueOne = 100;
      console.log(compareValueOne);
  
    } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
      
      const rollOneValue = myRollOne[0];
      console.log("all the same " + rollOneValue + "s");
      const compareValueOne = rollOneValue;
      console.log(compareValueOne);
  
      // XXY
     } else if (myRollOne[0] === myRollOne[1]){ 
  
        const rollOneValue = myRollOne;
        console.log("there are two values equal in this roll" + rollOneValue);
        const compareValueOne = myRollOne[2];
        console.log(compareValueOne);
        
      } else if ((myRollOne[1] === myRollOne[2])) {
        const rollOneValue = myRollOne;
        console.log("there are two values the same " + rollOneValue);
        const compareValueOne = myRollOne[0];
        console.log(compareValueOne);
      
      } else if ((myRollOne[0] === myRollOne[2])){
        const rollOneValue = myRollOne;
        console.log("there are  two values the same  " + rollOneValue);
        const compareValueOne = myRollOne[1];
        console.log(compareValueOne);
  
      } else {
        console.log("roll again player 1")
        const compareValueOne = 999;
      console.log(compareValueOne);
  
        
        
  
    }
   
  
    //////////////////////////
    const fourthNumber = Math.floor(Math.random() * 6) + 1;
    const fifthNumber = Math.floor(Math.random() * 6) + 1;
    const sixthNumber = Math.floor(Math.random() * 6) + 1;
  
    const fourthDie = "assets/images/d" + fourthNumber + ".png";
    const fifthDie = "assets/images/d" + fifthNumber + ".png";
    const sixthDie = "assets/images/d" + sixthNumber + ".png";
  
    document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
    document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
    document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);
  
    const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
    console.log("second roll = " + myRollTwo);
    const compareValueTwo = 0;
  
    if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
      (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
      (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
     
      const rollTwoValue = myRollTwo;
      console.log("automatic lose = " + rollTwoValue);
      const compareValueTwo = 0;
      console.log(compareValueTwo);
  
  
  
     
  
  
    } else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
      (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
      (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
      console.log("automatic win" + rollTwoValue)
      const compareValueTwo = 100;
      console.log(compareValueTwo);
  
    } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
      
      const rollTwoValue = myRollTwo[0];
      console.log("all the same " + rollTwoValue + "s");
      const compareValueTwo = myRollTwo[0];
      console.log(compareValueTwo);
  
    }else if (myRollTwo[0] === myRollTwo[1]){ 
  
      const rollTwoValue = myRollTwo;
      console.log("there are two values equal in this roll" + rollTwoValue);
      const compareValueTwo = myRollTwo[2];
      console.log(compareValueTwo);
      
    } else if ((myRollTwo[1] === myRollTwo[2])) {
      const rollTwoValue = myRollTwo;
      console.log("there are two values the same " + rollTwoValue);
      const compareValueTwo = myRollTwo[0];
      console.log(compareValueTwo);
    
    } else if ((myRollTwo[0] === myRollTwo[2])){
      const rollTwoValue = myRollTwo;
      console.log("there are  two values the same  " + rollTwoValue);
      const compareValueTwo = myRollTwo[1];
      console.log(compareValueTwo);
  
      
    } else {
      console.log("roll again player 2")
  
      // now i need a actuall compare function.
  
  }
  /////
  
  if (compareValueOne === compareValueTwo){
    compareValueOne === compareValueTwo
    console.log("same roll , roll again")
  } else if (compareValueOne < compareValueTwo){
    console.log("P2 wins")
    compareValueOne = 11;
  
  } else if (compareValueOne > compareValueTwo){
    console.log("P1 wins")
    compareValueOne = 22;
  
  }
  
  }
      
  
  
  
     
  function compareAttempt6(){
    const firstNumber = Math.floor(Math.random() * 6) + 1;
    const secondNumber = Math.floor(Math.random() * 6) + 1;
    const thirdNumber = Math.floor(Math.random() * 6) + 1;
  
  
    const firstDie = "assets/images/d" + firstNumber + ".png";
    const secondDie = "assets/images/d" + secondNumber + ".png";
    const thirdDie = "assets/images/d" + thirdNumber + ".png";
  
  
    document.getElementsByTagName('img')[0].setAttribute("src", firstDie);
    document.getElementsByTagName('img')[1].setAttribute("src", secondDie);
    document.getElementsByTagName('img')[2].setAttribute("src", thirdDie);
  
  
    const myRollOne = [firstNumber, secondNumber, thirdNumber];
    
    // const compareValueOne = 0;
   
  
    if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])) {
  
      const rollOneValue = myRollOne;
      
      const compareValueOne = 0;
      console.log("first conditon"+compareValueOne);
  
  
    } else if ((myRollOne[0] === 4 || myRollOne[0] === 5 || myRollOne[0] === 6) && (myRollOne[0] !== myRollOne[1]) &&
      (myRollOne[1] === 4 || myRollOne[1] === 5 || myRollOne[1] === 6) && (myRollOne[1] !== myRollOne[2]) &&
      (myRollOne[2] === 4 || myRollOne[2] === 5 || myRollOne[2] === 6) && (myRollOne[2] !== myRollOne[0])) {
      
      const compareValueOne = 100;
      console.log("second conditon"+compareValueOne);
  
    } else if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]) {
      
      const rollOneValue = myRollOne[0];
     
      const compareValueOne = rollOneValue;
      console.log("third conditon"+compareValueOne);
  
      // XXY
     } else if (myRollOne[0] === myRollOne[1]){ 
  
        const rollOneValue = myRollOne;
        
        const compareValueOne = myRollOne[2];
        console.log("fourth conditon"+compareValueOne);
        
      } else if ((myRollOne[1] === myRollOne[2])) {
        const rollOneValue = myRollOne;
        
        const compareValueOne = myRollOne[0];
        console.log("fifth conditon"+compareValueOne);
      
      } else if ((myRollOne[0] === myRollOne[2])){
        const rollOneValue = myRollOne;
        const compareValueOne = myRollOne[1];
        console.log("sixth conditon"+compareValueOne);
  
        
      } else {
        
        const compareValueOne = 999;
        console.log("seventh conditon"+compareValueOne);
        
   
  
      }
  
  
    const fourthNumber = Math.floor(Math.random() * 6) + 1;
    const fifthNumber = Math.floor(Math.random() * 6) + 1;
    const sixthNumber = Math.floor(Math.random() * 6) + 1;
  
    const fourthDie = "assets/images/d" + fourthNumber + ".png";
    const fifthDie = "assets/images/d" + fifthNumber + ".png";
    const sixthDie = "assets/images/d" + sixthNumber + ".png";
  
    document.getElementsByTagName('img')[3].setAttribute("src", fourthDie);
    document.getElementsByTagName('img')[4].setAttribute("src", fifthDie);
    document.getElementsByTagName('img')[5].setAttribute("src", sixthDie);
  
    const myRollTwo = [fourthNumber, fifthNumber, sixthNumber];
    // const compareValueTwo = 0;
  
    if ((myRollTwo[0] === 1 || myRollTwo[0] === 2 || myRollTwo[0] === 3) && (myRollTwo[0] !== myRollTwo[1]) &&
      (myRollTwo[1] === 1 || myRollTwo[1] === 2 || myRollTwo[1] === 3) && (myRollTwo[1] !== myRollTwo[2]) &&
      (myRollTwo[2] === 1 || myRollTwo[2] === 2 || myRollTwo[2] === 3) && (myRollTwo[2] !== myRollTwo[0])) {
     
      const rollTwoValue = myRollTwo;
    
      const compareValueTwo = 0;
      console.log("1, p2: " + compareValueTwo);
  
  
  
    } else if ((myRollTwo[0] === 4 || myRollTwo[0] === 5 || myRollTwo[0] === 6) && (myRollTwo[0] !== myRollTwo[1]) &&
      (myRollTwo[1] === 4 || myRollTwo[1] === 5 || myRollTwo[1] === 6) && (myRollTwo[1] !== myRollTwo[2]) &&
      (myRollTwo[2] === 4 || myRollTwo[2] === 5 || myRollTwo[2] === 6) && (myRollTwo[2] !== myRollTwo[0])) {
      
      const compareValueTwo = 100;
      console.log("2, p2: " + compareValueTwo);
    } else if (myRollTwo[0] === myRollTwo[1] && myRollTwo[1] === myRollTwo[2]) {
      
      const rollTwoValue = myRollTwo[0];
     
      const compareValueTwo = myRollTwo[0];
      console.log("3,  p2: " + compareValueTwo);
  
    }else if (myRollTwo[0] === myRollTwo[1]){ 
  
      const rollTwoValue = myRollTwo;
      
      const compareValueTwo = myRollTwo[2];
      console.log("4, p2: " + compareValueTwo);
      
    } else if ((myRollTwo[1] === myRollTwo[2])) {
      const rollTwoValue = myRollTwo;
      
      const compareValueTwo = myRollTwo[0];
      console.log("5,  p2: " + compareValueTwo);
    
    } else if ((myRollTwo[0] === myRollTwo[2])){
      const rollTwoValue = myRollTwo;
     
      const compareValueTwo = myRollTwo[1];
      console.log("6, p2: " + compareValueTwo);
  
      
    } else {
      console.log("7, p2" + compareValueTwo)
  
  
    }
  
  
  
  
  if (compareValueOne < compareValueTwo){
    console.log("P2 wins")
    compareValueOne = 11;
  
  } else if (compareValueOne > compareValueTwo){
    console.log("P1 wins")
    compareValueOne = 22;
  
  } else if (compareValueOne === compareValueTwo){
    console.log("roll again")
    console.log(compareValueOne +","+ compareValueTwo)
  }
    }
  
  
  
    
   
    function compareRolls8() {
      if (compareValueOne === compareValueTwo) {
          if (compareValueOne ==! compareValueTwo) {
              console.log("they are notnequal")
          } else {
              console.log("not equal")
          }
      }
  }
  
  
  