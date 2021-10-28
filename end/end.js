import { getUser, userProfile } from '../utils.js';

const user = getUser();
userProfile();

const playAgain = document.getElementById('play-again');
const resultMessage = document.getElementById('result-message');

if (user.hp <= 0){
    resultMessage.textContent = 'Your journey has ended here. Unfortunately the demons got the best of you'
} else {
    resultMessage.textContent = 'Congratulations! You are a powerful Demon Slayer. You have a great future ahead of you'
}

playAgain.addEventListener('click', ()=> {
    localStorage.removeItem('USER');
    window.location.replace('..');
});
