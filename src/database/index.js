const path = require("path")
const {Sequelize} = require("sequelize")
const dbPath  = path.join(__dirname,"../../dbsqlite")
const sequelize = new Sequelize({storage:dbPath,dialect:"sqlite",sync:true,logging:console.log})

sequelize.sync()

module.exports = sequelize