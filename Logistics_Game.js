// Logistics Game
// Version 1

// Driver Class
class Driver {
    constructor(name, location, dutyStatus, driveHours, dutyHours) {
        this.name = name;
        this.location = location;
        this.dutyStatus = dutyStatus;
        this.driveHours = driveHours;
        this.dutyHours = dutyHours;
    }
}

const Bob = new Driver("Bob", "Phoenix", "On-Duty", 11, 14);
const Dave = new Driver("Dave", "Tonopah", "Sleeper Berth", 0, 0);

console.log(Bob.name + " " + Bob.location + " " + Bob.dutyStatus + " " + Bob.driveHours + " " + Bob.dutyHours);
console.log(Dave.name + " " + Dave.location + " " + Dave.dutyStatus + " " + Dave.driveHours + " " + Dave.dutyHours);