import { MyArray } from './MyArray.js'
import { connectMethods } from './connectMethods.js'


connectMethods(MyArray)

const myNewArray = new MyArray() 

myNewArray.push('alfa')
myNewArray.push('beta')
myNewArray.push('charlie')
myNewArray.push('delta')
myNewArray.push('echo')
myNewArray.push('foxtrat')

console.log(myNewArray.remove(2))

{/*
myNewArray.get(0);

myNewArray.pop()

myNewArray.shift()
*/}

