
exports.create = (name, number) => {
    var message = `${name}の学籍番号は${number}です。`;
    return message;
  }


// const fs = require('fs');
// const dotenv = require('dotenv');

// dotenv.config();
// const name = process.env.NAME;
// const number = process.env.NUNBER;


// function create(name, number) {
//     const result = `${name}の学籍番号は${number}です。`;
  
//     return result;
//   }