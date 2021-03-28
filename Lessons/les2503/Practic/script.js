//1.
//
// let arr1 = ['a', 'b', 'c'];
// for(let i = 1; i<=3; i++){
//     arr1.push(i);
// }
// console.log(arr1)

//2.
//
//
// let  arr2= [1, 2, 3];
// let i =3;
// for (let j = 0; j < arr2.length; j++) {
//     arr2[j] = i;
//     i--;
// }
// console.log(arr2);

//3.
//
// let arr3 = [1, 2, 3];
// for (let i = 4; i < 7; i++) {//можна було залишити (let i = 0; i < arr3.length; i++)
//     arr3.push(i)
//
// }
// console.log(arr3);

//4.
//
// let arr4 = [1, 2, 3];
// for (let i = 4; i < 7; i++) {//можна було залишити (let i = 0; i < arr3.length; i++)
//     arr4.unshift(i)
//
// }
// console.log(arr3);

//5.
//
// let arr5 = ['js', 'css', 'jq'];
// first = arr5.shift()
// document.write(first);

//6.
//
// let arr6 = ['js', 'css', 'jq'];
// first = arr6.pop()
// document.write(first);

//7.
//
// let arr7 = [1, 2, 3, 4, 5];
// arr7.shift();
// arr7.shift();
// arr7.shift();
// console.log(arr7);

//8.
//
// let arr8 = [1, 2, 3, 4, 5];
// arr8.pop();
// arr8.pop();
// arr8.pop();
// console.log(arr8);

//9.
//
// let arr9 = [1, 2, 3, 4, 5];
// temp1 = arr9.pop();
// temp2 = arr9.pop();
// let abc = ['a', 'b', 'c']
// for (let i = 0; i < abc.length; i++) {
//     arr9.push(abc[i]);
// }
// arr9.push(temp1, temp2);
// console.log(arr9);

//10
//
// let arr10 = [1, 2, 3, 4, 5];
// temp1 = arr10.shift();
// temp2 = arr10.pop();
// arr10.unshift('b');
// arr10.unshift('a');
// arr10.push('c');
// arr10.push(temp2);
// arr10.push('e');
// arr10.unshift(temp1);
// console.log(arr10);

//11
//
// let arr11 = [43, 34, 39, 60, 12, 31, 86, 42, 90, 92];
// for (let i = 0; i < arr11.length; i++) {
//     if (arr11[i] % 2 === 0) {
//         console.log(arr11[i]);
//     }
//
// }

//12
//
// let arr12= [52, 47, 48, 27, 59, 74, 10, 34, 96, 56];
// let arra12=[];
// for (let i = 0; i < arr12.length; i++) {
//     arra12.push(arr12[i])
// }
// console.log(arra12);

//13
//
// let arr12= [52, 47, 48, 27, 59, 74, 10, 34, 96, 56];
// let arra12=[];
// for (let i = 0; i < arr12.length; i++) {
//     arra12[i]=arr12[i];                 //arr12.shift() це вийде вирізання;
// }
// console.log(arra12);

//14
//
//let arr14 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];//Всі наступні 14-ті залежать від цього масиву.

//14.1
// let i=0
// while(i<arr14.length){
//     console.log(arr14[i]);
//     i++;
// }

//14.2
// for (const number of arr14) {
//     console.log(number);
// }
// for (let i = 0; i < arr14.length; i++) {
//     console.log(arr14[i]);
//
// }

//14.3
// let i=0
// while(i<arr14.length){
//     if (i%2!== 0)
//         console.log(arr14[i]);
//     i++;
// }

//14.4
// for (let i = 0; i < arr14.length; i++) {
//     if (i%2!==0){
//         console.log(arr14[i]);
//     }
//
//}

//14.5
// let i=0
// while(i<arr14.length){
//     if (i%2=== 0)
//         console.log(arr14[i]);
//     i++;
// }

//14.6
// for (let i = 0; i < arr14.length; i++) {
//     if (i%2===0){
//         console.log(arr14[i]);
//     }
//
// }

