let task = [];

Counter = (function() {
    var count = 0;
    return function() {
        count++;
        return count;
    };
})();

function addTask() {
    var input = document.getElementById("inputString").value;
    ID = Counter();
    task.push(input);
    displayTask(task);
}   
