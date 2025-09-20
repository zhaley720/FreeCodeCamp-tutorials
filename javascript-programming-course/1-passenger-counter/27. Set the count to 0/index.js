let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    
    let savedEl = count + " - ";

    document.getElementById("prev-entries").textContent += savedEl;

    count = 0;
    countEl.textContent = count;

    console.log(count)
}


