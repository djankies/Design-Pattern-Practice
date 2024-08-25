// # Define the Observer class
class Observer {
  // This class should have a method called update that takes a message as a parameter
    update(message) {
    throw new Error("This method should be overridden!"); // Indicate that this should be implemented
  }
}

// # Define the User class that extends Observer
class User extends Observer {
  // In the constructor, initialize the user's name
  constructor(name) {
    super();
    this.name = name;
  }

  // Implement the update method to log the received message
  update(message) {
    console.log(`${this.name} says "${message}"`);
  }
}

// # Define the Subject class
class Subject {
  // This class should maintain a list of observers
  observers = [];
  // Implement the following methods:
  // // attach(observer): Adds an observer to the list
  attach(observer) {
    this.observers.push(observer)
  }

  // // detach(observer): Removes an observer from the list
  detach(observer) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  // // notify(message): Calls the update method on each observer with the given message
  notify(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}

// # Define the ChatRoom class that extends Subject
class ChatRoom extends Subject{
  sendMessage(message) {
    this.notify(message);
  }
}

const main = () => {
  const chatRoom = new ChatRoom;

  const jerry = new User('Jerry');
  const phil = new User('Phil');
  const janice = new User('Janice');

  chatRoom.attach(jerry);
  chatRoom.attach(phil);
  chatRoom.attach(janice);

  chatRoom.sendMessage('Hello!')
}
// Implement a method called sendMessage that takes a message as a parameter
// Inside this method, call notify with the message

// In the main function:
// 1. Create an instance of ChatRoom
// 2. Create instances of User (observers) with names
// 3. Attach the users to the chat room
// 4. Call sendMessage on the chat room with a message

// Execute the main function
main();

module.exports = {
  Observer,
  User,
  Subject,
  ChatRoom,
  main
}