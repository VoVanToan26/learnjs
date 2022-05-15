Array.prototype.map2=function(callBack){
    // var arrayLength=this.length, ouput=[];

    // for(var i=0;i<arrayLength;i++){
    //     // console.log(callBack(this[i]));
    //     var result =callBack(this[i]);
    //     console.log(result)
    //     ouput.push(result)
    //     console.log(result)
    // }
    for(var index in this){
        // if(this.hasOwnProperty(index)){ // Diều kiện loại bỏ các property không phải là index thuần
            callBack(this[index],index,this )
        // }
        
    }

}
var courses=[
    'PHP',
    'js',
    'Ruby'
]
var test=courses.map2(function(course, index,array){
    // return `<h2>${course}</h2>`
    console.log(course, index)
})
// console.log(test)


// 1 object prototype
// 2 For in
// hasOwwnProperty



//Filter
Array.prototype.filter2=function(callBack){
}
