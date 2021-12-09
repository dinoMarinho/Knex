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
});
*/


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
});
*/


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
});
*/


//RAW
/*
database.raw("SELECT * FROM games").then(data => {
    console.log(data);
}).catch(erro => {
    console.log(erro);
});
*/


// Delete
/* database.delete().where({id: 3}).table('games').then(data => {
    console.log(data);
}).catch(erro => {
    console.log(erro); 
});
*/


// Update
/* database.update({preco: 40}).table('games').where({nome: 'Call of Duty'}).then(data => {
    console.log(data);
}).catch(erro => {
    console.log(erro);
});
*/


// OrderBy
/*
database.select().table("games").orderBy("preco", "desc").then(data => {
    console.log(data);
}).catch(erro => {
    console.log(erro);
});
*/


// Inserção associada
/*
database.insert({
    nome: "Blizzard",
    game_id: 4
}).table("estudios").then(data => {
    console.log(data);
}).catch(erro => {
    console.log(erro);
});
*/


// JOIN
/* 
database.select(["games.*", "estudios.id as est_id", "estudios.nome as est_nome"])
.table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data => {
    console.log(data);
}).catch(erro => {
    console.log(erro);
});
*/


async function testeTransacao(){
    try{
        await database.transaction(async trans => {
            await database.insert({nome: "Quaquer", game_id:  4}).table("estudios");
            await database.insert({nome: "Pyxerelia", game_id:  4}).table("estudios");
            await database.insert({nome: "Mojang", game_id:  4}).table("estudios");
            await database.insert({nome: "Gearbox", game_id:  4}).table("estudios");
            console.log('Success!');
        });
    }catch(err){
        console.log(err);
    }

}

testeTransacao();