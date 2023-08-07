import anime from 'animejs/lib/anime.es.js';


let count= 1;
let count2= 11;
let iti=0;
let kaiten =0;
function myEventHandler(event){
	event.currentTarget.textContent = "回転移動 押した回数：" + count;
	if(iti<600){
		kaiten +=360;
		anime({
			targets: 'div',
			translateX:iti,
			rotate: kaiten + 'deg',
			// backgroundColor: '#FFF',
			duration: 3000,
	    	});
		count++;
		iti+=150;
		console.log(iti);
	}else{
		iti -=500;
		anime({
			targets:'div',
			translateX:iti,
			rotate: kaiten + 'deg',
			// backgroundColor: '#FFF',
			duration: 3000,
		});
		count++;
		console.log(iti);
		console.log(count2);
	}

	if(count>11){
		event.currentTarget.textContent = "ダンス　押した回数：" + count2;
		anime({
			targets:'div',
			translateX: iti,
			direction: 'alternate',
			easing: 'steps(5)',
		});
		count2++;
	}
	console.log(count2);
}
let button = document.getElementById("my-button");
button.onclick = myEventHandler;

