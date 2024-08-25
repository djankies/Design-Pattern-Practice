class Character {
  constructor(name, health, attackPower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack = function () {
    throw new Error('property attack should be overwritten');
  };

  defend = function () {
    console.log('Defending');
  };
}

class Warrior extends Character {
  constructor(name, health = 400, attackPower = 20, rage = 0) {
    super(name, health, attackPower);
    this.rage = rage;
    this.maxHealth = 400;
  }

  attack = function (rage) {
    console.log(`${this.name} the warrior attacks with ${this.rage} rage.`);
    this.rage = 0;
  };

  battleCry = function () {
    console.log(`${this.name} the warrior performs their battle cry.`);
    this.rage += 10;
    this.health = Math.min(this.maxHealth, (this.health += 5));
  };
}

class Mage extends Character {
  constructor(name, health = 600, attackPower = 14, mana = 300) {
    super(name, health, attackPower);
    this.mana = mana;
  }

  attack = function () {
    if (this.mana >= 10) {
      console.log(`${this.name}, the mage, attacks with a spell.`);
      this.castSpell();
      return;
    }
    console.log(`${this.name}, the mage doesn't have enough mana.`);
  };

  castSpell = function () {
    console.log(`alakzam!`);
    this.mana -= 10;
  };

  meditate = function () {
    console.log(`${this.name}, the mage, meditates to gain more mana.`);
    this.mana += 15;
  };
}


class Archer extends Character {
  constructor(name, health = 600, attackPower = 12, arrows = 20) {
    super(name, health, attackPower);
    this.arrows = arrows;
  }

  attack = function () {
    if (this.arrows > 0) {
      console.log(`${this.name}, the archer, shoots their arrow.`);
      this.arrows -= 1;
      return;
    }
    console.log(`${this.name}, the archer, doesn't have enough arrows.`);
  };

  dodge = function () {
    if (Math.floor(Math.random() * 5) === 0) {
      console.log(`${this.name}, the archer, dodges the attack`);
      return;
    }
    console.log(
      `${this.name}, the archer, wasn't fast enough to dodge the attack.`
    );
  };
}



class CharacterFactory {
  constructor(characterTypes) {
    this.characterTypes = characterTypes;
  }

  createCharacter = function (type, name, ...args) {
    const characterClass = this.characterTypes.get(type.toLowerCase());
    if (characterClass) {
      return new characterClass(name, ...args);
    }
    throw new Error(`Invalid character type: ${type}`);
  };
}

class GameManager {
  constructor() {
    this.characterTypes = new Map();
    this.characterFactory = new CharacterFactory(this.characterTypes);
    this.characters = [];
    this.currentBattle = null;
  }

  registerCharacter = function (type, characterClass) {
    this.characterTypes.set(type.toLowerCase(), characterClass);
  };

  createCharacter = function (name, type, ...args) {
    const character = this.characterFactory.createCharacter(
      name,
      type,
      ...args
    );
    this.characters.push(character);
    return character;
  };

  startBattle = function (character1, character2) {
      };
}

function main() {
  const gameManager = new GameManager();

  gameManager.registerCharacter('warrior', Warrior);
  gameManager.registerCharacter('mage', Mage);
  gameManager.registerCharacter('archer', Archer);

  const hero = gameManager.createCharacter('Daniel', 'warrior');
  const villain = gameManager.createCharacter('Ryan', 'archer');
}


module.exports = {
  Character,
  Warrior,
  Mage,
  Archer,
  CharacterFactory,
  GameManager,
};
