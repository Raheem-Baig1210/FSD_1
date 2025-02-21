var car={  // Creating the object of name "car"
    brand: "BMW",
    model: "Latest",
    year: 2024,
    arr:['Air Conditioning', 'Sunroof', 'Bluetooth']
}
console.log(car)

car.color="Red"  // Adding the new property in the car object i.e. color
console.log(car)

car.year=2025  // Updating the value of the year
console.log(car)

delete car.year  // Deleting the property from the object car
console.log(car)
