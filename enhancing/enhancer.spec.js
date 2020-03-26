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

  it("Throws error if not an Object", () => {
    expect(() => enhancer.repair(undefined)).toThrow();
    expect(() => enhancer.repair(null)).toThrow("");
    expect(() => enhancer.repair(Nan)).toThrow();
    expect(() => enhancer.repair(["name of item", 70, 8])).toThrow();
    expect(() => enhancer.repair("name, durability, enhancement")).toThrow();
    expect(() => enhancer.repair(50)).toThrow();
    //This passes as expected
    expect(() =>
      enhancer.repair({ name: "item name", durability: 70, enhancement: 8 })
    ).not.toThrow();
    //This does not throw an error thus will fail as is expected
    //expect(()=> enhancer.repair({name: "item name", durability: 70, enhancement: 8})).toThrow();
  }); //Error if not an Object

  it("Throws an error if key: value pairs are missing", () => {
    expect(() =>
      enhancer.repair({ name: "item name", durability: 70, enhancement: 8 })
    ).not.toThrow();
    //Fails
    //expect(()=> enhancer.repair({name: "item name", durability: 70, enhancement: 8})).toThrow();
    expect(() => enhancer.repair({ name: "item name" })).toThrow();
    expect(() => enhancer.repair({ durability: 70 })).toThrow();
    expect(() => enhancer.repair({ enhancement: 8 })).toThrow();
    expect(() =>
      enhancer.repair({ name: "item name", durability: 70 })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: "item name", enhancement: 8 })
    ).toThrow();
    expect(() => enhancer.repair({ durability: 70, enhancement: 8 })).toThrow();
  }); //test if key:value pairs are missing

  it("Throws error if name: not a string", () => {
    expect(() =>
      enhancer.repair({ name: "item name", durability: 70, enhancement: 8 })
    ).not.toThrow();
    //fails
    //expect(()=> enhancer.repair({name: "item name", durability: 70, enhancement: 8})).toThrow();
    expect(() =>
      enhancer.repair({ name: 4, durability: 70, enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: null, durability: 70, enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: NaN, durability: 70, enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: undefined, durability: 70, enhancement: 8 })
    ).toThrow();
  }); //error if not string

  it("Throws error if durability or enhancement is not integer", () => {
    expect(() =>
      enhancer.repair({ name: "item name", durability: 70, enhancement: 8 })
    ).not.toThrow();
    //fails
    //expect(()=> enhancer.repair({name: "item name", durability: 70, enhancement: 8})).toThrow();
    expect(() =>
      enhancer.repair({ name: "item name", durability: 70, enhancement: "8" })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: "item name", durability: "70", enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: "item name", durability: "70", enhancement: "8" })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: "item name", durability: NaN, enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: "item name", durability: 70, enhancement: NaN })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: "item name", durability: undefined, enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.repair({ name: "item name", durability: 70, enhancement: undefined })
    ).toThrow();
  });//Throw error if not integer
}); //describe Repair Item
