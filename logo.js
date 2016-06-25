cenxs = 50;
cenys = 50;
cenxi = 50;
cenyi = 50+135+135;
cenxl = 50+190;
cenyl = 50+135;
rm = 50;
rM = 60;
var tempX = 0
var tempY = 0
var IE;

var context = new webkitAudioContext();

function inicio(){  
   canvas = document.getElementById("plano");
   dibujo = canvas.getContext("2d");
   
   vid = document.getElementById("player");

   vid.play(); 

  IE = document.all?true:false
  if (!IE) 
  document.captureEvents(Event.MOUSEMOVE)
  document.onmousemove = getMouseXY;

  dibujarLogo();
  Ojos();

}

function getMouseXY(e) {
  if (IE) { // grab the x-y pos.s if browser is IE
    tempX = event.clientX + document.body.scrollLeft
    tempY = event.clientY + document.body.scrollTop
  } else {  // grab the x-y pos.s if browser is NS
    tempX = e.pageX
    tempY = e.pageY
  }  
  if (tempX < 0){tempX = 0}
  if (tempY < 0){tempY = 0} 
 
  dibujarLogo();
  Ojos();
  return true

}


function Ojos(){

  dibujo.lineWidth = 5;

    dibujo.beginPath();
  dibujo.ellipse(150,100,25,60,0, 0, 2*Math.PI);
  dibujo.closePath();
  dibujo.stroke();
  dibujo.fillStyle = "#FFF";
  dibujo.fill(); 

  dibujo.beginPath();
  dibujo.ellipse(230,100,25,60,0, 0, 2*Math.PI);
  dibujo.closePath();
  dibujo.stroke();
  dibujo.fillStyle = "#FFF";
  dibujo.fill(); 

  dibujo.beginPath();
  dibujo.arc(130+tempX/document.body.scrollWidth*30,50+tempY/document.body.scrollHeight*100,12,0,2*Math.PI);
  dibujo.closePath();  
  dibujo.stroke();
  dibujo.fillStyle = "#000";
  dibujo.fill();


  dibujo.beginPath();
  dibujo.arc(210+tempX/document.body.scrollWidth*30,50+tempY/document.body.scrollHeight*100,12,0,2*Math.PI);
  dibujo.closePath();  
  dibujo.stroke();
  dibujo.fillStyle = "#000";
  dibujo.fill();
}

function dibujarLogo(){
  
  var inc = 0.617755726; 
  var p = Math.PI;
	
  dibujo.clearRect(0, 0, canvas.width, canvas.height);
 
  dibujo.lineWidth = 0.001;
  dibujo.beginPath();
  dibujo.arc(cenxi,cenyi,rm,0,2*Math.PI);
  dibujo.closePath();
  dibujo.stroke();
  dibujo.fillStyle = "#108EFF";
  dibujo.fill(); 

  dibujo.beginPath();
  dibujo.moveTo(cenxi+rm*Math.cos(p/2-inc),cenyi+rm*Math.sin(p/2-inc));
  dibujo.lineTo(cenxl+rM*Math.cos(p/2-inc),cenyl+rM*Math.sin(p/2-inc));
  dibujo.lineTo(cenxl+rM*Math.cos(3*p/2-inc),cenyl+rM*Math.sin(3*p/2-inc));
  dibujo.lineTo(cenxi+rm*Math.cos(3*p/2-inc),cenyi+rm*Math.sin(3*p/2-inc));
  dibujo.closePath();
  dibujo.stroke();
  dibujo.fillStyle = "#108EFF";
  dibujo.fill(); 

  dibujo.beginPath();
  dibujo.arc(cenxs,cenys,rm,0,2*Math.PI);
  dibujo.closePath();
  dibujo.stroke();
  dibujo.fillStyle = "#33D374";
  dibujo.fill();
  
  dibujo.beginPath();
  dibujo.moveTo(cenxs+rm*Math.cos(3*p/2+inc),cenys+rm*Math.sin(3*p/2+inc));
  dibujo.lineTo(cenxl+rM*Math.cos(3*p/2+inc),cenyl+rM*Math.sin(3*p/2+inc));
  dibujo.lineTo(cenxl+rM*Math.cos(p/2+inc),cenyl+rM*Math.sin(p/2+inc));
  dibujo.lineTo(cenxs+rm*Math.cos(p/2+inc),cenys+rm*Math.sin(p/2+inc));
  dibujo.closePath();
  dibujo.stroke();
  dibujo.fillStyle = "#33D374";
  dibujo.fill();
  
  dibujo.beginPath();
  dibujo.arc(cenxl,cenyl,rM,0,2*Math.PI);
  dibujo.closePath();
  dibujo.stroke();
  dibujo.fillStyle = "#33D374";
  dibujo.fill();

  dibujo.beginPath();
  dibujo.arc(cenxs/2,cenyl,18.5,0,2*Math.PI);
  dibujo.closePath();
  dibujo.stroke();
  dibujo.fillStyle = "#33D374";
  dibujo.fill();

}