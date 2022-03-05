'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretnumber);





document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number Comrade 🤔 ';

        //when player wins
    } else if (guess === secretnumber) {
        document.querySelector('.message').textContent = '👌 Nice one Comrade';
        document.querySelector('.number').textContent = secretnumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is wrong
    } else if (guess !== secretnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretnumber ? '🤷 Too high!!..Try Again' : '🤷 Too low!!..Try Again';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '🤣 Comrade you don lose';
            document.querySelector('.score').textContent = 0;
        }
        document.querySelector('body').style.backgroundColor = 'red';

    }

    document.querySelector('.again').addEventListener('click', function() {
        document.querySelector('.score').textContent = 20;
        const secretnumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message').textContent = 'Start guessing...'

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        console.log(secretnumber);

    })
});