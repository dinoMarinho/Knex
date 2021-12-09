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


// SELECT normal
/* database.select(["nome","preco"]).table("games").then(data => {
    console.dir(data);
}).catch(erro => {
    console.dir(erro);
}); */


//NESTED QUERIES
/*
database.insert({nome: "Mists of noyah", preco: 25})
    .into("games")
.then(data => {
    database.select(["id","preco"])
        .table("games")
    .then(data => {
        console.dir(data);
    }).catch(erro => {
        console.dir(erro);
    });
}).catch(erro => {
    console.dir(erro);
}); */


// WHERE
/*
database.select(["id", "nome"])
    .where({id: 3})
    // .where('columnName', 'like', '%rowlikeme%')
    .orWhere({id: 4})
    // .whereRaw('?? = ??', ['a.column_1', 'b.column_2'])
    .table('games')
.then(data => {
    console.dir(data);
}).catch(erro => {
    console.dir(erro);
}); */


//RAW
/*
database.raw("SELECT * FROM games").then(data => {
    console.log(data);
}).catch(erro => {
    console.log(erro);
}); */


// Delete
/* database.delete().where({id: 3}).table('games').then(data => {
    console.log(data);
}).catch(erro => {
    console.log(erro);
}); */