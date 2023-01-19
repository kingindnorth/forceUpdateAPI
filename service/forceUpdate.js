const db = require("../models/index")
const version_androids = db.model
const Sequelize = require("sequelize")

module.exports.forceUpdate = async(platform, appversion) => {
    console.log(`force-update from service`)  
    try{
        const appV = parseInt(appversion)
        let table = ""
        if(platform === "android"){
          table = version_androids
        }
        else if(platform === "ios"){
          table = versionIos
        }
        if(table === ""){
          console.log(`no platform detected`)
          return 
        }
        console.log(table,"table name")
        
        const versions = await table.findAll({
            where: {
              code: {
                  [Sequelize.Op.gt]: appV
              }
          }
          })
        console.log(versions,"versions")
        // logger.info(`version from service | ${versions}`)

        let result = []
        versions.forEach(val=>{
            result.push(val.dataValues)
        })
        console.log(result,"result")
        return result
      }catch(error){
        console.log(error,"from service")
        // logger.error(`get error logs from service: ${error}`)
      }
  }