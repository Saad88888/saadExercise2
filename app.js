// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random

let changer = document.querySelector('.btn-primary')
let image = document.querySelector('#dogsAPI')


changer.addEventListener('click' ,async function() {
    const Response =  await fetch('https://dog.ceo/api/breeds/image/random');
    const blob =  await Response.json();
    const id = Math.floor(Math.random() * 50000) + 10000;
    const age = Math.floor(Math.random() * 13) + 1;
    const registry = Math.floor(Math.random() * 900) + 100;
    console.log(blob);
    image.src = blob.message;
    document.getElementById("dogId").innerHTML = id;
    document.getElementById("dogAge").innerHTML = age + " " +"Years";
    document.getElementById("dogRegistry").innerHTML = registry;	
    
})



