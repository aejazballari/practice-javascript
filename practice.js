const liratestObj = require('liratestObj');
// const myArray = new Array(2);
// myArray[1] = 1
// myArray[3] = 3

// console.log("Elements", myArray.length);
// for(const element of myArray) {
//     console.log('\t', element);
// }

// const double = function (x) {
//     return x*2
// }

// console.log(double(2));

// const mySet = new Set()
// mySet.add(1)
// mySet.add(1)
// mySet.add('a')
// mySet.add('a')
// mySet.add(undefined)
// mySet.add(undefined)
// mySet.add({prop: true})
// mySet.add({prop: true})
// console.log(mySet.size);


// async function apiCall() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('b')
//         }, 50)
//     })
// }

// async function logger() {
//     setTimeout(() => console.log('a'), 10);
//     console.log(await apiCall());
//     console.log('c');
// }
// console.log(logger());

// // let x = 'fog'
// // function first() {
// //     console.log(x);
// // }

// // x = 'dog'

// // // console.log(first());

// // function second() {
// //     let x = 'log'
// //     first()
// // }

// // console.log(second());

// // function Queue() {
// //     const backingArray = []
// //     console.log(backingArray);
// //     return {
// //         enqueue: backingArray.push,
// //         dequeue: backingArray.shift
// //     }
// // }

// // const myQueue = Queue()
// // console.log(myQueue);
// // myQueue.enqueue(1)
// // myQueue.enqueue(2)


// // const r1 = myQueue.dequeue() === 1
// // const r2 = myQueue.dequeue() === 2

// // console.log(r1, r2);

// // console.log(r1 && r2);

// // const net = [1, 3, 4]
// // console.log(net.pop());


// function* gen1() {
//     console.log(yield 1);
//     console.log(yield 2);
//     console.log(yield 3);

// }

// const iterator = gen1()
// console.log(iterator.next('a').value);
// console.log(iterator.next('b').value);
// console.log(iterator.next('c').value);

// const obj ={
//     prop:1
// }

// console.log(obj.prop);

// Object.defineProperty(obj, 'prop', {
//     writable: false,
//     value: 2
// })

// console.log(obj.prop);

// obj.prop = 3
// console.log(obj.prop);


// // class Apple {
// //     constructor() {
// //         this.type = 'apples'
// //         this.varieties = ['granny smoth', 'fujo', 'pink lady']
// //     }
// //     logVarieties(callback) {
// //         this.varieties.forEach(el => console.log(`we have ${e}`))
// //     }
// // }

// const a =0 ;
// const b ='';
// const c = [false]

// const outcome = !!(a || b || c || d)

// console.log(true + true);

// const reverse = (str) => {
//     // let arr = str.split(' ')
//     let word = ""
//     for(let i=0; i<str.length; i++) {
//       if(str[i] !== ' '){
//         word += str[i]
//       }
//     }
//     return word.split('').reverse().join('')
//   }
//   console.log(  reverse('hello world'));

  



//   const charValues = (str) => {
//     let value = 1;
//     let obj = {};
//     for(let i of str) {
//       if(obj[i]) {
//         obj[i] += 1
//       } else {
//         obj[i] = 1
//       }
//     }
//     for(let i in obj) {
//       if(obj[i] !== value){
//         return value
//       } else {
//         value = obj[i]
//       }
//     return obj
//   }


// function* generatorFunc(a, b) {
//     console.log('hello');
//     yield a*2;
//     yield a+b;
//     yield a+2;
// }

// const generator = generatorFunc(2, 4)
// console.log(generator.next());
// console.log(generator.next());
// console.log(generatorFunc());

// let x= {}, y = {name:"Ronny"},z = {name:"John"};

// x[y] = {name:"Vivek"};
// x[z] = {name:"Akki"};

// console.log(x);

// const duplicate = (str) => {
//     let dup = {};
//     for(let i of str) {
//         console.log(i);
//         if(dup[i]) {
//             dup[i] += 1
//         } else {
//             dup[i] = 1
//         }
//     }
    // for(let value in dup) {
    //    if(dup[value] < min) {
    //        min = dup[value]
    //    }
    // }
    // let arr = Object.values(dup)
    // let  min = Math.min(...arr)
//   console.log(min);
// let keys = Object.keys(dup)
// console.log(keys);
// for(let i in dup) {
//     console.log(i);
// }
//     return dup
// }

// console.log(duplicate('abbbaaccddd'));


// const myFavAuthor = {
//     allAuthors: {
//         fiction:["aejaz", "ballari", "Ahmed"],
//         fantcy:["aejaz", "ballari", "Ahmed"],
//         scienceFiction:["aejaz", "ballari", "Ahmed"],
//     }
// }

// for(let author in myFavAuthor) {
//     console.log(author);
// }

// const array = ['a', 'b', 'c', 'd', 'e'];
// const iterator = array[Symbol.iterator]()
// console.log(iterator);
// const newArray = [1];
// for(let nextValue=iterator.next(); nextValue.done !== true; nextValue=iterator.next()) {
//     newArray.push(nextValue.value)
// }

