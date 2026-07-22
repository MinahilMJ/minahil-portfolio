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

document.querySelectorAll('a[href^="projects/"]').forEach(link=>{
link.addEventListener("click",()=>{
sessionStorage.setItem("scrollPosition",window.scrollY);
});
});

window.addEventListener("load",()=>{
const scrollPosition=sessionStorage.getItem("scrollPosition");

if(scrollPosition){
window.scrollTo(0,parseInt(scrollPosition));
sessionStorage.removeItem("scrollPosition");
}
});