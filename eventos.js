var op_1 = document.getElementById("op_rojo");
var op_2 = document.getElementById("op_verde");
var op_3 = document.getElementById("op_rosa");
var op_4 = document.getElementById("op_negro");

op_1.addEventListener("click", cambioColor1);
op_2.addEventListener("click", cambioColor2);
op_3.addEventListener("click", cambioColor3);
op_4.addEventListener("click", cambioColor4);


var estado = 0; //el estado del click
var color_de_linea = op_1, op_2, op_3;
var x = 3;
var y = 3;

var area = document.getElementById("area_de_dibujo")
var cuadro = area.getContext("2d")

document.addEventListener("mousedown", presionarClick);
document.addEventListener("mouseup", soltarClick);
document.addEventListener("mousemove", moverMouse);




dibujarLinea("red", 1, 1, 299, 1, cuadro);
dibujarLinea("red", 299, 1, 299, 299, cuadro);
dibujarLinea("red", 299, 299, 1, 299, cuadro);
dibujarLinea("red", 1, 299, 1, 1, cuadro);


function cambioColor1()
{
	    var opcion1 = "red";
	    if(op_1 = opcion1){
		            color_de_linea = "red"
		            console.log("estas en rojo")
		        }
}
   
function cambioColor2()
{
	    var opcion2= "green";
	    if(op_2 = opcion2){
		            color_de_linea = "green"
		        }
	    console.log("estas en verde")
	    
}

function cambioColor3()
{
	    var opcion3 = "pink";
	    if(op_3 = opcion3)
		    {
			            color_de_linea = "pink"
			            console.log("estas en rosa")
			        }
}

function cambioColor4()
{
	    var opcion4 = "black";
	    if(op_4 = opcion4)
		    {
			            color_de_linea = "black"
			            console.log("estas en negro")
			        }
}

function moverMouse(evento)
{
	    if(estado == 1)
		    {
			            dibujarLinea(color_de_linea, x, y, evento.layerX, evento.layerY, cuadro);
			        }
	    x = evento.layerX;
	    y = evento.layerY;   
	    
}
function presionarClick(evento)
{
	    estado = 1;
	    x = evento.layerX;
	    y = evento.layerY;
	    
}
function soltarClick(evento)
{
	    estado = 0;
	    x = evento.layerX;
	    y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
	    lienzo.beginPath();                  // Inicia el trazo
	    lienzo.strokeStyle = color;          // Estilo de trazo (color)
	    lienzo.lineWidth = 2;                // Ancho de la linea
	    lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
	    lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
	    lienzo.stroke();                     // Dibuja con el estio de trazo
	    lienzo.closePath();
}
