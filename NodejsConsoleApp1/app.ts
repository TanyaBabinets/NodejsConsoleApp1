console.log('To Do LIST');


type Task = {
    id: number;
    title: string;
    descr: string;
    done: boolean;
};

let tasks: Task[] = [];
let counter: number = 1;

function addTask(title: string, descr: string): void {
    let newTask: Task = {
        id: counter++,
        title: title,
        descr: descr,
        done: false
    };
    tasks.push(newTask);//add to array tasks
}
function removeTask(id: number): void {
    tasks = tasks.filter(task => task.id !== id);
}
function markTaskAsCompleted(id: number): void {
    const task = tasks.find(task => task.id === id);
    if (task) { task.done = true; }
}

function listTasks(): void {
    tasks.forEach(task => {
        console.log(`Id:${task.id}, Title:${task.title},
            Description: ${task.descr}, Status: ${task.done}`);
    });

}
function listCompletedTasks(): void {
    tasks.filter(task => task.done)
        .forEach(task => {
            console.log(`Id:${task.id}, Title:${task.title},
            Description: ${task.descr}, Status: ${task.done}`);
        });
}
function listPendingTasks(): void {
    tasks.filter(task => !task.done)
        .forEach(task => {
            console.log(`Id:${task.id}, Title:${task.title},
            Description: ${task.descr}, Status: ${task.done}`);
        });
}

addTask("Number 1", "Fitness hour 9.00-10.00");
addTask("Number 2", "Go to work 10.30-17.00");
addTask("Number 3", "Tennis training 18.00-20.00");
addTask("Number 4", "Visiting parents 20:30-21.00");
addTask("Number 5", "Party with friends 21.10-23:00");
listTasks();
console.log("//////////////done No.2/////////////////////////");
markTaskAsCompleted(2);
listCompletedTasks();
console.log("//////////////not done yet/////////////////////////");
listPendingTasks();
console.log("//////////////delete No.2, 3/////////////////////////");
removeTask(2);
removeTask(3);
listTasks();






