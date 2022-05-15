// var fullName="Vo Van Toann"
// alert(fullName);
// Không có dấu chấm phẩy code chạy bình thường
// nếu đưa dấu chấm phẩy thì code bth
/**
 * 
 * 
 * 
 */
//  Hàm built-in
/*
 1 alert
 2 console
 3 confirm
 4 prompt
 5 warn
 5 set time out
 6 set interval

 */
//1000 ms

//  Toán tử
/**
 * Giới thiệu về toán tử trong js
 * 1. Toán tử số học arithmetic
 *      + - * /
 *      **  Lũy thừa
 *      % Chia lấy dư
 *      ++ -- 
 * 
  2 Toán tử gán assignmentr
        Toán tử     Ví dụ   Tương đương
        =           x=y     x=y
        +=          x+=y    x=x+y 
        -=
        *=
        /=
        **=         x**=y   x=x**y  ( x lũy thừa y)
  3 Toán tử so sánh comparision

        ==
        !=
        >
        <
        >=
        <=

        ===     So sánh value và kiểu dữ liệu
        ==    So sánh bằng value
        
  4 toán tử logic
    && - and
    ||  - or
    !   - not

 */

//   ++ và -- tiền tố hậu tố 
//  Tiền tố  Tăng hoặc giảm giá trị biến lên 1 kq trả về giá trị sau
//  Hậu tố 

// Toán tử chuôi
// //  Nối chuỗi
// var firstName='Son'
// var lastName='Dang'
// console.log(firstName+" "+lastName)

// if condition 
/**
 * các giá trị xét điều kiện được tính là false
 *  0
 * false
 * ''
 * undefined
 * NaN
 * null 


Truthy:  1 ['BMW']
{ name: 'Miu' }
'hi'

document.all chuyển sang boolean sẽ là false
document.all khi là toán hạng của toán tử so sánh == hoặc != sẽ là undefined
Khi typeof document.all sẽ trả về "undefined"

 
*/

// var a=1
// var b=2
// var  reuslt ="a" &&"b" &&"c"
//  suwr dungj template string cho 
function writeLog() {
      var myString='';
      var i=0
      for (var para of arguments){
            myString+=`${para}-`
 
      }
      console.log(myString)
}

writeLog('1','2',5,6);

// function writeLog() {
//       var myString = "";
//       for (var param of arguments) {
//         myString += `${param} - `;
//       }
//       myString = myString.slice(0, myString.length - 3); //loại bỏ " - "
//       console.log(myString);
//     }
//     writeLog("log 1", "Log 2", "log 3", 4, 5, 343);