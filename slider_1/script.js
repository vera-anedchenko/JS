var picsArray = document.querySelectorAll('.pic');
var back_btn = document.querySelector('.back');
var next_btn = document.querySelector('.next');
var i = 0;

next_btn.onclick = function(){
	picsArray[i].style.display = 'none';
	i++;
    if(i >= picsArray.length - 1){
    	i = 0;
    } 
    picsArray[i].style.display = 'block';
}

back_btn.onclick = function(){
	picsArray[i].style.display = 'none';
	i--;
	if(i < 0) {
		i = picsArray.length - 1;
	}	
	picsArray[i].style.display = 'block';
}
