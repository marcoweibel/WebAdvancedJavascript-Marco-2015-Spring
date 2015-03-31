// Credits to Owen for the main template of this code

// Save our 'new word' span to a variable.
var madlib1 = document.querySelector('.madlib-1');
var madlib2 = document.querySelector('.madlib-2');
var madlib3 = document.querySelector('.madlib-3');
var madlib4 = document.querySelector('.madlib-4');
var madlib5 = document.querySelector('.madlib-5');
var madlib6 = document.querySelector('.madlib-6');
var madlib7 = document.querySelector('.madlib-7');
var madlib8 = document.querySelector('.madlib-8');
var madlib9 = document.querySelector('.madlib-9');

// Arrays (lists) for some words and colors
var madLib1 = ['hurt', 'smelt', 'carried', 'chopped', 'whipped', 'used'];
var madLib2 = ['umbrella', 'shoe', 'knife', 'laptop', 'breakfast', 'finger'];
var madLib3 = ['tanned', 'sprayed', 'abused', 'squeezed', 'dyed', 'cooked'];
var madLib4 = ['poodle', 'kitty', 'monkey', 'dolphin', 'flamingo', 'pig'];
var madLib5 = ['beer', 'orange soda', 'paint thinner', 'coke', 'bile', 'tequila'];
var madLib6 = ['excercise', 'shower', 'movie', 'wax', 'meal', 'baptism'];
var madLib7 = ['toaster', 'alarm clock', 'book', 'bottle', 'key', 'window'];
var madLib8 = ['drenched', 'burnt', 'broken', 'floating', 'open', 'empty'];
var madLib9 = ['worried', 'stressed', 'hyperventilate', 'sleepy', 'angry', 'cry'];
var myColors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f',];

// Get a random number and use it go get a random word in the array. 
var randomWordNum = Math.floor( Math.random() * madLib1.length );
var randomWord = madLib1[randomWordNum];

var randomWordNum2 = Math.floor( Math.random() * madLib2.length );
var randomWord2 = madLib2[randomWordNum2];

var randomWordNum3 = Math.floor( Math.random() * madLib3.length );
var randomWord3 = madLib3[randomWordNum3];

var randomWordNum4 = Math.floor( Math.random() * madLib4.length );
var randomWord4 = madLib4[randomWordNum4];

var randomWordNum5 = Math.floor( Math.random() * madLib5.length );
var randomWord5 = madLib5[randomWordNum5];

var randomWordNum6 = Math.floor( Math.random() * madLib6.length );
var randomWord6 = madLib6[randomWordNum6];

var randomWordNum7 = Math.floor( Math.random() * madLib7.length );
var randomWord7 = madLib7[randomWordNum7];

var randomWordNum8 = Math.floor( Math.random() * madLib8.length );
var randomWord8 = madLib8[randomWordNum8];

var randomWordNum9 = Math.floor( Math.random() * madLib9.length );
var randomWord9 = madLib9[randomWordNum9];

// Get a random number and use it go get a random color in the array.
var randomColorNum = Math.floor( Math.random() * myColors.length );
var randomColor = myColors[randomColorNum];

// Change the content and style of our word in the document.
madlib1.innerHTML = randomWord;
madlib1.style.color = randomColor;

madlib2.innerHTML = randomWord2;
madlib2.style.color = randomColor;

madlib3.innerHTML = randomWord3;
madlib3.style.color = randomColor;

madlib4.innerHTML = randomWord4;
madlib4.style.color = randomColor;

madlib5.innerHTML = randomWord5;
madlib5.style.color = randomColor;

madlib6.innerHTML = randomWord6;
madlib6.style.color = randomColor;

madlib7.innerHTML = randomWord7;
madlib7.style.color = randomColor;

madlib8.innerHTML = randomWord8;
madlib8.style.color = randomColor;

madlib9.innerHTML = randomWord9;
madlib9.style.color = randomColor;