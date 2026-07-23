const themeToggle=document.getElementById("theme-toggle");

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){
document.body.classList.add("light-mode");
themeToggle.textContent="☾";
}

themeToggle.addEventListener("click",()=>{
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
localStorage.setItem("theme","light");
themeToggle.textContent="☾";
}else{
localStorage.setItem("theme","dark");
themeToggle.textContent="☀";
}
});


document.querySelectorAll('a[href^="projects/"],a[href*="github.com"]').forEach(link=>{
link.addEventListener("click",()=>{
sessionStorage.setItem("scrollPosition",window.scrollY);
});
});


if(window.location.pathname.endsWith("index.html")||window.location.pathname==="/"){

window.addEventListener("load",()=>{

const scrollPosition=sessionStorage.getItem("scrollPosition");

if(scrollPosition){

window.scrollTo(0,parseInt(scrollPosition));

sessionStorage.removeItem("scrollPosition");

}

});

}


const contactForm=document.getElementById("contact-form");
const successMessage=document.getElementById("form-success");

if(contactForm){

contactForm.addEventListener("submit",async function(event){

event.preventDefault();

const submitButton=contactForm.querySelector(".contact-submit");

submitButton.disabled=true;

submitButton.textContent="Sending...";

try{

const response=await fetch(contactForm.action,{

method:"POST",

body:new FormData(contactForm),

headers:{
"Accept":"application/json"
}

});

if(response.ok){

contactForm.reset();

successMessage.classList.add("show");

submitButton.textContent="Message Sent";

setTimeout(()=>{

successMessage.classList.remove("show");

submitButton.disabled=false;

submitButton.textContent="Send Message →";

},500);

}else{

submitButton.disabled=false;

submitButton.textContent="Send Message →";

alert("Something went wrong. Please try again.");

}

}catch(error){

submitButton.disabled=false;

submitButton.textContent="Send Message →";

alert("Something went wrong. Please try again.");

}

});

}