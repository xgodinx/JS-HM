"use strict"

document.getElementById("text").textContent = result;

function result(){
    console.log("Учим JS");
 // ["learn", "JS"].forEach(alert);
 const userProfile = {
     name: "Dima",
     age: null,
     isStudent: true,
     skills: "HTML CSS",
     user: { name : "Dima", age:null}
     }

console.log(
    userProfile
    );

console.log(
    typeof(userProfile),
    typeof(userProfile.name),
    typeof(userProfile.age),
    typeof(userProfile.isStudent),
    typeof(userProfile.skills)
    );

console.log("----------------------------------------")

function learn(){
  console.log("learn");
  console.log("JS");
}
learn();    // вызов функции

console.log("----------------------------------------")

function isLet(){
    let num = 4;
    let num2 = 4;
    let sum = num + num2;
    console.log(num + num2 - sum);
    console.log(sum);
}
isLet();
 
console.log("----------------------------------------")

 let 
    myVariable = 10,
    car = "yellow", 
    kek = "kopes";
    myVariable = 20;
    car = kek;
    kek = car;
 
 console.log(myVariable , car, kek === car);

 console.log("----------------------------------------")


 function data(){
     let color = "blue",
     fz = 18;
     console.log(color, fz);
 }
 data();

 let fz = 22,
     color = "green";
 console.log(fz , color, "Changed values");


 console.log("----------------------------------------")


 function homeWork() {
     let eyesColor, user;
     const userName = "Vasia";
     user = userName;
     console.log(user, user === userName);
} 
homeWork()

console.log("----------------------------------------")

 let house = "big";
 console.log(house);

 house = "small";
 console.log(house);

 house = typeof((house));
 console.log(house);

 house = 50;
 console.log(house, typeof house);

 house = false;
 console.log(Number(house), house);


console.log("----------------------------------------")

 let q;
 console.log(typeof q, "/ Not inizialized");
 q = 1;

 if (typeof q === "undefined"){
     console.log("unknown value");
    } 
 else{
     console.log('value');
    q = "undefined";
 }
console.log(q);

q = null;
console.log( typeof q);

console.log("----------------------------------------")

 const myObject = {
     name: "Dima",
     age: null,
     city: "Masala"
 }
 console.log(myObject);
 console.log(typeof myObject);

 myObject.city = "World";
 console.log(myObject);
 console.log(typeof myObject);

console.log("----------------------------------------")


let numbers = "50" + "20",
    sum = numbers;
console.log(String(numbers, sum), typeof numbers, sum);


numbers, sum = Number(sum);
console.log(numbers,sum = 50 + 20, typeof numbers, typeof(sum));
}

 console.log("Учим JS");
 // ["learn", "JS"].forEach(alert);
 const userProfile = {
     name: "Dima",
     age: null,
     isStudent: true,
     skills: "HTML CSS",
     user: { name : "Dima", age:null}
     }

console.log(
    userProfile
    );

console.log(
    typeof(userProfile),
    typeof(userProfile.name),
    typeof(userProfile.age),
    typeof(userProfile.isStudent),
    typeof(userProfile.skills)
    );

console.log("----------------------------------------")

function learn(){
  console.log("learn");
  console.log("JS");
}
learn();    // вызов функции

console.log("----------------------------------------")

function isLet(){
    let num = 4;
    let num2 = 4;
    let sum = num + num2;
    console.log(num + num2 - sum);
    console.log(sum);
}
isLet();
 
console.log("----------------------------------------")

 let 
    myVariable = 10,
    car = "yellow", 
    kek = "kopes";
    myVariable = 20;
    car = kek;
    kek = car;
 
 console.log(myVariable , car, kek === car);

 console.log("----------------------------------------")


 function data(){
     let color = "blue",
     fz = 18;
     console.log(color, fz);
 }
 data();

 let fz = 22,
     color = "green";
 console.log(fz , color, "Changed values");


 console.log("----------------------------------------")


 function homeWork() {
     let eyesColor, user;
     const userName = "Vasia";
     user = userName;
     console.log(user, user === userName);
} 
homeWork()

console.log("----------------------------------------")

 let house = "big";
 console.log(house);

 house = "small";
 console.log(house);

 house = typeof((house));
 console.log(house);

 house = 50;
 console.log(house, typeof house);

 house = false;
 console.log(Number(house), house);


