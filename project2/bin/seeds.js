const mongoose = require("mongoose")
const Contribution = require("../models/Contributions")

const dbase= "data"
mongoose.connect(`mongodb://localhost/project2`)

let data = [
  {
    comand : "//",
    descrption : "Using for comment line code",
  }, {
    comand : "/* .... */",
    descrption: "Using to comment a code block",
  }, {
    comand: "var",
    descrption : "declares a variable, optionally initializing a value to it",
  }, {

    comand : "let",
    description : "Declares a block-scoped, local variable, optionally initializing it to a value",
  }, {

    comand :"const",
    description :"Declares a block-scoped, read-only named constant",
  }, {
    comand: "boolean type",
    description: "true o false",
  }, {
    comand :  "null type",
    description: "keyword denoting a null value",
  }, {
    comand: "undefined",
    description:"a top-level propertu whose value is not defined",
  }, {
    comand: "number",
    description: "An interger or floating point number",
  }, {
    comand:"string",
    description:"a sequence of characters tha represents a text value",
  }, {

    comand: "Array []",
    description :"is a list of zero or more expressions",
  }, {
    comand: "block statment{}",
    description:"Is used to group statments",
  }, {
    comand: "if-else",
    description:"execute a statment if a logical condition is tru, an es clause to execute a statment if the condition is false",
  }, {
    comand: "promise",
    description: "allow to control the flow of deferred and asyncrhronous operations",
  }, {
    comand: "for",
    description: "loop that repeats until a specified condition evaluates to false",
  }, {

    comand: "label",
    description: "provides a statment whit an identifier that lets you refer to it elsewhere in your program",
  }, {
    comand: "break",
    description:"statement to terminate a loop",
  }, {
    comand: "function declaration",
    description:"variables defined inside a function cannot be accessed from anywhere outside the function",
  }, {
    comand :"arrow function",
    description:"has a shorter syntax compared to function expressions and does not have its own this",
  }, {
    comand : "==",
    description:"returns trje if the operands are equal",
  },{
    comand :"!=",
    description:"returns true if the operands are not equal",
  }, {
    comand : "===",
    description:"returns true if the operands are equal and of the same type",
  }, {
    comand : "!==",
    description:"returns true if the operands are of the same type but not equal, or a of different type",
  }, {
    comand: ">",
    description:"returns true if the left operand is greater than the right operand",
  }, {
    comand: ">:",
    description:"returns true if the left operand is greater than or equal to the right operand",
  }, {
    comand:"<",
    description :"returns true if the left operand is less than the right operand",
  }, {
    comand: "<:",
    description:"returns true if the left operand is less than or eual to the right operand",
  }, {
    comand:"%",
    description:"Binary operator. Returns the intefer remainder of dividing the two operands",
  }, {
    comand :  "++",
    description:"Unary operator. adds one to its operand",
  }, {
    comand:"--",
    description:" Substract one from its operand.The return value is analogous to that for the increment operator",
  }, {
    comand: "-",
    description:"returns the negation of its operand",
  }, {
    comand :"+",
    description:"Attempts to convert the operand to a number, if it is not already",
  }, {
    comand : "**",
    description:"Calculates the base to the exponent power, that is, base exponent"
  } 
]

Contribution.create(data)
.then(data =>{
  console.log(`You created ${data.length}data succesfuly.`)
  mongoose.connection.close()
})
.catch(err => console.log("UPS SOMETHING WENT WRONG", err))