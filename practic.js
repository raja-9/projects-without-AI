
Task = {
    Name: "chander",
    Age: 20,
    Job: "Developer",
    ID: 1
}
// for whole object
console.log(Task);

// for specific property
console.log(Task.Name);
console.log(Task.Age);
console.log(Task.Job);
console.log(Task.ID);

// dynamic property access
const Target = Task["Name"];

console.log(Target);


