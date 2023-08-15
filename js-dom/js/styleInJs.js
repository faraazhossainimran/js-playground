const sections = document.querySelectorAll('section');

for(const section of sections){
    section.style.border = "2px solid red"
    section.style.backgroundColor = "white"
    section.style.margin = "10px"
    section.style.padding = "10px"
    section.style.borderRadius = "10px"
}
const dy = document.getElementById('dynamic');
const li = document.createElement('li')
li.innerText = "text by js";
dy.appendChild(li)

const mainContainer = document.getElementById('main');


