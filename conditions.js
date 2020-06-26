  module.exports = {
      isString:  (value) => {
      if(typeof value == 'string' || value instanceof String) {
        return true;
      }
      return false;
    },
    isInt:  (value) => {
      // return (value %1 === 0)
      if(value%1===0) {
        return true;
      }
      return false;
    }
  }
  
  
