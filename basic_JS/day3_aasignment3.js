// Task 1
function task1() {
    const marks = [80, 90, 70, 85, 95];
    const avg = marks.reduce((a,b)=>a+b,0) / marks.length;
    console.log("Task 1:", avg);
}

// Task 2
function task2() {
    const numbers = [1,2,3,4,5,6,7,8,9];
    const evens = numbers.filter(n => n%2===0);
    console.log("Task 2:", evens);
}

// Task 3
function task3() {
    const cart = { item: "Laptop", price: 45000, quantity: 2 };
    const total = cart.price * cart.quantity;
    console.log("Task 3:", total);
}

// Task 4
function task4() {
    let movies = ["Inception", "Interstellar", "The Matrix"];
    movies.push("The Shawshank Redemption");
    movies.pop();
    console.log("Task 4:");
    for(let i=0;i<movies.length;i++){ console.log(movies[i]); }
}

// Task 5
function task5() {
    const user = { name:"Aman", age:21, course:"JS" };
    const json = JSON.stringify(user);
    const obj = JSON.parse(json);
    console.log("Task 5:", json, obj);
}

// Task 6
function task6() {
    const arr = [10, 40, 25, 80, 15];
    let max = arr[0];
    for(let i=1;i<arr.length;i++){ if(arr[i]>max) max = arr[i]; }
    console.log("Task 6:", max);
}

// Task 7
function task7() {
    const names = ["ram", "shyam", "mohan"];
    const upper = names.map(n => n.toUpperCase());
    console.log("Task 7:", upper);
}

// Call all tasks
task1();
task2();
task3();
task4();
task5();
task6();
task7();