var score = 0

var question1 = prompt("what is the third planet from the sun?");

//question1

if (question1.toUpperCase() === "EARTH") {
 alert("you got it!")  
 score += 1;
} else {
    alert("oops! the answer is 'earth.' next question?");
}


//question2 

var question2 = prompt("ok. what is the next planet from the sun?");
if (question2.toUpperCase() === "MARS") {
 alert("that's right! what are you? some kind of carl sagan?")  
 score += 1;
} else {
    alert("oops! the answer is 'mars.' next question?");
}

//question3

var question3 = prompt("now for math... what is 6 + 6?");
if (parseInt(question3) === 12) {
  alert("totes, my goats! way to go!")
  score +=1;
} else {
    alert("awww man! the answer is 12. better luck luck next time! next question?");
}

//question4
var question4 = prompt("what's 6 * 2?");
if (parseInt(question4) === 12) {
  alert("nailed it!");
  score += 1;
} else {
    alert("sorry, friend. this answer is also 12");
}

//question5
var question5 = prompt("what programming language am i using?");
if (question5.toUpperCase() === "JAVASCRIPT") {
  alert("oh yeah. you know it :)");
  score += 1;
} else {
  alert("hmmm...nope. sorry.");
}

/*
    awards crowns
    score 5 = gold
         3-4 = silver
         1-2 = bronze
         0 = no crown
*/

if (score === 5) {
  alert("wow! you got'em all right! gold crown for you!");
} else if (score >= 3) {
    alert("You score is " + score + "good job! you get a silver crown!");
}else if (score >= 0) {
  alert("Pretty good: your score is " + score + " bronze for you.");
}else {
  alert("uh oh. no questions, no crowns. study up and try again!");
}







