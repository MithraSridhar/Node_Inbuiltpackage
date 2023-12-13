console.log("Hello")

// console.log(window)
// console.log(document)

//instead of window and document , we can use global in node
//console.log(global)

//command line arguments - we can pass a value while running the command

//it is an array
console.log(process.argv)

//destructive process.argv

const[,,n1,n2] = process.argv

//mul
function double(n1,n2){
    console.log("Double is ", n1*n2)
}
double(n1,n2)

//sum
function sum(n1,n2){
    console.log("Sum is ", Number(n1)+Number(n2))
    console.log("Sum is ", +n1 + +n2)
}
sum(n1,n2)