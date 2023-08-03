import anime from 'animejs/lib/anime.es.js';


let count= 1;
let iti=0;
function myEventHandler(event){
	event.currentTarget.textContent = "移動 押した回数" + count;
	if(iti<600){
		anime({
			targets: 'div',
			translateX:iti,
			rotate: '360deg',
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
			// scale:2,
			rotate: '360deg',
			// backgroundColor: '#FFF',
			duration: 3000,
		})
		count++;
		console.log(iti);
	}
	if(count>10){
		event.currentTarget.textContent = "ダンス　押した回数" + count;
		anime({
			targets:'div',
			translateX: iti,
			direction: 'alternate',
			easing: 'steps(5)'
		})

	}
}
let button = document.getElementById("my-button");
button.onclick = myEventHandler;

