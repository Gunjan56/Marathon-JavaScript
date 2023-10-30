const obj = {
    serverName: "google",
    port:200,
};
function check(obj, checkProp){
    if(Object.keys(obj).length === 0) return "empty object";
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
    }else{
        return "not Found";
    }
    
}
console.log(check(obj, "serverName"));
console.log(check(obj, "gg"));
console.log(check({}, "gg"));