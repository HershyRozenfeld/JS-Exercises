function nestedRead(family){
    let child3 = family.children[2];
    let childrenArray = family.children;
    console.log(`child-3:`, child3);
    console.log(`all children:`);
    for(let child of childrenArray){
        console.log(child);
    }
}
    
let family = { parents: {}, children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };

nestedRead(family);