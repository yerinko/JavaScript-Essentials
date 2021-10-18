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

// 함수 복습
function sum(x,y) {
    console.log(x + y)
}

sum(1,3)

// 화살표 함수 ( 축약형으로 함수를 최소화 가능하다. )
// () => {} vs function () {}

const double = function (x, y) {
    return x * 2
}
console.log('double: ', double(7))

const doubleArrow = x => x * 2
console.log('doubleArrow', doubleArrow(7))

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7
function double() {
    console.log( a * 2)
}
double();

(function () {
    console.log(a*2)
})();

(function () {
    console.log(a*2)
}());

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 복잡한 함수에서 위에서부터 아래로 읽어내리지 않고, 이름으로 실행시키는 방법이다.
// 일정한 코드들이 호출이 먼저이고 선언이 다음이면 혼동하지 않고 사용할 수 있다.

const a = 7

double()

function double() {
    console.log(a * 2)
}

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

const timer = setTimeout(function(){
    console.log('Yerinko!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    clearTimeout(timer)
})

const setTimer = setInterval(function() {
    console.log('Yerinko!')
}, 3000)

const h1El2 = document.querySelector('h1')
h1El2.addEventListener('click', () => {
    clearInterval(setTimer)
})

// 콜백 (Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)