/* // new Object() creates a singleton object
const tinderUser = new Object();
console.log(tinderUser) */

const tinderUser = {}
tinderUser.id = 'abc123';
tinderUser.name = 'Shubham Saxena';
tinderUser.isLoggedIn = false;

const anotherUser = {
    email: '123@gmail.com',
    fullname: {
        username: {
            firstname: 'shubham',
            lastname: 'saxena',
        }
    }
}
console.log(anotherUser.fullname.username.firstname)
// optional chaining -> let say fullname doesnt exist console.log(anotherUser.fullname?.username.firstname)

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};
const obj3 = {obj1, obj2};
//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1, obj2); // obj1 is the target object and obj2 is the source object and It returns the modified target object.
//console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign({}, obj1, obj2); //  {} is the target object and obj1, obj2 are the source objects and It returns the modified target object.
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd'  }
console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj2)

const obj6 = {...obj1, ...obj2}
console.log('By spread operator', obj6) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(tinderUser); // { id: 'abc123', name: 'Shubham Saxena', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 'abc123', 'Shubham Saxena', false ]
console.log(Object.entries(tinderUser)); // har key value ko ek araay  ke andar dal deta hai and ek array deta hao
/** 
 * [
  [ 'id', 'abc123' ],
  [ 'name', 'Shubham Saxena' ],
  [ 'isLoggedIn', false ]
]
 */
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// +++++++ DeStructuring

const course = {
    coursename: 'js hindi',
    price: 999,
    courseInstructor: 'Hitesh'
}
// const {coursename} = course; SYNTAX1
//console.log(coursename); // js hindi

const {coursename : name} = course; // SYNTAX2
console.log(name); // js hindi

// In react we can destructure the props

// JSON we can format by uisng diff tools like json Formatter
/* {
    'name': 'hitesh',
    'coursename': 'js hindi',
    'price': '99' 
} */