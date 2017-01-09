var questions = 3;
var questionsLeft = ' [' + questions + ' questions left]';

var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var verb = prompt('Please type a verb' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

var noun = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

alert('Cool beans. Ready for your story?');

var sentence = "<h2>There once was a " + adjective;
sentence += ' tardigrade who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';

document.write(sentence);