var courseAPI='http://localhost:3000/courses';

fetch(courseAPI)
.then(function(response){
    return response.json();
})
.then(function(courses){
    console.log(courses)
})

// var listCoursesBlock = document.querySelector("#list-courses");

// var courseAPI = "http://localhost:3000/courses";

// function start() {
    
// //   getCourses(function (courses) {
// //     renderCourses(courses)
// //   });
// getCourses(renderCourses())
// }

// start();

// function getCourses(callback) {
//   fetch(courseAPI)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(callback);
// }

function renderCourses(courses){
    var listCoursesBlock = document.querySelector("#list-courses");
    var htmls=courses.map(function(courses){
        return `
          <li>
            <h4>${$courses.name}</h4>
          </li>
        `;
    })
}
