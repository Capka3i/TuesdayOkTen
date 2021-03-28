//1.
//
// let numbers = [2, 3, 5, 6, 4];
// let sting = ['frog', 'bear', 'dog', 'cat', 'bird'];
// let arr = ['toy', 5, 'Tom', 3.14, false];
// console.log(arr); // незнаю кого конкретно виводити string.log та numbers.log

//2.
//
// let arra = [];
// let x = Math.floor(Math.random() * 10) + 1;
// for (let i = 0; i < x; i++) {
//     arra[i] = Math.floor(Math.random() * Math.floor(100));
//
// }
// console.log(arra);
//
// for (let i = 0; i < arra.length; i++) {
//     document.write(`Index ${i}: ` + arra[i]);
//     document.write(`<br>`)
//
// }

//2.1
//
// let str2_1 = ['development', 'craven', 'mind', 'thirsty', 'enter', 'harass',
//     'zippy', 'scrawny', 'injure', 'purring'];
// for (const strElement of str2_1) {
//     document.write(`<div> ${strElement} </div>`);
// }
//

//2.2
// let str2_2 = ['marked',
//     'page',
//     'gabby',
//     'concern',
//     'ordinary',
//     'camp',
//     'battle',
//     'interrupt',
//     'tremendous',
//     'destruction'];
// for (let i=0; i<str2_2.length; i++) {
//     document.write(`<div>Index ${i}: ${str2_2[i]} </div>`);
// }

//2.3
// let str2_3 = ['heavy',
//     'squeeze',
//     'squeal',
//     'uppity',
//     'fear',
//     'fish',
//     'lavish',
//     'unknown',
//     'coil',
//     'tiresome',
//     'quizzical',
//     'devilish',
//     'polite',
//     'toad',
//     'aboriginal',
//     'border',
//     'worthless',
//     'bee',
//     'analyze',
//     'magical']
// let k = 0;
// while(k<str2_3.length){
//     document.write(`<h1>${str2_3[k]}</h1>`)
//     k++;
// }

//2.4
// let str2_4 = ['heavy',
//     'squeeze',
//     'squeal',
//     'uppity',
//     'fear',
//     'fish',
//     'lavish',
//     'unknown',
//     'coil',
//     'tiresome',
//     'quizzical',
//     'devilish',
//     'polite',
//     'toad',
//     'aboriginal',
//     'border',
//     'worthless',
//     'bee',
//     'analyze',
//     'magical']
// let k = 0;
// while(k<str2_4.length){
//     document.write(`<h1>Index ${k}: ${str2_4[k]} </h1>`)
//     k++;
// }

//2.5
//
// let num2_5= [11,
//     87,
//     25,
//     93,
//     65,
//     20,
//     83,
//     46,
//     21,
//     23]
// for (let i = 0; i < num2_5.length; i++) {
//     console.log(num2_5[i]);
//
// }
// for (const number of num2_5) {
//     console.log(number);
// }

//2.6
//
// let str2_6=[
//     'quizzical',
//     'devilish',
//     'polite',
//     'toad',
//     'aboriginal',
//     'border',
//     'worthless',
//     'bee',
//     'analyze',
//     'magical',
// ]
// for (let i = 0; i < num2_6.length; i++) {
//     console.log(num2_5[i]);
//
// }
// for (const number of num2_6) {
//     console.log(number);
// }

//2.7
//
// let arr2_7 = ['room',
//     82,
//     56,
//     true,
//     'boolean',
//     45,
//     false,
//     'pig',
//     18,
//     'nice'
// ]
// for (let i = 0; i < arr2_7.length; i++) {
//     console.log(arr2_7[i]);
//
// }
// for (let arr27Element of arr2_7) {
//     console.log(arr27Element);
// }

//2.8
//
// let arr2_8 = ['room',
//     '82',
//     56,
//     true,
//     'boolean',
//     45,
//     false,
//     'pig',
//     1,
//     'nice',
//     '0'
// ]
// for (let i = 0; i < arr2_8.length; i++) {
//     if (arr2_8[i] === true || arr2_8[i] === false){
//         console.log(`Index ${i}: boolean`)
//     }
//
// }
// for (let i = 0; i < arr2_8.length; i++) { //
//     if (typeof (arr2_8[i]) === "boolean"){
//         console.log(`Index ${i}: boolean`)
//     }
//
// }

