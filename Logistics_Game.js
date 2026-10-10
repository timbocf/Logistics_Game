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

class Trailer {
    constructor(trailerNumber, currentLocation, cleanStatus) {
        this.trailerNumber = trailerNumber;
        this.currentLocation = currentLocation;
        this.cleanStatus = cleanStatus;
    }
}

const bob = new Driver("Bob", "Phoenix");
const dave = new Driver("Dave", "Tonopah", "Sleeper Berth", 0, 0);

const load1 = new Load(1001, "Los Angeles", "Phoenix", "10/12/2026 0800", "10/13/2026 0900");
const trailer1 = new Trailer(50213, "Phoenix", "Dirty")

console.log(bob.name + " " + bob.location + " " + bob.dutyStatus + " " + bob.driveHours + " " + bob.dutyHours);
console.log(dave.name + " " + dave.location + " " + dave.dutyStatus + " " + dave.driveHours + " " + dave.dutyHours);
console.log(load1.loadNumber + ", Pickup: " + load1.origin + ": " + load1.pickupAppt + ", Destination: " + load1.destination + ": " + load1.deliveryAppt + ", " + load1.currentStatus);
console.log(trailer1.trailerNumber + ", Location: " + trailer1.currentLocation + ", Clean or Dirty?: " + trailer1.cleanStatus);