//14.7
// for (let i = 0; i < arr14.length; i++) {
//     if (i%3===0){
//         arr14[i] = 'okten';
//     }
// }
// console.log(arr14);

//14.8
// for (let i = arr14.length-1; i >= 0; i--) {
//     console.log(arr14[i]);
// }

//14.9
// let i = arr14.length - 1;
// while (i >= 0) {
//     console.log(arr14[i]);
//     i--;
// }

//14./2
// for (let i = arr14.length-1; i >=0 ; i--) {
//     console.log(arr14[i]);
//
// }

//14./3
// let i = arr14.length - 1;
// while (i >= 0) {
//     console.log(arr14[i]);
//     if (i % 2 !== 0)
//         console.log(arr14[i]);
//     i--;
// }

//14./4
// for (let i = arr14.length-1; i >=0 ; i--) {
//     if (i%2!==0)
//         console.log(arr14[i]);
//
// }

//14./5
// let i = arr14.length - 1;
// while (i >= 0) {
//     if (i % 2 === 0)
//         console.log(arr14[i]);
//     i--;
// }

//14./6
// for (let i = arr14.length-1; i >=0 ; i--) {
//     if (i%2===0)
//         console.log(arr14[i]);
//
// }

//14./7
// for (let i = arr14.length; i >= 0 ; i--) {
//     if (i%3===0){
//         arr14[i] = 'okten';
//     }
// }
// console.log(arr14);

//14.10
// let even = [];
// let notEven = [];
// for (let i = 0; i < 100; i++) {
//     if (i%2===0){
//         even.push(i);
//     } else {
//         notEven.push(i)
//     }
//
// }
// console.log(even);
// console.log(notEven);
//

//Просто 100 чисел і поділено на 2 частини парні і непарні.
// let arr14_11 = [376, 123, 145, 889, 28, 532, 750, 216, 428, 133, 601, 571, 141,
//     567, 430, 150, 365, 837, 582, 864, 309, 42, 479, 174, 773, 445, 68, 863, 661,
//     900, 341, 423, 785, 908, 58, 504, 466, 904, 696, 684, 110, 600, 446, 830, 248,
//     553, 859, 424, 160, 239, 734, 262, 416, 128, 498, 781, 409, 387, 61, 613, 296,
//     999, 184, 848, 23, 897, 677, 535, 563, 950, 305, 425, 384, 918, 825, 646, 947,
//     43, 509, 279, 482, 327, 968, 585, 171, 121, 711, 295, 885, 301, 211, 313, 200,
//     337, 438, 722, 953, 510, 109, 884]
// let arr_2 = [];
// let arr_1 = [];
// for (let i = 0; i < arr14_11.length; i++) {
//     if (arr14_11[i]%2===0){
//         arr_2.push(arr14_11[i]);
//     } else {
//         arr_1.push(arr14_11[i]);
//     }
//
// }
// console.log(arr_1);
// console.log(arr_2);

//1. Створити пустий масив та
//a. заповнити його 50 парними числами за допомоги циклу.
//b. заповнити його 50 непарними числами за допомоги циклу.
//c. Заповнити масив 20ма рандомними числами. (Google Generate random number JS)
//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google Generate random number JS)

//a.
//
// let arrayA = [];
// let a = 0;
// for (let i = 0; a < 50; i += 5/* любе число.*/) {  // (let i = 0; s < 50; i++)
//     if (i % 2 === 0) {
//         arrayA.push(i);
//         a++
//     }
// }
//console.log(arrayA)

//b.
//
// let arrayB = [];
// let b = 0;
// for (let i = 0; b < 50; i += 3/* любе число.*/) {  // (let i = 0; s < 50; i++)
//     if (i % 2 !== 0) {
//         arrayB.push(i);
//         b++
//     }
// }
// console.log(arrayB)

//c.
//
// arrayC = [];
//
// let x = prompt('ведість діапазон рандому.')
// for (let i = 0; i < 20; i++) {
//     let c = Math.floor(Math.random() * x); //Math.floor(Math.random() * Math.floor(x)) нерозумію різницю; Хаб щоб не щоб заукругляти числа. але всеодно працює.
//     arrayC.push(c);
//
// }
// console.log(arrayC);

