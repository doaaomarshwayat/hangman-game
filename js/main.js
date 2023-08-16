//letters
const letters = "abcdefghijklmnopqrstuvwxyz";

//get array from letters
let lettersArray = Array.from(letters);

//select letter container
let lettersContainer = document.querySelector('.letters');

//generate letters
lettersArray.forEach(letter => {
    
    //creat span
    let span = document.createElement("span");
    
    //creat letter text node
    let theLetter = document.createTextNode(letter);
    
    //append the letter to span
    span.appendChild(theLetter);
    
    //add class to span
    span.className ='letter-box';
    
    //apend span to the letter container
    lettersContainer.appendChild(span);    
});

//opject of words + categories
const words = {
    programming: ["php", "javascript", "go", "scala", "r", "mysql", "python"],
    movies : ["prestige", "inception", "parasite", "interstellar", "whiplash", "memento","coco", "up"],
    people : ["albert einstein", "hitchock", "alexander", "cleopatra", "mahata ghandi"],
    countries : ["syria", "palestine", "yemen", "egypt", "bahrain", "qatar"]
}

//get random property , objectKeys =>  method give it opbject and will gove you all keys in it
let allKeys = Object.keys(words);// PR , MOV , PEOPLE , CONT

//random number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allKeys.length); // return ibdex number
//category
let randomPropName = allKeys[randomPropNumber]; // return name of that random number index to use it and get value inside it
//category words
let randomPropValue = words[randomPropName];
//random number depends om words
let randonValueNumber = Math.floor(Math.random() * randomPropValue.length); //random number(index) accourdinf to prop we chosed
//
let randomValueValue = randomPropValue[randonValueNumber];

//set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

//selects letters guss element
let lettersGussContainer = document.querySelector(".letters-guss");

//convers chosen word to array
let lettersAndSpace = Array.from(randomValueValue);

//crext span depend om word
lettersAndSpace.forEach(letter => {
    
    //creat empty span
    let emptyspan = document.createElement("span");
    
    //if letter is spsce
    if (letter === ' '){
         //add class to the space
         emptyspan.className = "with-space";
         
    }
    
    //append span to the letters guss container
    lettersGussContainer.appendChild(emptyspan);// creat number of span depended on word chosen and append that empty span to letters guss
});
//select guss spans(place of word you chosed)
let gussspan = document.querySelectorAll(".letters-guss span");

//set wrong attempts
let wrongAttempts = 0;

//select the drow element
let theDraw = document.querySelector('.hangman-draw');

//handing clicking on letters
document.addEventListener("click" , (e) => {
    
    //set the chose ststus , here inside click becouse we need to return ststes false becouse if not when we arive true and ststes will fixed in true
    let theStatus = false;


    if (e.target.className === 'letter-box'){
        e.target.classList.add("clicked");
        
        //put clicked letter to comper it. get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        
        //the chosen word letterAndSpace
        let theChosenWord = Array.from(randomValueValue.toLowerCase());
        
        theChosenWord.forEach((wordLetter, wordIndex) => {
        //wordeLetter is lettter we clicked
            //if the clicked letter equal to one of the chosen word letter
            if (theClickedLetter == wordLetter){
                
                //set the ststus correct
                theStatus = true;
        
                //loop on all guss span
                gussspan.forEach((span ,spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = theClickedLetter;
                    }
                });
            }
        });
        //اف else ل اغمل اليس جوا 
        //out the loop
       //if letter is wrong
       if (theStatus !== true) {//wrong
        
        //increase the wroung Attempt
        wrongAttempts++;
        
        //add class to wrong on the Draw element , $ مش زابطه عندي
        theDraw.classList.add('wrong-${wrongAttemps}');
        
        //play fail sound
        document.getElementById("fail").play();
        
        if (wrongAttempts === 8){
            
            endGame();
            
            lettersContainer.classList.add('finished');
        }
        
       }else{
        
        //play secess sound
        document.getElementById("seccess").play();
       }
    
        
        
    }
});

//enf game function
function endGame() {
    
    //creat popup div
     let div = document.createElement('div');
     
     //creat  text
     let divText = document.createTextNode("Game Over, the word is ${randomValueValue}");
     
     //append text to div
     div.appendChild(divText);
     
     //add class on the div
     div .className = 'popup';
     
     //append to the body
     document.body.appendChild(div);
}








