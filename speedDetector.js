// This program will take the speed of a car as input and give the driver an "OK" message if within speed limit. Else, the driver will get demerit points up to 12. 13 points or more equal licence suspension.

function speedDetector(driverSpeed) {
    const speedLimit = 70;
    // Check if the driver speed is below the speed limit and print OK message.
    if (driverSpeed <= speedLimit) {
        console.log("OK");
        return;     // Terminate function here if within speedLimit.
    }

    const demeritPoints = Math.floor((driverSpeed - 70) / 5); // This line calculates demerit points and assigns the result to a variable: demeritPoints. The Math.floor method is used to round down the result to a whole number.

    switch (true) { // Switch statement checks if demeritPoints are below 12. If true, demerit points will be printed, else licence is suspended.
        case demeritPoints <= 12:
            console.log("Points: " + demeritPoints);
            break;
    default:
        console.log("Licence suspended");
    }        
}

speedDetector(135); // Invokes the speedDetector function and passes driver speed as argument. 135 in this case.
