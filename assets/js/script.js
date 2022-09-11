
   
  function spin(){
    document.getElementById('img').className = 'spinImg'
    
   
    
     }

     const snake = document.getElementById('img');
    

     function removeSpinClass() {
         snake.classList.remove('spinImg');
        //  these are for the future die
        //  snake1.classList.remove('spinImg');
        //  snake2.classList.remove('spinImg');
      
         
     }

    snake.addEventListener('animationend', removeSpinClass);
     
     
     function rollDie(){
        const firstNumber = Math.floor(Math.random()*6) + 1;
        const secondNumber = Math.floor(Math.random()*6) + 1;
        const thirdNumber = Math.floor(Math.random()*6) + 1;
    
    
    
        const firstDie =  "assets/images/d" + firstNumber + ".png";
        const secondDie =  "assets/images/d" + secondNumber + ".png";
        const thirdDie =  "assets/images/d" + thirdNumber + ".png";
    
        document.getElementsByTagName('img')[0].setAttribute("src",firstDie); 
        document.getElementsByTagName('img')[1].setAttribute("src",secondDie); 
        document.getElementsByTagName('img')[2].setAttribute("src",thirdDie); 
    
        console.log(firstNumber);
        console.log(secondNumber);
        console.log(thirdNumber);
        console.log("first roll");
        
      }
    
    
      function rollDieTwo() {
    
        const fourthNumber = Math.floor(Math.random()*6) + 1;
        const fifthNumber = Math.floor(Math.random()*6) + 1;
        const sixthNumber = Math.floor(Math.random()*6) + 1;
    
    
    
        const fourthDie =  "assets/images/d" + fourthNumber + ".png";
        const fifthDie =  "assets/images/d" + fifthNumber + ".png";
        const sixthDie =  "assets/images/d" + sixthNumber + ".png";
    
        document.getElementsByTagName('img')[3].setAttribute("src",fourthDie); 
        document.getElementsByTagName('img')[4].setAttribute("src",fifthDie); 
        document.getElementsByTagName('img')[5].setAttribute("src",sixthDie); 
    
        console.log(fourthNumber);
        console.log(fifthNumber);
        console.log(sixthNumber);
        console.log("second roll");
    
    
      }

      
      
    
      function rollBoth(){
        const firstNumber = Math.floor(Math.random()*6) + 1;
        const secondNumber = Math.floor(Math.random()*6) + 1;
        const thirdNumber = Math.floor(Math.random()*6) + 1;
        const fourthNumber = Math.floor(Math.random()*6) + 1;
        const fifthNumber = Math.floor(Math.random()*6) + 1;
        const sixthNumber = Math.floor(Math.random()*6) + 1;
    
    
        const firstDie =  "assets/images/d" + firstNumber + ".png";
        const secondDie =  "assets/images/d" + secondNumber + ".png";
        const thirdDie =  "assets/images/d" + thirdNumber + ".png";
        const fourthDie =  "assets/images/d" + fourthNumber + ".png";
        const fifthDie =  "assets/images/d" + fifthNumber + ".png";
        const sixthDie =  "assets/images/d" + sixthNumber + ".png";
    
        document.getElementsByTagName('img')[0].setAttribute("src",firstDie); 
        document.getElementsByTagName('img')[1].setAttribute("src",secondDie); 
        document.getElementsByTagName('img')[2].setAttribute("src",thirdDie); 
        document.getElementsByTagName('img')[3].setAttribute("src",fourthDie); 
        document.getElementsByTagName('img')[4].setAttribute("src",fifthDie); 
        document.getElementsByTagName('img')[5].setAttribute("src",sixthDie); 
    
        console.log(firstNumber);
        console.log(secondNumber);
        console.log(thirdNumber);
        console.log(fourthNumber);
        console.log(fifthNumber);
        console.log(sixthNumber);
        console.log("free YSL");
    
      }
    
     
        function play() {
          var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
          audio.play();
        }
//  new js code for compare rolls 



        function compareRolls (){
          const firstNumber = Math.floor(Math.random()*6) + 1;
          const secondNumber = Math.floor(Math.random()*6) + 1;
          const thirdNumber = Math.floor(Math.random()*6) + 1;
  
          // console.log(firstNumber);
          // console.log(secondNumber);
          // console.log(thirdNumber);
          // console.log("first roll");
  
          const fourthNumber = Math.floor(Math.random()*6) + 1;
          const fifthNumber = Math.floor(Math.random()*6) + 1;
          const sixthNumber = Math.floor(Math.random()*6) + 1;
  
          // console.log(fourthNumber);
          // console.log(fifthNumber);
          // console.log(sixthNumber);
          // console.log("second roll");

          const myRollOne = [firstNumber,secondNumber,thirdNumber];
          console.log(myRollOne);

          const myRollTwo = [fourthNumber,fifthNumber,sixthNumber];
          console.log(myRollTwo);


          // should these be two seperate functions ??
         
  
          if (firstNumber === fourthNumber) {
            console.log("lets see the second numbers")
          
          } else if(secondNumber === fifthNumber){
             console.log("lets see thrid roll")
          } else if (thirdNumber === sixthNumber){
            console.log("roll again")
          } else {
            console.log("nothing is equal")
          }
  
  
        }


        function compare2(){
          const firstNumber = Math.floor(Math.random()*6) + 1;
          const secondNumber = Math.floor(Math.random()*6) + 1;
          const thirdNumber = Math.floor(Math.random()*6) + 1;
          const fourthNumber = Math.floor(Math.random()*6) + 1;
          const fifthNumber = Math.floor(Math.random()*6) + 1;
          const sixthNumber = Math.floor(Math.random()*6) + 1;

          const myRollOne = [firstNumber,secondNumber,thirdNumber];
          console.log(myRollOne);
          console.log(firstNumber);
          console.log(secondNumber);
          console.log(thirdNumber);

          const myRollTwo = [fourthNumber,fifthNumber,sixthNumber];
          // console.log(myRollTwo);

// LET ME SET CONDITONS FIRST
          if (myRollOne[0] === myRollOne[1] && myRollOne[1] === myRollOne[2]){
            console.log(" all the same")

          }else if ((myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3) && (myRollOne[0] !== myRollOne[1]) && 
            (myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3 )&& (myRollOne[1] !== myRollOne[2]) &&
            (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) && (myRollOne[2] !== myRollOne[0])){
              console.log("automatic lose")

             

          // } else if (myRollOne[0] === 1 || myRollOne[0] === 2 || myRollOne[0] === 3){
            
          //          if ( myRollOne[1] === 1 || myRollOne[1] === 2 || myRollOne[1] === 3){

                   
          //           if (myRollOne[2] === 1 || myRollOne[2] === 2 || myRollOne[2] === 3) {
          //     console.log("automatic lose")
          //           }
          //         }

          }
          

        

      }




    
     
   
 