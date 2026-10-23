// Q1: ARRAY OF FIVE NUMBERS
let nums = [10, 20, 30, 40, 50];
console.log(nums);

// Q2: THREE FRUITS
let fruits = ["Apple", "Strawberry", "Grapes"];
console.log(fruits[0]);
console.log(fruits[2]);

// Q3: ADD MANGO
let fruit = ["Apple", "Banana", "Orange"];
fruit.push("Mango");
console.log(fruit);

// Q4: LENGTH
let numbers = [10, 20, 30, 40, 50];
console.log(numbers.length);

// Q5: HELLO WORLD! FUNCTION
function sayhello() {
    console.log("Hello World!");
}
sayhello();

// Q6: SUM FUNCTION
function add(a, b) {
    console.log(a + b);
}
add(5, 10);

// Q7: SQUARE
function square(num) {
    return num * num;
}
console.log(square(4));

// Q8: EVEN ODD
function checkevenodd(num) {
    if (num % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
checkevenodd(7);

// Q9: LARGEST
function findlargest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(findlargest(10, 25));

// Q10: WELCOME MESSAGE
function welcome(name) {
    console.log("Welcome" + " " + name + "!");
}
welcome("A.H");

// Q11: STUDENT OBJECT
let student1 = {
    name: "HAYAT",
    age: 16,
    class: "10th"
};
console.log(student1.name);
console.log(student1.age);
console.log(student1.class);

// Q12: CAR OBJECT
let car = {
    brand: "Mercedes-Benz",
    model: " Electric G-Wagon",
    color: "Navy-Blue"
};
console.log(car.brand);

// Q13: UPDATE AGE
let student2 = {
    name: "Ali",
    age: 18
};
student2.age = 20;
console.log(student2);

// Q14: SUM OF ARRAY
function sumarray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(sumarray([10, 20, 30, 40, 50]));

// Q15: STUDENT NAME & MARKS
let studentdata = {
    name: "Hayat",
    marks: 95
};
function printstudentinfo(s) {
    console.log("Name: " + s.name);
    console.log("Marks: " + s.marks);
}
printstudentinfo(studentdata);