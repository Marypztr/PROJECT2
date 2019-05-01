const mongoose = require("mongoose")
const Contribution = require("../models/Contributions")

const dbase= "data"
mongoose.connect(`mongodb://localhost/project2`)

let data = [
  {
    command : "//",
    description  : "Using for comment line code",
    validation: true,
  }, {
    command : "/* .... */",
    description : "Using to comment a code block",
    validation: true
  }, {
    command: "var",
    description  : "declares a variable, optionally initializing a value to it",
    validation: true
  }, {

    command : "let",
    description : "Declares a block-scoped, local variable, optionally initializing it to a value",
    validation: true
  }, {

    command :"const",
    description :"Declares a block-scoped, read-only named constant",
    validation: true
  }, {
    command: "boolean type",
    description: "true o false",
    validation: true
  }, {
    command :  "null type",
    description: "keyword denoting a null value",
    validation: true
  }, {
    command: "undefined",
    description:"a top-level propertu whose value is not defined",
    validation: true
  }, {
    command: "number",
    description: "An interger or floating point number",
    validation: true
  }, {
    command:"string",
    description:"a sequence of characters tha represents a text value",
    validation: true
  }, {

    command: "Array []",
    description :"is a list of zero or more expressions",
    validation: true
  }, {
    command: "block statment{}",
    description:"Is used to group statments",
    validation: true
  }, {
    command: "if-else",
    description:"execute a statment if a logical condition is tru, an es clause to execute a statment if the condition is false",
    validation: false
  }, {
    command: "promise",
    description: "allow to control the flow of deferred and asyncrhronous operations",
    validation: true
  }, {
    command: "for",
    description: "loop that repeats until a specified condition evaluates to false",
    validation: true
  }, {

    command: "label",
    description: "provides a statment whit an identifier that lets you refer to it elsewhere in your program",
    validation: true
  }, {
    command: "break",
    description:"statement to terminate a loop",
    validation: true
  }, {
    command: "function declaration",
    description:"variables defined inside a function cannot be accessed from anywhere outside the function",
    validation: true
  }, {
    command :"arrow function",
    description:"has a shorter syntax compared to function expressions and does not have its own this",
    validation: true
  }, {
    command : "==",
    description:"returns trje if the operands are equal",
    validation: true
  },{
    command :"!=",
    description:"returns true if the operands are not equal",
    validation: true
  }, {
    command : "===",
    description:"returns true if the operands are equal and of the same type",
    validation: true
  }, {
    command : "!==",
    description:"returns true if the operands are of the same type but not equal, or a of different type",
    validation: true
  }, {
    command: ">",
    description:"returns true if the left operand is greater than the right operand",
    validation: false
  }, {
    command: ">:",
    description:"returns true if the left operand is greater than or equal to the right operand",
    validation: true
  }, {
    command:"<",
    description :"returns true if the left operand is less than the right operand",
    validation: true
  }, {
    command: "<:",
    description:"returns true if the left operand is less than or eual to the right operand",
    validation: true
  }, {
    command:"%",
    description:"Binary operator. Returns the intefer remainder of dividing the two operands",
    validation: true
  }, {
    command :  "++",
    description:"Unary operator. adds one to its operand",
    validation: true
  }, {
    command:"--",
    description:" Substract one from its operand.The return value is analogous to that for the increment operator",
    validation: true
  }, {
    command: "-",
    description:"returns the negation of its operand",
    validation: true
  }, {
    command :"+",
    description:"Attempts to convert the operand to a number, if it is not already",
    validation: false
  }, {
    command : "**",
    description:"Calculates the base to the exponent power, that is, base exponent",
    validation: true
  } 
]

Contribution.create(data)
.then(data =>{
  console.log(`You created ${data.length}data succesfuly.`)
  mongoose.connection.close()
})
.catch(err => console.log("UPS SOMETHING WENT WRONG", err))