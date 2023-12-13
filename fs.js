const fs = require("fs")

//const quote ="Make everyday little less ordinary"
//write file
// fs.writeFile("awsone.xlsx",quote,()=>{
//     console.log("writing completed")
// })

//read file
// fs.readFile("./cool.txt","utf-8",(err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// })

//task 1
// const quote2 ="Live more, worry Less :):) "; 
// const filepath ="./backup/text-"

// for(var i=1;i<=10;i++){
// fs.writeFile(`${filepath}${i}.html`,quote2,()=>{
//     console.log("writing completed")
// }
// )}

//task 2
// console.log(process.argv)
// const[,,n] = process.argv
// console.log(n)

// const quote2 ="Live more, worry Less :):) "; 
// const filepath ="./backup/text-"

// for(var i=1;i<=n;i++){
// fs.writeFile(`${filepath}${i}.html`,quote2,()=>{
//     console.log("writing completed")
// }
// )}

//file name as date-time.text
const currentDate = new Date()
//padStart - restricting the result to 2 digits and 0 will be added to prefix to make it 2 digits
const formatedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth()+1).toString().padStart(2,'0')}-${currentDate.getDate().toString().padStart(2,'0')}`
const formatedTime = currentDate.getHours()

console.log(formatedDate,formatedTime)
const fileName = `${formatedDate}_${formatedTime}.txt`
console.log(fileName)

const timestamp = currentDate.toISOString()
const content = `TimeStamp: ${timestamp}`
console.log(content)

fs.writeFile(`./${fileName}`,content,(err)=>{
if(err) console.log(err)
console.log(`File: ${fileName} created successfully`)
})