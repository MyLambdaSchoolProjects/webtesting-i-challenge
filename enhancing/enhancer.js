const isObject = require('isobject');

module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if(isObject(item)){
    //console.log('length',Object.keys(item).length);
    if(Object.keys(item).length !== 3){
        throw new Error;
      // }else{
      //   item.durability < 100 ? item.durability = 100: {...item};
      }
    if(typeof item.name !== 'string'){throw new Error;}
    if(!Number.isInteger(item.durability) || !Number.isInteger(item.enhancement)){
      throw new Error;
    }
      item.durability < 100 ? item.durability = 100: {...item};
  }else{
    throw new Error;
  }
  
  //return { ...item };
}

function get(item) {
  return { ...item };
}
