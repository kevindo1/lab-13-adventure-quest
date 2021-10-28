const finalSelection = {
    id: 'final',
    title: 'Final Selection',
    map: {
        top: '70%',
        right: '42%'
    },
    image: '../assets/fight-1.jpg',
    description: `
        You must pass the final section to become a demon slayer. You're in the forest full of demons, what do you do?
    `,
    choices: [{
        id: 'strength',
        description: 'Look for the biggest demon to fight',
        result: `
            You're a brave fighter and you look for the strongest demon to prove your strength. You find him after searching a bit and get in a difficult battle. You gain 50 gold for it but lose 20 HP in the process. 
        `,
        hp: -10,
        gold: 50
    }, {
        id: 'modest',
        description: 'Protect others in danger',
        result: `
            You are a noble fighter and look to help others in danger. You fend off multiple demons and save many peers' lives. You gain 50 gold for it but get a few scratches that make you lose 10 HP in the process. 
        `,
        hp: -10,
        gold: 50
    }, {
        id: 'scared',
        description: 'RUN', 
        result: `
            You are too scared to face the demons. You didn't even want to be here. You try to flee but a quick demon senses your fear and attacks you before a fellow demon slayer comes to protect you. You gain 0 gold and lose 20 HP. 
        `,
        hp: -30,
        gold: 0
    }]
};

const demons = {
    id: 'demons',
    title: 'Sibling Demons',
    map: {
        top: '32%',
        right: '57%',
    },
    prerequisites: ['final'],
    image: '../assets/fight-2.jpeg',
    description: `
        As you find new allies on your journey, you are suddenly attacked by two demon siblings. One brother with eyes on his hand and one sister with temari throwing balls. The sister throws one of the balls at the wall at it shatters it completely. What will you do now?
    `,
    choices: [{
        id: 'brother',
        description: 'Fight the brother first',
        result: `
            You believe taking out the brother first will make the fight easier as he seems stronger. After a long fight, you end up defeating him and then easily defeat the sister. You sacrifice 10 hp but gain 50 gold. 
        `,
        hp: -10,
        gold: 50
    }, {
        id: 'sister',
        description: 'Fight the sister first',
        result: `
            You believe the sister is stronger so you decide to fight her first. The brother is very powerful and supports her well. You eventually defeat both of them but lost 20 hp and gain 40 gold. 
        `,
        hp: -20,
        gold: 40
    }, {
        id: 'escape',
        description: 'RUN', 
        result: `
            You are too scared to face the demons (again), you run but are hit with a temari ball. You lay there injured until stronger slayers come. You lose 30 hp and gain no gold. 
        `,
        hp: -30,
        gold: 0
    }]
};

const spiders = {
    id: 'spiders',
    title: 'Spider Demons',
    map: {
        top: '20%',
        right: '10%'
    },
    prerequisites: ['final', 'demons'],
    image: '../assets/fight-3.png',
    description: `
        After defeating many demons, you are given a new task to clear the forest of demons. When you get there, you find a very strong looking spider demons; the spider demon queen.
    `,
    choices: [{
        id: 'fight',
        description: 'Fight',
        result: `
            You take her head on but get a few injuries before your friend comes and helps you defeat her. You lose 10 hp but gain 50 gold.  
        `,
        hp: -10,
        gold: 50
    }, {
        id: 'wait',
        description: 'Wait to find a friend and team up',
        result: `
            You wait for your fellow demon slayer friend and fight the spider queen from two different angles, which leaves her open to attacks. You lose no hp and gain 50 gold. 
        `,
        hp: 0,
        gold: 50
    }, {
        id: 'escape',
        description: 'RUN', 
        result: `
            You are too scared to face the demons (again again), you get caught in the spider queen's web and stay stuck until reinforcements arrive. You lose 30 hp and gain 0 gold. 
        `,
        hp: -30,
        gold: 0
    }]
};

const quests = [
    finalSelection, 
    demons, 
    spiders,
];

export default quests; 
