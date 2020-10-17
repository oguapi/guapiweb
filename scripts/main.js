/*sobre pone un string en otro al darle clic
const myHeading = document.querySelector('h3');
myHeading.textContent = 'Hello world!!';*/

let myVariable;/*declaro my variable tambien lo puedo hacer con var pero es menos recomendado*/
myVariable= 'Bob';
myVariable= 'Steve';//puedo cambia despues el valor de la variable

/*let iceCream= 'chicle';
if (iceCream === 'chicle'){
  alert('Yay, I love the chicle ice cream');//alert pone un mensaje que superpone la pag
} else{
  alert('Aww, but chicle is my favorite');
}*/

//VAMOS A CREAR NUESTRA PROPIA FUNCION
function multiply(num1,num2){
  let result= num1 * num2;
  return result;
}
//alert( multiply(4,7));

//Vamos a poner un evento
document.querySelector('h2').onclick = function(){
  alert('Ouch! Stop poking me!');
}

//AGREGAR UN CAMBIO DE IMAGEN
let myImage= document.querySelector('img');
myImage.onclick= function() {
  let mySrc= myImage.getAttribute('src');
  if(mySrc === 'images/spiderman2.jpg') {
	myImage.setAttribute('src','images/spider.jpg');
  } else{
	myImage.setAttribute('src','images/spiderman2.jpg');
  }
}

//Mensaje de bienvenida personalizado
let myButton= document.querySelector('button');
myButton.onclick= function(){//ponemos el evento q al hacer click entren diferentes nombres
  setUserName();
}
let myHeading= document.querySelector('h2');
function setUserName(){
  let myName= prompt('Por favor entre su nombre :v.')
  if(!myName){
    setUserName();
  } else{  
    localStorage.setItem('name', myName);
    myHeading.textContent= 'Spiderman es asombroso, ' +myName;
  }
}
if(!localStorage.getItem('name')){
  setUserName();
} else{
  let storedName= localStorage.getItem('name');
  myHeading.textContent= 'Spiderman es el mejor, '+ storedName;
}

/*investigar tres tipos de sensores de cualquier variable como fisica 3
 carillas con bibliografia correo-miss srios@espol.edu.ec*/


