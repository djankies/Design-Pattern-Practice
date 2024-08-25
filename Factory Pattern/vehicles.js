class Vehicle {
  constructor(type) {
    if (new.target === Vehicle) {
      throw new TypeError('Cannot construct Vehicle instances directly');
    }
    this.type = type;
  }
  assemble() {
    throw new Error("Method 'assemble()' must be implemented.");
  }

  test() {
    throw new Error("Method 'test()' must be implemented.");
  }

  getSpecifications() {
    throw new Error("Method 'getSpecifications()' must be implemented.");
  }
}

class Car extends Vehicle {
  constructor() {
    super('car');
  }
  assemble() {
    console.log('Assembling Car...');
  }

  test() {
    console.log('Testing Car...');
  }
  getSpecifications() {
    console.log('Getting car specifications...');
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super('motorcycle');
  }

  assemble() {
    console.log('Assembling motorcycle...');
  }
  test() {
    console.log('Testing motorcycle...');
  }
  getSpecifications() {
    console.log('Getting motorcycle specifications...');
  }
}

class Truck extends Vehicle {
  constructor() {
    super('truck');
  }

  assemble() {
    console.log('Assembling truck...');
  }

  test() {
    console.log('Testing truck...');
  }

  getSpecifications() {
    console.log('Getting truck specifications...');
  }
}

class VehicleRegistry {
  constructor() {
    this.registry = new Map();
  }

  registerVehicle(type, vehicleClass) {
    if (typeof vehicleClass !== 'function') {
      throw new Error('vehicleClass must be a constructor function');
    }
    this.registry.set(type, vehicleClass);
  }

  getRegisteredVehicle(type) {
    return this.registry.get(type) || null;
  }
}

class VehicleFactory {
  constructor(registry) {
    this.registry = registry;
  }

  createVehicle(type) {
    const VehicleClass = this.registry.getRegisteredVehicle(type);
    if (VehicleClass) {
      return new VehicleClass();
    }
    throw new Error(`Invalid vehicle type: ${type}`);
  }
}

function main() {
  const registry = new VehicleRegistry();
  registry.registerVehicle('motorcycle', Motorcycle);
  registry.registerVehicle('car', Car);
  registry.registerVehicle('truck', Truck);

  const factory = new VehicleFactory(registry);

  const motorcycle = factory.createVehicle('motorcycle');
  const car = factory.createVehicle('car');
  const truck = factory.createVehicle('truck');

  motorcycle.assemble();
  motorcycle.test();
  motorcycle.getSpecifications();

  car.assemble();
  car.test();
  car.getSpecifications();

  truck.assemble();
  truck.test();
  truck.getSpecifications();

  // Test error handling
  try {
    factory.createVehicle('bicycle');
  } catch (error) {
    console.log(error.message);
  }
}

main();
