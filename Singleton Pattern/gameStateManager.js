// Game State Manager using Singleton Pattern

class Singleton {
  constructor() {
    if (new.target === Singleton) {
      throw new Error('Sorry bud, no can do.');
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
}

class GameStateManager extends Singleton {
  #state;
  constructor(initialState = { level: 1, score: 0, lives: 3 }) {
    super();
    this.#state = initialState;
  }

  updateState(updates) {
    this.#state = { ...this.#state, ...updates };
  }

  getGameState() {
    return this.#state;
  }
}

function main() {
  try {
    const testInstance = new Singleton();
  } catch (error) {
    console.error(
      'Error caught when trying to instantiate Singleton:',
      error.message
    );
  }
  console.log('');

  const gameStateManager = GameStateManager.getInstance();

  console.log('Initial Game State:', gameStateManager.getGameState());
  console.log('');
  
  gameStateManager.updateState({ level: 2, score: 100 });
  console.log('Updated Game State:', gameStateManager.getGameState());
  console.log('');
  
  const anotherReference = GameStateManager.getInstance();
  console.log('Another Reference Game State:', anotherReference.getGameState());
  console.log('');

  console.log(
    'Are both references the same?',
    gameStateManager === anotherReference
  );
  console.log('');
  
  try {
    gameStateManager.state.level = 5;
    console.log(
      'Modified Level Directly:',
      gameStateManager.getGameState().level
    );
  } catch (error) {
    console.error('Error caught on direct modification:', error.message);
  }
}

main();
