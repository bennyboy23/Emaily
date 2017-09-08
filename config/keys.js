//figure out the correct credentials to return

if(process.env.NODE_ENV === 'production'){
//return prod keys
module.exports = require('./prod');

}else{
//return dev keys
    moduel.exports = require('./dev');

}