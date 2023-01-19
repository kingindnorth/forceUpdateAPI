const User = require("../service/forceUpdate")

exports.forceUpdate = async(platform,appversion) => {
    console.log(`force-update from business`)
    try{
        const result = await User.forceUpdate(platform,appversion)
        console.log(result)
        if(!result){
            console.log(`unable to get result in business`)
            return 
        }
        //if no update result returned (no update required)
        if(result.length === 0){
            console.log('no update required');
            return {
                update: `version:${appversion}`,
                message: "No update required"
            }
        }
        let force_update = false
        let update = ""
        let message = ""
        for (let i = 0; i < result.length; i++) {
            //if result.type is critical update 
            console.log(result[i].type);
            if (result[i].type === false) {
                force_update = true;
                update = result[i].name
                message = result[i].message;
                break;
            }
        }
        //critical update
        if(force_update){
            return {
                update,
                message
            }
        }
        //update and message from latest row in db (optional update)
        update = result[result.length - 1].name
        message = result[result.length - 1].message
        return {
            update,
            message
        }
    }catch(error){
      console.log(error,"from business")
    //   logger.error(`get error logs from business: ${error}`)
    }
}