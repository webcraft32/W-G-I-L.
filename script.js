// ===============================
// BuildPro Engineering Website JS
// ===============================


// Mobile Menu Toggle

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");


if(menuButton){

    menuButton.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}




// Smooth Scrolling

document.querySelectorAll("a[href^='#']").forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});





// Product Search / Filter

const searchBox = document.querySelector("#productSearch");

const products = document.querySelectorAll(".product-card");


if(searchBox){


searchBox.addEventListener("keyup",()=>{


let value = searchBox.value.toLowerCase();


products.forEach(product=>{


let name =
product.querySelector("h3")
.textContent
.toLowerCase();



if(name.includes(value)){


product.style.display="block";


}else{


product.style.display="none";


}


});


});


}







// Scroll Animation

const boxes =
document.querySelectorAll(
".product-card, .service-box, .value, .mission-card"
);



window.addEventListener("scroll",()=>{


boxes.forEach(box=>{


let position =
box.getBoundingClientRect().top;


let screen =
window.innerHeight;



if(position < screen - 100){


box.style.opacity="1";

box.style.transform=
"translateY(0)";


}


});


});





// Initial Animation Style

boxes.forEach(box=>{


box.style.opacity="0";

box.style.transform=
"translateY(40px)";

box.style.transition=
"0.6s ease";


});







// Contact Form Validation


const form =
document.querySelector("form");


if(form){


form.addEventListener("submit",(e)=>{


e.preventDefault();



let name =
form.querySelector("input[type='text']").value;


let email =
form.querySelector("input[type='email']").value;



if(name==="" || email===""){


alert(
"Please fill in all required fields."
);


}else{


alert(
"Thank you! Your message has been sent."
);


form.reset();


}



});


}







// Back To Top Button


let topButton =
document.createElement("button");


topButton.innerHTML="↑";


topButton.className="top-btn";


document.body.appendChild(topButton);





window.addEventListener("scroll",()=>{


if(window.scrollY > 400){

topButton.style.display="block";

}

else{

topButton.style.display="none";

}


});




topButton.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};
