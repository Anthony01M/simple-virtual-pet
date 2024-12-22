document.addEventListener('DOMContentLoaded', function () {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);

    const petAge = document.getElementById('petAge');
    const hungerLevel = document.getElementById('hungerLevel');
    const happinessLevel = document.getElementById('happinessLevel');
    const healthLevel = document.getElementById('healthLevel');
    const cleanlinessLevel = document.getElementById('cleanlinessLevel');
    const energyLevel = document.getElementById('energyLevel');
    const petLevel = document.getElementById('petLevel');
    const petMood = document.getElementById('petMood');
    const feedButton = document.getElementById('feedButton');
    const playButton = document.getElementById('playButton');
    const careButton = document.getElementById('careButton');
    const cleanButton = document.getElementById('cleanButton');
    const restButton = document.getElementById('restButton');

    let petStatus = {
        name: '',
        age: 0,
        hunger: 50,
        happiness: 50,
        health: 50,
        cleanliness: 50,
        energy: 50,
        level: 1
    };

    feedButton.addEventListener('click', function () {
        petStatus.hunger = Math.min(petStatus.hunger + 10, 100);
        updatePetStatus();
    });

    playButton.addEventListener('click', function () {
        petStatus.happiness = Math.min(petStatus.happiness + 10, 100);
        updatePetStatus();
    });

    careButton.addEventListener('click', function () {
        petStatus.health = Math.min(petStatus.health + 10, 100);
        updatePetStatus();
    });

    cleanButton.addEventListener('click', function () {
        petStatus.cleanliness = Math.min(petStatus.cleanliness + 10, 100);
        updatePetStatus();
    });

    restButton.addEventListener('click', function () {
        petStatus.energy = Math.min(petStatus.energy + 10, 100);
        updatePetStatus();
    });

    function updatePetStatus() {
        petAge.textContent = petStatus.age;
        hungerLevel.textContent = petStatus.hunger;
        happinessLevel.textContent = petStatus.happiness;
        healthLevel.textContent = petStatus.health;
        cleanlinessLevel.textContent = petStatus.cleanliness;
        energyLevel.textContent = petStatus.energy;
        petLevel.textContent = petStatus.level;
        petMood.textContent = getPetMood();
    }

    function getPetMood() {
        if (petStatus.happiness > 70 && petStatus.health > 70) {
            return 'Happy';
        } else if (petStatus.happiness < 30 || petStatus.health < 30) {
            return 'Sad';
        } else {
            return 'Neutral';
        }
    }

    function checkLevelUp() {
        const averageStatus = (petStatus.hunger + petStatus.happiness + petStatus.health + petStatus.cleanliness + petStatus.energy) / 5;
        if (petStatus.age % 10 === 0 && averageStatus > 50) {
            petStatus.level += 1;
        }
    }

    setInterval(() => {
        petStatus.age += 1;
        petStatus.hunger = Math.max(petStatus.hunger - 1, 0);
        petStatus.happiness = Math.max(petStatus.happiness - 1, 0);
        petStatus.health = Math.max(petStatus.health - 1, 0);
        petStatus.cleanliness = Math.max(petStatus.cleanliness - 1, 0);
        petStatus.energy = Math.max(petStatus.energy - 1, 0);
        checkLevelUp();
        updatePetStatus();
    }, 1000);

    setInterval(() => {
        if (petStatus.hunger === 0 || petStatus.health === 0) {
            alert('Your pet has died. Please refresh the page to start over.');
            clearInterval(this);
        }
    }, 1000);
});