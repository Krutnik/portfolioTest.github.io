let textMesseng = document.querySelector('.messeng');
let mainDisplay = document.querySelector('.main');
let btnSendMesseng = document.querySelector('.btn');
let newMesseng;
let yourName;
let textNewMesseng;

function createElem() {
	newMesseng = document.createElement('div');
	newMesseng.classList.add('.user-two');
	
	yourName = document.createElement('p');
	yourName.textContent = "Petrov Petr";
	newMesseng.appendChild(yourName);
	
	textNewMesseng = document.createElement('div');
	textNewMesseng.classList.add('text');
	textNewMesseng.classList.add('you');
	textNewMesseng.textContent = textMesseng.value;
	newMesseng.appendChild(textNewMesseng);
	
	return newMesseng;
} 

btnSendMesseng.onclick = function() {
	mainDisplay.appendChild(createElem());
}
