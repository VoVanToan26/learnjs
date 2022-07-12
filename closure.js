// function createCounter(){
//     let counter=0
//     function increase(){
//         return ++ counter
//     }
//     return increase
// }
// const counter1=createCounter()
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())

// function createLogger(namespace){

//     function logger(message){
//         console.log(`[${namespace}]${message}`)
//     }
//     return logger
// }
// const infoLogger=createLogger('info')

// infoLogger(' Bắt đầu giửi mail')
// const debugLogger=createLogger('debug')
// debugLogger('function is running')

function createStorage(key) {
  //  Nếu không có  JSON trả về object {}
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };
  const storage = 
  {
    get(key) {
      return store[key]
    },
    set(key, value) {
      store[key] = value
      save();
    },
    remove(key) {
      delete store[key]
      save()
    },
  };
  return storage
}

//  Profile.js
const profileSetting = createStorage("profileSetting");
// console.log(profileSetting.get("fullName"));
profileSetting.set("fullName",'Son Dang')
profileSetting.set("age",'18')
profileSetting.set("address",'Ha Noi')

function createApp(car){
    const cars=[]
    return {
        add(car){
            cars.push(car)
        },
        show(){
            console.log(car)
        }
    }
}

const app=createApp()
app.show()
console.log('BWM')