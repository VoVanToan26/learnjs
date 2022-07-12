function creaTor(obj){
    // obj=JSON.parse(JSON.stringify(obj))
    obj={...obj}// Chỉ 1 cấp mới đúng
    obj.name='Mercedes'
    return obj
}
const car={
    name:'BMW'
}

const newCar= creaTor(car)
