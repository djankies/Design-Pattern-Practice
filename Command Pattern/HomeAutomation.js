// Smart Home Automation System using Command Pattern

// # Step 1: Define the Command interface
// This is the core of our Command Pattern
// We start with a common interface for all commands

/*
* Create a Command interface with:
  • Method:
    • execute(): Executes the command
    • undo(): Reverses the command (optional)
*/

// # Step 2: Create concrete Command classes
// These will be our specific commands for different devices
// We create specific commands that implement the Command interface

/*
* Create a LightOnCommand class implementing Command:
  • Constructor takes a Light object
  • Implement execute() to turn the light on
  • Implement undo() to turn the light off
*/

/*
* Create a LightOffCommand class implementing Command:
  • Constructor takes a Light object
  • Implement execute() to turn the light off
  • Implement undo() to turn the light on
*/

/*
* Create a ThermostatSetCommand class implementing Command:
  • Constructor takes a Thermostat object and a temperature
  • Implement execute() to set the thermostat to the given temperature
  • Implement undo() to revert to the previous temperature
*/

// # Step 3: Create Receiver classes
// These are the classes that actually perform the operations
// We create classes for the devices that will be controlled

/*
* Create a Light class with methods:
  • turnOn(): Turns the light on
  • turnOff(): Turns the light off
  • getStatus(): Returns the current status of the light
*/

/*
* Create a Thermostat class with methods:
  • setTemperature(temp): Sets the temperature
  • getTemperature(): Gets the current temperature
  • getPreviousTemperature(): Gets the previous temperature setting
*/

// # Step 4: Create the Invoker class
// This class will use the commands to perform operations
// We create a remote control that will invoke the commands

/*
* Create a RemoteControl class:
  • Has methods to set and execute commands
  • Keeps track of command history for undo functionality
  • Implement methods:
    • setCommand(slot, command): Assigns a command to a button
    • pressButton(slot): Executes the command in the given slot
    • pressUndoButton(): Undoes the last command
*/

// # Step 5: Implement a MacroCommand
// This allows executing multiple commands at once
// We create a command that can execute multiple commands sequentially

/*
* Create a MacroCommand class implementing Command:
  • Constructor takes an array of Command objects
  • Implement execute() to execute all commands in sequence
  • Implement undo() to undo all commands in reverse order
*/

// # Step 6: Create a client code to use the system
// Demonstrate how to use the Command Pattern in the smart home system

/*
* Create a main function that:
  • Instantiates devices (Light, Thermostat)
  • Creates command objects for these devices
  • Sets up a RemoteControl with these commands
  • Demonstrates pressing buttons to execute commands
  • Shows using the undo functionality
  • Demonstrates using a MacroCommand
*/

// # Step 7: Implement logging for commands
// Add logging to track command execution

/*
* Create a LoggingDecorator class implementing Command:
  • Constructor takes a Command object
  • Implement execute() to log the command execution and then execute the wrapped command
  • Implement undo() to log the undo operation and then undo the wrapped command
*/

// # Step 8: Add error handling
// Implement error handling for command execution

/*
* Update RemoteControl class:
  • Add try-catch blocks in pressButton and pressUndoButton methods
  • Log errors and handle gracefully (e.g., skipping failed commands in a macro)
*/

// # Step 9: Implement a command history feature
// Allow reviewing and replaying of previous commands

/*
* Update RemoteControl class:
  • Add a method to get command history
  • Implement a replay functionality to re-execute a series of commands
*/

module.exports = {
  Light,
  Thermostat,
  LightOnCommand,
  LightOffCommand,
  ThermostatSetCommand,
  MacroCommand,
  RemoteControl,
};