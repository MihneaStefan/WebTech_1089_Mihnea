const input="Subsemnatul ... , dominiciliat in ..."
input2=2;
input3="text"
const tokens = [
    {
        tokenValue: "Dorian"
    },
    {
        tokenValue: "Domnesti"
    }
];

const tokens2 = [
    {
        tokenValue: 2
    },
    {
        tokenValue: 3
    }
];

function addTokens(input, tokens){
    if(typeof input !== "string"){
        throw new Error("Input should be a string");
   }
   if(input.length < 6){
    throw new Error("Input should have at least 6 characters");
   }
   tokens.forEach(token=>{
    if( typeof token.tokenValue !== "string"){
         throw new Error("Invalid array format");
    }
    });
    
   if(!input.includes("...")){
    return input;
    } else {
    tokens.forEach(token=>{
         input = input.replace("...",token.tokenValue);
    })
    return input;
}
}

    
    



console.log(addTokens(input, tokens));
// console.log(addTokens(input2, tokens));
// console.log(addTokens(input3, tokens));
// console.log(addTokens(input, tokens2));


const app = {
    addTokens: addTokens
}


module.exports = app;


