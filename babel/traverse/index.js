// traverse/index.js

const { parse } = require("@babel/parser");
const generate = require("@babel/generator").default;
const traverse = require("@babel/traverse").default;

// AST を変換
const ast = parse(`
const a = 1
let b = 2
`);

// AST を第一引数に、変更内容を第二引数にする
traverse(ast, {
  // 変更したい部分(今回は VariableDeclaration )
  VariableDeclaration(path) {
    // kind を var に変更
    path.node.kind = "var";
  },
});

// // generate の第一引数に AST を格納し、コードを生成
console.log(generate(ast).code);
