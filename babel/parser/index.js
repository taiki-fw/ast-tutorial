// parser/index.js

const { parse } = require("@babel/parser");

// AST に変換
const ast = parse(`
const a = 1
`);

console.log(JSON.stringify(ast, null, 2));
