// const tinderUser = new Object ()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "ayush@gmail.com",
    fullname:{
        userfullname:{
            firtstname: "Ayush",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firtstname);

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "c", 4: "d" }
const obj4 = {5: "e", 6: "f" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) 
// console.log(obj3) 

const obj3 = {...obj1, ...obj2, ...obj4 }
// console.log(obj3);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//DE-STRUCTURING=======================================================
const course = {
    coursename: "js in hindi",
    price: "1000",
    courseInstructor: "Ayush"
}

// course.courseInstructor

const {courseInstructor: ayush} = course
// console.log(courseInstructor);
console.log(ayush);

 [
    {},
    {},
    {}
 ]