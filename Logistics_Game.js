// Logistics Game
// Version 1

// Driver Class
class Driver {
    constructor(name, location, dutyStatus = "Off-Duty", driveHours = 11, dutyHours = 14) {
        this.name = name;
        this.location = location;
        this.dutyStatus = dutyStatus;
        this.driveHours = driveHours;
        this.dutyHours = dutyHours;
    }
}

class Load {
    constructor(loadNumber, origin, destination, pickupAppt, deliveryAppt, currentStatus = "Available") {
        this.loadNumber = loadNumber;
        this.origin = origin;
        this.destination = destination;
        this.pickupAppt = pickupAppt;
        this.deliveryAppt = deliveryAppt;
        this.currentStatus = currentStatus;
    }
}

const bob = new Driver("Bob", "Phoenix");
const dave = new Driver("Dave", "Tonopah", "Sleeper Berth", 0, 0);

const load1 = new Load(1001, "Los Angeles", "Phoenix", "10/12/2026 0800", "10/13/2026 0900");

console.log(bob.name + " " + bob.location + " " + bob.dutyStatus + " " + bob.driveHours + " " + bob.dutyHours);
console.log(dave.name + " " + dave.location + " " + dave.dutyStatus + " " + dave.driveHours + " " + dave.dutyHours);
console.log(load1.loadNumber + ", " + load1.origin + ", " + load1.destination + ", Pickup: " + load1.pickupAppt + ", Destination: " + load1.deliveryAppt + ", " + load1.currentStatus)