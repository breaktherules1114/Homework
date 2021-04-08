let is_array=function(arr){
    console.log(Array.isArray(arr))
}
console.log(is_array('w3resource'))
console.log(is_array([1, 2, 4, 0]))

let array_Clone = function(arr) {
    return arr.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]))
console.log(array_Clone([1, 2, [4, 0]]))

let first =  function(arr, n) {
    if (arr == null) 
    return void 0
  if (n == null) 
    return arr[0]
  if (n < 0)
    return []
  return arr.slice(0, n)
}
console.log(first([7, 9, 0, -2]))
console.log(first([],3))
console.log(first([7, 9, 0, -2],3))
console.log(first([7, 9, 0, -2],6))
console.log(first([7, 9, 0, -2],-3))

let last = function(arr, n) {
    if (arr == null) 
      return void 0
    if (n == null) 
       return arr[arr.length - 1]
    return arr.slice(Math.max(arr.length - n, 0))
    }
console.log(last([7, 9, 0, -2]))
console.log(last([7, 9, 0, -2],3))
console.log(last([7, 9, 0, -2],6))

myColor = ["Red", "Green", "White", "Black"]
console.log(myColor.toString())
console.log(myColor.join())
console.log(myColor.join('+'))

let num=window.prompt()
let str = num.toString()
let result = [str[0]]
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x])
     }
    else
     {
      result.push(str[x])
     }
  }
console.log(result.join(''))

let chuoi = 'Chac Ai do Se Ve'
let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let LOWER = 'abcdefghijklmnopqrstuvwxyz'
let result1 = ""
  
  for(let x=0; x<chuoi.length; x++)
  {
    if(UPPER.indexOf(chuoi[x]) !== -1)
    {
      result1=result1+chuoi[x].toLowerCase()
    }
    else if(LOWER.indexOf(chuoi[x]) !== -1)
    {
      result1=result1+chuoi[x].toUpperCase()
    }
    else 
    {
      result1=result1+chuoi[x]
    }
  }
console.log(result1)