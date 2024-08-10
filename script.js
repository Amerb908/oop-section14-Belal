//More on Object Literals & the 'This' Keyword 01
const rectangle = 
{
    name: 'Rectangle 1',
    width: 20,
    height: 10,
    area: function()
    {
        return this.width * this.height
    },
};


const rectangle2 = 
{
    name: 'Rectangle 2',
    width: 30,
    height: 20,
    area: function()
    {
        return this.width * this.height
    },
};

console.log(rectangle2.area());

//----------------------------------------------------------------------------------------
//Constructor Function 02
function Rectangle(name, width, height)
{
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function()
    {
        return this.width * this.height
    };
}

const rect1 = new Rectangle('Rectangle 1', 20, 10);
console.log(rect1.name);
console.log(rect1.area());

const rect2 = new Rectangle('Rectangle 2', 30, 20);
const rect3 = new Rectangle('Rectangle 3', 40, 30);

console.log(rect2.name, rect3.name);
console.log(rect2.area(), rect3.area());

// 1, A new empty object is created
// 2, The constructor function is called with the arguments that we passed in
// 3, The 'this' keyword is set to the new object
// 4, The new object is returned

console.log(rect1.constructor);
console.log(rect2 instanceof Rectangle);

//----------------------------------------------------------------------------------------
//Literals vs Built-in Constructors 03
const strLit = 'Hello';
const strObj = new String('Hello');

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

//Boxing
console.log(strLit.toUpperCase);
console.log(strLit[0]);

//Unboxing
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor);
console.log(strObj.constructor);

console.log(strLit instanceof String);
console.log(strObj instanceof String);

//other types
const numLit = 20;
const numObj = new Number(20);

consoile.log(numLit, typeof numLit);
console.log(numObj, typeof numObj);

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit);
console.log(boolObj, typeof boolObj);

const arrLit = [1, 2, 3];
const arrObj = new Array(1, 2, 3);

console.log(arrLit, typeof arrLit);
console.log(arrObj, typeof arrObj);

const funcLit = function(x) 
{
    return x * x;
};

console.log(funcLit, typeof funcLit);
console.log(funcLit(10));

const funcObj = new Function('x', 'return x * x');
console.log(funcObj(3));

const obj1 = {};
const obj2 = new Object();

console.log(obj1, typeof obj1);
console.log(obj2, typeof obj2);

//----------------------------------------------------------------------------------------
//Working with Object Properties 04
function Rectangle(name, width, height)
{
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function()
    {
        return this.width * this.height
    };
}

const rect1 = new Rectangle('Rectangle 1', 20, 10);
const rect2 = new Rectangle('Rectangle 2', 30, 20);

console.log(rect1.name, rect2.width);
console.log(rect1.width);

rect1.color = 'red';

rect2.perimeter = () => 2 * (rect2.width + rect2.height);

delete rect2.perimeter;

//Check for property
console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

//check keys
console.log(Object.keys(rect1));

//check values
console.log(Object.values(rect2));

//check entries
console.log(Object.entries(rect2));

for (let [key, value] of Object.entries(rect1))
{
    if (typeof value !== 'function')
    {
        console.log(`${key} - ${value}`);
    }
}

console.log(rect2);

//----------------------------------------------------------------------------------------
//Prototypes & The Prototype Chain 05


//----------------------------------------------------------------------------------------
//Adding Methods To The Prototype 06


//----------------------------------------------------------------------------------------
//Object.create 07


//----------------------------------------------------------------------------------------
//Prototypical Inheritance & call() 08


//----------------------------------------------------------------------------------------
//OOP game challenge 09