// alert(true)
// Array.prototype.test2=function(callback){

//    var  sum=this[1]+this[0]
//   return callback(sum,this[1],this[0])+3
// }
// var arr=[1,2]
// var c= arr.test2(function(a1,a2,a3){
//     return a1+a2+a3 //--> 6
// })
// console.log(c) --> 9

array=[1,2,3]

Array.prototype.forEach2=function(callback){
    length=Array.length;
    for (var i=0;i<this.length;i++){
        callback(this[i],i)

    }
   return 
}
console.log(array.forEach2(function(value,index){
    // console.log(value,index)
    return value
}))

Array.prototype.filter2=function(callback){
    var output=[]
    length=Array.length;
    for (var i=0;i<this.length;i++){
        if(this.hasOwnProperty(i)){
            if(callback(this[i],i,this)){
                output.push(this[i])
            }

        }
        
    }
  return output;
}
console.log(array.filter2(function(element, index, array){
    // console.log('e',element, 'i',index,'a', array)
    return index>1

}))