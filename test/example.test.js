// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { setUser, generateUser, getUser, scoreQuest, haveCompletedAllQuests } from '../utils.js';
const test = QUnit.test;

test('generateUser should generate the formData with name, race, gold, and hp', (expect) => {
    //Arrange

    const formData = new FormData();
    formData.set('name', 'tangerine');
    formData.set('race', 'tanjiro');

    // Set up your arguments and expectations
    const expected = {
        completed: {},
        gold: 0,
        hp: 50,
        name: formData.get('name'),
        race: formData.get('race'),
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = generateUser(formData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('setUser should save the information into localStorage', (expect) => {
    localStorage.removeItem('USER');
    const expected = {
        completed: {},
        gold: 0,
        hp: 50,
        name: 'test name',
        race: 'tanjiro',
    };

    setUser(expected);
    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, expected);
});

test('getUser should retrieve the localStorage', (expect) => {
    localStorage.removeItem('USER');
    const expected = {
        completed: {},
        gold: 0,
        hp: 50,
        name: 'test name',
        race: 'tanjiro',
    };

    setUser(expected);

    const actual = getUser();

    expect.deepEqual(actual, expected);
});

test('scoreQuest will update hp, gold, and quests completed on userObject', (expect) => {
    const userObject = {
        completed: {},
        gold: 0,
        hp: 50,
        name: 'test name',
        race: 'tanjiro',
    };
    const choiceObject = {
        id: 'strength',
        description: 'Look for the biggest demon to fight',
        result: `
            You're a brave fighter and you look for the strongest demon to prove your strength. You find him after searching a bit and get in a difficult battle. You gain 50 gold for it but lose 20 HP in the process. 
        `,
        hp: -10,
        gold: 50
    };
    const questId = 'final';

    scoreQuest(choiceObject, questId, userObject);

    expect.equal(userObject.hp, 40);
    expect.equal(userObject.gold, 50);
    expect.equal(userObject.completed[questId], true);

});

test('haveCompletedAllQuests returns true if all quests have been completed', (expect) => {
    const userObject = {
        completed: { final: true, demons: true, spiders: true }
    };
    
    const actual = haveCompletedAllQuests(userObject);

    expect.equal(actual, true);
});

test('haveCompletedAllQuests returns true if all quests have been completed', (expect) => {
    const userObject = {
        completed: { final: true, demons: true }
    };
    
    const actual = haveCompletedAllQuests(userObject);

    expect.equal(actual, false);
});
