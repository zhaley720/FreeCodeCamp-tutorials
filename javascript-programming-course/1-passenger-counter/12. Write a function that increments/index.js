let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLaps() {
    lapsCompleted++;
}

for (let i = 0; i < 3; i++) {
    incrementLaps();
}


console.log(lapsCompleted)