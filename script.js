
/*Question-1 */

let a=10;
let b ="10";
console.log(typeof(a))//==> check the which type od data it is
console.log(a == b) // true  ==> compaire oly the value if both are same it return true
console.log(a === b) // false  ==>compaire both the value and the type of data and if both match it return true

let p="10";
let q="10";
console.log(typeof(p+q)); // 1010 ==> add 2 string--datatype is string
/*Wired nature of js */
console.log(typeof(p*q)); // 100 ==>its multiple --datatype is number
console.log(p/q); // 1 ==>its divide --datatype is number


/* call(), apply(), bind() method */
let user={
  name:"Ainan", age:24, salaray:1000000
}
let user2={
  name:"jyoti", age:22, salary:800000
}


function display(company,jobrole){
  console.log("Hello",this);
  console.log(this.name + "is" + this.age + "years old", company, jobrole);
}


//call method
// display.call(user,"Google","developer");

//apply method
// display.call(user,["Google","developer"]);

//bind method
const sample=display.bind(user);
sample("Apple","Developer")
