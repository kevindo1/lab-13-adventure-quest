import { getUser, userProfile } from '../utils.js';

getUser();
userProfile();

const playAgain = document.getElementById('play-again');

playAgain.addEventListener('click', ()=> {
    localStorage.removeItem('USER');
    window.location.replace('..');
});