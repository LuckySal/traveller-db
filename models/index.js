const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

Traveller.belongsToMany(Trip, {
    through: "TripTravellers",
});

Trip.belongsToMany(Traveller, {
    through: "TripTravellers",
});

Trip.belongsToMany(Location, {
    through: "TripLocations",
});

Location.belongsToMany(Trip, {
    through: "TripLocations",
});

module.exports = { Traveller, Trip, Location };
