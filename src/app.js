import anime from 'animejs/lib/anime.es.js';


let count= 1;
let iti=0;
function myEventHandler(event){
	event.currentTarget.textContent = "ボタン：" + count;
	if(iti<600){
		anime({
			targets: 'div',
			translateX:iti,
			// scale:2,
			rotate: '1turn',
			// backgroundColor: '#FFF',
			duration: 2000,
			// complete:function(anime){
			// 	rotate+ = '1turn'
			// },
	    	});
		count++;
		iti+=150;
		console.log(iti);
	}else{
		anime({
			targets:'div',
			translateX:iti,
			// scale:2,
			rotate: '1turn',
			// backgroundColor: '#FFF',
			duration: 30000,
		})
		count++;
		iti -=500;
		console.log(iti);
	}
}
let button = document.getElementById("my-button");
button.onclick = myEventHandler;

