/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
let Nombre;
let Puntuacion = 0;

function GuardarNombre(){
  //localStorage.nombre = document.getElementById("txtNombre").value;
  Nombre=document.getElementById('txtNombre').value
  localStorage.setItem("NombreObtenido",Nombre);
}

function MostrarNombre(){
  //document.getElementById("lblSaludo").innerHTML = "¡Hola " + localStorage.nombre + "!";
  document.getElementById('lblSaludo').innerHTML = `Hola ${localStorage.getItem("NombreObtenido")}!`;
}

function MostrarSiguiente(){
  //SumarResultado(1);
  document.getElementById('steep-1').style.display = 'none';
  document.getElementById('steep-2').style.display = 'block';
}

function MostrarSiguiente2(){
  document.getElementById('steep-2').style.display = 'none';
  document.getElementById('steep-3').style.display = 'block';
}

function SumarResultado(Pregunta){
  let NumeroPregunta = Pregunta;
  switch (NumeroPregunta){
    case 1:
      let radio = document.getElementsByName('steep-001');
      let i;
      let valor;
      for (i = 0; i < radio.length; i++) {
        if(radio[i].checked){
          valor = radio[i].value;
        }
      }
      //alert (`valor= ${valor}`);
      if(valor === '1'){
        Puntuacion ++;
        //alert('La puntuacion es ' + Puntuacion);
      }
      break;
    case 2:
      let radio2 = document.getElementsByName('steep-002');
      let i2;
      let valor2;
      for (i2 = 0; i2 < radio2.length; i2++) {
        if(radio2[i2].checked){
          valor2 = radio2[i2].value;
        }
      }
      //alert (`valor= ${valor2}`);
      if(valor2 === '0'){
        Puntuacion ++;
      }
      break;
    case 3:
      let radio3 = document.getElementsByName('steep-003');
      let i3;
      let valor3;
      for (i3 = 0; i3 < radio3.length; i3++) {
        if(radio3[i3].checked){
          valor3 = radio3[i3].value;
        }
      }
      //alert (`valor= ${valor3}`);
      if(valor3 === '2'){
        Puntuacion ++;
      }
      break;
    default:
      alert('No se esta entrando')
  }
}

function SumarResultadoG(Pregunta){
  let NumeroPregunta = Pregunta;
  switch (NumeroPregunta){
    case 1:
      let radio = document.getElementsByName('steep-001');
      let i;
      let valor;
      for (i = 0; i < radio.length; i++) {
        if(radio[i].checked){
          valor = radio[i].value;
        }
      }
      //alert (`valor= ${valor}`);
      if(valor === '1'){
        Puntuacion ++;
        //alert('La puntuacion es ' + Puntuacion);
      }
      break;
    case 2:
      let radio2 = document.getElementsByName('steep-002');
      let i2;
      let valor2;
      for (i2 = 0; i2 < radio2.length; i2++) {
        if(radio2[i2].checked){
          valor2 = radio2[i2].value;
        }
      }
      //alert (`valor= ${valor2}`);
      if(valor2 === '2'){
        Puntuacion ++;
      }
      break;
    case 3:
      let radio3 = document.getElementsByName('steep-003');
      let i3;
      let valor3;
      for (i3 = 0; i3 < radio3.length; i3++) {
        if(radio3[i3].checked){
          valor3 = radio3[i3].value;
        }
      }
      //alert (`valor= ${valor3}`);
      if(valor3 === '0'){
        Puntuacion ++;
      }
      break;
    default:
      alert('No se esta entrando')
  }
}

function GuardarResultado(){
  localStorage.setItem("ResultadoFinal", Puntuacion);
}

function MostrarResultado(){
  document.getElementById('lblResultado').innerHTML = `${localStorage.getItem("ResultadoFinal")} de 3`;
}

function ReiniciarTrivia(){
  location.href="instrucciones.html";
}

function IniciarJuego(){
  location.href="index.html";
}
//console.log(Nombre);