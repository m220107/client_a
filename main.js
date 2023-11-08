const dotenv = require('dotenv')
const message = require('./message')
const fs = require('fs')

dotenv.config()
const name = process.env.NAME;
const number = process.env.NUNBER;

const generatedString = message.create(name, number);

fs.writeFileSync('result.txt', generatedString);

console.log('結果をresult.txtに書き出しました:', generatedString);