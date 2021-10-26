import quests from "../data/questsData.js";

const mapLinks = document.getElementById('map-links');

for (let quest of quests) {
    const a = document.createElement('a');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;

    mapLinks.appendChild(a);
}