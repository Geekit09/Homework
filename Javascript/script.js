// 1.STRING
//console.log(typeof 123546);

// Хувьсагч - Variables
// var huvisagch = true;
// console.log(typeof huvisagch);

// Converting DataType -
// 1. toog string bolgoh

// var nas = 29;
// var strNas = nas.toString();

// console.log(strNas);
// console.log(nas);

// 2. String datag too ruu horvuuleh
// minii ner  => miniiNer salangad vg holboj bichij bga bol ehnii vg tom (Javascript deer)
// parse integer (Number - buhel too)

// var rating = "5";
// var numRating = parseInt(5);
// console.log(parseInt(rating));
// console.log(numRating);

// string, num hamt heregleh

// var ner = "Narada";
// var nas = 20;
// console.log(
//   "Сайн байна уу?... Миний нэр бол " + ner + ". Би " + nas + " настай. ");

// var myVar1 = "Сайн";
// var myVar2 = "Байна уу...";

// console.log(myVar1 + " " + myVar2);

// Operators in JS

// var x = 5;
// //++
// x++; //=> x = x + 1
// //--
// x--; //=> x = x - 1
// //
// var y = 7; //3
// y += 3; // => y = y + 3;
// y += 3;
// y += 3;
// y += 10; // 26

// var z = 4;

// z *= 3; //=> z = z * 3
// z /= 3;

// remainder operator %

// var p = 10%4;
// var t = 10%7;
// console.log(p - t);

// Condition == & eswel ===

//!== yalgaatai hesgiig shalgah

// >

// AND &&, OR || logic
//condition1 && condition2

// condition1 || condition2 => alig neg ni bielehed l bonlo (2laa true bh albagvi)
//  Len = PI*D - toirgiin urt
//  pi = 3.1415

//  area = PI*r2

// var radius = 6;
// var pi = 3.1415;
// var diameter = radius * 2;

// var len = pi * diameter;
// var area = pi * radius ** 2;

// console.log("Тойргийн урт: " + len);
// console.log("Тойргийн талбай: " + area);

// 5м болон 7м талуудтай тэгш өнцөгтийн талбай болон периметр, диагоналийг ол...

// var a = 5;
// var b = 7;
// var p = (a + b) * 2;
// var s = a * b;

// console.log("Периметр: " + p);
// console.log("Талбай: " + s);

// var a = 5;
// var b = 7;
// var c = (a ** 2 + b ** 2) ** (1 / 2);

// console.log("Тэгш өнцөгтийн талбай: " + p);
// console.log("Тэгш өнцөгтийн талбай: " + s);
// console.log("Тэгш өнцөгтийн талбай: " + c);

// 10 ажилтантай стартап компанийн ажилтан тус бүр 1.2 сая, 1.5 сая, 1.1 сая, 2 сая, 2.2 сая, төгрөгийн цалинтай бол ажилчдийн дундаж цалинг тооц...

// var a = 1.2;
// var b = 1.5;
// var c = 1.1;
// var d = 2;
// var e = 2.2;

// var say = (a + b + c + d + e) / 5;

// console.log("Дундаж цалин: " + say);

// If Statement, if else
// var nas = 16;
// if (nas >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Child");
// }

// var s1 = 1.2;
// var s2 = 1.5;
// var s3 = 1.1;
// var s4 = 2;
// var s5 = 2.2;
// var s6 = 0.8;
// var s7 = 0.7;
// var s8 = 0.75;
// var s9 = 0.6;
// var s0 = 0.5;

// var a = (s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s0) / 10;
// if (a >= 0.85) {
//   console.log("Дунджаас их: " + a);
// } else {
//   console.log("Дунджаас бага: " + a);
// }

var nas = prompt("Нас оруул...");
if (nas >= 0) {
  if (nas >= 50) {
    console.log("Old age");
  } else if (nas >= 13 && nas <= 19) {
    console.log("Teenager");
  } else if (nas >= 20 && nas <= 49) {
    console.log("Adult");
  } else if (nas >= 0 && nas <= 3) {
    console.log("Child");
  } else if (nas >= 0 && nas <= 3) {
    console.log("CӨөл");
  } else if (nas >= 0 && nas <= 3) {
    console.log("Орь залуу нас");
  } else if (nas >= 0 && nas <= 3) {
    console.log("Залуу нас");
  } else if (nas >= 0 && nas <= 3) {
    console.log("Идэр нас");
  } else if (nas >= 0 && nas <= 3) {
    console.log("Хижээл нас");
  } else if (nas >= 0 && nas <= 3) {
    console.log("Өтөл нас");
  } else if (nas >= 0 && nas <= 3) {
    console.log("Өндөр нөс");
  }
} else {
  console.log("Buruu utga oruulsan bn!");
}
