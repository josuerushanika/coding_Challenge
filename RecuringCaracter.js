/*   Recuring Caracter.js */ 
// Wich number get repeated first
// Given an array = [2,5,1,3,1,2,4]

function firstRecirringCharacter(input) {
    for(let i = 0; i < input.length; i++){
      for(let j = 1 + 1; j < input.length; j++){
           if (input[i] === input[j]) {
           return input[i];
          }
      }
    }
    return undefined;
  }
  
  firstRecirringCharacter([2,5,1,2,3,5,1,2,4])



//Second Method

function firstRecirringCharacter(input) {
     let map ={};
     for(let i = 0; i < input.length; i++){
        console.log(map[input[i]]);
        if(map[input[i]]) {
            return input[i]
        }  else {
            map[input[i]] = i
        }
     }
     console.log(map);
     return undefined;
  }
  
  firstRecirringCharacter([2,5,1,2,3,5,1,2,4])








