const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

let result = {
  "alice": {
    follows: []
    followed: ["bob", "alice"]
  },
  'bob': {

  }
}
//loop through data => current person
  // restult[data.name].follows = currentperson.follows;
  //loop throuh followers => current follower
    //if(!idtoname[id]].followed)
    // idtoname[id]].followed =[]

    // result[idtoname[id]].followed.push(current follower)