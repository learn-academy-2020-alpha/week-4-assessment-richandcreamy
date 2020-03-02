 // ASSESSMENT 4: JavaScript Coding Practical Questions

 // --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

 var collections = ["purple", "blue", "green", "yellow", "pink"]
 // Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
 // Expected output example2 (can be a different order): ["blue", "green", "pink"]
 // Expected output example3 (can be a different order): ["pink", "green"]

 const shuffleRemove = (arr) => {
     arr.shift()
     if (arr.length === 0) {
     let arrEmp = "The array is empty."
     return arrEmp
     }
     else
        
         for(let i=0, total = arr.length; i< total; i++ ){
         const random = Math.floor(Math.random() * (arr.length - 0)) + 0
         arr.push(arr.splice(random, 1)[0])
     }
     return arr
 }

 console.log(shuffleRemove(collections))
 console.log(shuffleRemove(collections))
 console.log(shuffleRemove(collections))
 console.log(shuffleRemove(collections))
 console.log(shuffleRemove(collections))

 // --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
 var cubeAndSum1 = [2, 3, 4]
 // Expected output: 99 
 var cubeAndSum2 = [0, 5, 10]
 // Expected output: 1125

 const sumArrCubed1 = cubeAndSum1.reduce((result,number) => result + (number ** 3), 0)
 const sumArrCubed2 = cubeAndSum2.reduce((result,number) => result + (number ** 3), 0)

 console.log(sumArrCubed1)
 console.log(sumArrCubed2)

 // --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

 var nums1 = [3, 56, 90, -8, 0, 23, 6]
 // Expected output: [-8, 90]
 var nums2 = [109, 5, 9, -59, 8, 24]
 // Expected output: [-59, 109]

 const arrMinMax = (arr) => {
     let minMax = []
     arr.sort((a,b) => a-b)
     minMax.unshift(arr.pop())
     minMax.unshift(arr.shift())
     return minMax
 }

 console.log(arrMinMax(nums1))
 console.log(arrMinMax(nums2))


 // --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.
 var testString1 = "albatross"
 // Expected output: "aLbAtRoSs"
 var testString2 = "jabberwocky"
 // Expected output: "jAbBeRwOcKy"

 const stickyCaps = (arr) => {
     var caps = "";
     for (i=0; i < arr.length; i++) {
        caps += i % 2 !== 0 ? arr.charAt(i).toUpperCase() : arr.charAt(i);
     }
     return caps  
 }


 console.log(stickyCaps(testString1))
 console.log(stickyCaps(testString2))


 // --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.
 var arr1 = [3, 7, 10, 5, 4, 3, 3]
 var arr2 = [7, 8, 2, 3, 1, 5, 4]
 // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



 const compArr = arr  => arr.reduce((a, b) => {
     if (a.includes(b)) return a
     return [...a, b]
 }, [])

 console.log(compArr(arr1.concat (arr2)))

 const sadArr = (arrA, arrB)  => {
    // let comb = arrA.concat(arrB)  
    let comb = [...new Set([...arrA, ...arrB])]
    comb.reduce((a, b) => {
    if (a.includes(b)) return a
    return [...a, b]
}, [])
}
console.log(sadArr(arr1, arr2))

// I can solve this without cheating and without reduce but I just really wanted reduce to work 