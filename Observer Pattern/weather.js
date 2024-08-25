//# DEFINE Observer class
class Observer {
    //* METHOD update(weatherData)
    update(weatherData) {
        // This method should be overridden
        throw new Error('Method should be overwritten')
    }
    
}
    

//# DEFINE MobileDisplay class EXTENDS Observer
class MobileDisplay extends Observer {
    //* METHOD update(weatherData)
    update(weatherData) {
        const { temperature, humidity, pressure } = weatherData;
        // Display weather data on mobile
        console.log(
            `MobileDisplay: Temperature: ${temperature}°C, Humidity: ${humidity}%, Pressure: ${pressure} hPa.`
        );
    }
}
    
//# DEFINE WebDashboard class EXTENDS Observer
class WebDashboard extends Observer  {
    //* METHOD update(weatherData)
    update(weatherData) {
        // Update web dashboard with new weather data
        const {temperature, humidity, pressure} = weatherData;
        console.log(
            `WebDashboard: Temperature: ${temperature}°C, Humidity: ${humidity}%, Pressure: ${pressure} hPa.`
        );
    }
} 

//# DEFINE ConsoleLogger class EXTENDS Observer
    class ConsoleLogger extends Observer {
        //* METHOD update(weatherData)
        update(weatherData) {
            // Log weather data to the console
            console.log(JSON.stringify(weatherData))
        }
    }

//# DEFINE WeatherStation class
class WeatherStation {
    weatherData = {};
    //* PROPERTY observers AS LIST
    observers = [];

    //* METHOD attach(observer)
    attach(observer) {
        // Add observer to the observers list
        this.observers.push(observer);
    }

    
    //* METHOD detach(observer)
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        // Remove observer from the observers list
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1)
        }
    }

    //* METHOD notify()
    notify () {
        // For each observer in observers
        // Call observer's update method with current weather data
        this.observers.forEach(observer => observer.update(this.weatherData));
    }

    //* METHOD setWeatherData(newData)
    setWeatherData(newData) {
        // Update the weather data
        this.weatherData = newData;
        // Call notify to update observers
        this.notify();
    }

    //* METHOD getWeatherData()
    getWeatherData() {
        // Return the current weather data
        return this.weatherData;
    }
}

//* 6. DEFINE main function
const main = () => {
    // Create an instance of WeatherStation
    const weatherStation = new WeatherStation();
    // Create instances of MobileDisplay, WebDashboard, and ConsoleLogger
    const mobileDisplay = new MobileDisplay();
    const webDashboard = new WebDashboard();
    const consoleLogger = new ConsoleLogger();

    const displays = [mobileDisplay, webDashboard, consoleLogger];
    
    // Attach displays to the WeatherStation
    displays.forEach(display => weatherStation.attach(display));

    // Simulate weather updates by calling setWeatherData with different data
    weatherStation.setWeatherData(sampleData[0]);
}

const sampleData = [
    { temperature: 30, humidity: 45, pressure: 1015, condition: "Sunny" },
    { temperature: 22, humidity: 60, pressure: 1010, condition: "Cloudy" },
    { temperature: 18, humidity: 85, pressure: 990, condition: "Rainy" },
    { temperature: 20, humidity: 95, pressure: 980, condition: "Stormy" },
    { temperature: 25, humidity: 50, pressure: 1005, condition: "Windy" },
];


//# CALL main function
main();

module.exports = {
    Observer,
    MobileDisplay,
    WebDashboard,
    ConsoleLogger,
    WeatherStation,
    main
};





