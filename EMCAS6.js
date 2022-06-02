// // Multi-line string
// const courseName='js'
// const courseName2='js2'
// const description=`Course name: ${courseName} \$ ${courseName2}`;
// console.log(description)

// // Arrow function
// function sum(a,b){
//     return a+b
// }
// //  Tương đương với 
// sum=(a,b)=>{
//     return a+b
// }
// //  Tương đương với 
// sum=(a,b)=>a+b;

// // 
// sum=(a,b)=>{
//     return {
//         a:a,
//         b:b
//     }
// }

// //  Tương đương với 
// sum=(a,b)=>({
//     a:a,
//     b:b
// })
// console.log(sum(3,2))


// const courses={
// name:courseName,
// getName:function(){
//     return this // context
// }
// }

// //  Contructor funtion 

// const Courses2=function(name,price){
//     this.name=name;
//     this.price=price;
// }


// //  CLASSSES --> là contructer fuction
// const Courses3=function(name,price){
//     this.name=name;
//     this.price=price;
// }
// const phpCourse=new Courses3('PC',1000)
// const jssCourse=new Courses3('PC2',100)
// console.log(phpCourse)

// //  Rút gọn classes

//     // Contructor
//     class Course_test{
//         constructor(name,price){
//             this.name=name;
//             this.price=2000;
//         }
//         getName(){
//             return this.name;
//         }
//     }

// // Default parameter default
// // function logger(log,type='log'){
// //     if(isAlert){ return log='test'}
// // }
// //  tương đương 
// logger=(log,type='log') => console.log(type);

// //Enhandle obj literal
// var A=['a','b','c']
// var [a,b,c]=A
// console.log(a,b,c)

// var course_test_object={

//     name2:'js',
//     price:1000,
//     child: {
//         name:'react',
//     }

// }
// var{ name:parrentName}=course_test_object;
// console.log(course_test_object)

// function logger(a,...params){
// console.log(params)
// }
// logger(1,2,3)

// spread

// logger({
//     name:'js',
//     price:1000,
//     description:'Description content'
// })

// function logger({name,price,...rest}){
//     console.log(name,price)
//     console.log(rest)
// }
/* SPREAD REST
var courses =['js','ruby','php']
var courses2 =['rs','nodejs']
var courses3 =[...courses2,...courses]
console.log(courses3)

var oB1={
    name:'Toàn'
}
var oB2={
    price:'15000'
}
var oB3={
  ...oB1,
  ...oB2
}
console.log( oB3)


var defaultConfig={
    api:'http://domain-trang-khoa-hoc',
    apiVerrsion:'v1',
}

var exConfig={
    ...defaultConfig,
    api:'https://Trang-bai-tap',
}
console.log(exConfig)

// Spread truyền tham số cho hàm
function logger(a,b,c){
    console.log(a,b,c)
}

logger(...courses)

SPREAD REST */

// function highlight([first,...strings],...value){
//     console.log('string:',strings);
//     console.log('first:',first);
//     console.log('value:',value);

//     return value.reduce(
//         (acc,curr)=> [...acc,`<span>${curr}</span>`,strings.shift()],
//         [first]
//     ).join('' )
// }

// var brand='F8';
// var course='JAvascript';

// html=highlight`Hoc lập trình  ${course} tại ${brand}!`
// console.log(html)

//  Module hóa