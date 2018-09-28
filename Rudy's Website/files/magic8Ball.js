/*
	Magic Eight Ball Application
  Author: Rudy L. Pichola-Flores
  Date: September 15th, 2018
  															*/

//Initialize Variables
let userName = 'Rudy';
let userQuestion = 'is blue my favorite color?';
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

//Print
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');
console.log('Magic eight ball, ' + userQuestion);

//Set value for eightBall
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
  	break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

//Response
console.log(eightBall);


