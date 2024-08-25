// Define the base Coffee class
class Coffee {
  // Method to get the cost of the coffee
  getCost() {
    return 0; // Return base cost of 0
  }
  // Method to get the description of the coffee
  getDescription() {
    return 'Coffee'; // Return base description
  }
}

// Define the Espresso class that extends Coffee
class Espresso extends Coffee {
  // Override the getCost method
  getCost() {
    return 2.0; // Return cost of Espresso
  }
  // Override the getDescription method
  getDescription() {
    return 'Espresso'; // Return description of Espresso
  }
}

// Define the Latte class that extends Coffee
class Latte extends Coffee {
  // Override the getCost method
  getCost() {
    return 5.0; // Return cost of Latte
  }
  // Override the getDescription method
  getDescription() {
    return 'Latte'; // Return description of Latte
  }
}

// Define the Cappuccino class that extends Coffee
class Cappuccino extends Coffee {
  // Override the getCost method
  getCost() {
    return 4.5; // Return cost of Cappuccino
  }
  // Override the getDescription method
  getDescription() {
    return 'Cappuccino'; // Return description of Cappuccino
  }
}

// Define the CoffeeDecorator class that extends Coffee
class CoffeeDecorator extends Coffee {
  #decoratedCoffee; // Private field to hold the decorated coffee object

  // Constructor to initialize the decorator with a coffee object
  constructor(coffee) {
    super(); // Call the parent class constructor
    // Check if the provided object is an instance of Coffee
    if (!(coffee instanceof Coffee)) {
      throw new Error('Invalid coffee object'); // Throw error if not a Coffee instance
    }
    this.#decoratedCoffee = coffee; // Assign the coffee object to the private field
  }

  // Override the getCost method
  getCost() {
    return this.#decoratedCoffee.getCost(); // Return the cost of the decorated coffee
  }
  // Override the getDescription method
  getDescription() {
    return this.#decoratedCoffee.getDescription(); // Return the description of the decorated coffee
  }
}

// Define the MilkDecorator class that extends CoffeeDecorator
class MilkDecorator extends CoffeeDecorator {
  // Override the getCost method
  getCost() {
    return super.getCost() + 0.5; // Add the cost of milk to the decorated coffee's cost
  }
  // Override the getDescription method
  getDescription() {
    return super.getDescription() + ' with milk'; // Add "with milk" to the decorated coffee's description
  }
}

// Define the SugarDecorator class that extends CoffeeDecorator
class SugarDecorator extends CoffeeDecorator {
  // Override the getCost method
  getCost() {
    return super.getCost() + 0.25; // Add the cost of sugar to the decorated coffee's cost
  }
  // Override the getDescription method
  getDescription() {
    return super.getDescription() + ' with sugar'; // Add "with sugar" to the decorated coffee's description
  }
}

// Define the WhippedCreamDecorator class that extends CoffeeDecorator
class WhippedCreamDecorator extends CoffeeDecorator {
  // Override the getCost method
  getCost() {
    return super.getCost() + 0.75; // Add the cost of whipped cream to the decorated coffee's cost
  }
  // Override the getDescription method
  getDescription() {
    return super.getDescription() + ' with whipped cream'; // Add "with whipped cream" to the decorated coffee's description
  }
}

// Main function to demonstrate the decorator pattern
const main = () => {
  try {
    // Create a Latte and decorate it with Milk
    const latteWithMilk = new MilkDecorator(new Latte());
    // Further decorate the Latte with Milk and Sugar
    const latteWithMilkAndSugar = new SugarDecorator(latteWithMilk);

    // Get the total cost of the decorated coffee
    const totalCost = latteWithMilkAndSugar.getCost().toFixed(2);
    // Get the description of the decorated coffee
    const description = latteWithMilkAndSugar.getDescription();
    // Log the description and cost to the console
    console.log(`${description}: $${totalCost}`);
  } catch (error) {
    // Log any errors that occur
    console.error('An error occurred:', error.message);
  }
};

module.exports = {
  Coffee,
  Espresso,
  Latte,
  Cappuccino,
  CoffeeDecorator,
  MilkDecorator,
  SugarDecorator,
  WhippedCreamDecorator,
};


// Call the main function to execute the code
main();
