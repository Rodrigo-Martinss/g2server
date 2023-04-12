const  Sequelize = require('sequelize');


const sequelize = new Sequelize('g2server', 'root', '123456', {
    host:'localhost',
    dialect: 'mysql'
});


sequelize.authenticate()
.then(() => {
    console.log("Conectado ao Banco de Dados");
}).catch(() => {
    console.log("Não foi possível se conectar com o Banco de Dados");
});

module.exports = sequelize;