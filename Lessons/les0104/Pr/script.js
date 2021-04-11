// Cоздать функцию которая принимает число и возвращает  текст как в примере:
// 	3275  —>  "3000 + 200 + 70 +5"
//
// let num = prompt();
// let str = String(num);
// let result;
// let fullResult;
//
// function pathNumber(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = 0; j < str.length - i; j++) {
// 			!result ? result = str[i] : result = result + '0';
//
// 		}
//
// 		!fullResult ? fullResult = result : fullResult = fullResult + ` + ${result}`;
// 		result = null;
//
// 	}
// 	return fullResult;
// }
//
// console.log(pathNumber(str));

// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
// 	[1,2,3,4,5,2,4,1,3] -> 5
// let array = [1, 2, 3, 4, 5, 2, 4, 1, 3, 5, 5];
// let resultArray = [];
// let part = 0;
//
// function filters(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 0; j < array.length; j++) {
// 			if (array[i] === array[j] && i !== j) {
//
// 				part++;
// 			}
//
// 		}
// 		if (!(part % 2)) resultArray.push(array[i]);
// 		part = 0;
//
//
// 	}
// 	for (let i = 0; i < resultArray.length; i++) {
// 		for (let j = 0; j < resultArray.length; j++) {
// 			if (resultArray[i] === resultArray[j] && i !== j) resultArray.splice(j, 1);
//
// 		}
//
// 	}
// 	return resultArray;
// }
// console.log(filters(array));

//Знайти анаграму.
// Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
// ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true
//
// let str1 = prompt();
// let str2 = prompt();
//// let str1 = 'ANAGRAM';
//// let str2 = 'MGANRAA';
// let word = 0;
// function writers(str1, str2) {
// 	for (let i = 0; i < str1.length; i++) {
// 		for (let j = str2.length - 1; j >= 0; j--) {
// 			if (str1[i] === str2[j]) {
// 				word++;
// 				break;
// 			}
// 		}
// 	}
// 	if (str1.length === word && str2.length === word) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
//
// console.log((writers(str1, str2)));

// Точная степень двойки
// Дано натуральное число N.
// 	Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// 	Операцией возведения в степень пользоваться нельзя!
// let number = +prompt();
//
// function two(number) {
// 	while (number > 2) {
// 		number = number / 2;
// 	}
// 	if (!(number % 2) && number !== 0) {
// 		return 'YES';
// 	}
// 	return 'NO'
// }
// console.log(`${number} ${two(number)}`);

//Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы ну и циклы, разумеется.
// Рекурсія)
//
// let num = +prompt();
// let numFun;
// let val = 0;
// function rec(num=0) {
// 	if (num) {
// 		numFun = num % 10;
// 		val+=numFun;
// 		num = (num-numFun) / 10;
// 		rec(num);
// 	} else {
// 		return num;
// 	}
// 	return val;
// }
// console.log(rec(num));

//Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
//
// let palin = 'lopoppopol';
// function palindrom(palin) {
// 	let goll = 0;
// 	let poll = Math.floor(palin.length / 2);
// 	for (let j = 0; j < poll; j++) {
// 			if (palin[j] === palin[palin.length-1-j])
// 				goll++;
// 	}
// 	if (goll === poll) {
// 		return 'YES';
// 	}
// 	return 'NO';
// }
// console.log(palindrom(palin));

//Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд.
// Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// let value = 2176491947586100;
// let numb = 1;
//
// function doki(val, num) {
// 	let val1 = String(val);
// 	let s = 0;
// 	let comm = val1.split('00');
// 	let acc = comm[0];
// 	for (let i = 0; i < acc.length; i++) {
// 		// console.log(acc[i]);
// 		if (+acc[i] === num) {
// 			s++;
// 		}
// 	}
// 	return `${val} -> ${s}`;
// }
// console.log(doki(value, numb));

//Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.

let arr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
arr.reduce((previousValue, currentValue) => {
	console.log(currentValue);
},0)