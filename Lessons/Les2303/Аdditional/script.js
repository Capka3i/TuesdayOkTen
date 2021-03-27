//1 // в цьому завданні я зробив щоб корисувач самостійно вводив розмір масиву.
let x = parseInt(prompt("Введіть розмір масива"));// Можна вказувати окрему кожну змінну але це займе більше рядків коду.
let array = [];
for (let i = 0; i < x; i++) {
    array[i] = +prompt('Введіть значення');
}
let temp;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] < array[j]) {
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }


    }
}
console.log(array);

//2

let red = 'red';
let yellow = 'yellow';
let green = 'green';
let color = prompt('Enter color,', 'English please');
if (color === red) {
    alert('Stop please!')
} else if (color === yellow) {
    alert('get ready!')
} else if (color === green) {
    alert('GO-Go-Go!')
} else {
    alert('Do what you want!')
}

switch (color) {
    case red :
        alert('Stop please!')
         break
    case yellow:
        alert('get ready!')
         break
    case green :
        alert('GO-Go-Go!')
         break
    default :
        alert('Do what you want!')
}


//3
color = prompt('Enter color,', 'English please');
let isRoadClear = confirm('Чи є машина на дорозі?');
if (color === red) {

    if (isRoadClear === true) {
        alert('Stand Still please!')
    } else {
        alert('Stop please!')
    }

} else if (color === yellow) {

    if (isRoadClear === true) {
        alert('Get ready anyway!')
    } else {
        alert('get ready!')
    }
} else if (color === green) {

    if (isRoadClear === true) {
        alert('Wait until the violator passes')
    } else {
        alert('GO-Go-Go!')
    }
} else {
    alert('Do what you want!')
}

switch (color) {
    case red :
        if (isRoadClear === true) {
            alert('Stand Still please!')
        } else {
            alert('Stop please!')
        }
        break
    case yellow:
        if (isRoadClear === true) {
            alert('Get ready anyway!')
        } else {
            alert('get ready!')
        }
        break
    case green :
        if (isRoadClear === true) {
            alert('Wait until the violator passes')
        } else {
            alert('GO-Go-Go!')
        }
        break
    default :
        alert('Do what you want!')
}