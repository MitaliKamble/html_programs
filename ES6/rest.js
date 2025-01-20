// const add=(x,y) => {
//     return x+y;
// }
// console.log(add(10,20,30)) //Ignore the rest value and only take first two values

function rest(...args){
    let result=0;
    for(let arg of args){
        result=result+arg;
        
    
    }
    return result;
}
console.log(rest(10,20,30,40,50))