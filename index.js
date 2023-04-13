// const Path = require('path');

module.exports = {
  register({options}){
    global.Aloop.services = () => require('./reader/services');
  },
  
  boot({app}) {}
};
