const spellFactory = (spellName) => {
    let powerLevel = 0;

    return () => { 
        powerLevel++; החיצונית
        return `${spellName} level ${powerLevel}!`;
    };
};

const fireball = spellFactory("fireball");
console.log(fireball()); // "fireball level 1!"
console.log(fireball()); // "fireball level 2!"
console.log(fireball()); // "fireball level 3!"

const advancedFireball = spellFactory("adFireball");
console.log(advancedFireball()); // "adFireball level 1!"
console.log(advancedFireball()); // "adFireball level 2!"

console.log(fireball()); // "fireball level 4!"