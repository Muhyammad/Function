
// 1
const number = (nun) => {
    return nun % 2 === 0 ? 'четное' : 'нечетное'
}
console.log(number(1));
console.log(number(2));

// 2
const number2 = (nun) => {
    return nun >= 0 ? 'положительное' : 'отрицательное'
}
console.log(number2(-1));
console.log(number2(-2));

// 3
const number3 = (a = 1, b = 2) => {
    return a * b;
}
console.log(number3());

// 4
const number4 = (a, b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(number4(1, 2));

// 5
const number5 = (a) => {
    return a.length
}
console.log(number5('asasdasd'))

// 6
const number6 = (a, b) => {
    return a.length > b.length ? a : b;
}
console.log(number6('asldma;klsd', 'sda'))

// 7
const number7 = (a, b) => {
    return a.slice(0, b)

}
console.log(number7('asdasfdasf', 5))

// 8
const number8 = (a, b) => {

    if (a.length < b) {
        return "текст слишком коротки"
    }
    return a.slice(0, b)
}
console.log(number8('asdasfdasf', 5))