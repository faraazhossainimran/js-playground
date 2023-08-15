const liCollection = document.getElementsByTagName('li')
// console.log(liCollection);
const allHeadings = document.getElementsByTagName('h1')
for( const li of liCollection){
    // console.log(li.innerText)
}
for(const h1 of allHeadings){
    // console.log(h1.innerText)
}
const places = document.getElementsByClassName('important-places')
// console.log(places);
const food = document.getElementsByClassName('food-title')
// food.innerText = 'Foods changes by js'
// console.log(food);
const dom = document.getElementById('dom')
// console.log(dom)

const se = document.querySelectorAll('.important-places')
for(const singleSelector of se){
    // console.log(singleSelector.innerHTML)
}
// console.log(se.innerText)

const clr = document.getElementById('dom');
const colour = clr.style.backgroundColor = 'red';
const clr2 = document.getElementById('place');
const colour2 = clr2.style.backgroundColor = 'green';
const heading = document.getElementsByTagName('h1');
// console.log(heading);
// const hclr = heading.style.backgroundColor = 'white';