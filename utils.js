export function generateUser(formData) {
    return {
        completed: {},
        gold: 0,
        hp: 50,
        name: formData.get('name'),
        race: formData.get('race'),
    };
}

export function setUser(userObject){
    const userString = JSON.stringify(userObject);
    localStorage.setItem('USER', userString);
;}