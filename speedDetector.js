//write a program that takes as input the speed of a car e.g 80. 
//If the speed is less than 70, it should print “Ok”. 
//Otherwise, for every 5 km/s above the speed limit (70), 
//it should give the driver one demerit point and print the total number of demerit points.
//For example, if the speed is 80, it should print: “Points: 2”.
// If the driver gets more than 12 points, the function should print: “License suspended”.


//prompts the user to enter speed of the car
const speedOfCar = prompt("Enter speed reached");
const speedOfCarInt = parseInt(speedOfCar);


//calculate action to take depending on speed of the car
function checkSpeed(speed){

    const excessSpeed = speed - 70;
    if(speed <= 70){
        return "OK";
    }else if(speed > 70){
        const points = Math.floor((excessSpeed) / 5);
        if(points > 12){
            return "License suspended"
        }else{
            return points;
        }
    };

    
}

//results on the action taken
const result = checkSpeed(speedOfCarInt);

//alerts the user on the action taken
alert(result);