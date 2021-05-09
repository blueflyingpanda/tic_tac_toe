var fields = document.getElementsByClassName("symbol");
var isCross = true;
var movesMade = 0;

function showDraw(){
	document.getElementById("statement").textContent = "Draw!";
}

function showWinner(pic, option){
	switch (option) {
		case 0:
			fields[0].src = pic + "h.png";
			fields[1].src = pic + "h.png";
			fields[2].src = pic + "h.png";
			break;
		case 1:
			fields[3].src = pic + "h.png";
			fields[4].src = pic + "h.png";
			fields[5].src = pic + "h.png";
			break;
		case 2:
			fields[6].src = pic + "h.png";
			fields[7].src = pic + "h.png";
			fields[8].src = pic + "h.png";
			break;
		case 3:
			fields[0].src = pic + "v.png";
			fields[3].src = pic + "v.png";
			fields[6].src = pic + "v.png";
			break;
		case 4:
			fields[1].src = pic + "v.png";
			fields[4].src = pic + "v.png";
			fields[7].src = pic + "v.png";
			break;
		case 5:
			fields[2].src = pic + "v.png";
			fields[5].src = pic + "v.png";
			fields[8].src = pic + "v.png";
			break;
		case 6:
			fields[0].src = pic + "d.png";
			fields[4].src = pic + "d.png";
			fields[8].src = pic + "d.png";
			break;
		case 7:
			fields[2].src = pic + "d_.png";
			fields[4].src = pic + "d_.png";
			fields[6].src = pic + "d_.png";
			break;
	}
	for (let i = 0; i < fields.length; i++)
		fields[i].ocupat = "f";
	if (pic == "o")
		document.getElementById("statement").textContent = "O wins!";
	else
		document.getElementById("statement").textContent = "X wins!";
}

function checkEndGame(isCross_local){
	var pic;
	if (isCross_local)
		pic = "x";
	else
		pic = "o";
		//check horizontal
	if (fields[0].ocupat == pic && fields[1].ocupat == pic && fields[2].ocupat == pic)
		showWinner(pic, 0);
	else if (fields[3].ocupat == pic && fields[4].ocupat == pic && fields[5].ocupat == pic)
		showWinner(pic, 1);
	else if (fields[6].ocupat == pic && fields[7].ocupat == pic && fields[8].ocupat == pic)
		showWinner(pic, 2);
	//check vertical
	else if (fields[0].ocupat == pic && fields[3].ocupat == pic && fields[6].ocupat == pic)
		showWinner(pic, 3);
	else if (fields[1].ocupat == pic && fields[4].ocupat == pic && fields[7].ocupat == pic)
		showWinner(pic, 4);
	else if (fields[2].ocupat == pic && fields[5].ocupat == pic && fields[8].ocupat == pic)
		showWinner(pic, 5);
	//check diagonals
	else if (fields[0].ocupat == pic && fields[4].ocupat == pic && fields[8].ocupat == pic)
		showWinner(pic, 6);
	else if (fields[2].ocupat == pic && fields[4].ocupat == pic && fields[6].ocupat == pic)
		showWinner(pic, 7);
	//No fields left
	else if (++movesMade == 9)
		showDraw();
}

function placeSymbol(index){
	if (fields[index].ocupat == "e"){
		if (isCross){
			fields[index].src = "x.png";
			isCross = false;
			fields[index].ocupat = "x";
		}
		else{
			fields[index].src = "o.png";
			isCross = true;
			fields[index].ocupat = "o";
		}
		checkEndGame(!isCross, index);
	}
}

for (let i = 0; i < fields.length; i++){
	fields[i].ocupat = "e";
	fields[i].onclick = () => placeSymbol(i);
}
