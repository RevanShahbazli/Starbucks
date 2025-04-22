const burgerBtn = document.querySelector("#burgerBtn");
const sidebar =  document.querySelector("#sidebar");
burgerBtn.onclick = () =>{ 
    sidebar.classList.toggle("right-[-100%]");
}
function accordionFt(x){
    const ul = document.getElementById(`${x}`);
    const mainDiv = ul.parentElement;
    const svg = mainDiv.querySelector('svg');
    svg.classList.toggle('rotate-90');
    ul.classList.toggle('max-h-[500px!important]')        
    ul.classList.toggle('overflow-hidden')        
}