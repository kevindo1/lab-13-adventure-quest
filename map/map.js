import quests from '../data/questsData.js';
import { getUser, haveCompletedAllQuests, userProfile } from '../utils.js';

const mapLinks = document.getElementById('map-links');
const user = getUser()

userProfile();

if (user.hp <= 0 || haveCompletedAllQuests(user)){
    window.location.replace('../end')
}

for (let quest of quests) {
    if (user.completed[quest.id]) {
        displaySpan(quest);
    } else {
        displayLink(quest);
    }
};

function displayLink(quest) {
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    a.classList.add('quest');
    a.style.top = quest.map.top;
    a.style.left = quest.map.right; 

    mapLinks.appendChild(a);
};

function displaySpan(quest) {
    const span = document.createElement('span');
    span.textContent = quest.title;

    span.classList.add('quest');
    span.style.top = quest.map.top;
    span.style.left = quest.map.right;

    mapLinks.appendChild(span);
};
