import random from './getRandom'

// 조건문 (If statement)

console.log(random())

const a = random()

switch ( a ) {
    case 0:
        console.log('a is 0')
        break
    case 2:
        console.log('a is 2')
        break
    case 4:
        console.log('a is 4')
        break
}

if ( a === 0 ) {
    console.log('a is 0')
} else if ( a === 2) {
    console.log('a is 2')
} else {
    console.log('rest...')
}