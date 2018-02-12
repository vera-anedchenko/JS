for (var i = 0; i < 9; i++) {
	document.getElementById('game').innerHTML += '<div class="block"></div>'
}

var turn = 0;

function checkWinner(){
	var allblocks = document.getElementsByClassName('block');
	if (allblocks[0].innerHTML == 'X' && allblocks[1].innerHTML == 'X' && allblocks[2].innerHTML == 'X') alert ('X is a winner!');
	if (allblocks[3].innerHTML == 'X' && allblocks[4].innerHTML == 'X' && allblocks[5].innerHTML == 'X') alert ('X is a winner!');
	if (allblocks[6].innerHTML == 'X' && allblocks[7].innerHTML == 'X' && allblocks[8].innerHTML == 'X') alert ('X is a winner!');
	if (allblocks[0].innerHTML == 'X' && allblocks[3].innerHTML == 'X' && allblocks[6].innerHTML == 'X') alert ('X is a winner!');
	if (allblocks[1].innerHTML == 'X' && allblocks[4].innerHTML == 'X' && allblocks[7].innerHTML == 'X') alert ('X is a winner!');
	if (allblocks[2].innerHTML == 'X' && allblocks[5].innerHTML == 'X' && allblocks[8].innerHTML == 'X') alert ('X is a winner!');
	if (allblocks[0].innerHTML == 'X' && allblocks[4].innerHTML == 'X' && allblocks[8].innerHTML == 'X') alert ('X is a winner!');
	if (allblocks[2].innerHTML == 'X' && allblocks[4].innerHTML == 'X' && allblocks[6].innerHTML == 'X') alert ('X is a winner!');

	if (allblocks[0].innerHTML == 'O' && allblocks[1].innerHTML == 'O' && allblocks[2].innerHTML == 'O') alert ('O is a winner!');
	if (allblocks[3].innerHTML == 'O' && allblocks[4].innerHTML == 'O' && allblocks[5].innerHTML == 'O') alert ('O is a winner!');
	if (allblocks[6].innerHTML == 'O' && allblocks[7].innerHTML == 'O' && allblocks[8].innerHTML == 'O') alert ('O is a winner!');
	if (allblocks[0].innerHTML == 'O' && allblocks[3].innerHTML == 'O' && allblocks[6].innerHTML == 'O') alert ('O is a winner!');
	if (allblocks[1].innerHTML == 'O' && allblocks[4].innerHTML == 'O' && allblocks[7].innerHTML == 'O') alert ('O is a winner!');
	if (allblocks[2].innerHTML == 'O' && allblocks[5].innerHTML == 'O' && allblocks[8].innerHTML == 'O') alert ('O is a winner!');
	if (allblocks[0].innerHTML == 'O' && allblocks[4].innerHTML == 'O' && allblocks[8].innerHTML == 'O') alert ('O is a winner!');
	if (allblocks[2].innerHTML == 'O' && allblocks[4].innerHTML == 'O' && allblocks[6].innerHTML == 'O') alert ('O is a winner!');
}

document.getElementById('game').onclick = function(event){
	console.log(event);
	if (event.target.className == 'block'){
		if (turn % 2==0) {
			event.target.innerHTML = 'X';
		}
		else {
			event.target.innerHTML = 'O';
		}
		turn ++;
		checkWinner()
	}
}

