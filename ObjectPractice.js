const data = [
    {name: "tekken", year:2003},
    {name: "jin", year:2015},
    {name: "yosimijo", year:1000},
    {name: "war", year:2000},
    {name: "tech", year:2019},
    {name: "pop", year:2023},
];
//print all names in data
// function objName(){
//     return data.forEach((val) => console.log(val.name));
   
// }
// console.log(objName());
//add new data in data
// function addProperty(obj, key, value){
//     const newData = {name: key, value:value};
//     obj.push(newData);
    
// }
// addProperty(data, "Jin", 2018);
// console.log(data);

// //find particular object with name
// function findObjectName(obj, findName){
//     for(let i = 0; i< obj.length; i++){
//         if(obj[i].name === findName){
//             return obj[i];
//         }
//     }
//     return "not found";
// }

// console.log(findObjectName(data, "war"));
// console.log(findObjectName(data, "Jin"));

//remove object from data with name
function removeObject(obj, removeObj) {
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].name === removeObj) {
        obj.splice(i, 1); // Remove the object from the array
        return;
      }
    }
  }
  
removeObject(data, "war");
console.log(data);
//sort data according to year
function sortData(){
    return data.sort((a,b) => a.year - b.year)
}
console.log(sortData());
//update object values
function updateValues(obj, updateName, updateValue){
    return obj.map((obj) => {
        if(obj.name === updateName){
            return {...obj, ...updateValue};
        }
        return obj;
    })
}
let objUpdate = 'tech';
console.log(updateValues(data, objUpdate, {name:"xyz", year: 2022}));


