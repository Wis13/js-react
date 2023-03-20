// const btns = document.querySelectorAll('button');
//
// console.log(btns[0].classList.length);
// console.log(btns.length);
// // console.log(btns[0].classList.item(0));
// // console.log(btns[0].classList.add('red'));
// // console.log(btns[0].classList.remove('blue'));
// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.toggle('blue'));
// // console.log(btns[0].classList.length);
//
// btns[1].addEventListener('click', () => {
//     // if (!btns[1].classList.contains('red')) {
//     //     btns[1].classList.add('red');
//     // } else {
//     //     btns[1].classList.remove('red');
//     // }
//
//     btns[2].classList.toggle('red');
// });

// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function (){
//         console.log(`Hello ${this.name}`);
//     }
// }
//
// User.prototype.exit = function (name) {
//     console.log(`User ${this.name} is gone.`)
// }
//
// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 22);
//
// ivan.hello();
// alex.hello();
// ivan.exit();
// alex.exit();
//
// console.log(ivan);
// console.log(alex);

'use strict'

class Rectangle{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

class ColoredRectangle extends Rectangle{
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`Text: ${this.text}, color: ${this.bgColor}` )
    }
}
// const square = new Rectangle(10,10);
// const long = new Rectangle(20,100);
// console.log(square.calcArea())
// console.log(long.calcArea())

const div =  new ColoredRectangle(25,10, 'Aloha', "red");

div.showMyProps();
console.log(div.calcArea());
