# Java Script Essentials

## 산술, 할당 연산자
1. 산술 연살자 (arithmetic operator)

console.log(1 + 2)
console.log(5 - 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5)

2. 할당 연산자 (assignment operator)

let a = 2
// a = a + 1
a += 1

console.log(a)

## 비교, 논리 연산자
1. 비교 연산자 (comparison operator)

const a = 1
const b= 1

console.log(a === b)

function isEqual(x, y) {
    return x === y
}

console.log(isEqual(1, 1)) // true
console.log(isEqual(1, 2)) // false

2. 논리 연산자 (logical operator)

const a = 1 === 1
const b = 'AB' === 'AB'
const c = true

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', a && b && c)

-> && : 그리고, And

console.log('||', a || b)

-> || : 또는, or
