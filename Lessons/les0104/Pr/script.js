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
// // let str1 = 'Hellleo';
// // let str2 = 'lelloeH';
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