//d.
//
// arrayD=[];
// let x = 726;
// for (let i = 0; i < 20; i++) {
//     let c = Math.floor(Math.random() * x)+8;
//     arrayD.push(c);
//     }
// console.log(arrayD);

//цей масив прцює для 2 - 5
// let array2 = [376, 123, 145, 889, 28, 532, 750, 216, 428, 133, 601, 571, 141,
//     567, 430, 150, 365, 837, 582, 864, 309, 42, 479, 174, 773, 445, 68, 863, 661,
//     900, 341, 423, 785, 908, 58, 504, 466, 904, 696, 684, 110, 600, 446, 830, 248,
//     553, 859, 424, 160, 239, 734, 262, 416, 128, 498, 781, 409, 387, 61, 613, 296,
//     999, 184, 848, 23, 897, 677, 535, 563, 950, 305, 425, 384, 918, 825, 646, 947,
//     43, 509, 279, 482, 327, 968, 585, 171, 121, 711, 295, 885, 301, 211, 313, 200,
//     337, 438, 722, 953, 510, 109, 884]
//2. Вивести за допомогою console.log кожен третій елемен
//2 варыанти робочі
//
// for (let i = 3; i < array2.length; i+=3) {
//     console.log(array2[i]);
//}
//
// for (let i = 0; i < array2.length; i++) {
//     if(i%3===0){
//         console.log(array2[i]);
//     }
//
// }

//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 3; i < array2.length; i+=3) {
//     if (array2[i]%2==0){
//         console.log(array2[i]);
//     }
// }

//4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let newArray = [];
// for (let i = 3; i < array2.length; i += 3) {
//     if (array2[i] % 2 == 0) {
//         newArray.push(array2[i]);
//     }
// }
// console.log(newArray);

//5. Вивести кожен елемент масиву, сусід справа якого є парним
//
// for (let i = 3; i < array2.length; i++) {
//     if (array2[i] % 2 == 0 && i - 1 >= 0) {
//         console.log(array2[i - 1]);
//     }
// }

//6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let arrayPrice = [100,250,50,168,120,345,188];
// let summ = 0;
// for (let i = 0; i < arrayPrice.length; i++) {
//     summ=summ+arrayPrice[i];
// }
// console.log(summ/arrayPrice.length);

//7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array7 = [];
// let cupArray7 = [];
// for (let i = 0; i < 25; i++) {
//     array7[i]= Math.floor(Math.random()* Math.floor(100));
// }
// for (let i = 0; 0 < array7.length; i++) {
//     cupArray7.push(array7.shift()*5);
// }
// console.log(cupArray7);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// let array8 = [28, '8', true, 1, 66, 'allow', 'youthful', 'fallacious', 'behavior', 'vein', 66, true, 29, '15', 40,
//     'bizarre', 'grandfather', 'false', 'cute', 14, 'false', 14, 18, 'pets', false, 'water', 63, 87, '2', 'magical',
//     'sidewalk', 'important', 40 ]
// let arrayNumbers = [];
// for (let i = 0; i < array8.length; i++) {
//     if ((typeof array8[i])==='number'){
//         arrayNumbers.push(array8[i])
//     }
// }
// console.log(arrayNumbers);

//Дано масив [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//
// let arrayABC = ['a', 'b', 'c'];
// let abc;
// for (let i = 0; i < arrayABC.length; i++) {
//     abc = !!abc === false ? arrayABC[i] : abc + arrayABC[i];
// }
// console.log(`${abc}`);

//Дано масив [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//
// let arrayABC = ['a', 'b', 'c'];
// let abc;
// let i=0;
// while (i<arrayABC.length){
//     abc = !!abc === false ? arrayABC[i] : abc + arrayABC[i];
//     i++;
// }
// console.log(abc);

//- Дано масив [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arrayABC = ['a', 'b', 'c'];
// let abc;
// for (const string of arrayABC) {
//     abc = !!abc === false ? string : abc + string;
// }
// console.log(abc);
