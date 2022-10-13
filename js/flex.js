function fd(valor){
	document.getElementById('container').style.flexDirection=valor;
}
function fw(valor){
	document.getElementById('container').style.flexWrap=valor;
}
function fj(valor){
	document.getElementById('container').style.justifyContent=valor;
}
function align(valor){
	document.getElementById('container').style.alignItems=valor;
}
var n = 0;
function slide(){

	var imagens = ['../img/foto1.jpeg','../img/foto2.jpeg','../img/foto3.jpeg'];
	var legendas = ['viagem 1','viagem 2','viagem 3'];
	var linkspub = ['https://www.google.com/','https://www.google.com/','https://www.google.com/'];
	document.getElementById('image_pub').src=imagens[n];
	document.getElementById('text_pub').innerHTML=legendas[n];
	document.getElementById('link_pub').href=linkspub[n];
	if(n<2) n++;
	else n=0;
	setTimeout("slide()",2000);
}