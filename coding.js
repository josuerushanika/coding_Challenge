/*// BIG O
It tell us how the problem will be solved 

What is good code ? it must be :
1.Readable
2.Scalable


*/
const nemo = ['nemo'];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
        console.log('Found NEMO !');
      }
  }
}

findNemo(nemo);  
