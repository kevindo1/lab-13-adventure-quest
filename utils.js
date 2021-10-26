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
};

export function getUser() {
    const userString = localStorage.getItem('USER');
    return JSON.parse(userString);
};

export function scoreQuest(choiceObject, userObject, questId) {
    userObject.hp += choiceObject.hp;
    userObject.gold += choiceObject.gold;
    userObject.completed[questId] = true;
}