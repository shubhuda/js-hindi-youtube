const coding =['js','ruby','java', 'python','c++'];
// Now forEach() loop is directly added to properties of an array
// The forEach() method of Array instances executes a provided function once for each array element.

/* coding.forEach(function(item)
{
    console.log(`coding we have ${item}`)
}) */

/* coding.forEach((item) => 
{
    console.log(`coding we have ${item}`)
}) */

function printMe(item){
    console.log('item',item)
}
coding.forEach(printMe); // just give reference of callaback fn


const employees = [
    {name:'shubham',age:32},
    {name: 'prashnat',age: 31},
    {name: 'nibu',age: 30},
]
employees.forEach((employee,index,arr)=>{
    console.log(`employee name is ${employee.name} and age is ${employee.age}`)
    console.log(` whole employees collection is ${arr}`);
})