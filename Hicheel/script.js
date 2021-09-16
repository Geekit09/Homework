// // Array methods
// var arr = [5, 6, 7, 8, 9, 10];

// // push - массивийн сүүлд элемент нэмж өгнө

// arr.push(10, 11, 12, 13, 14);

// // pop - Массивийн сүүлийн элемент нь устгана

// arr.pop();
// arr.pop();
// arr.pop();


// // unshift - массивийн эхэнд элмент нэмнэ
// arr.unshift(2, 3, 4);

// // shift() - массивийн эхний элементийг устгана.
// arr.shift();

// // reverse - Массивийг шууд урвуу байдалруу оруулна.
// arr.reverse();
// arr.pop();
// //11, 10, 9, 8, 7, 6, 5, 4, 3
// // splice - Массив дотроос дурын элементийг устгана.
// arr.splice(3, 1);

// // slice - arr-g tasdah awah

// var x = arr.slice(4, 1)

// // EcmaSCript
// ES1, ES2, ES3 - EcmaScript
// ES5 - 2009 - BUH browser DEMJINE / VAR /
//     ES6 - 2015 - SHINE standart / LET /
//         ES7 - 2016 -
//         ES8 - 2017
// ES9 - 2018
// ES10 - 2019
// ES11 - 2020
// ES12 - 2021

// SCOPE {}

// let ner = "Geekit" // Global variable

// {
//     var x = 5; // Local Variable
// }
// console.log(x);

// {
//     let y = 6;
//     console.log(ner);
// }

// Оролт: (5, 6, 0, 1, 2, 7) target=9;
// Гаралт: [4,5];
// let arr = [5, 6, 0, 1, 2, 7];
// let target = 9;
// for (let i = 0; i < arr.length; i++);
// console.log(arr)
// for (let j = i + 1; k < arr.length; j++) {
//     if (arr[i] + arr[j] === target {
//         XPathResult.push(i, j);
//     )
//     }

// let result = [];
// let arr = ["Ulaanbaater", 123, true, "Beijing", 258, "Tokyo", false, "Seoul"];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         result.push(i, j);
//     }
// }

// Array - Data Structure
// Object

// let obj = {
//       ner: "Narada",
//         mergejil: "Designer"
//     }
//  

// let obj1 = {
//     ner: "Narada",
//     mergejil: "Software Expert"
// }
// // [{}, {}, {},]
// // let users = [{ner: "Gantulga", nas: 25}, {ner:"Nyamgerel"}]

// let obj3 = [obj, obj1];

// for (let i = 0; i < obj3.length; i++) {
//     console.log(obj3[i]["ner"])
// }

// 
// let obj = {
//     ner: "Narada",
//     mergejil: "Designer",
//     email: "blabla@gmail.com",
//     cell: 654984489,
// }

// let obj2 = {
//     ner: "Аз",
//     mergejil: "Багш",
//     email: "blabla2@gmail.com",
//     cell: 654984489,
// }
// obj2.ner = "Азаа";
// obj2.ger = 7 - 99;

// let obj3 = {
//     ner: "Үзмээ",
//     mergejil: "Зураач",
//     email: "blabla3@gmail.com",
//     cell: 654984489,
// }

// let obj4 = {
//     ner: "Naraa",
//     mergejil: "Үүрэн холбооны ажилтан",
//     email: "blabla4@gmail.com",
//     cell: 654984489,
// }

// let obj5 = {
//     ner: "Bold",
//     mergejil: "Засварчин",
//     email: "blabla5@gmail.com",
//     cell: 1234569,
// }

// let obj6 = [obj, obj2, obj3, obj4, obj5];

// for (let i = 0; i < obj6.length; i++) {
//     if (obj6[i].email === email) {
//         console.log(obj6[i])
//     }
// }

// // for in , for of

// for (usr of obj6) {
//     if (usr.ner === ner) {
//         console.log("ner");
//     }
// }


// for (pro in obj6) {
//     if (pro === "email") {

//         console.log(obj6[pro]);
//     }
// }

// Primitive Data type
// 1. String
// 2. Number
// 3. Boolean
// 4. undefined
// 5. null

// Object, Array -Non primitive
// function - Функц гэдэн нь аливаа программийг бүрдүүлж, бүрэлдэхүүн хэсэг.


// function myfunc() {
//     let tursunOn = 2000;
//     let nas = 2021 - 2000;
//     return nas;
// }
// let x = myFunc();

// function nasTootsoh(on) {
//     return 2021 - оn;


//     let person = nasTootsoh(2000);
//     let person = nasTootsoh(2001;
//     let person = nasTootsoh(1997);
//     let person = nasTootsoh(1995);


// Оролт - 1, 0, 5; Гаралт : 1
// Оролт 5, 3, 1; Гаралт: 0


// function myfirst(too1, too2, too3) {
//     let teg = 0;
//     if (too1 === 0) {
//         teg++;

//     }
//     if (too2 === 0) {
//         teg++;

//     }
//     if (too3 === 0) {
//         teg++;

//     }

//     return teg;


// }


// function myfirst(a, b) {
//     return a ** 3;
// }


// function myfirst(a) {
//     return a.toString().length;
// }

// function myfirst(a) {
//     let d = 0;
//     for (let i = 0; i < a.toString().length; i++)
//         d += +a.toString()[i]
//     return d;
// }

// function myfirst(a) {
//     let noob = 0;
//     for (let i = 0; i < a.toString().length; i++) {
//         if (a.toString()[i] % 2 === 0) {
//             noob++;
//         }

//     }

//     return noob;
// }


// function myfirst(a) {
//     let noob = 0;
//     for (let i = 0; i < a.toString().length; i++) {
//         if (a.toString()[i] % 2 === 0) {
//             noob += +a.toString()[i];

//         }
//     }
//     return noob;
// }



// function noob(a) {
//     return a === +a.toString().split("").reverse().join("");
// }

// function noob(a) {
//     let = noob
//     for (let i = 0; i < a; i++) {
//         if (a.toString().length / )

//     }
// }


//CallStack - Нэг функцыг өөр функцэд дуудахыг



//Callback - аргумент хэлбэрээр функц дамжуулах

// Recursion - функцыг өөрийг нь дотор нь дуудах


function factorial(a) {
    if (a === 1) {

        return a;
    }
    return a * factorial(a - 1)
}

