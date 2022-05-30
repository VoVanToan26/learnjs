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

function logger(...params){
console.log(params)
}
logger(1,2,3)