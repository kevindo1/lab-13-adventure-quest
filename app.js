// import functions and grab DOM elements
import { generateUser, setUser } from './utils.js';
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const mainForm = document.getElementById('main-form');

mainForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    const formData = new FormData(mainForm);
    const userSelect = generateUser(formData);

    setUser(userSelect);
    console.log(userSelect.name);
    window.location.replace('./map');
});