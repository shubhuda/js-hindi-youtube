const myObject = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: " swift by apple",
}
const myArr = ['Javascript','c++','ruby', 'python']

const map = new Map()
map.set('IN','India');
map.set('USA','United states of america');
map.set('FRA','France');
console.log('map1---->', map);

/************************************* for....in loop ************************************************/
// for...in Loop for object
for (const key in myObject) { 
    console.log('key in object when using forIn Loop-->',key); // js cpp rb swift
    console.log(`${key} is shortcut of ${myObject[key]}`);
}

// for...in Loop for array
for (const key in myArr) {
    console.log('key in Array when using forIn Loop-->',key); // 0 1 2 3
}

// for...in Loop for Map
for (const key in map) {
    console.log('key in Map when using forIn Loop-->',key); // 
}

/**
 * The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), 
 * including inherited enumerable properties.
 */