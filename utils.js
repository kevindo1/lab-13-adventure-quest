import quests from './data/questsData.js';

export function findById(items, id) {
    for (let item of items) { 
        if (item.id === id) {
            return item;
        }
    }
}

export function generateUser(formData) {
    return {
        completed: {},
        gold: 0,
        hp: 50,
        name: formData.get('name'),
        race: formData.get('race'),
    };
}

export function setUser(userObject) {
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
}

export function getUser() {
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
}

export function scoreQuest(choiceObject, questId, userObject) {
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questId] = true;
}

export function haveCompletedAllQuests(userObject) {
    for (let quest of quests) {
        if (!userObject.completed[quest.id]){
            return false;
        }
    }
    return true;
}

export function userProfile() {
    // get user info from local storage
    const user = getUser();
    // update DOM with the updated user info
    const img = document.getElementById('avatar-image');
    img.src = `../assets/${user.race}.png`;

    const name = document.getElementById('name');
    name.textContent = user.name;

    const gold = document.getElementById('gold');
    gold.textContent = `Gold: ${user.gold}`;

    const hp = document.getElementById('hp');
    hp.textContent = `HP: ${user.hp}`;
}