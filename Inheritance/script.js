// /*classical version*/
// function Shape() {   /*abctraction*/
//    this.x = 1        /*encapsulation*/
// }
// Shape.prototype.draw = function () {
//    console.log('shape method');
// }
// let t = new Shape()
// console.log(t);
// console.log(t.draw());


// function Triangle() {
//    Shape.call(this)                        /*inheritance*/
// }

// Triangle.prototype = Object.create(Shape.prototype) /*inheritance*/

// Triangle.prototype.draw = function () {   /*polimorphism*/
//    console.log('triangle method');        /*polimorphism*/
// }                                         /*polimorphism*/
// let t2 = new Triangle()
// console.log(t2);
// console.log(t2.draw());



// /*modern version*/

// class Shape {
//    constructor(x) {
//       this.x = x
//    }
//    draw = () => console.log("shape method");

// }

// class Triangle extends Shape { /*class triangle extend class shape*/
//    constructor(x) {
//       super(x)
//    }
//    draw = () => console.log("triangle method");
// }



/*home task*/


function Entity(options) {
   this.name = options.name
   this.country = options.country
}
Entity.prototype.print = function () {
   console.log(this.name + ' company is located in the ' + this.country);

}
let nameCompany1 = new Entity({ name: 'ROSHEN', country: 'Ukraine' })
let nameCompany2 = new Entity({ name: 'MAZ', country: 'Belarus' })

console.log(nameCompany1.print());
console.log(nameCompany2.print());



function User(options) {
   Entity.apply(this, arguments)
   this.surName = options.surName
}
User.prototype = Object.create(Entity.prototype)
User.prototype.print = function () {
   console.log('Director is ' + this.name + this.surName + ' in ' + this.country)
}
let nameUser1 = new User({ name: 'Mihail ', country: 'Belarus', surName: 'Poroshenko' })
let nameUser2 = new User({ name: 'Aleksandr ', country: 'Belarus', surName: 'Lukashenko' })

console.log(nameUser2);
console.log(nameUser1.print());
console.log(nameUser2.print());



function Box(options) {
   User.apply(this, arguments)
   this.thing = options.thing
}
Box.prototype = Object.create(User.prototype)
Box.prototype.print = function () {
   console.log('The name of the box: ' + this.name + ', in it lie: ' + this.thing);
}
Box.prototype.owner = function () {
   console.log('The Ownew: ' + this.name);
}
let box1 = new Box({ name: 'office', thing: 'pen', name: 'Misha' })
let box2 = new Box({ name: 'donations', thing: 'money', name: 'Sasha' })

console.log(box1);
console.log(box1.print());
console.log(box2.print());
console.log(box1.owner());
console.log(box2.owner());



function Stuff(options) {
   Box.apply(this, arguments)
   this.stuff = options.stuff
}
Stuff.prototype = Object.create(Box.prototype)
Stuff.prototype.print = function () {
   console.log('This box with ' + this.name + ' ' + this.stuff);
}

let stuff1 = new Stuff({ name: 'Sasha', stuff: 'sawdust' })

console.log(stuff1);
console.log(stuff1.print());
