const isObject = require("isobject");

module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (isObject(item)) {
    //console.log('length',Object.keys(item).length);
    if (Object.keys(item).length !== 3) {
      throw new Error();
      // }else{
      //   item.durability < 100 ? item.durability = 100: {...item};
    }
    if (typeof item.name !== "string") {
      throw new Error();
    }
    if (
      !Number.isInteger(item.durability) ||
      !Number.isInteger(item.enhancement)
    ) {
      throw new Error();
    }
    item.enhancement < 20 ? item.enhancement++ : { ...item };
  } else {
    throw new Error();
  }

  //return { ...item };
}

function fail(item) {
  if (isObject(item)) {
    //console.log('length',Object.keys(item).length);
    if (Object.keys(item).length !== 3) {
      throw new Error();
      // }else{
      //   item.durability < 100 ? item.durability = 100: {...item};
    }
    if (typeof item.name !== "string") {
      throw new Error();
    }
    if (
      !Number.isInteger(item.durability) ||
      !Number.isInteger(item.enhancement)
    ) {
      throw new Error();
    }
    if (item.enhancement < 15) {
      item.durability -= 5;
    } else if (item.enhancement === 15) {
      item.durability -= 10;
    } else if (item.enhancement >= 16) {
      item.durability -= 10;
      item.enhancement -= 1;
    } else {
      return { ...item };
    }
  } else {
    throw new Error();
  }
}

function repair(item) {
  if (isObject(item)) {
    //console.log('length',Object.keys(item).length);
    if (Object.keys(item).length !== 3) {
      throw new Error();
      // }else{
      //   item.durability < 100 ? item.durability = 100: {...item};
    }
    if (typeof item.name !== "string") {
      throw new Error();
    }
    if (
      !Number.isInteger(item.durability) ||
      !Number.isInteger(item.enhancement)
    ) {
      throw new Error();
    }
    item.durability < 100 ? (item.durability = 100) : { ...item };
  } else {
    throw new Error();
  }

  //return { ...item };
}

function get(item) {
  return { ...item };
}