console.log("----------------------------------------")

 let q;
 console.log(typeof q, "/ Not inizialized");
 q = 1;

 if (typeof q === "undefined"){
     console.log("unknown value");
    } 
 else{
     console.log('value');
    q = "undefined";
 }
console.log(q);

q = null;
console.log( typeof q);

console.log("----------------------------------------")

 const myObject = {
     name: "Dima",
     age: null,
     city: "Masala"
 }
 console.log(myObject);
 console.log(typeof myObject);

 myObject.city = "World";
 console.log(myObject);
 console.log(typeof myObject);

console.log("----------------------------------------")


let numbers = "50" + "20",
    sum = numbers;
console.log(String(numbers, sum), typeof numbers, sum);


numbers, sum = Number(sum);
console.log(numbers,sum = 50 + 20, typeof numbers, typeof(sum));

console.log("----------------------------------------")


const username = "Tom";
const aboutUser = `Name: ${username}`
console.log(aboutUser);

console.log("----------------------------------------")


let amount = 3;
amount += 2;
console.log(amount);
amount--;
console.log(++amount);

console.log("----------------------------------------")

let zxc = {
    z: 10,
    x: 'qw',
    c: true
}
console.log(typeof zxc);
console.log(typeof zxc.z);
console.log(typeof zxc.x);
console.log(typeof zxc.c);
zxc.d = null;
zxc.f;
const qaz = zxc;
qaz.x = 'as';
zxc.x = 'ra';   /* доступ к свойству того или иного
                объекта возможен с помощью оператора .
                */
console.log(qaz, zxc, typeof qaz);


console.log("----------------------------------------")

let boss = 10;
boss = String(boss);
boss = '10';
console.log(boss, typeof(boss));
// 10, string

let poof;
console.log(poof, typeof(poof));

poof = 500;
console.log(poof, typeof(poof));

poof = true;
console.log(poof, typeof(poof));

poof = 'cat';
console.log(poof, typeof(poof));

poof = null;
console.log(poof, typeof(poof));

console.log("----------------------------------------")

const fu = function(){
    console.log("Hi, world") // Hi, world
}
fu()
// fu = "Not a Function"; // error


// function fu(){
//     console.log("Hi world!");
// }
// fu();
// fu = "Im String";
// fu();  // error - not a funtion

console.log("----------------------------------------")

const myCity = {
    city: "Masala",
    status: "Village",
    country: "Finland",
    info: {
        isPopular: false,
        population: 5000,
    }
}
myCity.lidl = false;
console.log(myCity, typeof(myCity));
console.log("Write your country: " + myCity.country);
myCity.city = "Helsinki";
console.log("Write your city: " + myCity.city);
myCity.status = "Capital";
console.log("Write your place: " + myCity.status);
console.log("Have Lidl? " + myCity.lidl);
delete myCity.city;
delete myCity.status;
delete myCity.lidl;
myCity.deleted = "City, status, lidl =  deleted";
console.log(myCity, typeof(myCity));
const airportPropertyName = "airport";
const metroPropertyName = "metro";
console.log("Have airport? " + airportPropertyName);
console.log("Have metro? " + metroPropertyName);
myCity["airport"] = true;
myCity["metro"] = true;
delete myCity.deleted;
console.log(myCity, typeof(myCity));
console.log("info: " + myCity.info.isPopular, myCity.info.population, typeof(myCity.info));
const lapland = true;
const badWeather = "bad";
const conditions = {
    lapland: lapland,
    weather: badWeather,
    summer: false,
}
console.log(conditions);
const countryConditions = {
    lapland,
    badWeather,
    summer: false,
}
console.log(countryConditions);

console.log("----------------------------------------")

const n = "50" / "5";
console.log(n, typeof(n));


const streetPropertyName = "kallen";
const isBiggestPropertyName = "isBiggest"

const espoo = {
    greet() {
        console.log("Hi, friend!")
    }
};
espoo.greet();
delete espoo.greet;
console.log(espoo);
espoo.bye = function(){
    console.log("Bye")
}
espoo.bye();
espoo.keskus = true;
espoo[streetPropertyName] = true;
espoo[isBiggestPropertyName] = "the biggest city";
espoo.info = {
    population: 50000,
    isAiport: false,
}
console.log(espoo);
espoo.info.isUusimaa = true;
console.log(espoo.info);

