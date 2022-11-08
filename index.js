const setOfWords = [ "My nam is vinod bahadur thapa and I am a youtuber .","Hope you are having fun this is a simple game you can make . ",
"If you want t the source code then link is given in the description so you can create your own version of this challenge "] ;

const msg = document.getElementById('msg');

const typewords = document.getElementById('mywords');

const btn = document.getElementById("btn");

let startTime , endTime ;

playGame = ()=>{
    let   randomNumber = Math.floor(Math.random()*setOfWords.length);
    console.log(randomNumber);
    msg.innerText = setOfWords[randomNumber];

    let date = new Date();
    startTime = date.getTime();
    console.log('Start Time : '+ startTime);
    btn.innerText = "Done";


}

const endPlay = ()=>{
    let date = new Date();
    endTime = date.getTime();
    console.log('End Time : '+ endTime);
    let totalTime = ((endTime - startTime)/1000);
    console.log(totalTime);
    let totalStr = typewords.value ; 
    let wordCount = wordCounter(totalStr);
    let speed = Math.floor((wordCount/totalTime) * 60);
    let finalMsg = "You typed toatal at " +speed+ " words per minutes " ;

    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg ; 
}

const compareWords = (str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0 ;
    // array name then for each the it will take whole functions with .value and index no of that arra 

    words1.forEach(function(item,index){
        if(item == words2[index]){
            cnt++ ;
        }
    })
let errorWords = (words1.length - cnt );
typewords.value = '';
return (cnt + "correct out of " + words1.length + " words and the total number of error are "+ errorWords + ".");

}



const wordCounter = (str)=>{
let response  = str.split(" ").length;
return response ; 
}
btn.addEventListener('click',function(){
    console.log(this);
    if(this.innerText == 'Start'){
     typewords.disabled = false ;
     playGame();
    }else if(this.innerText == "Done") {
        typewords.disabled = true ;
         this.innerText = "Start" ;
         endPlay();
         
    }
})