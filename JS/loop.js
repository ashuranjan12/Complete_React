// For loop -->

// for (let i = 0; i < 10; i++) {
//     console.log(i)
    
// }

// for (let i = 0 ; i<= 10; i++){

//     if(i == 5){
//         console.log("5 Detected!!");

//         break
        
//     }
//     console.log(i)
// }

// for (let i = 0 ; i<= 10; i++){

//     if(i == 5){
//         console.log("5 Detected!!");

//         continue
        
//     }
//     console.log(i)
// }


// For Of loop -->

// const myarr = ["Ashutosh", "Ranjan", 25, 2000]

// for(key of myarr){
//     console.log(key);
    
// }

// const myName = "Ashutosh Ranjan"

// for (value of myName){
//     console.log(`words Of the Name is: ${value}`);
    
// }

// const obj = {
//     firstName : 'Ashutosh',
//     lastName : 'Ranjan',
//     Age : 25,
//     work : 'Software Engineer'
// }

// for (key of obj){
//     console.log(key);
    
// } :- This will give error because we can not apply loop on object using 'for of'

// Map :-
// const map = new Map() 
//     map.set('name', 'Ashutosh Ranjan')
//     map.set('work', 'Software Engineer')
//     map.set('experience', '2 year')

//     for([m,val] of map){
//         console.log(`${m}:- ${val}`);
        
//     }


// For in Loop -->

// const obj = {
//     Name : 'Ashutosh Ranjan',
//     Age : 25,
//     Work : 'Software Engineer',
//     Status : 'Employed'
// }

// for (const key in obj) {
//   console.log(key + ":", obj[key]);
// }