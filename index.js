var database = require('./database');

const dados = [
   { nome: "Call of Duty",
    preco: 100.67},
   { nome: "Minecraft",
   preco: 30.78},
]

// Inserindo dados
/*
database.insert(dados).into('games').then(data => {
    console.dir(data);
}).catch(error => {
    console.dir(err)
});
*/