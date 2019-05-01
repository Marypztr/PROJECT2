require('dotenv').config();

const mongoose = require("mongoose")
const Contribution = require("../models/Contributions")

const dbase = "data"
mongoose.connect(process.env.DB)

let data = [
  {
    command: "//",
    description: "Using for comment line code",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "/* .... */",
    description: "Using to comment a code block",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "var",
    description: "declares a variable, optionally initializing a value to it",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {

    command: "let",
    description: "Declares a block-scoped, local variable, optionally initializing it to a value",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {

    command: "const",
    description: "Declares a block-scoped, read-only named constant",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "boolean type",
    description: "true o false",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "null type",
    description: "keyword denoting a null value",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "undefined",
    description: "a top-level propertu whose value is not defined",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "number",
    description: "An interger or floating point number",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "string",
    description: "a sequence of characters tha represents a text value",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {

    command: "Array []",
    description: "is a list of zero or more expressions",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "block statment{}",
    description: "Is used to group statments",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "if-else",
    description: "execute a statment if a logical condition is tru, an es clause to execute a statment if the condition is false",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "promise",
    description: "allow to control the flow of deferred and asyncrhronous operations",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "for",
    description: "loop that repeats until a specified condition evaluates to false",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {

    command: "label",
    description: "provides a statment whit an identifier that lets you refer to it elsewhere in your program",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "break",
    description: "statement to terminate a loop",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "function declaration",
    description: "variables defined inside a function cannot be accessed from anywhere outside the function",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "arrow function",
    description: "has a shorter syntax compared to function expressions and does not have its own this",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "==",
    description: "returns trje if the operands are equal",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "!=",
    description: "returns true if the operands are not equal",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "===",
    description: "returns true if the operands are equal and of the same type",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "!==",
    description: "returns true if the operands are of the same type but not equal, or a of different type",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: ">",
    description: "returns true if the left operand is greater than the right operand",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: ">:",
    description: "returns true if the left operand is greater than or equal to the right operand",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "<",
    description: "returns true if the left operand is less than the right operand",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "<:",
    description: "returns true if the left operand is less than or eual to the right operand",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "%",
    description: "Binary operator. Returns the intefer remainder of dividing the two operands",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "++",
    description: "Unary operator. adds one to its operand",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "--",
    description: " Substract one from its operand.The return value is analogous to that for the increment operator",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "-",
    description: "returns the negation of its operand",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "+",
    description: "Attempts to convert the operand to a number, if it is not already",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }, {
    command: "**",
    description: "Calculates the base to the exponent power, that is, base exponent",
    validation: true,
    owner: "5cc9cb21f3e7a52d018b3044"
  }
]

Contribution.create(data)
  .then(data => {
    console.log(`You created ${data.length}data succesfuly.`)
    mongoose.connection.close()
  })
  .catch(err => console.log("UPS SOMETHING WENT WRONG", err))