//2.9
//
// let arr2_9 = ['room',
//     '82',
//     56,
//     true,
//     'boolean',
//     45,
//     false,
//     'pig',
//     1,
//     'nice',
//     '0'
// ]
// for (let i = 0; i < arr2_9.length; i++) {   //for (const arr29Element of arr2_9) {
//     if (typeof (arr2_9[i]) === `number`) {   //if (typeof (arr29Element) === `number`) {
//         console.log(`Index ${i}: number`)    // console.log(`Index ${arr29Element}: number`)}}
//     }
//
// }

//2.10
//
// let arr2_10 = ['room',
//     '82',
//     56,
//     true,
//     'boolean',
//     45,
//     false,
//     'pig',
//     1,
//     'nice',
//     '0'
// ]
//
// for (const arr210Element of arr2_10) {
//     if (typeof (arr210Element) === `string`){
//         console.log(`Index ${arr210Element}: string`);
//     }
//
// }

//2.11
//
//
// let arr2_11 = [];
//
// arr2_11.push('habitual')
// arr2_11.push(false)
// arr2_11.push(44)
// arr2_11.unshift('hushed')
// arr2_11.push(false)
// arr2_11.push('idiotic')
// arr2_11.push(83)
// arr2_11.unshift('3')
// arr2_11.push(true)
// arr2_11.push(52)
// for (let i = 0; i < arr2_11.length; i++) {      // for (const arr211Element of arr2_11) {
//     console.log(arr2_11[i]);                //     console.log(arr211Element);
// }                                         // }

//2.12
//
// for (let i = 0; i < 10; i++) {
//     console.log(i)
//     document.write(`${i}<br>`)
// }
// document.write(`<hr>`)
// //заради забави зробив в другу сторону
// for (let i = 10; i > 0; i--) {
//     console.log(i-1)
//     document.write(`${i-1}<br>`)
// }

//2.13
//
// for (let i = 0; i < 100; i++) { // let i=1 ; i <= 100 якщо потрібно зробити від 1 до 100
//     console.log(i)
//     document.write(`${i}<br>`)
// }
// document.write(`<hr>`)
// //заради забави зробив в другу сторону
// for (let i = 100; i > 0; i--) { // let i=101 ; i > 0 якщо потрібно зробити від 100 до 1
//     console.log(i-1)
//     document.write(`${i-1}<br>`)
// }

//2.14
//
// for (let i = 0; i < 100; i += 2) {
//     console.log(`${i}`);//console.log(i) те саме
//     document.write(`${i}<br>`)
//
// }
// Ітерація в від більшого до меншого
//
// for (let i = 100; i > 0; i -= 2) {
//     console.log(`${i}`);//console.log(i) те саме
//     document.write(`${i}<br>`)
//
// }

//2.15
// Аналог 2,14 просто  з циклом if
// for (let i = 0; i < 100; i++) {
// if (i%2===0){
//     console.log(`${i}`);
//     document.write(`${i}<br>`)
// }
// }

//2.16
//Копія 2.15

//2.17
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(`${i}`)
//         document.write(`${i}<br>`)
//
//     }
//
// }

//2.18
// В цьому вирзі дублювання коду, але якщо вказати інше значення time_select в діапазоні 00:00 до 59:59 код буде робочий;
// let time_select = '05:20';
// let time;
// let seconds;
// for (let minute = 0; minute < 60; minute++) {
//     minutes = minute < 10 ? '0' + minute : minute;
//     for (let second = 0; second < 60; second++) {
//         seconds = second < 10 ? `0` + second : second;
//         time = `${minutes}:${seconds}`;
//         if (minutes ==='05'&& seconds==='20'){
//             minute=60;
//             second=60;
//             break;
//         }
//     }
// }
// console.log(time);



//2.19
//

let time;
let hours;
let minutes;
let seconds;
for (let hour = 0; hour < 24; hour++) {
    hours = hour < 10 ? '0' + hour : hour;
    for (let minute = 0; minute < 60; minute++) {
        minutes = minute < 10 ? '0' + minute : minute;

        for (let second = 0; second < 60; second++) {
            seconds = second < 10 ? '0' + second : second;
            time = `${hours}:${minutes}:${seconds}`;
            if (hours==='23'&&minutes==='59'&&seconds==='59') {
                hour=24;
                minute=60;
                break;
            }
        }
        console.log(time);
        }
    }



console.log(time);