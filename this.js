"use strict"

const iPhone7={
    //  Thuộc tính propety
    name:'iPhone7',
    color:'Pink',
    weight:300,
//  Method
    takePhoto(){
        // console.log('Take photo')
        console.log(this) // ==> this return là object
    },

    objChild:{
        methodChild(){
            console.log(this)// this--> objchild
        }
    }
}

function Car(name, color, weight){
    this.name=name
    this.color=color
    this.weight=weight
    this.run=function(){
        console.log( running)
    }

}
const MercedesS450=new Car('MercedesS450', 'black,'200KG')