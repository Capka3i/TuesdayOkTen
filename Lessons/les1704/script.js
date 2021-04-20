//Зробити свій розпорядок дня, використовуючи при цьому лише Callback,Promis та async await.
// повино бути зроблено не менше 8 умов.
//
let money = 1000;
let fuel = 20;
function gotUp(i,wash) {
	setTimeout(()=>{
		if (i <= 5)
		{
			console.log('gotUp');
			wash(true, 'cold');
			goWork(i,fuel);
		} else {
			console.log(`today is weekend I stay in bed`);
			wash(false, )

		}

	},1000)

}


function goWork(flue,) {

}

function work() {

}

function comeHome() {

}

function sleep() {

}


function studying() {

}


function eating() {

}

function wash(water,temperature) {
if (water){
	console.log(`i washed but water ${temperature}`);
}else {
	console.log('no water, f***.' );
}

}

for (let i = 1; i <= 7; i++) {


	gotUp(i,wash())

}
