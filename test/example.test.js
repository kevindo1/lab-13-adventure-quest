// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { setUser, generateUser } from "../utils.js";
const test = QUnit.test;

test('generateUser should generate the formData with name, race, gold, and hp', (expect) => {
    //Arrange

    const formData = new FormData();
    formData.set('name', 'test name');
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
