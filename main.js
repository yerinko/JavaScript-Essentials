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

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건) {}
const ulEl = document.querySelector('ul')

for (let i = 0; i < 3; i += 1) {
    const li = document.createElement('li')
    li.textContent = `list=${i + 1}`
    // ulEl.appendChild(li)
    if ((i + 1) % 2 === 0) {
        li.addEventListener('click', function() {
            console.log(li.textContent)
        })
    }
}

// 변수 유효범위 (Variable Scope)
// var, let, const

function scope() {
    if (true) {
        const a = 123
        console.log(a )
    }
}
scope()

// 형 변환 (Type conversion)
// 형은 자료형을 이야기합니다.

const a = 1
const b = '1'

console.log( a == b ) // true ( 동등 연산자는 추천하지 않습니다. )
console.log( a === b ) // false