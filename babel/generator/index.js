// generator/index.js

const { parse } = require("@babel/parser");
const generate = require("@babel/generator").default;

// ソースコードを AST に変換
const ast = parse(`
const a = 1
`);

// generate の第一引数に AST を格納
console.log(generate(ast).code);
