const dotenv = require("dotenv")
const path = require("path")

const envPATH = path.join(__dirname,"../../.env")

dotenv.config({path:envPATH})

module.exports = {
    port:process.env.PORT
}