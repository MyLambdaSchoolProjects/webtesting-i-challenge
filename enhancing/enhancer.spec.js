const enhancer = require("./enhancer.js");
// test away!

describe("Repair item", () => {
  it("Resets durability to 100", () => {
    const item = {
      name: "name of item",
      durability: 70,
      enhancement: 8
    };

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
      enhancer.repair({
        name: "item name",
        durability: undefined,
        enhancement: 8
      })
    ).toThrow();
    expect(() =>
      enhancer.repair({
        name: "item name",
        durability: 70,
        enhancement: undefined
      })
    ).toThrow();
  }); //Throw error if not integer
}); //describe Repair Item

describe("Enhancer success", () => {
  it("Adds 1 to enhancement", () => {
    const item = {
      name: "name of item",
      durability: 70,
      enhancement: 8
    };

    enhancer.succeed(item);

    expect(item.name).toBe(item.name);
    expect(item.durability).toBe(item.durability);
    expect(item.enhancement).toBe(9);
  }); //Add 1 to enhancement

  it("Prevents enhancement from being larger than 20", () => {
    const item = {
      name: "name of item",
      durability: 70,
      enhancement: 20
    };

    enhancer.succeed(item);

    expect(item.name).toBe(item.name);
    expect(item.durability).toBe(item.durability);
    expect(item.enhancement).toBe(20);
  }); //Don't let go over 20

  it("Throws error if not an Object", () => {
    expect(() => enhancer.succeed(undefined)).toThrow();
    expect(() => enhancer.succeed(null)).toThrow("");
    expect(() => enhancer.succeed(Nan)).toThrow();
    expect(() => enhancer.succeed(["name of item", 70, 8])).toThrow();
    expect(() => enhancer.succeed("name, durability, enhancement")).toThrow();
    expect(() => enhancer.succeed(50)).toThrow();
    //This passes as expected
    expect(() =>
      enhancer.succeed({ name: "item name", durability: 70, enhancement: 8 })
    ).not.toThrow();
    //This does not throw an error thus will fail as is expected
    //expect(()=> enhancer.succeed({name: "item name", durability: 70, enhancement: 8})).toThrow();
  }); //Error if not an Object

  it("Throws an error if key: value pairs are missing", () => {
    expect(() =>
      enhancer.succeed({ name: "item name", durability: 70, enhancement: 8 })
    ).not.toThrow();
    //Fails
    //expect(()=> enhancer.succeed({name: "item name", durability: 70, enhancement: 8})).toThrow();
    expect(() => enhancer.succeed({ name: "item name" })).toThrow();
    expect(() => enhancer.succeed({ durability: 70 })).toThrow();
    expect(() => enhancer.succeed({ enhancement: 8 })).toThrow();
    expect(() =>
      enhancer.succeed({ name: "item name", durability: 70 })
    ).toThrow();
    expect(() =>
      enhancer.succeed({ name: "item name", enhancement: 8 })
    ).toThrow();
    expect(() => enhancer.succeed({ durability: 70, enhancement: 8 })).toThrow();
  }); //test if key:value pairs are missing

  it("Throws error if name: not a string", () => {
    expect(() =>
      enhancer.succeed({ name: "item name", durability: 70, enhancement: 8 })
    ).not.toThrow();
    //fails
    //expect(()=> enhancer.succeed({name: "item name", durability: 70, enhancement: 8})).toThrow();
    expect(() =>
      enhancer.succeed({ name: 4, durability: 70, enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.succeed({ name: null, durability: 70, enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.succeed({ name: NaN, durability: 70, enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.succeed({ name: undefined, durability: 70, enhancement: 8 })
    ).toThrow();
  }); //error if not string

  it("Throws error if durability or enhancement is not integer", () => {
    expect(() =>
      enhancer.succeed({ name: "item name", durability: 70, enhancement: 8 })
    ).not.toThrow();
    //fails
    //expect(()=> enhancer.succeed({name: "item name", durability: 70, enhancement: 8})).toThrow();
    expect(() =>
      enhancer.succeed({ name: "item name", durability: 70, enhancement: "8" })
    ).toThrow();
    expect(() =>
      enhancer.succeed({ name: "item name", durability: "70", enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.succeed({ name: "item name", durability: "70", enhancement: "8" })
    ).toThrow();
    expect(() =>
      enhancer.succeed({ name: "item name", durability: NaN, enhancement: 8 })
    ).toThrow();
    expect(() =>
      enhancer.succeed({ name: "item name", durability: 70, enhancement: NaN })
    ).toThrow();
    expect(() =>
      enhancer.succeed({
        name: "item name",
        durability: undefined,
        enhancement: 8
      })
    ).toThrow();
    expect(() =>
      enhancer.succeed({
        name: "item name",
        durability: 70,
        enhancement: undefined
      })
    ).toThrow();
  }); //Throw error if not integer
}); //Describe enhancer success


describe('Enhancer failed', ()=>{
    it('Decreases durability by 5', ()=>{
        const item = {
            name: "name of item",
            durability: 70,
            enhancement: 8
          };
      
          enhancer.fail(item);
      
          expect(item.name).toBe(item.name);
          expect(item.durability).toBe(65);
          expect(item.enhancement).toBe(item.enhancement);
    });//lower durability by 5
    it('Decreases durability by 10 if enhancement >= 15', ()=>{
        const item = {
            name: "name of item",
            durability: 70,
            enhancement: 15
          };
      
          enhancer.fail(item);
      
          expect(item.name).toBe(item.name);
          expect(item.durability).toBe(60);
          expect(item.enhancement).toBe(item.enhancement);
    });//lower durability by 10

    it('Decreases durability by 10 if enhancement >=16 and lower enhancement by 1', ()=>{
        const item = {
            name: "name of item",
            durability: 70,
            enhancement: 16
          };
      
          enhancer.fail(item);
      
          expect(item.name).toBe(item.name);
          expect(item.durability).toBe(60);
          expect(item.enhancement).toBe(15);
    });//lower durability by 10

    it("Throws error if not an Object", () => {
        expect(() => enhancer.fail(undefined)).toThrow();
        expect(() => enhancer.fail(null)).toThrow("");
        expect(() => enhancer.fail(Nan)).toThrow();
        expect(() => enhancer.fail(["name of item", 70, 8])).toThrow();
        expect(() => enhancer.fail("name, durability, enhancement")).toThrow();
        expect(() => enhancer.fail(50)).toThrow();
        //This passes as expected
        expect(() =>
          enhancer.fail({ name: "item name", durability: 70, enhancement: 8 })
        ).not.toThrow();
        //This does not throw an error thus will fail as is expected
        //expect(()=> enhancer.fail({name: "item name", durability: 70, enhancement: 8})).toThrow();
      }); //Error if not an Object
    
      it("Throws an error if key: value pairs are missing", () => {
        expect(() =>
          enhancer.fail({ name: "item name", durability: 70, enhancement: 8 })
        ).not.toThrow();
        //Fails
        //expect(()=> enhancer.fail({name: "item name", durability: 70, enhancement: 8})).toThrow();
        expect(() => enhancer.fail({ name: "item name" })).toThrow();
        expect(() => enhancer.fail({ durability: 70 })).toThrow();
        expect(() => enhancer.fail({ enhancement: 8 })).toThrow();
        expect(() =>
          enhancer.fail({ name: "item name", durability: 70 })
        ).toThrow();
        expect(() =>
          enhancer.fail({ name: "item name", enhancement: 8 })
        ).toThrow();
        expect(() => enhancer.fail({ durability: 70, enhancement: 8 })).toThrow();
      }); //test if key:value pairs are missing
    
      it("Throws error if name: not a string", () => {
        expect(() =>
          enhancer.fail({ name: "item name", durability: 70, enhancement: 8 })
        ).not.toThrow();
        //fails
        //expect(()=> enhancer.fail({name: "item name", durability: 70, enhancement: 8})).toThrow();
        expect(() =>
          enhancer.fail({ name: 4, durability: 70, enhancement: 8 })
        ).toThrow();
        expect(() =>
          enhancer.fail({ name: null, durability: 70, enhancement: 8 })
        ).toThrow();
        expect(() =>
          enhancer.fail({ name: NaN, durability: 70, enhancement: 8 })
        ).toThrow();
        expect(() =>
          enhancer.fail({ name: undefined, durability: 70, enhancement: 8 })
        ).toThrow();
      }); //error if not string
    
      it("Throws error if durability or enhancement is not integer", () => {
        expect(() =>
          enhancer.fail({ name: "item name", durability: 70, enhancement: 8 })
        ).not.toThrow();
        //fails
        //expect(()=> enhancer.fail({name: "item name", durability: 70, enhancement: 8})).toThrow();
        expect(() =>
          enhancer.fail({ name: "item name", durability: 70, enhancement: "8" })
        ).toThrow();
        expect(() =>
          enhancer.fail({ name: "item name", durability: "70", enhancement: 8 })
        ).toThrow();
        expect(() =>
          enhancer.fail({ name: "item name", durability: "70", enhancement: "8" })
        ).toThrow();
        expect(() =>
          enhancer.fail({ name: "item name", durability: NaN, enhancement: 8 })
        ).toThrow();
        expect(() =>
          enhancer.fail({ name: "item name", durability: 70, enhancement: NaN })
        ).toThrow();
        expect(() =>
          enhancer.fail({
            name: "item name",
            durability: undefined,
            enhancement: 8
          })
        ).toThrow();
        expect(() =>
          enhancer.fail({
            name: "item name",
            durability: 70,
            enhancement: undefined
          })
        ).toThrow();
      }); //Throw error if not integer
});//Enhancer failed