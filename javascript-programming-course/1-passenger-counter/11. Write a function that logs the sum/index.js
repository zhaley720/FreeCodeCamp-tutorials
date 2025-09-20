let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function logTimes() {
    console.log("First lap time: " + lap1 + 's');
    console.log("Second lap time: " + lap2 + 's');
    console.log("Third lap time: " + lap3 + 's');

    let totalTime = lap1 + lap2 + lap3;

    console.log();
    console.log("Total lap time: " + totalTime + 's');

    // console.log("alt log: " + lap1 + lap2 + lap3);
    // above console.log treats adding lap variables as concatonating a string rather than summing ints
}

logTimes();