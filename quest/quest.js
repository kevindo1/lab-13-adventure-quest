import quests from "../data/questsData.js";
import { findById, getUser, setUser, scoreQuest } from "../utils.js";

const params = new URLSearchParams(window.location.search); 

const questData = findById(quests, params.get('id'));

const title = document.getElementById('quest-title');
title.textContent = questData.title;

const img = document.getElementById('quest-image');
img.src = `../assets/${questData.image}`;

const description = document.getElementById('quest-paragraph');
description.textContent = questData.description;

const questChoices = document.getElementById('quest-choices');
for (let choice of questData.choices) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;

    const span = document.createElement('span');
    span.textContent = choice.description;
    label.append(input, span);
    questChoices.append(label)
}

const button = document.createElement('button');
button.textContent = 'Choose';
questChoices.append(button);

questChoices.addEventListener('submit', (e)=> {
    // collects the selected choice from the radios
    // gets user data 
    // updates the user data depending on choice
    // set back into the local storage
    // show the result paragraph
    // show link back to map

    e.preventDefault();

    const selectedRadio = document.querySelector('input[type="radio"]:checked');
    const userChoice = findById(questData.choices, selectedRadio.value);
    
    const userInfo = getUser();
    
    scoreQuest(userChoice, questData.id, userInfo)
    setUser(userInfo);

    const questDetails = document.getElementById('quest-details');
    questDetails.classList.add('hidden');
    const questResults = document.getElementById('quest-results');
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = userChoice.result;
    const backButton = document.createElement('a')
    backButton.href = '../map';
    backButton.textContent = 'Back to the Map';

    questResults.append(resultParagraph, backButton);

    questResults.classList.remove('hidden');
});
// export function scoreQuest(choiceObject, userObject, questId) {
//     userObject.hp += choiceObject.hp;
//     userObject.gold += choiceObject.gold;
//     userObject.completed[questId] = true;
// }