// newArray.push(2)
// newArray.push(3)

// console.log(newArray);


// const myFavouriteAuthors = {
//     allAuthors: {
//       fiction: [
//         'Agatha Christie', 
//         'J. K. Rowling',
//         'Dr. Seuss'
//       ],
//       scienceFiction: [
//         'Neal Stephenson',
//         'Arthur Clarke',
//         'Isaac Asimov', 
//         'Robert Heinlein'
//       ],
//       fantasy: [
//         'J. R. R. Tolkien',
//         'J. K. Rowling',
//         'Terry Pratchett'
//       ],
//     },
//     getValues () {
//       // Get all the authors in an array
//       const genres = Object.values(this.allAuthors);
//       console.log(genres);
//       // Store the current genre and author index
//       let currentAuthorIndex = 0;
//       let currentGenreIndex = 0;
      
//       return {
//         // Implementation of next()
//         next() {
//           // authors according to current genre index
//           const authors = genres[currentGenreIndex];
//           console.log(authors);
//           // doNotHaveMoreAuthors is true when the authors array is exhausted.
//           // That is, all items are consumed.
//           const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
//           console.log(doNothaveMoreAuthors);
//           if (doNothaveMoreAuthors) {
//             // When that happens, we move the genre index to the next genre
//             currentGenreIndex++;
//             // and reset the author index to 0 again to get new set of authors
//             currentAuthorIndex = 0;
//           }
          
//           // if all genres are over, then we need tell the iterator that we 
//           // can not give more values.
//           const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
//           console.log(doNotHaveMoreGenres);
//           if (doNotHaveMoreGenres) {
//             // Hence, we return done as true.
//             return {
//               value: undefined,
//               done: true
//             };
//           }
          
//           // if everything is correct, return the author from the 
//           // current genre and incerement the currentAuthorindex
//           // so next time, the next author can be returned.
//           return {
//             value: genres[currentGenreIndex][currentAuthorIndex++],
//             done: false
//           }
//         }
//       };
//     }
//   };

  
//   for (const author of myFavouriteAuthors) {
//     console.log(author);
//   }
  
//   console.log(...myFavouriteAuthors)


// const asyncOperation = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // if(time === 2000) {
//             //     reject("error at 2000")
//             // }
//             resolve(time)
//         }, time);
//     })
// }

// const promisesToMake = [asyncOperation(2000), asyncOperation(1000), asyncOperation(3000)];

// // const promises = Promise.all(promisesToMake)

// // promises.then((res) => console.log(res))

// const promiseAll = (promises) => {
//     const results = [];
//     let completedPromises = 0;
//     return new Promise((resolve, reject) => {
//         promises.forEach((promise, index) => {
//             promise.then((res) => {
//                 results[index] = res
//                 completedPromises += 1
//                 if(completedPromises === promises.length) {
//                     resolve(results)
//                 }
//             }).catch((err) => reject(err))
//         })
//     })
// }

// const promises = promiseAll(promisesToMake)

// promises.then((res) => console.log(res))


// function func2(){
//     for(let i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
  
//   }
  
//   func2();

// // Paranthesis checker
//   const pChecker = (str) => {
//       let stack =[];
//       for(let ltr of str) {
//           if(ltr === "(" || ltr === "[" || ltr === "{" ) {
//               stack.push(ltr)
//           } else if(ltr=== ')' && stack[stack.length-1]==="(" || ltr=== '}' && stack[stack.length-1]==="{" || ltr=== ']' && stack[stack.length-1]==="[") {
//               stack.pop()
//           } else return false
//       }
//       return stack.length === 0
//   }

// console.log(pChecker("(){()}{()}"));

// const isValid = (str) => {
//     let count = 0
//     for(let ltr of str) {
//         if(ltr === "(" || ltr === "[" || ltr === "{" ) {
//           count++
//         } else if(ltr=== ')' || ltr=== '}' || ltr=== ']') {
//            if(count==0) return false
//            count--
//         } 
//     }
//     console.log(count);
//     return count === 0
// }

// console.log(isValid('()'));

// Deep copy
// const deepCopy = (obj) => {
//     if(typeof obj !== 'object' || obj === null) {
//         return obj
//     }
// }

const listObj = {
    mobile1: {
        price: '19,999',
        brand: 'Realme'
    },
    mobile2: {
        price: '12,999',
        brand: 'mi'
    }
}

// const rate = '122'

console.log(typeof listObj);

// console.log(deepCopy(rate));

const name = {
    first: 'aejaz',
    last: 'ballari',
}

let printName = function(home, state){
    console.log(this.first + ' ' + this.last +' '+ home+','+state);
}

// let printMyName = printName.bind(name)
// printMyName()

Function.prototype.mybind = function (...agrs) {
    let obj = this
    let prams = agrs.slice(1)
return function (...agrs2) {
    obj.apply(agrs[0], [...prams, ...agrs2])
}
}

let printMyName2 = printName.mybind(name, 'anantapur', 'ap');
console.log(printMyName2());


function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
  }
  const processChange = debounce(() => saveInput());

  console.log(processChange);


  const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
