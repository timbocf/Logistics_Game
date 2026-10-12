// Logistics Game
// Version 1

const gameTime = new Date(2026, 9, 11, 20, 0);

// Driver Class
class Driver {
    constructor(name, location, dutyStatus = "Off-Duty", driveHours = 11, dutyHours = 14, avgSpeed = 60) {
        this.name = name;
        this.location = location;
        this.dutyStatus = dutyStatus;
        this.driveHours = driveHours;
        this.dutyHours = dutyHours;
        this.avgSpeed = avgSpeed;
    }

    getTravelTime(destination) {
        const distance = this.location.getDistance(destination.key);
        return distance / this.avgSpeed;
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

const distances = {
    phoenix: {
        losAngeles: 370,
        lasVegas: 300
    },

    losAngeles: {
        phoenix: 370,
        lasVegas: 270
    },

    lasVegas: {
        phoenix: 300,
        losAngeles: 270
    }
};

class Location {
    constructor(key, name, distance) {
        this.key = key;
        this.name = name;
        this.distance = distance;
    }
    getDistance(key) {
        return this.distance[key];
    }
}

const phoenix = new Location("phoenix", "Phoenix", distances.phoenix);
const losAngeles = new Location("losAngeles", "Los Angeles", distances.losAngeles);

const bob = new Driver("Bob", phoenix);
const dave = new Driver("Dave", losAngeles, "Sleeper Berth", 0, 0);

const load1 = new Load(1001, losAngeles, phoenix, new Date(2026, 9, 12, 8, 0),
    new Date(2026, 9, 13, 9, 0));
const trailer1 = new Trailer(50213, phoenix, "Dirty");

// console.log("Name: " + bob.name + ", Location: " + bob.location.name + ", Distance to Load #1001: " + bob.location.getDistance(load1.origin.key) + ", Duty Status: " + bob.dutyStatus + ", Drive Hours: " + bob.driveHours + ", On-Duty Hours: " + bob.dutyHours);
// console.log("Name: " + dave.name + ", Location: " + dave.location.name + ", Duty Status: " + dave.dutyStatus + ", Drive Hours: " + dave.driveHours + ", On-Duty Hours: " + dave.dutyHours);

// console.log("Load #" + load1.loadNumber + ", Pickup: " + load1.origin.name + ": " + load1.pickupAppt.toLocaleString() + ", Destination: " + load1.destination.name + ": " + load1.deliveryAppt.toLocaleString() + ", " + load1.currentStatus);
// console.log("Trailer #" + trailer1.trailerNumber + ", Location: " + trailer1.currentLocation.name + ", Clean or Dirty?: " + trailer1.cleanStatus);

// console.log("City Name: " + phoenix.name + ", Distance to Los Angeles: " + phoenix.getDistance("losAngeles") + ", Distance to Las Vegas: " + phoenix.getDistance("lasVegas"));
// console.log("City Name: " + losAngeles.name + ", Distance to Phoenix: " + losAngeles.getDistance("phoenix") + ", Distance to Las Vegas: " + losAngeles.getDistance("lasVegas"));

const travelHours = bob.getTravelTime(load1.origin);
const bobArrivalTime = gameTime.getTime() + (travelHours * 60 * 60 * 1000);

if (bobArrivalTime > load1.pickupAppt) {
    console.log("LFG");
} else if (bobArrivalTime < load1.pickupAppt) {
    console.log("Nope!");
}