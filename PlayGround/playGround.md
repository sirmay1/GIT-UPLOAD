Project idea's for creating a memory game:
may 10th 2022: (start-date)

Process: (method)
*created eight cards
*four cards with card name 
*four cards with a flag on it
[ -- math.floor/math.random
-- Return the random number generated and push that into another array
-- Use a while statement to ensure that an element is not stored in my new array more than once.
-- When the check passes, store the element in the new array 
-- Finally, when the end of the initial array has been reached and all elements of it are stored randomly in another array, return the new array.-- ]

Problem Solving: QUESTION:
How do I get the cards randomly to switch using JavaScript?
Do I need to use recursion which is a function which calls upon itself?
If I need to use a recursive function for my memory game How would I write that code?

resources:
https://medium.com/@fyoiza/how-to-randomize-an-array-in-javascript-8505942e452

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor


Researched Data Methods: from medium.com @yoiza 
1. Math.floor() and Math.random().
2. Efficiency of my solution (Big O)


Learn, Research and Use for Project:
Javascript Methods — Math.floor and Math.random

Math.random() : this is one of the in-built javascript methods at the heart of my randomization solution. According to developer.monzilla, it is a floating point pseud-random number, between 0 and 1. It is a method which returns a random floating point between 0 and any number you specify.

The syntax for using it is Math.random()* number .

For example, you want to return a random number between 0 and 20.

OPERATION EXAMPLE: (possible solution)
 const pictures = [
     {image: 'flower.jpg', title: 'picture of flower'},
     {image: 'countrySide.jpg', title: 'picture of Florence'}
 ];
 let array2 = [];

 for(let i in pictures) {
     let randomIndex = Math.floor(Math.random() * pictures.length);
     while(array2.includes(pictures[rnadomIndex])) {
         randomIndex = Math.floor(Math.random() * pictures.length);
     }
     array2[i] = pictures[randomIndex];
 }
