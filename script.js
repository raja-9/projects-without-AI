let task = [];

document.getElementById("addTask").addEventListener("click", addTask);

Counter = (function() {
    var count = 0;
    return function() {
        count++;
        return count;
    };
})();

function addTask() {
    var input = document.getElementById("inputString").value;
    if (input === "") {
        alert("Please enter a task.");
        return;
    }
    ID = Counter();
    task.push(input);
    displayTask(task);
}   

function displayTask(task) {
    var display = document.getElementById("taskDisplay");
    display.innerHTML = "";
    for (var i = 0; i < task.length; i++) {
        display.innerHTML += "<p>" + task[i] + "</p>";
    }
}

