
let summ = 100;
let arr = [];
let i;


function rec(arr) {
	let spor = Math.floor(Math.random() * summ);
	if (spor < 79 && (!arr.length || arrs(spor, arr))) {
		summ -= spor;
		arr.push(spor);
	} else {
		return arr, summ;
		;
	}


	return arr, summ;
}

function arrs(spor, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (spor === arr[i])
			return false;
		return true;

	}
}

function trying(arr) {


	const acc = arr.reduce((acc, value) => {
		acc += value;
		return acc;

	}, 0);

	if (acc === 100 && summs(arr) && arr.length === 7) {
		return false;
	} else {
		return true;
	}

}


function summs(arr) {
	let number = Math.pow(arr.length, 2) - arr.length;
	for (let j = 0; j < arr.length; j++) {
		for (let k = 0; k < arr.length; k++) {
			if (k !== j && arr[k] !== arr[j]) {
				number--;
			}

		}

	}
	if (number) {
		return false;
	}
	return true;
}

let x = 0;
while (arr.length < 6) {
	for (i = 0; i < 7; i++) {
		if (i === 6) {
			arr.push(summ);
		} else {
			rec(arr);
		}
	}
	arr = arr.sort((a, b) =>
		b - a);
	if ((trying(arr))||(arr[0]+arr[1]+arr[2]<=50)) {
		arr = [];
		summ = 100;
	}
	x++;
	if (x > 20000) {
		console.log('Пройшло 20000 спроб');
		break;
	}


}
console.log(summ);
console.log(arr);
