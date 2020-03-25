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
    item.durability < 100 ? item.durability = 100: {...item};
  }else{
    throw new Error;
  }
  
  //return { ...item };
}

function get(item) {
  return { ...item };
}
