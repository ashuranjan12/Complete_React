// function fun(){
//     console.log("Hello Fun")
// }

// fun();

// const accName = function() {
//     let userName = "Ashutosh"
//     console.log(userName)
// }
// accName()

// Arrow Function -->

// const firstName = () => {
//     let msg = "Hello Ji"
//     console.log(this)
// }

// firstName()

// const calculateNum = function(...num) {
//     return num
// }

// console.log(calculateNum(100, 200, 300, 400, 500, 600))

const obj = {
    name : 'Ashutosh',
    age : 25,
    Designation : 'Software Engineer',

    newage(){
        console.log("I am function")
    }
}

console.log(`obj of name is: ${obj.newage()}`);
