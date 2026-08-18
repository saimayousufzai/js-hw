// 1. Light Switch
let lightStatus = ["OFF", "ON"];
let switchPosition = 1; 

if (switchPosition === 0) {
    console.log("The room is dark. Light is: " + lightStatus[0]);
} else {
    console.log("The room is bright. Light is: " + lightStatus[1]);
}

// 2. Water Bottle

let bottleStatus = ["Empty", "Half Full", "Full"];
let waterLevel = 50; 

if (waterLevel === 0) {
    console.log("Bottle is: " + bottleStatus[0]);
} else if (waterLevel <= 50) {
    console.log("Bottle is: " + bottleStatus[1]);
} else {
    console.log("Bottle is: " + bottleStatus[2]);
}

// 3. Traffic Light

let colors = ["Red", "Yellow", "Green"];
let currentLight = colors[0]; 

if (currentLight === "Red") {
    console.log("Stop the car!");
} else if (currentLight === "Yellow") {
    console.log("Slow down your car.");
} else {
    console.log("Go clean road!");
}

// 4. Smartphone Sound

let phoneModes = ["Silent", "Vibrate", "Ring"];
let selectedMode = phoneModes[2]; 

if (selectedMode === "Silent") {
    console.log("No sound.");
} else if (selectedMode === "Vibrate") {
    console.log("The phone shakes.");
} else {
    console.log("The phone plays music.");
}

// 5. Door Lock

let lockStates = ["Locked", "Unlocked"];
let highSecurity = "No";

if (highSecurity === "Yes") {
    console.log("Door is: " + lockStates[0]);
} else {
    console.log("Door is: " + lockStates[1]);
}


// 6. TV Remote Volume

let soundLevels = ["Quiet", "Medium", "Loud"];
let volumeNumber = 80;

if (volumeNumber < 20) {
    console.log("TV is: " + soundLevels[0]);
} else if (volumeNumber < 60) {
    console.log("TV is: " + soundLevels[1]);
} else {
    console.log("TV is: " + soundLevels[2]);
}


// 7. Tea Temperature

let teaStatus = ["Cold", "Warm", "Too Hot"];
let heatDegree = 90;

if (heatDegree < 40) {
    console.log("Tea is: " + teaStatus[0]);
} else if (heatDegree < 70) {
    console.log("Tea is: " + teaStatus[1]);
} else {
    console.log("Tea is: " + teaStatus[2] + ". Wait a minute.");
}

// 8. Laptop Power Battery

let powerAlerts = ["Battery Full", "Normal", "Low Battery! Please charge"];
let batteryLife = 15;

if (batteryLife > 80) {
    console.log(powerAlerts[0]);
} else if (batteryLife > 20) {
    console.log(powerAlerts[1]);
} else {
    console.log(powerAlerts[2]);
}

// 9. Pencil Box

let pencilCounts = ["No pencils", "Few pencils", "Box is full"];
let totalPencils = 0;

if (totalPencils === 0) {
    console.log(pencilCounts[0]);
} else if (totalPencils <= 5) {
    console.log(pencilCounts[1]);
} else {
    console.log(pencilCounts[2]);
}

// 10. Daily Homework Check

let schoolAlerts = ["Good job!", "Not finished yet", "Bad status"];
let taskDone = "Yes";

if (taskDone === "Yes") {
    console.log(schoolAlerts[0]);
} else if (taskDone === "No") {
    console.log(schoolAlerts[1]);
} else {
    console.log(schoolAlerts[2]);
}

// 11. Fan Speed Switch

let fanSpeeds = ["Slow", "Medium", "Fast"];
let buttonPressed = 2; 

if (buttonPressed === 0) {
    console.log("Fan is: " + fanSpeeds[0]);
} else if (buttonPressed === 1) {
    console.log("Fan is: " + fanSpeeds[1]);
} else {
    console.log("Fan is: " + fanSpeeds[2]);
}

// 12. Milk Expiry Check

let milkQuality = ["Fresh Milk", "Bad Milk"];
let daysInFridge = 10;

if (daysInFridge < 5) {
    console.log(milkQuality[0]);
} else {
    console.log(milkQuality[1] + ". Throw it away!");
}

// 13. Weather Umbrella Plan

let clothChoices = ["T-Shirt", "Raincoat", "Winter Jacket"];
let skyCondition = "Rainy";

if (skyCondition === "Sunny") {
    console.log("Wear a: " + clothChoices[0]);
} else if (skyCondition === "Rainy") {
    console.log("Wear a: " + clothChoices[1]);
} else {
    console.log("Wear a: " + clothChoices[2]);
}

// 14. House Window

let windowStates = ["Closed", "Open"];
let weatherOutside = "Cold";

if (weatherOutside === "Cold") {
    console.log("Keep window: " + windowStates[0]);
} else {
    console.log("Keep window: " + windowStates[1]);
}


// 15. Ice Cream Melt Time

let iceCreamStatus = ["Solid", "Melting", "Liquid Soup"];
let outsideTemp = 38; // Celsius

if (outsideTemp < 5) {
    console.log("Ice cream is: " + iceCreamStatus[0]);
} else if (outsideTemp < 25) {
    console.log("Ice cream is: " + iceCreamStatus[1]);
} else {
    console.log("Ice cream is: " + iceCreamStatus[2]);
}


// 16. Book Pages Progress

let readingLevels = ["Just started", "Halfway done", "Finished the book"];
let pageNumber = 150;

if (pageNumber < 10) {
    console.log(readingLevels[0]);
} else if (pageNumber < 100) {
    console.log(readingLevels[1]);
} else {
    console.log(readingLevels[2]);
}


// 17. Wallet Cash Check

let walletStatus = ["No money", "Have some cash", "Rich wallet"];
let cashAmount = 50;

if (cashAmount === 0) {
    console.log(walletStatus[0]);
} else if (cashAmount < 100) {
    console.log(walletStatus[1]);
} else {
    console.log(walletStatus[2]);
}

// 18. Watch Clock Alarm

let alarmModes = ["Alarm Off", "Alarm Set On"];
let morningHour = 7;

if (morningHour === 7) {
    console.log("Wake up! Ringing sound! Mode is: " + alarmModes[1]);
} else {
    console.log("Silent clock. Mode is: " + alarmModes[0]);
}

// 19. Room AC Cooling Level

let acModes = ["Cool Mode", "Dry Mode", "Eco Mode"];
let roomHumidity = 80;

if (roomHumidity < 30) {
    console.log("AC is running on: " + acModes[2]);
} else if (roomHumidity < 60) {
    console.log("AC is running on: " + acModes[0]);
} else {
    console.log("AC is running on: " + acModes[1]);
}

// 20. Microwave Timer Beeper

let timerMessages = ["Cooking...", "Food is Ready!", "Error"];
let secondsLeft = 0;

if (secondsLeft > 0) {
    console.log(timerMessages[0]);
} else if (secondsLeft === 0) {
    console.log(timerMessages[1] + " BEEP BEEP!");
} else {
    console.log(timerMessages[2]);
}
