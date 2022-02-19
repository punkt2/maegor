'use strict';

const {
	Measurement,
	Length,
	Temperature,
	UnitConverterLinear
} = require('./lib/');

let initial = new Measurement(1, Length.inches);

let asCentimeters = initial.convertedTo(Length.centimeters);
console.log(asCentimeters.toString());


// Custom units

class LengthAdditions extends Length {
	// 1 earthRadius is approx. 6371 meters
	static get earthRadius() {
		return new Length('er', 6371);
	}
}

let marathon = new Measurement(42.195, Length.kilometers);
marathon.convertTo(LengthAdditions.earthRadius);

console.log(`Marathon to earth radius: ${marathon.toString()}`);


// 1 earthRadius is approx. 12742 meters
Length.addUnit('earthDiameter', 'eda', 12742);

marathon.convertTo(Length.earthDiameter);
console.log(`Marathon to earth diameter: ${marathon.toString()}`);