console.log("----------------------------------------")

const vantaa = {
    myFunc(){
        let age = 50 / 0;
        const name = true;
        globalThis.console.log(age,name);
    },
    info: function() {
        console.log("Say hi!")
    },
}
vantaa.myFunc();
vantaa.info();
console.log(vantaa.myFunc, vantaa.info);

const json = JSON.stringify(vantaa);
console.log(json)
const json2 = JSON.parse(json);
console.log(json2);

console.log("----------------------------------------")

const porvoo = function() {
    const a = 10;
    let b = porvoo;
    b = 30;
    console.log(a);
    console.log(b);
}
porvoo()

console.log("----------------------------------------")

const lappi = {
    name:"Bob",
    age: undefined,
}
lappi.age = 22;   // мутация объекта с const;
lappi.isAdult = true;
console.log(lappi, typeof(lappi));

const lappiNew = lappi;  // копируем ссылку, а не значение (copy by reference)
lappiNew.age = 16;   // меняем значение свойства age;
lappiNew.isAdult = false;  // меняем значение свойства isAdult;
console.log(lappiNew, lappi); // скопировали ссылку и в этой же ссылке изменили значения, для одной и другой переменной которые хранят ссылку.
// мы изменили значения сразу в двух - это называется мутирование объекта через копию
// изменяя копию мы также изменяем исходный объект

const rova = {
    name: "Tom",
    age: 22,
}
const rova2 = Object.assign({}, rova); // создаем новый объект на основании первого объекта
rova2.age = 30; // изменилось значение только для копии, оригинал не тронут
console.log(rova, rova2);
// мы создали вторую ссылку на копированный объект и поэтому первый объект не мутировал
// но вложенные объекты будут мутировать, так как ссылки остались те же

// второй вариант, какой лучше использовать? в чем разница?

const oulu = {
    name: "Tom",
    age: 22,
    info: {
        status: true,
        woman: false,  // добавили вложенный объект
    }
}
const oulu2 = { ...oulu} // оператор разделения объекта на свойства, берется объект oulu и разбивается на свойства name и age и потом эти свойства сразу же собираются в новый объект oulu2, новая ссылка , новый объект
oulu2.age = 15; // меняем свойство объекта oulu2
console.log(oulu, oulu2); // значения у исходного объекта не мутировали
oulu2.info2 = { ...oulu.info}; // берем вложенный объект info у объекта oulu и разбиваем его на свойства и образуем новый вложенный объект в oulu2, с новой ссылкой
oulu2.info2.status = false;  // меняем значение у вложенного объекта
console.log(oulu.info, oulu2.info2); // первоначальный вложенный объект не мутировал, новый мутировал.


// вариант 3, JSON

const temp = {
    name: "Tom",
    age: 22,
    info: {
        status: true,
        woman: false,  
    }
}

// создается полностью новый объект, со всеми новыми ссылками
const temp2 = JSON.parse(JSON.stringify(temp)); // parse = конвертирование в объект , stringify = конвертирование в строку.
temp2.info.status = false;
temp2.info.woman = true;
temp2.name = "Jess";
console.log(temp, temp.info, temp2, temp2.info);

// это все про копирования объектов и избегание мутаций


console.log("----------------------------------------")

let a = 10;
let b = 7;

function sums(a, b){
    const c = a + b;
    console.log(c)
}
sums(a,b)

a = 400;
b = 122;
sums(a, b)

function myFn(a, b){
    let c;
    a = a + 1;
    c = a + b;
    return c;
}
myFn(2, 3);
let total = myFn(2, 3);
console.log(total);

function shortFn() {};
shortFn();

// create an object
const Dima = {
    name: "Dima",
    isAvailable: false,
}
function changedObj(object){
    const newObj = Object.assign({}, object);
    newObj.name = "notDima";
    return newObj;
}
const notDima = changedObj(Dima);
console.log(Dima);
console.log(notDima);

const Pasha = {
    name: "Pasha",
    isAvailable: true,
}
function changedPasha(object){
    const Pavel = Object.assign({}, object);
    Pavel.isAvailable = false;
    return Pavel;
}
const newPasha = changedPasha(Pasha);
console.log(Pasha);
console.log(newPasha);

function printMyName() {
    console.log("Dima");
}
setTimeout(printMyName, 1000);
