var boxElement=document.querySelector('.box') ;
console.log(boxElement);
boxElement.style.width='30px';
Object.assign(boxElement.style,{
    width:'30px',
    height:'20px',
    backgroundColor:'blue'

})
boxElement.classList.add('text', 'red')
console.log(boxElement.classList.contains('red'))
setTimeout(() =>{
    boxElement.classList.remove('red')
},1000)
setInterval(() =>{
    boxElement.classList.toggle('yellow')
},1000)
