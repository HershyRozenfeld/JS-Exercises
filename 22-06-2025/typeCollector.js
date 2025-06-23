function collectorType(array){
    const typeCounts = {
    number: 0,
    string: 0,
    object: 0,
    boolean: 0,
    null: 0
  };
  for (let item of array){
    if(item === null){
        typeCounts.null++;
    } else {
        let type = typeof item;
        if (typeCounts.hasOwnProperty(type)){
            typeCounts[type]++;
        }
    }
  }
  console.log(typeCounts);
}

const mixed = [
  42, "hello", true, false, {}, [], null, "world", 0, null, { a: 1 }, 99
];

collectorType(mixed);