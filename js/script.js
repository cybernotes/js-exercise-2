// This creates the global varibale x and assigns it the number value of 5
// var x = 5;
// console.log(x);
// x+=1;
// console.log(x);
// x++;
// console.log(x);
// x = x + 1;
// console.log(x);
//these are 3 different ways to increment the value of x by 1

// var y = 8;
// y-= 1;
// y--;
// y = y - 1;
// console.log(y)
//These are 3 different ways to decrease y by 1

// var z = 8;
// z = z * 2;
// console.log(z);
// z *= 2;
// console.log(z);
//These are 2 ways to multiply the value z by 2

// var a = 8;
// a = a / 2;
// console.log(a);
// a /= 2;
// console.log(a);
//These are 2 ways to divid a by 2 in place

// var b = 17;
// b = b % 2;
// console.log(b);
//Modulus takes the value divides it by the number and returns the remainder

function evenOrOdd(num){
	var tester = num % 2;
	if (tester === 0){
		console.log("The value passed is even");
			} else if (tester ===1) {
				console.log("The value passed is odd")
			}else {
				console.log("Please provide a number for this function")
			}
}

evenOrOdd(10);










