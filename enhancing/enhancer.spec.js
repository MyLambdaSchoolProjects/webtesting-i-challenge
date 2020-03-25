const enhancer = require("./enhancer.js");
// test away!

describe("Repair item", () => {
  it("Resets durability to 100", () => {
    const item = {
      name: "name of item",
      durability: 70,
      enhancement: 8
    };

    //const repair = enhancer.repair(item);
    enhancer.repair(item);

    expect(item.name).toBe(item.name);
    expect(item.durability).toBe(100);
    expect(item.enhancement).toBe(item.enhancement);
  }); //Resets durability

  it('Throws error if not an Object', () =>{
    expect(()=>enhancer.repair(undefined)).toThrow();
    expect(()=> enhancer.repair(null)).toThrow('');
    expect(()=> enhancer.repair(Nan)).toThrow();
    expect(()=> enhancer.repair(['name of item', 70, 8])).toThrow();
    expect(()=> enhancer.repair('name, durability, enhancement')).toThrow();
    expect(()=> enhancer.repair(50)).toThrow();
    //This passes as expected
    expect(()=> enhancer.repair({name: "item name", durability: 70, enhancement: 8})).not.toThrow();
    //This does not throw an error thus will fail as is expected
    //expect(()=> enhancer.repair({name: "item name", durability: 70, enhancement: 8})).toThrow();
  });//Error if not an Object
}); //describe Repair Item
