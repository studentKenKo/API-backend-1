const rwClient = require("./configTwitter")

rwClient.v1.tweet('This tweet was written by a bot3333333').then((val) => {
    console.log(val)
    console.log("success")
}).catch((err) => {
    console.log(err)
})


//module.exports = Autotweet