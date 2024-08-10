# Object-Oriented Programming in JavaScript

This section of the project explores various concepts of Object-Oriented Programming (OOP) in JavaScript. It covers topics such as object literals, the `this` keyword, constructor functions, prototypes, and inheritance.

## Table of Contents
- [Object Literals & the `This` Keyword](#object-literals--the-this-keyword)
- [Constructor Function](#constructor-function)
- [Literals vs Built-in Constructors](#literals-vs-built-in-constructors)
- [Working with Object Properties](#working-with-object-properties)
- [Prototypes & The Prototype Chain](#prototypes--the-prototype-chain)
- [Adding Methods to The Prototype](#adding-methods-to-the-prototype)
- [Object.create](#objectcreate)
- [Prototypical Inheritance & `call()`](#prototypical-inheritance--call)
- [OOP Game Challenge](#oop-game-challenge)

### Object Literals & the `This` Keyword

In this section, we explore how to define objects using object literals and how to use the `this` keyword to refer to the object's properties.

```javascript
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
