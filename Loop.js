var myInfo={
    name:'son dang',
    age:'18'
}
// Unwgs dung trong file json
for (var value of Object.values(myInfo)){
    console.log(value)
}

// 
var myArray=[
    [1,2],
    [3,4],
    [5,6] 
]
    
// 
function deQuy(num){
    if (num<0){
        return true
    }
    deQuy()
}

function giaithua(num){
    if(num>1){
        return num*giaithua(num-1)
        console.log(giaithua(num))
    }
    return num
}
console.log(giaithua(6))