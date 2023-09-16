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


// BIG O and Scalability  to measure how much time it takes to run a code 

example 1

const nemo = ['nemo'];

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
        console.log('Found NEMO !');
      }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took'  +  (t1-t0) + 
   'milleseconds');
}

example 2 

const nemo = ['nemo'];

const large = new Array(100).fill('nemo'); //an array of nemo 100 time


function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
        console.log('Found NEMO !');
      }
  }
  let t1 = performance.now();
  console.log('Call to find Nemo took'  +  (t1-t0) + 
   'milleseconds');
}

findNemo(large);  


NB:  BIG O notation is the language we use for talking about how long a algorithm takes to run. 
we can take two different algorithm example f(x) and say which is better than others when it comes
to scale .


When we talk about big O and Scallabilty of code we simply mean when we go bigger with the output 
how the algorithm or the function slow down ?  //IMPORTANT !!!


According to our array and diagram  of big O

Elements = array when we increase element in array how many operation(in the diagram do we need to do ?) 

O(n) -Linear time


calculation of BiIG O

function anotherFunChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)

  for (let i = 0; i < input; i++){
    let x = 5; //O(n)
    let y = 10; //O(n)
    let z = 50; //O(n)
  }

  for (let j = 0; j < input; j++) {
    let p = j * 2; //O(n)
    let q = j * 2; //O(n)
  }

  let WhoAmI = "I don't kwon"; //O(1)
}

   Reponse :  BIG O(4 + 5n)



3. 007 Video

