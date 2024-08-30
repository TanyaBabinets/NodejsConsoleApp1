console.log('To Do LIST');
let tasks = [];
let counter = 1;
function addTask(title, descr) {
    let newTask = {
        id: counter++,
        title: title,
        descr: descr,
        done: false
    };
    tasks.push(newTask); //add to array tasks
}
function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}
function markTaskAsCompleted(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.done = true;
    }
}
function listTasks() {
    tasks.forEach(task => {
        console.log(`Id:${task.id}, Title:${task.title},
            Description: ${task.descr}, Status: ${task.done}`);
    });
}
function listCompletedTasks() {
    tasks.filter(task => task.done)
        .forEach(task => {
        console.log(`Id:${task.id}, Title:${task.title},
            Description: ${task.descr}, Status: ${task.done}`);
    });
}
function listPendingTasks() {
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
//// Переменные и константы
//// C помощью var мы можем определить два и более раз переменную с одним и тем же именем
//var x = 10;
//console.log(x);
//var x = 20;
//console.log(x);
//let y = 10;
//console.log(y);
//// let y = 20; // ошибка компиляции, так как переменная y уже объявлена
//var number1 = 5;
//if (true) {
//    var number1 = 10;
//    console.log(number1); // 10
//}
//console.log(number1); // 10
//let number2 = 15;
//if (true) {
//    let number2 = 20;
//    console.log(number2); // 20
//}
//console.log(number2); // 15 
//Print();
//Show();
//console.log(number3); // неопределённое значение переменной
//var number3 = 100;
//// alert(number4); // ошибка компиляции: переменная не существует
//let number4 = 100;
//const n = 5;
//// n = 10; // ошибка компиляции: константа защищена от изменения
//function Print() {
//    if (true) {
//        var a = 7;
//        console.log(a);
//    }
//    console.log(a);
//}
//function Show() {
//    if (true) {
//        let b = 23;
//        console.log(b);
//    }
//    // console.log(b); // ошибка компиляции: переменная не объявлена
//}
//# sourceMappingURL=app.js.map