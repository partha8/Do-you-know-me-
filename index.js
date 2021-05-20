var readlineSync=require('readline-sync');
const chalk = require('chalk');
var username=readlineSync.question('May I know Your Name? ');

console.log('Hi '+username+'!\nWelcome to DO YOU KNOW PARTHA?!\n\nThe quiz is divided into 2 levels \n\nAnswer 5 correct questions to go to level 2\n');



var score=0;
  //question bank
  var questions=[
    {
      id:1,
      question:"Is Pratim my father's name?",
      answer: false,
    },
    {
      id:2,
      question: "I don't know how to play lawn tennis",
      answer:false,
    },
    {
      id:3,
      question: "I love papaya!",
      answer: false,
    },
    {
      id:4,
      question:"I know 7 languages",
      answer: false,
    },
    {
      id:5,
      question: "I love to read books",
      answer: true,
    },
    {
      id:6,
      question: "I love to play video games",
      answer: true,
    },
    {
      id:7,
      question: "I can sing",
      answer: false,
    },
    {
      id:8,
      question:"My favourite Marvel hero is\na.Iron Man\nb.Captain America\nc.Captain Marvel\nd.Black Panter\n\n",
      answer: 'd',
    },
    {
      id:9,
      question:"My favourite DC hero is\na.Batman\nb.Superman\nc.Green Lantern\nd.Wonder Woman\n\n",
      answer:"a",
    },
    {
      id:10,
      question:"What brand of laptop do I own?\na.MSI\nb.HP\nc.Dell\nd.Asus\n\n",
      answer:'a',
    },
    {
      id:11,
      question:"How old is my phone?\na.1yr\nb.2yr\nc.3yr\nd.4yr\n\n",
      answer:'d',
    },

  ];
  // data structure to store my friends' scores
  var userScores=[
    {
      name:"Rahul",
      score:5,
    },
    {
      name:"Rohan",
      score:8,
    }
  ];

   function play(id,question,answer){
   console.log('Question #'+id);
   var ans;
   if(id<=7){
       ans=readlineSync.keyInYN(chalk.black.bold.bgWhiteBright(question));
   }
   else if(id>7&&id<=13){
     ans=readlineSync.question(chalk.black.bold.bgWhiteBright(question));
   }

   if(ans===answer){
     console.log(chalk.underline.bold('\nCORRECT!'));
     score++;
   }
   else{
     console.log(chalk.underline.bold('\nWrong ;( '));
   }
   console.log('Your current score '+score+ '\n' );
   console.log('_____________________ \n')

 }

var i;
function start(i,end){
  for (;i<end;i++)
  {
  var currentQuestion=questions[i];
  play(currentQuestion.id,currentQuestion.question,currentQuestion.answer);
  }
}

start(0,7);

if(score>=5){
  console.log(chalk.bold.italic.underline("Welcome to Level 2!\n"));
  start(7,11);
}

var highestScore=0;

for(var i=0;i<userScores.length;i++){
  var userScore=userScores[i];
  if(highestScore<userScore.score){
    highestScore=userScore.score;
  }
}

if(score>highestScore){
  console.log(chalk.bold.italic.underline('You got the highest score!! Final score:'+score));
  
}
else{
  console.log('Your final score is '+score);
}

console.log('________________________________________________________________________________________')