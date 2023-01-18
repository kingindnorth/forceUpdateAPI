const businesslogic = require("../business/forceUpdate")

module.exports.forceUpdate = async(req,res) => {
    console.log(`force update from controller`)
    try{
      const platform = req.body.platform
      const appversion = req.body.appversioncode
      const response = await businesslogic
      .forceUpdate(platform, appversion)
      console.log(`response from controller :${response}`)
      res.send(response)
    }catch(error){
      console.log(error,"from controller")
    //   logger.error(`get error logs from controller: ${error}`)
    }  
  }