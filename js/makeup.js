let form = document.querySelector('.js-form');
let select = document.querySelector('.js-makeup-brand');


function formSubmitted(event) { 

    event.preventDefault();

    document.getElementById("image").innerHTML = "";
    alert(select.value);


    let number = select.value;

     let API_PREFIX = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=';
     let Url = API_PREFIX + select.value;

    fetch(Url) 
        .then(data => data.json())
        .then(r =>{

            for(i = 0; i < r.length; i++) 
            {
                document.getElementById("image").innerHTML += '<img class="img-makeup" src="' + r[i].image_link +'" alt="' + r[i].name + '">';
            }

    let html = '';
            for(i = 0; i < r.length; i++) 
            {
                html += `<img class="img-makeup" src="${r[i].image_link}" alt="${r[i].name}">`;
            }
            document.getElementById("image").innerHTML = html;
        
        });
    
}

form.addEventListener('submit', formSubmitted);
