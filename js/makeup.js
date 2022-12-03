



let form = document.querySelector('.js-form');


let select = document.querySelector('.js-makeup-brand');


function formSubmitted(event) { 

    document.getElementById("image").innerHTML = "";

event.preventDefault();

alert(select.value);


let number = select.value;


let apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${select.value}`;

let Url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${select.value}`;


fetch(Url) 

    .then(data => data.json())
    .then(r =>{

        for(i =0; i< 10; i++)
        {
            document.getElementById("image").innerHTML += "<img src=" + r[i].image_link + ">";
        }
    });
    
}

form.addEventListener('submit', formSubmitted);
