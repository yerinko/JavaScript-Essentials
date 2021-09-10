console.log(typeof 'Hello world')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof {})
console.log(typeof [])

function getType(data) {
    return Object.prototype.toString.call(data)
}

console.log(getType(123))
console.log(getType(false))