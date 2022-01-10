//print console all buttons
console.log(document.getElementsByClassName('btn'));
console.log(document.querySelectorAll('.main-nav > a'))

//find all <p> elements which are inside div container
var elFirst = document.body.querySelectorAll('div > p');

//find 1st div with .container class, remove this progr.
var elSec = document.querySelector('div > .top-box');
elSec.remove();

//do 4. step again and verify that result are different
console.log(document.querySelectorAll(elFirst));

//print results of step 6. in format like(TAG: 'p', ATTRIBUTES: ['some', 'another', 'class'], CHILD_COUNT: 1)
var qw = document.body.tagName = 'p';
console.log(qw);
document.body.getAttribute.console('p');